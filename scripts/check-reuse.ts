// check:reuse — list every cross-puzzle reuse a maintainer can still act on:
// the same category label at any distance, the same iTunes id or song within
// two weeks, the same artist within a week. Pairs whose later side has already
// released are frozen history and not shown; a backlog puzzle counts as "later"
// for the category check.
//
// Maintainer tool: the output names future days and their categories, so it is
// deliberately not part of `npm run validate` (which puzzle authors run).
//
// Runs on plain Node via native TS type-stripping (no tsx). Exits 1 when
// anything is reported so it can gate a merge if wired into CI later.
//   node scripts/check-reuse.ts            # actionable pairs only
//   node scripts/check-reuse.ts --all      # include released history
import { fileURLToPath } from 'node:url';
import { findReuseWarnings, formatReuseWarning, type ReuseKind } from '../src/puzzles.reuse.ts';
import { scheduledDates } from '../src/puzzles.proximity.ts';
import { loadPuzzleContents } from '../vite-plugins/load-puzzles.ts';

const DIR = fileURLToPath(new URL('../src/puzzles', import.meta.url));
const ALL = process.argv.includes('--all');
const TODAY = new Date().toISOString().slice(0, 10); // UTC, matches schedule dates

const files = await loadPuzzleContents(DIR);
const warnings = findReuseWarnings(files, scheduledDates(), ALL ? {} : { today: TODAY });

const ORDER: ReuseKind[] = ['theme', 'id', 'song', 'artist'];
const TITLE: Record<ReuseKind, string> = {
  theme: 'Category reused (any distance)',
  id: 'iTunes id reused within 14 days',
  song: 'Same song under a different id within 14 days',
  artist: 'Artist reused within 7 days',
};

if (warnings.length === 0) {
  console.log(`✓ No reuse to act on across ${files.size} puzzle files${ALL ? '' : ` (as of ${TODAY})`}.`);
  process.exit(0);
}

for (const kind of ORDER) {
  const group = warnings.filter((w) => w.kind === kind);
  if (group.length === 0) continue;
  console.log(`\n${TITLE[kind]} — ${group.length}`);
  for (const w of group) console.log(`  • ${formatReuseWarning(w)}`);
}
console.log(`\n${warnings.length} item(s) across ${files.size} puzzle files${ALL ? '' : ` (as of ${TODAY})`}.`);
process.exit(1);
