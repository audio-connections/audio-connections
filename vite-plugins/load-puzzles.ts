// Load every puzzle file under a directory as real modules, keyed by slug.
//
// Puzzle files are plain TypeScript objects with a single type-only import, so
// Node's native type stripping (Node ≥ 22.6 by default) imports them directly —
// no regex parsing (which broke on multi-line tracks and escaped quotes) and
// no extra loader. Shared by the check-puzzles Vite plugin (runs inside Vite's
// Node process) and scripts/check-reuse.ts (plain `node`).
import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { PuzzleContent } from '../src/types.ts';

// Same shape as the filename guard in src/puzzles.data.test.ts: a slug is
// alphanumerics joined by single hyphens. Excludes template.ts and stray files.
export const PUZZLE_FILE_RE = /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*\.ts$/;

export function listPuzzleFiles(dir: string): string[] {
  return readdirSync(dir)
    .filter((f) => f !== 'template.ts' && PUZZLE_FILE_RE.test(f))
    .sort();
}

/** Import each puzzle file and return slug → content. `bust` appends a
 *  cache-busting query so a dev-server re-run after an edit sees the new
 *  content instead of Node's cached module. */
export async function loadPuzzleContents(
  dir: string,
  bust = false,
): Promise<Map<string, PuzzleContent>> {
  const out = new Map<string, PuzzleContent>();
  const abs = resolve(dir);
  for (const f of listPuzzleFiles(abs)) {
    const url = pathToFileURL(join(abs, f));
    if (bust) url.searchParams.set('v', String(Date.now()));
    const mod = (await import(url.href)) as { default?: unknown };
    const content = mod.default as PuzzleContent | undefined;
    if (!content || !Array.isArray(content.themes)) {
      throw new Error(`${f}: default export is not a puzzle (no themes array)`);
    }
    out.set(f.replace(/\.ts$/, ''), content);
  }
  return out;
}
