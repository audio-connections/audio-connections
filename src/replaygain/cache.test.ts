import { describe, it, expect, beforeEach } from 'vitest';
import { IDBFactory } from 'fake-indexeddb';
import { getCached, putCached, __test } from './cache';
import { ALGO_VERSION } from './measure';

let factory: IDBFactory;
beforeEach(() => {
  factory = new IDBFactory();
});

describe('replaygain cache', () => {
  it('returns null for a miss', async () => {
    expect(await getCached(12345, factory)).toBeNull();
  });

  it('round-trips a measurement', async () => {
    await putCached(12345, { integratedLufs: -9.3, truePeakDbtp: -0.8 }, factory);
    expect(await getCached(12345, factory)).toEqual({ integratedLufs: -9.3, truePeakDbtp: -0.8 });
  });

  it('stores -Infinity (silence) faithfully', async () => {
    await putCached(7, { integratedLufs: -Infinity, truePeakDbtp: -Infinity }, factory);
    expect(await getCached(7, factory)).toEqual({ integratedLufs: -Infinity, truePeakDbtp: -Infinity });
  });

  it('keys by iTunes id + ALGO_VERSION', () => {
    expect(__test.cacheKey(42)).toBe(`42:${ALGO_VERSION}`);
  });

  it('no-ops gracefully when IndexedDB is unavailable (no factory in Node)', async () => {
    await expect(putCached(1, { integratedLufs: -10, truePeakDbtp: -1 })).resolves.toBeUndefined();
    expect(await getCached(1)).toBeNull();
  });
});
