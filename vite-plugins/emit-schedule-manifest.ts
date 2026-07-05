// Emit a small, first-class schedule integrity manifest at build time:
// dist/schedule-manifest.json.
//
// Unlike api/v0/puzzle.json, this carries no puzzle content or answers. It is
// intentionally just enough for an already-open client to detect that its
// bundled schedule is obsolete before it unlocks or persists authored-slug
// progress.
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join } from 'node:path';
import type { Plugin } from 'vite';
import type { PuzzleContent } from '../src/types';
import { LAUNCH_EPOCH, idFromSlug, resolve, schedule } from '../src/schedule';

const PUZZLE_FILE_RE = /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*\.ts$/;
const OUT_FILE = 'schedule-manifest.json';

async function loadContentBySlug(
  dir: string,
  bust?: string | number,
): Promise<Map<string, PuzzleContent>> {
  const out = new Map<string, PuzzleContent>();
  const files = readdirSync(dir)
    .filter((f) => f !== 'template.ts' && PUZZLE_FILE_RE.test(f))
    .sort();
  for (const f of files) {
    const slug = f.replace(/\.ts$/, '');
    const href = pathToFileURL(join(dir, f)).href + (bust !== undefined ? `?v=${bust}` : '');
    const mod = (await import(href)) as { default: PuzzleContent };
    out.set(slug, mod.default);
  }
  return out;
}

async function buildPayload(dir: string, bust?: string | number): Promise<string> {
  const contentBySlug = await loadContentBySlug(dir, bust);
  const puzzles = resolve(schedule, contentBySlug, LAUNCH_EPOCH).map((r) => ({
    id: idFromSlug(r.slug),
    day: r.day,
    date: r.date,
    releaseAt: r.releaseAt,
  }));

  return JSON.stringify({ schemaVersion: 1, puzzles }, null, 2) + '\n';
}

export function emitScheduleManifest(opts: { dir?: string } = {}): Plugin {
  const dir = opts.dir ?? fileURLToPath(new URL('../src/puzzles', import.meta.url));
  const urlPath = '/' + OUT_FILE;
  return {
    name: 'emit-schedule-manifest',
    async generateBundle() {
      const source = await buildPayload(dir);
      this.emitFile({ type: 'asset', fileName: OUT_FILE, source });
    },
    configureServer(server) {
      let bust = 0;
      server.middlewares.use((req, res, next) => {
        if ((req.url ?? '').split('?')[0] !== urlPath) return next();
        buildPayload(dir, ++bust).then(
          (source) => {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.setHeader('Cache-Control', 'no-store');
            res.end(source);
          },
          (err) => next(err),
        );
      });
    },
  };
}
