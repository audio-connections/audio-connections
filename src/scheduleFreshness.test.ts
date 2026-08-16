import { describe, expect, it } from 'vitest';
import {
  compareReleasedSchedule,
  puzzleContentFingerprint,
  type ScheduleManifestPuzzle,
} from './scheduleFreshness';
import type { Puzzle, Theme } from './types';

function puzzle(id: string, day: number, date: string, themes: Theme[] = []): Puzzle {
  return {
    id,
    day,
    date,
    releaseAt: `${date}T00:00:00Z`,
    author: 'test',
    themes,
  };
}

function manifest(
  id: string,
  day: number,
  date: string,
  contentHash?: string,
): ScheduleManifestPuzzle {
  return {
    id,
    day,
    date,
    releaseAt: `${date}T00:00:00Z`,
    ...(contentHash !== undefined ? { contentHash } : {}),
  };
}

const THEMES: Theme[] = [
  { theme: 'Yellow', tracks: [{ id: 1, artist: 'A', title: 'T1' }] },
];

describe('compareReleasedSchedule', () => {
  const now = Date.parse('2026-07-05T12:00:00Z');

  it('accepts matching released assignments and ignores future reshuffles', () => {
    const local = [
      puzzle('released-1', 1, '2026-07-04'),
      puzzle('future-old', 2, '2026-07-06'),
    ];
    const deployed = [
      manifest('released-1', 1, '2026-07-04'),
      manifest('future-new', 2, '2026-07-06'),
    ];

    expect(compareReleasedSchedule(local, deployed, now)).toEqual({ ok: true });
  });

  it('flags a locally released slug that is not released in the deployed schedule', () => {
    const local = [puzzle('moved-later', 42, '2026-07-05')];
    const deployed = [manifest('moved-later', 57, '2026-07-20')];

    expect(compareReleasedSchedule(local, deployed, now)).toMatchObject({
      ok: false,
      reason: 'local-released-only',
      local: { id: 'moved-later', day: 42 },
    });
  });

  it('flags a released slug whose public assignment changed', () => {
    const local = [puzzle('same-slug', 42, '2026-07-05')];
    const deployed = [manifest('same-slug', 43, '2026-07-05')];

    expect(compareReleasedSchedule(local, deployed, now)).toMatchObject({
      ok: false,
      reason: 'assignment-mismatch',
      local: { id: 'same-slug', day: 42 },
      deployed: { id: 'same-slug', day: 43 },
    });
  });

  it('flags a released puzzle whose deployed content fingerprint differs', () => {
    const local = [puzzle('edited', 1, '2026-07-04', THEMES)];
    const swapped: Theme[] = [
      { theme: 'Yellow', tracks: [{ id: 2, artist: 'A', title: 'T2' }] },
    ];
    const deployed = [
      manifest('edited', 1, '2026-07-04', puzzleContentFingerprint({ author: 'test', themes: swapped })),
    ];

    expect(compareReleasedSchedule(local, deployed, now)).toMatchObject({
      ok: false,
      reason: 'content-mismatch',
      local: { id: 'edited' },
    });
  });

  it('accepts a matching content fingerprint on a released row', () => {
    const local = [puzzle('same', 1, '2026-07-04', THEMES)];
    const deployed = [
      manifest('same', 1, '2026-07-04', puzzleContentFingerprint(local[0]!)),
    ];

    expect(compareReleasedSchedule(local, deployed, now)).toEqual({ ok: true });
  });

  it('skips content comparison when the deployed row has no fingerprint', () => {
    const local = [puzzle('legacy', 1, '2026-07-04', THEMES)];
    const deployed = [manifest('legacy', 1, '2026-07-04')];

    expect(compareReleasedSchedule(local, deployed, now)).toEqual({ ok: true });
  });

  it('ignores content changes on unreleased rows', () => {
    const local = [puzzle('future', 2, '2026-07-06', THEMES)];
    const deployed = [manifest('future', 2, '2026-07-06', 'different-hash')];

    expect(compareReleasedSchedule(local, deployed, now)).toEqual({ ok: true });
  });
});

describe('puzzleContentFingerprint', () => {
  it('is insensitive to key insertion order', () => {
    const a = puzzleContentFingerprint({ author: 'x', themes: THEMES });
    const b = puzzleContentFingerprint(
      JSON.parse('{"themes":' + JSON.stringify(THEMES) + ',"author":"x"}'),
    );
    expect(a).toBe(b);
  });

  it('treats an absent constraint and an undefined constraint the same', () => {
    const a = puzzleContentFingerprint({ author: 'x', themes: THEMES });
    const b = puzzleContentFingerprint({ author: 'x', constraint: undefined, themes: THEMES });
    expect(a).toBe(b);
  });

  it('ignores schedule identity fields on a resolved Puzzle', () => {
    const p = puzzle('slug', 5, '2026-07-04', THEMES);
    expect(puzzleContentFingerprint(p)).toBe(
      puzzleContentFingerprint({ author: 'test', themes: THEMES }),
    );
  });

  it('changes when any authored field changes', () => {
    const base = puzzleContentFingerprint({ author: 'x', themes: THEMES });
    const retitled: Theme[] = [
      { theme: 'Yellow', tracks: [{ id: 1, artist: 'A', title: 'T1 (edit)' }] },
    ];
    const noted: Theme[] = [
      { theme: 'Yellow', tracks: [{ id: 1, artist: 'A', title: 'T1', note: 'n' }] },
    ];
    expect(puzzleContentFingerprint({ author: 'x', themes: retitled })).not.toBe(base);
    expect(puzzleContentFingerprint({ author: 'x', themes: noted })).not.toBe(base);
    expect(puzzleContentFingerprint({ author: 'y', themes: THEMES })).not.toBe(base);
    expect(puzzleContentFingerprint({ author: 'x', constraint: 'c', themes: THEMES })).not.toBe(
      base,
    );
  });
});
