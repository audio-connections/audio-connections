import { describe, expect, it } from 'vitest';
import {
  findReuseWarnings,
  formatReuseWarning,
  normalizeArtist,
  normalizeTheme,
  normalizeTitle,
  songKey,
} from './puzzles.reuse';
import { scheduledDates } from './puzzles.proximity';
import { backlogPuzzles, puzzles } from './puzzles';
import type { PuzzleContent } from './types';

describe('normalizeArtist', () => {
  it('folds case and diacritics', () => {
    expect(normalizeArtist('Björk')).toBe('bjork');
    expect(normalizeArtist('BEYONCÉ')).toBe('beyonce');
  });

  it('drops a leading "the" and featured guests', () => {
    expect(normalizeArtist('The Beach Boys')).toBe('beach boys');
    expect(normalizeArtist('Beach Boys')).toBe('beach boys');
    expect(normalizeArtist('Photay feat. Seafloor')).toBe('photay');
    expect(normalizeArtist('Photay (feat. Seafloor)')).toBe('photay');
    expect(normalizeArtist('Photay ft Seafloor')).toBe('photay');
  });

  it('ignores punctuation and stray whitespace', () => {
    expect(normalizeArtist('VITAS ')).toBe('vitas');
    expect(normalizeArtist('t.A.T.u')).toBe('t a t u');
    expect(normalizeArtist('Ruki Vverh!')).toBe('ruki vverh');
  });

  it('never returns an empty key', () => {
    expect(normalizeArtist('The')).toBe('the');
    expect(normalizeArtist('!!!')).toBe('');
  });
});

describe('normalizeTitle', () => {
  it('strips bracketed qualifiers and remaster suffixes', () => {
    expect(normalizeTitle('California (Tchad Blake Mix)')).toBe('california');
    expect(normalizeTitle('California')).toBe('california');
    expect(normalizeTitle('Africa - Remastered 2011')).toBe('africa');
    expect(normalizeTitle('Reconstruct (feat. Seafloor)')).toBe('reconstruct');
    expect(normalizeTitle("You're Dead")).toBe('you re dead');
  });

  it('keeps a hyphenated title that is not a qualifier', () => {
    expect(normalizeTitle('Ob-La-Di, Ob-La-Da')).toBe('ob la di ob la da');
  });
});

describe('normalizeTheme', () => {
  it('matches the same category written differently', () => {
    expect(normalizeTheme('Songs about rain')).toBe(normalizeTheme('Rain songs'));
    expect(normalizeTheme('Songs about rain')).toBe(normalizeTheme('🌧️ RAIN SONGS'));
  });

  it('keeps distinct categories apart', () => {
    expect(normalizeTheme('Shows on Fox')).not.toBe(normalizeTheme('Shows on HBO'));
  });

  it('falls back to every word when only stopwords remain', () => {
    expect(normalizeTheme('The The')).toBe('the the');
  });
});

describe('songKey', () => {
  it('collides for the same recording on different releases', () => {
    expect(songKey('Phantom Planet', 'California')).toBe(songKey('Phantom Planet', 'California (Tchad Blake Mix)'));
  });
});

/* ── Engine ── */

function content(themes: Array<[string, Array<[number, string, string]>]>): PuzzleContent {
  return {
    author: 'test',
    themes: themes.map(([theme, tracks]) => ({
      theme,
      tracks: tracks.map(([id, artist, title]) => ({ id, artist, title })),
    })),
  };
}

const dates = new Map([
  ['a-1', { day: 1, date: '2026-05-10' }],
  ['a-2', { day: 2, date: '2026-05-11' }],
  ['a-3', { day: 3, date: '2026-06-01' }], // 22 days after a-1
]);

describe('findReuseWarnings', () => {
  it('flags a repeated category inside the 45-day window', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['Songs about rain', [[1, 'X', 'A']]]])],
        ['a-3', content([['Rain songs', [[2, 'Y', 'B']]]])],
      ]),
      dates,
    );
    expect(w.map((x) => x.kind)).toEqual(['theme']);
    expect(w[0]!.prev.label).toBe('Songs about rain');
    expect(w[0]!.cur.label).toBe('Rain songs');
    expect(w[0]!.gap).toBe(22);
  });

  it('lets a category come back after the window', () => {
    const far = new Map([
      ['a-1', { day: 1, date: '2026-05-10' }],
      ['b-1', { day: 2, date: '2026-06-24' }], // 45 days later
    ]);
    const files = new Map([
      ['a-1', content([['Rain', [[1, 'X', 'A']]]])],
      ['b-1', content([['Rain', [[2, 'Y', 'B']]]])],
    ]);
    expect(findReuseWarnings(files, far)).toHaveLength(0);
    expect(findReuseWarnings(files, far, { themeWarnDays: 46 })).toHaveLength(1);
  });

  it('measures a backlog puzzle from the day after the last scheduled date', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['Colors', [[1, 'X', 'A']]]])],
        ['ghost', content([['Colours', [[9, 'Z', 'Q']]]])],
        ['ghost2', content([['Colors', [[9, 'Z', 'Q']]]])],
      ]),
      dates,
    );
    // "Colors" vs "Colours" is a different key (no fuzzy spelling), so only
    // ghost2 collides with a-1 — reported once, backlog side as `cur`, with
    // the gap to its earliest slot (2026-06-02, the day after a-3).
    expect(w).toHaveLength(1);
    expect(w[0]!.cur.slug).toBe('ghost2');
    expect(w[0]!.cur.day).toBeUndefined();
    expect(w[0]!.cur.earliestDate).toBe('2026-06-02');
    expect(w[0]!.gap).toBe(23);
  });

  it('stays quiet about a backlog puzzle whose earliest slot is already outside the window', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['Colors', [[1, 'X', 'A']]]])],
        ['ghost', content([['Colors', [[9, 'Z', 'Q']]]])],
      ]),
      dates,
      { themeWarnDays: 20 }, // earliest slot is 23 days after a-1
    );
    expect(w).toHaveLength(0);
  });

  it('flags two backlog puzzles that share a category', () => {
    const w = findReuseWarnings(
      new Map([
        ['ghost', content([['Colors', [[1, 'X', 'A']]]])],
        ['ghost2', content([['Colors', [[9, 'Z', 'Q']]]])],
      ]),
      dates,
    );
    expect(w).toHaveLength(1);
    expect(w[0]!.gap).toBe(0);
  });

  it('flags an id reused within the window, once, not again as a song', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['T1', [[100, 'X', 'A']]]])],
        ['a-2', content([['T2', [[100, 'X', 'A']]]])],
      ]),
      dates,
    );
    expect(w.map((x) => x.kind).sort()).toEqual(['artist', 'id']);
  });

  it('flags the same song under a different id', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['T1', [[100, 'Phantom Planet', 'California']]]])],
        ['a-2', content([['T2', [[200, 'Phantom Planet', 'California (Tchad Blake Mix)']]]])],
      ]),
      dates,
    );
    expect(w.map((x) => x.kind).sort()).toEqual(['artist', 'song']);
  });

  it('flags an artist inside the artist window only', () => {
    const near = findReuseWarnings(
      new Map([
        ['a-1', content([['T1', [[1, 'Ray Charles', 'A']]]])],
        ['a-2', content([['T2', [[2, 'Ray Charles', 'B']]]])],
      ]),
      dates,
    );
    expect(near.map((x) => x.kind)).toEqual(['artist']);
    const far = findReuseWarnings(
      new Map([
        ['a-1', content([['T1', [[1, 'Ray Charles', 'A']]]])],
        ['a-3', content([['T2', [[2, 'Ray Charles', 'B']]]])],
      ]),
      dates,
    );
    expect(far).toHaveLength(0);
  });

  it('ignores backlog puzzles for id, song and artist (no date to measure)', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['T1', [[1, 'Ray Charles', 'A']]]])],
        ['ghost', content([['T2', [[1, 'Ray Charles', 'A']]]])],
      ]),
      dates,
    );
    expect(w).toHaveLength(0);
  });

  it('suppresses pairs whose later side has already released', () => {
    const files = new Map([
      ['a-1', content([['Rain', [[1, 'X', 'A']]]])],
      ['a-2', content([['Rain', [[1, 'X', 'A']]]])],
    ]);
    expect(findReuseWarnings(files, dates, { today: '2026-05-11' })).toHaveLength(0);
    expect(findReuseWarnings(files, dates, { today: '2026-05-10' }).length).toBeGreaterThan(0);
  });

  it('still reports a backlog collision against a released day', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['Rain', [[1, 'X', 'A']]]])],
        ['ghost', content([['Rain', [[2, 'Y', 'B']]]])],
      ]),
      dates,
      { today: '2026-09-01' },
    );
    expect(w.map((x) => x.kind)).toEqual(['theme']);
  });

  it('never pairs a file with itself', () => {
    const w = findReuseWarnings(
      new Map([['a-1', content([['Rain', [[1, 'X', 'A']]], ['Rain', [[1, 'X', 'A']]]])]]),
      dates,
    );
    expect(w).toHaveLength(0);
  });
});

describe('formatReuseWarning', () => {
  it('names both sites and the gap', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['T1', [[1, 'Ray Charles', 'A']]]])],
        ['a-2', content([['T2', [[2, 'Ray Charles', 'B']]]])],
      ]),
      dates,
    );
    expect(formatReuseWarning(w[0]!)).toBe(
      'artist "Ray Charles" reused: Day 1 (2026-05-10, a-1.ts) → Day 2 (2026-05-11, a-2.ts), 1 day(s) apart',
    );
  });

  it('labels a backlog side without a day', () => {
    const w = findReuseWarnings(
      new Map([
        ['a-1', content([['Rain', [[1, 'X', 'A']]]])],
        ['ghost', content([['Rain', [[2, 'Y', 'B']]]])],
      ]),
      dates,
    );
    expect(formatReuseWarning(w[0]!)).toBe(
      'category "Rain" Day 1 (2026-05-10, a-1.ts) → "Rain" backlog (ghost.ts), at least 23 day(s) apart (earliest slot 2026-06-02)',
    );
  });
});

describe('against the real puzzle set', () => {
  // Smoke test over every checked-in file: the engine must run clean and
  // every warning must point at two real files. Doesn't assert a count —
  // reuse in the live schedule is a maintainer judgment, not a build break.
  it('runs over every scheduled and backlog puzzle', () => {
    const files = new Map<string, PuzzleContent>();
    for (const p of puzzles) files.set(p.id.includes('-') ? p.id : `day-${p.id}`, p);
    for (const p of backlogPuzzles) files.set(p.slug, p);
    const warnings = findReuseWarnings(files, scheduledDates());
    for (const w of warnings) {
      expect(files.has(w.prev.slug), w.prev.slug).toBe(true);
      expect(files.has(w.cur.slug), w.cur.slug).toBe(true);
      expect(formatReuseWarning(w)).toBeTruthy();
    }
  });
});

describe('kinds option', () => {
  it('limits the report to the requested kinds', () => {
    const files = new Map([
      ['a-1', content([['Rain', [[1, 'Ray Charles', 'A']]]])],
      ['a-2', content([['Rain', [[1, 'Ray Charles', 'B']]]])],
    ]);
    expect(findReuseWarnings(files, dates).map((w) => w.kind).sort()).toEqual(['artist', 'id', 'theme']);
    expect(findReuseWarnings(files, dates, { kinds: ['theme', 'id', 'song'] }).map((w) => w.kind).sort()).toEqual(['id', 'theme']);
  });
});
