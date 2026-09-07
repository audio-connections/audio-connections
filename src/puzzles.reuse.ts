// Pure logic for the cross-puzzle reuse check: the same iTunes id, song,
// artist, or category label turning up in two puzzles too close together.
// PUZZLE_AUTHORS.md ranks these by how much they hurt — categories first
// (the category is "the answer"), then songs, then artists — and the windows
// below follow that ranking: a repeated category is flagged within 45 days,
// a repeated song within two weeks, a repeated artist within a week.
//
// Only pairs a maintainer can still act on are reported: the later occurrence
// must be future-dated or unscheduled (backlog). Past schedule positions are
// frozen, so warning about them is noise. A backlog puzzle has no date, so for
// the category check it is measured from the earliest slot it could take —
// the day after the last scheduled date — and flagged only when even that
// soonest placement would land inside the window.
//
// This module is loader-free so it can be unit-tested; vite-plugins/
// check-puzzles.ts and scripts/check-reuse.ts do the file loading.
import type { PuzzleContent } from './types.ts';

export type ReuseKind = 'id' | 'song' | 'artist' | 'theme';

export interface ReuseOccurrence {
  slug: string;
  /** Source filename, for the warning message. */
  file: string;
  /** Absent for a backlog puzzle (valid file, not on the calendar). */
  day?: number;
  date?: string;
  /** For a backlog puzzle: the earliest calendar slot it could take (the day
   *  after the last scheduled date). Gaps to a backlog side are measured from
   *  here, so they are minimums. */
  earliestDate?: string;
  /** The value as written at this site (artist, "artist — title", or the
   *  category label) so the message can quote it verbatim. */
  label: string;
}

export interface ReuseWarning {
  kind: ReuseKind;
  /** The normalized key the two sites collided on. */
  key: string;
  prev: ReuseOccurrence;
  cur: ReuseOccurrence;
  /** Whole days between the two uses. When `cur` is a backlog puzzle this is
   *  the minimum — measured to its earliest possible slot. Null only when the
   *  schedule is empty and no slot can be derived. */
  gap: number | null;
}

export interface ReuseOptions {
  /** Same iTunes id in two scheduled puzzles fewer than this many days apart. */
  idWarnDays?: number;
  /** Same normalized artist + title (under different ids) within this window. */
  songWarnDays?: number;
  /** Same normalized artist within this window. */
  artistWarnDays?: number;
  /** Same normalized category label within this window. Backlog puzzles are
   *  measured from their earliest possible slot. */
  themeWarnDays?: number;
  /** ISO date (UTC). Pairs whose later occurrence is on or before this date are
   *  historical and suppressed. Omit to report every pair. */
  today?: string;
}

export const DEFAULT_REUSE_OPTIONS: Required<Omit<ReuseOptions, 'today'>> = {
  idWarnDays: 14,
  songWarnDays: 14,
  artistWarnDays: 7,
  themeWarnDays: 45,
};

/* ── Normalizers ─────────────────────────────────────────────────────── */

/** Case-fold and strip diacritics: "Björk" → "bjork", "Beyoncé" → "beyonce". */
function fold(s: string): string {
  return s.normalize('NFKD').replace(/\p{M}+/gu, '').toLowerCase();
}

/** Keep letters and digits, collapse the rest to single spaces. */
function alnum(s: string): string {
  return s.replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

const FEATURE_SPLIT = /\s+(?:feat\.?|ft\.?|featuring|with)\s+|\s*[([]\s*(?:feat\.?|ft\.?|featuring|with)\s+/u;

/** Primary artist key. Drops featured guests and a leading "the" so
 *  "The Beach Boys" and "Beach Boys" collide, as do "X feat. Y" and "X". */
export function normalizeArtist(artist: string): string {
  let s = fold(artist).trim();
  s = s.split(FEATURE_SPLIT)[0] ?? s;
  s = alnum(s).replace(/^the\s+/, '');
  return s || alnum(fold(artist));
}

const TITLE_SUFFIX = /\s+-\s+(?:.*\b(?:remaster|remastered|version|mix|remix|edit|live|mono|stereo|single|radio|demo|from|feat\.?|ft\.?)\b.*)$/u;

/** Title key. Strips bracketed qualifiers and " - Remastered 2011"-style
 *  suffixes so the same recording on different releases collides. */
export function normalizeTitle(title: string): string {
  let s = fold(title).trim();
  s = s.replace(/\s*[([{][^)\]}]*[)\]}]/gu, '');
  s = s.replace(TITLE_SUFFIX, '');
  s = alnum(s);
  return s || alnum(fold(title));
}

export function songKey(artist: string, title: string): string {
  return `${normalizeArtist(artist)} | ${normalizeTitle(title)}`;
}

const THEME_STOPWORDS = new Set([
  'a', 'an', 'the', 'of', 'in', 'on', 'at', 'to', 'for', 'from', 'by', 'with', 'and', 'or',
  'that', 'which', 'whose', 'are', 'is', 'it', 'its', 'about', 'featuring',
  'song', 'songs', 'track', 'tracks', 'title', 'titles', 'tune', 'tunes', 'hits',
]);

/** Category key: content words, sorted, so "Songs about rain" and "Rain
 *  songs" collide while "Shows on Fox" and "Shows on HBO" don't. Falls back
 *  to every word when nothing but stopwords is left ("The The"). */
export function normalizeTheme(theme: string): string {
  const words = alnum(fold(theme)).split(' ').filter(Boolean);
  const content = words.filter((w) => !THEME_STOPWORDS.has(w));
  return (content.length ? content : words).sort().join(' ');
}

/* ── Engine ──────────────────────────────────────────────────────────── */

export interface ScheduledDate {
  day: number;
  date: string;
}

interface Site extends ReuseOccurrence {
  /** iTunes id at this site (song kind only) so an id-match pair isn't
   *  reported a second time as a song match. */
  id?: number;
}

function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86_400_000);
}

function addDays(date: string, n: number): string {
  return new Date(new Date(date).getTime() + n * 86_400_000).toISOString().slice(0, 10);
}

/** The date a site is measured at: its real date, or for a backlog puzzle the
 *  earliest slot it could take. */
function effectiveDate(s: Site): string | undefined {
  return s.date ?? s.earliestDate;
}

/** Dated sites in calendar order; backlog sites (at the horizon) sort after
 *  every dated one, then by slug, so `cur` is always the side a maintainer
 *  would move. */
function compareSites(a: Site, b: Site): number {
  const da = effectiveDate(a);
  const db = effectiveDate(b);
  if (da && db && da !== db) return da.localeCompare(db);
  if (!!a.date !== !!b.date) return a.date ? -1 : 1;
  return a.slug.localeCompare(b.slug);
}

function collect(
  kind: ReuseKind,
  sitesByKey: ReadonlyMap<string, Site[]>,
  warnDays: number,
  today: string | undefined,
  out: ReuseWarning[],
): void {
  for (const [key, sites] of sitesByKey) {
    if (sites.length < 2) continue;
    const sorted = [...sites].sort(compareSites);
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1]!;
      const cur = sorted[i]!;
      if (prev.slug === cur.slug) continue; // within-file dupes are the data test's job
      if (kind === 'song' && prev.id !== undefined && prev.id === cur.id) continue;
      const dp = effectiveDate(prev);
      const dc = effectiveDate(cur);
      const gap = dp && dc ? daysBetween(dp, dc) : null;
      if (gap !== null && gap >= warnDays) continue;
      if (today && cur.date && cur.date <= today) continue;
      const { id: _p, ...prevOcc } = prev;
      const { id: _c, ...curOcc } = cur;
      out.push({ kind, key, prev: prevOcc, cur: curOcc, gap });
    }
  }
}

/** Find every reuse a maintainer can still act on. `contentBySlug` holds
 *  every puzzle file (scheduled or not); `dates` maps the scheduled ones to
 *  their derived day/date. Backlog puzzles take part in the category check
 *  only, measured from the day after the last scheduled date — the other
 *  kinds are about hearing the same thing twice in a short span, which
 *  needs a real date. Pure. */
export function findReuseWarnings(
  contentBySlug: ReadonlyMap<string, PuzzleContent>,
  dates: ReadonlyMap<string, ScheduledDate>,
  options: ReuseOptions = {},
): ReuseWarning[] {
  const opts = { ...DEFAULT_REUSE_OPTIONS, ...options };
  let last: string | undefined;
  for (const { date } of dates.values()) if (!last || date > last) last = date;
  const horizon = last ? addDays(last, 1) : undefined;
  const byId = new Map<string, Site[]>();
  const bySong = new Map<string, Site[]>();
  const byArtist = new Map<string, Site[]>();
  const byTheme = new Map<string, Site[]>();
  const push = (m: Map<string, Site[]>, key: string, site: Site) => {
    const list = m.get(key) ?? [];
    list.push(site);
    m.set(key, list);
  };

  for (const [slug, content] of contentBySlug) {
    const when = dates.get(slug);
    const base = {
      slug,
      file: `${slug}.ts`,
      ...(when ? { day: when.day, date: when.date } : horizon ? { earliestDate: horizon } : {}),
    };
    for (const theme of content.themes) {
      push(byTheme, normalizeTheme(theme.theme), { ...base, label: theme.theme });
      if (!when) continue;
      for (const t of theme.tracks) {
        const label = `${t.artist.trim()} — ${t.title.trim()}`;
        push(byId, String(t.id), { ...base, label });
        push(bySong, songKey(t.artist, t.title), { ...base, label, id: t.id });
        push(byArtist, normalizeArtist(t.artist), { ...base, label: t.artist.trim() });
      }
    }
  }

  const out: ReuseWarning[] = [];
  collect('theme', byTheme, opts.themeWarnDays, opts.today, out);
  collect('id', byId, opts.idWarnDays, opts.today, out);
  collect('song', bySong, opts.songWarnDays, opts.today, out);
  collect('artist', byArtist, opts.artistWarnDays, opts.today, out);
  return out;
}

/* ── Formatting (shared by the Vite plugin and the CLI script) ───────── */

function where(o: ReuseOccurrence): string {
  return o.day !== undefined ? `Day ${o.day} (${o.date}, ${o.file})` : `backlog (${o.file})`;
}

export function formatReuseWarning(w: ReuseWarning): string {
  const apart =
    w.gap === null
      ? ''
      : w.cur.day === undefined
        ? `, at least ${w.gap} day(s) apart (earliest slot ${w.cur.earliestDate})`
        : `, ${w.gap} day(s) apart`;
  switch (w.kind) {
    case 'theme':
      return `category "${w.prev.label}" ${where(w.prev)} → "${w.cur.label}" ${where(w.cur)}${apart}`;
    case 'id':
      return `iTunes id ${w.key} reused: ${where(w.prev)} → ${where(w.cur)}${apart}`;
    case 'song':
      return `song "${w.cur.label}" reused under a different iTunes id: ${where(w.prev)} → ${where(w.cur)}${apart}`;
    case 'artist':
      return `artist "${w.cur.label}" reused: ${where(w.prev)} → ${where(w.cur)}${apart}`;
  }
}
