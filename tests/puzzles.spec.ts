import { test, expect } from '@playwright/test';
import { execSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { puzzles } from './helpers/puzzles';

const here = dirname(fileURLToPath(import.meta.url));
const puzzleDir = join(here, '..', 'src', 'puzzles');

// Returns the day numbers of puzzle files changed on the current branch vs
// main. On main itself, or when git is unavailable, returns []. We diff
// against `main...HEAD` (merge-base) so a stale local main only ever
// over-includes; it never silently drops files the PR actually changed.
function changedPuzzleDays(): number[] {
  try {
    const out = execSync(
      "git diff --name-only main...HEAD -- 'src/puzzles/day-*.ts'",
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    );
    const days = new Set<number>();
    for (const line of out.split('\n')) {
      const m = /\/day-(\d+)\.ts$/.exec(line.trim());
      if (m) days.add(parseInt(m[1]!, 10));
    }
    return [...days].sort((a, b) => a - b);
  } catch {
    return [];
  }
}

interface ITunesResult {
  wrapperType?: string;
  collectionType?: string;
  kind?: string;
  trackId?: number;
  collectionId?: number;
  artistId?: number;
  previewUrl?: string;
}

test.describe('puzzle calendar', () => {
  test('every file in src/puzzles/ matches the day-N.ts naming convention', () => {
    const files = readdirSync(puzzleDir).filter((f) => f !== 'template.ts');
    for (const f of files) {
      expect(f, `unexpected file in src/puzzles/: ${f}`).toMatch(/^day-\d+\.ts$/);
    }
  });

  test('every day-N.ts file is loaded into the puzzles array', () => {
    const files = readdirSync(puzzleDir).filter((f) => /^day-\d+\.ts$/.test(f));
    expect(puzzles.length).toBe(files.length);
  });

  test('each puzzle has a unique day number', () => {
    const days = puzzles.map((p) => p.day);
    expect(new Set(days).size).toBe(days.length);
  });

  test('filename day number matches exported day number', () => {
    const files = readdirSync(puzzleDir).filter((f) => /^day-\d+\.ts$/.test(f));
    for (const f of files) {
      const expected = parseInt(/^day-(\d+)\.ts$/.exec(f)![1]!, 10);
      const found = puzzles.find((p) => p.day === expected);
      expect(found, `${f}: no puzzle with day=${expected} was loaded`).toBeDefined();
    }
  });

  // releaseAt is optional in the type, but every shipped puzzle must carry one:
  // isReleased() now hides any puzzle missing it, so a forgotten releaseAt
  // would silently make a day unreachable. This test catches that at CI time.
  test('every puzzle has a valid releaseAt timestamp', () => {
    for (const p of puzzles) {
      expect(typeof p.releaseAt, `day ${p.day}: releaseAt is missing`).toBe('string');
      const ms = new Date(p.releaseAt!).getTime();
      expect(
        Number.isNaN(ms),
        `day ${p.day}: releaseAt "${p.releaseAt}" is not a parseable date`,
      ).toBe(false);
      expect(
        p.releaseAt!.startsWith(p.date),
        `day ${p.day}: releaseAt "${p.releaseAt}" does not match date "${p.date}"`,
      ).toBe(true);
    }
  });

  // Hits iTunes once per puzzle file changed on this branch. On main (no diff)
  // and on PRs that don't touch src/puzzles/, the test is a no-op — so the
  // network call only happens on puzzle-authoring PRs, where it catches things
  // like a collectionId pasted in place of a trackId (the preview wouldn't
  // load in-app, but the data otherwise looks valid).
  test('iTunes IDs on changed puzzles resolve to playable tracks', async () => {
    const days = changedPuzzleDays();
    test.skip(days.length === 0, 'no puzzle files changed vs main');

    for (const day of days) {
      const puzzle = puzzles.find((p) => p.day === day);
      if (!puzzle) continue; // covered by the other tests in this describe

      const tracks = puzzle.themes.flatMap((t) => t.tracks);
      const ids = tracks.map((t) => t.id);

      const res = await fetch(`https://itunes.apple.com/lookup?id=${ids.join(',')}`, {
        signal: AbortSignal.timeout(10000),
      });
      expect(res.ok, `day ${day}: iTunes lookup HTTP ${res.status}`).toBe(true);

      const { results } = (await res.json()) as { results: ITunesResult[] };

      for (const track of tracks) {
        const asTrack = results.find(
          (r) => r.wrapperType === 'track' && r.trackId === track.id,
        );

        if (!asTrack) {
          const other = results.find(
            (r) =>
              r.trackId === track.id ||
              r.collectionId === track.id ||
              r.artistId === track.id,
          );
          const diag = other
            ? `day ${day}: id ${track.id} (${track.artist} — ${track.title}) resolved to ${other.wrapperType}/${other.collectionType ?? other.kind ?? '?'}, expected a song track`
            : `day ${day}: id ${track.id} (${track.artist} — ${track.title}) returned no result from iTunes`;
          expect(asTrack, diag).toBeDefined();
          continue;
        }

        expect(
          asTrack.kind,
          `day ${day}: id ${track.id} (${track.artist} — ${track.title}) kind is "${asTrack.kind}", expected "song"`,
        ).toBe('song');
        expect(
          typeof asTrack.previewUrl === 'string' && asTrack.previewUrl.length > 0,
          `day ${day}: id ${track.id} (${track.artist} — ${track.title}) has no previewUrl`,
        ).toBe(true);
      }
    }
  });
});
