import { describe, expect, it } from 'vitest';
import { computeStats, type StatsDay } from './stats';
import type { DayStatus } from './types';

function d(day: number, status: DayStatus, mistakes = 0): StatsDay {
  return { day, status, mistakes };
}

describe('computeStats', () => {
  it('is all zeros with nothing played', () => {
    expect(computeStats([d(1, 'today'), d(2, 'locked')])).toEqual({
      played: 0,
      won: 0,
      lost: 0,
      winRate: 0,
      perfect: 0,
      currentStreak: 0,
      maxStreak: 0,
      winsByMistakes: [0, 0, 0, 0],
    });
  });

  it('counts wins, losses, win rate and perfect runs', () => {
    const s = computeStats([
      d(1, 'done', 0),
      d(2, 'doneMistakes', 2),
      d(3, 'failed', 4),
      d(4, 'doneMistakes', 1),
    ]);
    expect(s.played).toBe(4);
    expect(s.won).toBe(3);
    expect(s.lost).toBe(1);
    expect(s.winRate).toBe(75);
    expect(s.perfect).toBe(1);
    expect(s.winsByMistakes).toEqual([1, 1, 1, 0]);
  });

  it('ignores locked, in-progress and unplayed days in the totals', () => {
    const s = computeStats([
      d(1, 'done'),
      d(2, 'inProgress', 1),
      d(3, 'unplayed'),
      d(4, 'locked'),
    ]);
    expect(s.played).toBe(1);
    expect(s.won).toBe(1);
  });

  it('current streak counts back from the latest finished day', () => {
    const s = computeStats([d(1, 'failed', 4), d(2, 'done'), d(3, 'doneMistakes', 1), d(4, 'done')]);
    expect(s.currentStreak).toBe(3);
    expect(s.maxStreak).toBe(3);
  });

  it('trailing unfinished days do not break the current streak', () => {
    const s = computeStats([d(1, 'done'), d(2, 'done'), d(3, 'today'), d(4, 'locked')]);
    expect(s.currentStreak).toBe(2);
  });

  it('an unfinished day in the middle breaks the streak', () => {
    const s = computeStats([d(1, 'done'), d(2, 'unplayed'), d(3, 'done'), d(4, 'inProgress', 1)]);
    expect(s.currentStreak).toBe(1);
    expect(s.maxStreak).toBe(1);
  });

  it('a loss at the end zeroes the current streak but keeps the best', () => {
    const s = computeStats([d(1, 'done'), d(2, 'done'), d(3, 'failed', 4)]);
    expect(s.currentStreak).toBe(0);
    expect(s.maxStreak).toBe(2);
  });

  it('is independent of input order', () => {
    const days = [d(3, 'done'), d(1, 'done'), d(2, 'failed', 4)];
    const s = computeStats(days);
    expect(s.currentStreak).toBe(1);
    expect(s.maxStreak).toBe(1);
    expect(computeStats([...days].reverse())).toEqual(s);
  });

  it('rounds the win rate to an integer percent', () => {
    const s = computeStats([d(1, 'done'), d(2, 'done'), d(3, 'failed', 4)]);
    expect(s.winRate).toBe(67);
  });
});
