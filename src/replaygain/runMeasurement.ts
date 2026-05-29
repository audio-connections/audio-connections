/** Browser wiring for ReplayGain measurement: turns the controller's injected
 *  hooks into real decode + worker + cache calls, and owns the shared worker
 *  pool. Not imported by tests — it references the worker asset and the wasm URL
 *  (new Worker / new URL), which only resolve under Vite. The orchestration it
 *  drives is unit-tested via controller.ts.
 *
 *  Two perf levers live here (both validated against real Apple previews):
 *   - A small WORKER POOL: a single worker serialized all measurement (~2.2s for
 *     16 tracks); a pool of N runs them ~Nx faster (~0.6s at N=4).
 *   - A global decode SEMAPHORE (size = pool): bounds peak in-flight PCM to
 *     POOL_SIZE x ~11MB regardless of how many callers fire, so the Phase-2
 *     prefetch and the post-commit apply can overlap without compounding memory.
 *  Measurements are memoized by blobUrl so those two passes share one decode. */

import { measureAndApply, type GainUpdate, type TrackRef } from './controller';
import { getCached, putCached, type CachedMeasurement } from './cache';
import { canDecode, decodeToChannels } from './decode';
import type { LoudnessResult, MeasureRequest, MeasureResponse } from './measure';
import { WasmLoudness } from './measureWasm';

/** Adaptive parallelism. Memory scales linearly at ~11MB of decoded PCM per
 *  concurrent track, so cap hard on low-RAM devices. */
function poolSize(): number {
  const nav = typeof navigator !== 'undefined' ? navigator : undefined;
  const cores = nav?.hardwareConcurrency ?? 4;
  const mem = (nav as unknown as { deviceMemory?: number } | undefined)?.deviceMemory;
  let n = Math.min(Math.max(cores - 1, 1), 4);
  if (typeof mem === 'number' && mem <= 4) n = Math.min(n, 2);
  return n;
}
const POOL_SIZE = poolSize();

let pool: Worker[] | null = null;
let poolBroken = false;
let rr = 0;
let nextReqId = 1;
const pending = new Map<number, (r: LoudnessResult | null) => void>();

function getPoolWorker(): Worker | null {
  if (poolBroken) return null;
  if (!pool) {
    try {
      pool = Array.from({ length: POOL_SIZE }, () => {
        const w = new Worker(new URL('./measure.worker.ts', import.meta.url), { type: 'module' });
        w.addEventListener('message', (e: MessageEvent<MeasureResponse>) => {
          pending.get(e.data.id)?.(e.data.result);
        });
        return w;
      });
    } catch {
      poolBroken = true;
      pool = null;
      return null;
    }
  }
  const w = pool[rr % pool.length]!;
  rr++;
  return w;
}

// Main-thread wasm, used only when module workers can't be constructed. Decode
// already runs on the main thread, so this just measures there too.
let mainWasm: Promise<WasmLoudness | null> | null = null;
function getMainWasm(): Promise<WasmLoudness | null> {
  if (!mainWasm) {
    mainWasm = WasmLoudness.fromResponse(
      fetch(new URL('./ebur128.wasm', import.meta.url)),
    ).catch(() => null);
  }
  return mainWasm;
}

const WORKER_TIMEOUT_MS = 20_000;

function measureViaWorker(
  w: Worker,
  channels: Float32Array[],
  sampleRate: number,
): Promise<LoudnessResult | null> {
  return new Promise((resolve) => {
    const id = nextReqId++;
    const timer = setTimeout(() => {
      pending.delete(id);
      resolve(null);
    }, WORKER_TIMEOUT_MS);
    pending.set(id, (r) => {
      clearTimeout(timer);
      pending.delete(id);
      resolve(r);
    });
    try {
      const req: MeasureRequest = { id, sampleRate, channels };
      w.postMessage(req, channels.map((c) => c.buffer as ArrayBuffer));
    } catch {
      clearTimeout(timer);
      pending.delete(id);
      resolve(null);
    }
  });
}

// Global decode semaphore — the single source of the concurrency/memory bound.
let activeDecodes = 0;
const decodeQueue: (() => void)[] = [];
function acquire(): Promise<void> {
  return new Promise((resolve) => {
    if (activeDecodes < POOL_SIZE) {
      activeDecodes++;
      resolve();
    } else {
      decodeQueue.push(() => {
        activeDecodes++;
        resolve();
      });
    }
  });
}
function release(): void {
  activeDecodes--;
  decodeQueue.shift()?.();
}

// Memoize by blobUrl so the Phase-2 prefetch and the post-commit apply share a
// single decode+measure per track. Successful results stay cached for the
// session; failures are evicted so a later attempt can retry.
const inflight = new Map<string, Promise<CachedMeasurement | null>>();

async function measureBlob(blobUrl: string): Promise<CachedMeasurement | null> {
  const memo = inflight.get(blobUrl);
  if (memo) return memo;
  const p = (async (): Promise<CachedMeasurement | null> => {
    await acquire();
    try {
      const decoded = await decodeToChannels(blobUrl);
      if (!decoded) return null;
      const w = getPoolWorker();
      let res: LoudnessResult | null;
      if (w) {
        // Channels are transferred to the worker (detached here).
        res = await measureViaWorker(w, decoded.channels, decoded.sampleRate);
      } else {
        const wl = await getMainWasm();
        res = wl ? wl.measure(decoded.channels, decoded.sampleRate) : null;
      }
      return res ? { integratedLufs: res.integratedLufs, truePeakDbtp: res.truePeakDbtp } : null;
    } finally {
      release();
    }
  })();
  inflight.set(blobUrl, p);
  void p.then(
    (r) => {
      if (!r) inflight.delete(blobUrl);
    },
    () => inflight.delete(blobUrl),
  );
  return p;
}

/** Kick a track's measurement as soon as its blob is prefetched, so the work
 *  overlaps the remaining day load instead of running as a post-commit tail.
 *  Writes the result to the IndexedDB cache (keyed by iTunes id) so the
 *  post-commit apply pass hits cache instead of decoding again. Fire-and-forget;
 *  bounded by the shared semaphore. */
export function prefetchMeasurement(itunesId: number, blobUrl: string): void {
  if (!canDecode()) return;
  void measureBlob(blobUrl)
    .then((m) => {
      if (m) putCached(itunesId, m);
    })
    .catch(() => {
      /* best-effort */
    });
}

export interface RunReplayGainOptions {
  /** True once a newer day load has superseded this one. */
  isStale: () => boolean;
  onGains: (gains: Map<number, GainUpdate>) => void;
  targetLufs?: number;
  concurrency?: number;
}

/** Fire-and-forget per-day measurement. Best-effort: any failure leaves tracks
 *  at unity gain; no-op when this environment can't decode audio. With the
 *  Phase-2 prefetch warming the cache, this mostly resolves from cache. */
export function runReplayGain(tracks: TrackRef[], opts: RunReplayGainOptions): void {
  if (!canDecode()) return;
  void measureAndApply(tracks, {
    loadCached: (itunesId) => getCached(itunesId),
    measureBlob,
    saveCached: (itunesId, m) => {
      void putCached(itunesId, m);
    },
    onGains: opts.onGains,
    isStale: opts.isStale,
    targetLufs: opts.targetLufs,
    concurrency: opts.concurrency ?? POOL_SIZE,
  }).catch(() => {
    /* best-effort */
  });
}
