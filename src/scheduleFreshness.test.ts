import { describe, expect, it } from 'vitest';
import { compareReleasedSchedule, type ScheduleManifestPuzzle } from './scheduleFreshness';
import type { Puzzle } from './types';

function puzzle(id: string, day: number, date: string): Puzzle {
  return {
    id,
    day,
    date,
    releaseAt: `${date}T00:00:00Z`,
    author: 'test',
    themes: [],
  };
}

function manifest(id: string, day: number, date: string): ScheduleManifestPuzzle {
  return { id, day, date, releaseAt: `${date}T00:00:00Z` };
}

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
});
