import type { Puzzle } from './types';

export interface ScheduleManifestPuzzle {
  id: string;
  day: number;
  date: string;
  releaseAt: string;
}

export interface ScheduleManifest {
  schemaVersion: 1;
  puzzles: ScheduleManifestPuzzle[];
}

export type ScheduleFreshnessResult =
  | { ok: true }
  | {
      ok: false;
      reason: 'local-released-only' | 'deployed-released-only' | 'assignment-mismatch';
      local?: ScheduleManifestPuzzle;
      deployed?: ScheduleManifestPuzzle;
    };

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
 *  reshuffled by maintainers; released rows must agree exactly before an open
 *  client can safely unlock or persist authored-slug progress. */
export function compareReleasedSchedule(
  localPuzzles: readonly Puzzle[],
  deployedPuzzles: readonly ScheduleManifestPuzzle[],
  now: number = Date.now(),
): ScheduleFreshnessResult {
  const localReleased = localPuzzles.map(identity).filter((p) => releasedAtOrBefore(p, now));
  const deployedReleased = deployedPuzzles.filter((p) => releasedAtOrBefore(p, now));
  const localById = new Map(localReleased.map((p) => [p.id, p]));
  const deployedById = new Map(deployedReleased.map((p) => [p.id, p]));

  for (const local of localReleased) {
    const deployed = deployedById.get(local.id);
    if (!deployed) return { ok: false, reason: 'local-released-only', local };
    if (!sameAssignment(local, deployed)) {
      return { ok: false, reason: 'assignment-mismatch', local, deployed };
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
      typeof row.releaseAt === 'string'
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
