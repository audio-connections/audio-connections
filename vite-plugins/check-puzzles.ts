// Dev-time puzzle checks that run in Vite's Node process.
//
// Runs at build start and on puzzle-file changes during dev. Emits warnings
// (via the dev server logger) when two puzzles reuse the same iTunes id, song,
// artist, or category label too close together — surfaced in the terminal
// where Vite is running, not in the browser console. Only pairs a maintainer
// can still act on (later side future-dated or in the backlog) are reported.
//
// Puzzle files are content-only (no day/date — those are derived from
// src/schedule.ts), so this imports each file as a module (see load-puzzles.ts)
// and gets the scheduled day/date from the proximity helper. The windows and
// reuse detection live in src/puzzles.reuse.ts so they can be unit-tested
// without Vite. The same check is available on the command line as
// `npm run check:reuse`.
import type { Plugin } from 'vite';
import { findReuseWarnings, formatReuseWarning, type ReuseOptions } from '../src/puzzles.reuse.ts';
import { scheduledDates } from '../src/puzzles.proximity.ts';
import { loadPuzzleContents } from './load-puzzles.ts';

interface Options extends Omit<ReuseOptions, 'today'> {
  /** Directory holding the puzzle files, relative to the repo root. */
  dir?: string;
}

async function run(dir: string, opts: Omit<ReuseOptions, 'today'>, bust: boolean, warn: (msg: string) => void): Promise<void> {
  const files = await loadPuzzleContents(dir, bust);
  const today = new Date().toISOString().slice(0, 10); // UTC, matches schedule dates
  for (const w of findReuseWarnings(files, scheduledDates(), { ...opts, today })) {
    warn(formatReuseWarning(w));
  }
}

export function checkPuzzles(opts: Options = {}): Plugin {
  const { dir = 'src/puzzles', ...windows } = opts;

  return {
    name: 'check-puzzles',
    async buildStart() {
      await run(dir, windows, false, (msg) => this.warn(msg));
    },
    configureServer(server) {
      const onChange = (path: string): void => {
        if (!/\/puzzles\/[^/]+\.ts$/.test(path) || /\/template\.ts$/.test(path)) return;
        void run(dir, windows, true, (msg) => server.config.logger.warn(`[check-puzzles] ${msg}`)).catch(
          (e: unknown) => server.config.logger.error(`[check-puzzles] ${String(e)}`),
        );
      };
      server.watcher.on('add', onChange);
      server.watcher.on('change', onChange);
      server.watcher.on('unlink', onChange);
    },
  };
}
