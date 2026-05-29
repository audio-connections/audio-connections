/** Browser wiring for ReplayGain measurement: turns the controller's injected
 *  hooks into real decode + worker + cache calls, and owns the shared
 *  measurement worker. Not imported by tests — it references the worker asset
 *  and the wasm URL (new Worker / new URL), which only resolve under Vite. The
 *  orchestration it drives is unit-tested via controller.ts. */

import { measureAndApply, type GainUpdate, type TrackRef } from './controller';
import { getCached, putCached, type CachedMeasurement } from './cache';
import { canDecode, decodeToChannels } from './decode';
import type { LoudnessResult, MeasureRequest, MeasureResponse } from './measure';
import { WasmLoudness } from './measureWasm';

let sharedWorker: Worker | null = null;
let workerUnavailable = false;
let nextReqId = 1;
const pending = new Map<number, (r: LoudnessResult | null) => void>();

function getWorker(): Worker | null {
  if (workerUnavailable) return null;
  if (sharedWorker) return sharedWorker;
  try {
    const w = new Worker(new URL('./measure.worker.ts', import.meta.url), { type: 'module' });
    w.addEventListener('message', (e: MessageEvent<MeasureResponse>) => {
      pending.get(e.data.id)?.(e.data.result);
    });
    w.addEventListener('error', () => {
      workerUnavailable = true;
    });
    sharedWorker = w;
    return w;
  } catch {
    workerUnavailable = true;
    return null;
  }
}

// Main-thread wasm, used only when a module worker can't be constructed. Decode
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

async function measureBlob(blobUrl: string): Promise<CachedMeasurement | null> {
  const decoded = await decodeToChannels(blobUrl);
  if (!decoded) return null;
  const w = getWorker();
  let res: LoudnessResult | null;
  if (w) {
    // Channels are transferred to the worker (detached here).
    res = await measureViaWorker(w, decoded.channels, decoded.sampleRate);
  } else {
    const wl = await getMainWasm();
    res = wl ? wl.measure(decoded.channels, decoded.sampleRate) : null;
  }
  return res ? { integratedLufs: res.integratedLufs, truePeakDbtp: res.truePeakDbtp } : null;
}

export interface RunReplayGainOptions {
  /** True once a newer day load has superseded this one. */
  isStale: () => boolean;
  onGains: (gains: Map<number, GainUpdate>) => void;
  targetLufs?: number;
  concurrency?: number;
}

/** Fire-and-forget per-day measurement. Best-effort: any failure leaves tracks
 *  at unity gain; no-op when this environment can't decode audio. */
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
    concurrency: opts.concurrency,
  }).catch(() => {
    /* best-effort */
  });
}
