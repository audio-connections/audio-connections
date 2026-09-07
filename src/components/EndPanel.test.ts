import { describe, expect, it } from 'vitest';
import {
  buildDetailedShareText,
  buildShareText,
  buildShareTextStyled,
  isShareStyle,
  SITE_URL,
} from './shareText';
import type { Guess } from '../types';

// buildShareText turns the guess history into the shareable emoji grid. The
// Playwright suite only checks the line count; this pins the actual mapping.

/** A guess of four theme indices. `correct` defaults to true; pass false for
 *  a wrong guess so the detailed builder's outcome logic can be exercised. */
function guess(themes: number[], correct = true): Guess {
  return { themes, correct, ids: [] };
}

const CLEAN_WIN = [
  guess([0, 0, 0, 0]),
  guess([1, 1, 1, 1]),
  guess([2, 2, 2, 2]),
  guess([3, 3, 3, 3]),
];

describe('buildShareText (simple)', () => {
  it('starts with the puzzle title line', () => {
    expect(buildShareText(7, []).split('\n')[0]).toBe('Audio Connections 7');
  });

  it('an empty history is just the title', () => {
    expect(buildShareText(9, [])).toBe('Audio Connections 9');
  });

  it('renders one emoji row per guess, in guess order', () => {
    const text = buildShareText(1, [guess([0, 0, 0, 0]), guess([1, 2, 3, 0], false)]);
    expect(text.split('\n')).toEqual([
      'Audio Connections 1',
      '🟨🟨🟨🟨',
      '🟩🟦🟪🟨',
    ]);
  });

  it('a clean four-guess win is five lines — title plus four rows', () => {
    expect(buildShareText(3, CLEAN_WIN).split('\n')).toHaveLength(5);
  });
});

describe('buildDetailedShareText', () => {
  const base = { day: 12, date: 'May 21, 2026' };

  it('frames the grid with a dated title, a result line and the site link', () => {
    const text = buildDetailedShareText({ ...base, guessHistory: CLEAN_WIN });
    expect(text.split('\n')).toEqual([
      'Audio Connections 12 · May 21, 2026',
      '🟨🟨🟨🟨',
      '🟩🟩🟩🟩',
      '🟦🟦🟦🟦',
      '🟪🟪🟪🟪',
      'Mixtape Mastered · flawless',
      SITE_URL,
    ]);
  });

  it('counts mistakes from wrong guesses on a win', () => {
    const history = [guess([0, 1, 2, 3], false), ...CLEAN_WIN];
    const text = buildDetailedShareText({ ...base, guessHistory: history });
    expect(text).toContain('Mixtape Mastered · 1 mistake\n');
    const two = [guess([0, 1, 2, 3], false), guess([0, 1, 2, 3], false), ...CLEAN_WIN];
    expect(buildDetailedShareText({ ...base, guessHistory: two })).toContain('· 2 mistakes');
  });

  it('reports sides recovered on a loss', () => {
    const history = [
      guess([0, 0, 0, 0]),
      guess([1, 2, 3, 1], false),
      guess([1, 2, 3, 1], false),
      guess([1, 2, 3, 1], false),
      guess([1, 2, 3, 1], false),
    ];
    const text = buildDetailedShareText({ ...base, guessHistory: history });
    expect(text).toContain('Out of Tape · 1/4 sides\n');
  });
});

describe('buildShareTextStyled', () => {
  const ctx = { day: 3, date: 'May 12, 2026', guessHistory: CLEAN_WIN };

  it('simple ignores the extra context', () => {
    expect(buildShareTextStyled('simple', ctx)).toBe(buildShareText(3, CLEAN_WIN));
  });

  it('detailed delegates to the detailed builder', () => {
    expect(buildShareTextStyled('detailed', ctx)).toBe(buildDetailedShareText(ctx));
  });
});

describe('isShareStyle', () => {
  it('accepts the two known styles and nothing else', () => {
    expect(isShareStyle('simple')).toBe(true);
    expect(isShareStyle('detailed')).toBe(true);
    expect(isShareStyle('fancy')).toBe(false);
    expect(isShareStyle(null)).toBe(false);
    expect(isShareStyle(undefined)).toBe(false);
  });
});
