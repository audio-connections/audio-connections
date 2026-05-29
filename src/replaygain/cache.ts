/** Persistent cache of per-track loudness measurements, keyed by iTunes ID.
 *
 *  Stores the raw measurements (LUFS + true peak), NOT the final gain, so the
 *  target loudness can change without invalidating the cache — gain is derived
 *  at apply time. The key embeds ALGO_VERSION so bumping the measurement
 *  algorithm is a clean cache miss.
 *
 *  Every operation is best-effort: if IndexedDB is missing (e.g. Safari private
 *  mode) or any request errors, reads return null and writes no-op, so the app
 *  simply re-measures in-memory rather than breaking. The iTunes ID lives only
 *  in the IndexedDB key — never rendered or logged — so it leaks no puzzle data.
 *
 *  `factory` is injectable purely so tests can supply fake-indexeddb. */

import { ALGO_VERSION } from './measure';

const DB_NAME = 'audio-connections-replaygain';
const STORE = 'loudness';
const DB_VERSION = 1;

export interface CachedMeasurement {
  integratedLufs: number;
  truePeakDbtp: number;
}

interface StoredRecord extends CachedMeasurement {
  key: string;
  itunesId: number;
  algoVersion: number;
  measuredAt: number;
}

function cacheKey(itunesId: number): string {
  return `${itunesId}:${ALGO_VERSION}`;
}

function resolveFactory(factory?: IDBFactory): IDBFactory | null {
  if (factory) return factory;
  const g = globalThis as unknown as { indexedDB?: IDBFactory };
  return g.indexedDB ?? null;
}

function openDb(factory: IDBFactory): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = factory.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'key' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function getCached(
  itunesId: number,
  factory?: IDBFactory,
): Promise<CachedMeasurement | null> {
  const f = resolveFactory(factory);
  if (!f) return null;
  try {
    const db = await openDb(f);
    try {
      return await new Promise<CachedMeasurement | null>((resolve, reject) => {
        const req = db.transaction(STORE, 'readonly').objectStore(STORE).get(cacheKey(itunesId));
        req.onsuccess = () => {
          const rec = req.result as StoredRecord | undefined;
          resolve(rec ? { integratedLufs: rec.integratedLufs, truePeakDbtp: rec.truePeakDbtp } : null);
        };
        req.onerror = () => reject(req.error);
      });
    } finally {
      db.close();
    }
  } catch {
    return null;
  }
}

export async function putCached(
  itunesId: number,
  m: CachedMeasurement,
  factory?: IDBFactory,
): Promise<void> {
  const f = resolveFactory(factory);
  if (!f) return;
  try {
    const db = await openDb(f);
    try {
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE, 'readwrite');
        const record: StoredRecord = {
          key: cacheKey(itunesId),
          itunesId,
          integratedLufs: m.integratedLufs,
          truePeakDbtp: m.truePeakDbtp,
          algoVersion: ALGO_VERSION,
          measuredAt: Date.now(),
        };
        tx.objectStore(STORE).put(record);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
      });
    } finally {
      db.close();
    }
  } catch {
    // best-effort: a failed write just means we re-measure next time
  }
}

/** Exposed for tests only. */
export const __test = { cacheKey };
