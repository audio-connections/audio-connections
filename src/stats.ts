import type { DayState } from './types';

/** Lifetime record, derived from the per-day states the picker already
 *  computes (see dayState.ts). Nothing here is stored — every number is
 *  recomputed from the terminal-day saves in localStorage on demand, so a
 *  backup import or an editor rewrite is reflected without migration. */
export interface Stats {
  /** Days finished (won or lost). */
  played: number;
  won: number;
  lost: number;
  /** Integer percent, 0 when nothing has been played. */
  winRate: number;
  /** Wins with zero mistakes. */
  perfect: number;
  /** Consecutive wins ending at the most recent finished day. Unfinished days
   *  after it (today, or an archive day never opened) don't break it; an
   *  unfinished or lost day *before* it does. */
  currentStreak: number;
  /** Longest run of consecutive won days anywhere in the released list. */
  maxStreak: number;
  /** Wins bucketed by mistakes made: index 0 = flawless … index 3 = three. */
  winsByMistakes: [number, number, number, number];
}

export type StatsDay = Pick<DayState, 'day' | 'status' | 'mistakes'>;

function isWon(d: StatsDay): boolean {
  return d.status === 'done' || d.status === 'doneMistakes';
}

function isTerminal(d: StatsDay): boolean {
  return isWon(d) || d.status === 'failed';
}

/** Pure: takes the day list in any order, considers released days only.
 *  Streaks run over consecutive *scheduled* days (by day number), since a
 *  puzzle stays playable forever and "missed a calendar day" isn't a
 *  meaningful concept for a game with an open archive. */
export function computeStats(days: ReadonlyArray<StatsDay>): Stats {
  const released = days
    .filter((d) => d.status !== 'locked')
    .sort((a, b) => a.day - b.day);

  let won = 0;
  let lost = 0;
  let perfect = 0;
  const winsByMistakes: [number, number, number, number] = [0, 0, 0, 0];
  let maxStreak = 0;
  let run = 0;

  for (const d of released) {
    if (isWon(d)) {
      won++;
      if (d.mistakes === 0) perfect++;
      const bucket = Math.min(Math.max(d.mistakes, 0), 3);
      winsByMistakes[bucket]++;
      run++;
      if (run > maxStreak) maxStreak = run;
    } else {
      if (d.status === 'failed') lost++;
      run = 0;
    }
  }

  // Current streak: skip trailing unfinished days, then count back while won.
  let i = released.length - 1;
  while (i >= 0 && !isTerminal(released[i]!)) i--;
  let currentStreak = 0;
  while (i >= 0 && isWon(released[i]!)) {
    currentStreak++;
    i--;
  }

  const played = won + lost;
  return {
    played,
    won,
    lost,
    winRate: played === 0 ? 0 : Math.round((won / played) * 100),
    perfect,
    currentStreak,
    maxStreak,
    winsByMistakes,
  };
}
