import type { Puzzle, PuzzleContent } from './types';

export interface ScheduleManifestPuzzle {
  id: string;
  day: number;
  date: string;
  releaseAt: string;
  /** Opaque fingerprint of the authored content (author/constraint/themes).
   *  Optional so manifests emitted before this field existed still validate;
   *  when absent, content comparison is skipped. Reveals nothing about the
   *  tracks or answers — safe to ship for unreleased rows. */
  contentHash?: string;
}

export interface ScheduleManifest {
  schemaVersion: 1;
  puzzles: ScheduleManifestPuzzle[];
}

export type ScheduleFreshnessResult =
  | { ok: true }
  | {
      ok: false;
      reason:
        | 'local-released-only'
        | 'deployed-released-only'
        | 'assignment-mismatch'
        | 'content-mismatch';
      local?: ScheduleManifestPuzzle;
      deployed?: ScheduleManifestPuzzle;
    };

/** Canonical JSON: object keys sorted recursively, `undefined` values dropped
 *  (matching JSON.stringify), so hashes are insensitive to key insertion order
 *  and to `constraint: undefined` vs the key being absent. */
function stableStringify(value: unknown): string {
  if (Array.isArray(value)) return '[' + value.map(stableStringify).join(',') + ']';
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const entries = Object.keys(record)
      .sort()
      .filter((k) => record[k] !== undefined)
      .map((k) => JSON.stringify(k) + ':' + stableStringify(record[k]));
    return '{' + entries.join(',') + '}';
  }
  return JSON.stringify(value);
}

function fnv1a(str: string, seed: number): number {
  let h = seed;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Opaque fingerprint of a puzzle's authored content. Used by the build-time
 *  manifest emitters AND the client comparator — sharing one implementation is
 *  what guarantees the two sides canonicalize identically. Projects down to
 *  the PuzzleContent fields so a `Puzzle` (which adds id/day/date/releaseAt)
 *  hashes the same as the bare content it was resolved from; schedule identity
 *  is compared separately by sameAssignment(). */
export function puzzleContentFingerprint(content: PuzzleContent): string {
  const canonical = stableStringify({
    author: content.author,
    constraint: content.constraint,
    themes: content.themes,
  });
  // Two 32-bit FNV-1a passes with distinct seeds → 64 bits, comfortably past
  // birthday-collision territory for a catalogue of this size.
  const a = fnv1a(canonical, 0x811c9dc5).toString(16).padStart(8, '0');
  const b = fnv1a(canonical, 0x1000193f).toString(16).padStart(8, '0');
  return a + b;
}

function releasedAtOrBefore(p: ScheduleManifestPuzzle, now: number): boolean {
  return Date.parse(p.releaseAt) <= now;
}

function identity(p: Puzzle): ScheduleManifestPuzzle {
  return {
    id: p.id,
    day: p.day,
    date: p.date,
    releaseAt: p.releaseAt,
  };
}

function sameAssignment(a: ScheduleManifestPuzzle, b: ScheduleManifestPuzzle): boolean {
  return a.day === b.day && a.date === b.date && a.releaseAt === b.releaseAt;
}

/** Compare only the already-released schedule frontier. Future rows may be
 *  reshuffled or re-authored by maintainers; released rows must agree exactly
 *  — assignment AND content — before an open client can safely unlock or
 *  persist authored-slug progress. Content is compared via fingerprint, and
 *  only when the deployed row carries one (older manifests don't). */
export function compareReleasedSchedule(
  localPuzzles: readonly Puzzle[],
  deployedPuzzles: readonly ScheduleManifestPuzzle[],
  now: number = Date.now(),
): ScheduleFreshnessResult {
  const localReleased = localPuzzles.filter((p) => releasedAtOrBefore(identity(p), now));
  const deployedReleased = deployedPuzzles.filter((p) => releasedAtOrBefore(p, now));
  const localById = new Map(localReleased.map((p) => [p.id, p]));
  const deployedById = new Map(deployedReleased.map((p) => [p.id, p]));

  for (const puzzle of localReleased) {
    const local = identity(puzzle);
    const deployed = deployedById.get(local.id);
    if (!deployed) return { ok: false, reason: 'local-released-only', local };
    if (!sameAssignment(local, deployed)) {
      return { ok: false, reason: 'assignment-mismatch', local, deployed };
    }
    if (
      deployed.contentHash !== undefined &&
      deployed.contentHash !== puzzleContentFingerprint(puzzle)
    ) {
      return { ok: false, reason: 'content-mismatch', local, deployed };
    }
  }

  for (const deployed of deployedReleased) {
    const local = localById.get(deployed.id);
    if (!local) return { ok: false, reason: 'deployed-released-only', deployed };
  }

  return { ok: true };
}

function isScheduleManifest(x: unknown): x is ScheduleManifest {
  if (!x || typeof x !== 'object') return false;
  const raw = x as Record<string, unknown>;
  if (raw.schemaVersion !== 1 || !Array.isArray(raw.puzzles)) return false;
  return raw.puzzles.every((p) => {
    if (!p || typeof p !== 'object') return false;
    const row = p as Record<string, unknown>;
    return (
      typeof row.id === 'string' &&
      typeof row.day === 'number' &&
      typeof row.date === 'string' &&
      typeof row.releaseAt === 'string' &&
      (row.contentHash === undefined || typeof row.contentHash === 'string')
    );
  });
}

export async function fetchScheduleManifest(
  url: string,
  fetchImpl: typeof fetch = fetch,
): Promise<ScheduleManifest> {
  const res = await fetchImpl(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Schedule manifest returned HTTP ${res.status}`);
  const json = (await res.json()) as unknown;
  if (!isScheduleManifest(json)) throw new Error('Schedule manifest has an unexpected shape');
  return json;
}
