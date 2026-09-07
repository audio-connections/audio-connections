import type { Guess } from '../types';
import { THEME_EMOJI } from '../puzzles';

export const SITE_URL = 'https://connections.audio';

/** Player-selectable share format (Settings → Share style).
 *  - `simple`: title + emoji grid, Wordle-style. Terse, pastes anywhere.
 *  - `detailed`: adds the date, a result line (outcome and mistakes) and
 *    the site link. Longer, but self-explanatory to someone who has never
 *    seen the game. */
export type ShareStyle = 'simple' | 'detailed';
export const SHARE_STYLES: readonly ShareStyle[] = ['simple', 'detailed'];
export const DEFAULT_SHARE_STYLE: ShareStyle = 'simple';

export function isShareStyle(x: unknown): x is ShareStyle {
  return x === 'simple' || x === 'detailed';
}

function gridLines(guessHistory: Guess[]): string[] {
  return guessHistory.map((g) => g.themes.map((t) => THEME_EMOJI[t]).join(''));
}

/** Simple style: the puzzle title then one emoji row per guess. */
export function buildShareText(day: number, guessHistory: Guess[]): string {
  return [`Audio Connections ${day}`, ...gridLines(guessHistory)].join('\n');
}

export interface DetailedShareContext {
  day: number;
  /** Already-formatted display date ("May 10, 2026"). */
  date: string;
  guessHistory: Guess[];
}

function mistakesPhrase(n: number): string {
  if (n === 0) return 'flawless';
  return `${n} ${n === 1 ? 'mistake' : 'mistakes'}`;
}

/** Detailed style: title with date, emoji grid, result line, site link. The
 *  outcome is derived from the history: a win is exactly four correct guesses
 *  (the game ends before a fifth), anything else is a loss. */
export function buildDetailedShareText(ctx: DetailedShareContext): string {
  const sides = ctx.guessHistory.filter((g) => g.correct).length;
  const mistakes = ctx.guessHistory.length - sides;
  const won = sides === 4;
  const result = won
    ? `Mixtape Mastered · ${mistakesPhrase(mistakes)}`
    : `Out of Tape · ${sides}/4 sides`;
  return [
    `Audio Connections ${ctx.day} · ${ctx.date}`,
    ...gridLines(ctx.guessHistory),
    result,
    SITE_URL,
  ].join('\n');
}

export function buildShareTextStyled(style: ShareStyle, ctx: DetailedShareContext): string {
  return style === 'detailed' ? buildDetailedShareText(ctx) : buildShareText(ctx.day, ctx.guessHistory);
}

/** Native share sheet is worth offering on touch devices, where it lands in
 *  Messages/WhatsApp directly; on a desktop with a mouse the clipboard is the
 *  better default even where navigator.share exists. */
export function canWebShare(): boolean {
  if (typeof navigator === 'undefined' || typeof navigator.share !== 'function') return false;
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(pointer: coarse)').matches;
}
