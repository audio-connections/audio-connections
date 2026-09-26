# Puzzle builder

A dev-only tool for assembling a puzzle without hunting for iTunes IDs by hand. It has two faces that share one draft:

- **The page** — `pnpm run dev`, then open <http://localhost:5173/?mode=builder>. Search iTunes, play 30-second previews, place tracks on sides A–D, name the categories, watch the checks, export the file.
- **The CLI** — `pnpm puzzle <command>` (plus top-level shortcuts `pnpm itunes:search` and `pnpm itunes:lookup`). Same operations from the terminal, no browser needed. Written for people and for AI agents: readable output by default, `--json` for machine output, no `jq` or `curl` required.

Both read and write `.puzzle-draft.json` at the repo root (gitignored). Edit from the terminal and the open page picks it up within a couple of seconds; edit in the page and the next CLI command sees it. A person and their agent can build one puzzle together this way.

The builder does not exist in the deployed site. `?mode=builder` on connections.audio just shows the game.

## Workflow

1. `pnpm run dev` (only needed for the page; the CLI works without it).
2. Find tracks: search, audition the preview, place each on a side. A track whose iTunes entry has no preview clip is marked and cannot be placed — pick another release of the same song.
3. Name the four categories, set your author name, optionally a constraint (≤ 80 characters).
4. Check. The builder validates completeness and duplicates, then runs the same cross-puzzle reuse check maintainers use, as if your puzzle took the next open calendar slot. It also lists any track that already appears anywhere in the catalogue, because song freshness is the second-ranked design rule in PUZZLE_AUTHORS.md.
5. Export to `src/puzzles/<your-handle>-N.ts`.
6. `pnpm run validate`, then open a PR. The draft stays in place until you `clear` it.

## CLI reference

```
pnpm puzzle show                             print the draft
pnpm puzzle search "thong song"              iTunes hits: id, artist — title [album, year]; ✗ = no preview
pnpm puzzle search "Sisqo - Thong Song" "Ginuwine - Pony" "TLC - No Scrubs"
                                             several searches in one call, run concurrently, grouped by term
                                             (10 hits per term; --limit=25 for more)
pnpm puzzle lookup 1440891230 [269573364]    look up track ID(s) directly (without touching the draft)
pnpm itunes:search "thong song"              shortcut for `pnpm puzzle search`
pnpm itunes:lookup 1440891230,269573364      shortcut for `pnpm puzzle lookup`
pnpm puzzle add A 1440891230                 fill the next empty slot on side A
pnpm puzzle add C3 1440891230                fill (or replace) a specific slot
pnpm puzzle remove B2
pnpm puzzle set author "Your Name"
pnpm puzzle set constraint "Only #1 hits"    blank value clears it
pnpm puzzle set A "Songs about rain"         category name for side A
pnpm puzzle note C1 "Why this fits"          blank value clears it
pnpm puzzle check [slug]                     completeness, previews, reuse (draft, or src/puzzles/<slug>.ts)
pnpm puzzle export handle-3                  writes src/puzzles/handle-3.ts; --overwrite to replace
pnpm puzzle clear                            empty the draft
```

Add `--json` to any command for structured output. Slots are `A1`–`D4`; a bare side letter means "next empty slot on that side". `add` looks the id up on iTunes and refuses ids with no preview clip, so the artist and title in the draft are always what iTunes will play.

## For AI agents

If you are an agent helping someone build, verify, or repair a puzzle in this repo, use the CLI above rather than calling the iTunes API with `curl`/`jq`/`python3`.

- `pnpm puzzle search "<artist> <title>" ["<artist> <title>" ...] --json` (or `pnpm itunes:search ... --json`) returns `[{ term, hits: [{ id, artist, title, album, year, previewUrl? }], error? }]`, one entry per term in the order given. Pass every candidate for a category in one call rather than one search per call. Only hits with a `previewUrl` are usable. Quote each term; unquoted words are separate searches.
- `pnpm puzzle lookup <id> [<id> ...] --json` (or `pnpm itunes:lookup <id>,<id> --json`) looks up existing numeric iTunes IDs in bulk without modifying `.puzzle-draft.json`, returning `{ hits, missing, noPreview }` and exiting 1 if any ID is missing or lacks a preview clip.
- `pnpm puzzle add <side> <id>` validates the id for you. Never write ids into the draft file or a puzzle file by hand.
- `pnpm puzzle check [slug] --json` returns `{ filled, problems[], noPreview[], reuse[], priorUses[] }` for the active draft (or for `src/puzzles/<slug>.ts` when `<slug>` is passed). `problems` and `noPreview` block export. `reuse` and `priorUses` are judgment calls for the human — surface them, don't silently work around them.
- Names, notes and the constraint go through `set` and `note`; you can also edit `.puzzle-draft.json` directly, the page will notice.
- The person may be editing in the browser at the same time. Run `pnpm puzzle show` before making assumptions about the current state.
- Reuse output names other puzzles, including future days. That is fine on a maintainer's machine; do not paste it into a public PR.

## HTTP API (what the page uses)

Served by the Vite dev server only, from `vite-plugins/builder-dev.ts`:

```
GET  /__builder/draft
PUT  /__builder/draft                 body: Draft
GET  /__builder/search?term=&limit=
GET  /__builder/lookup?ids=1,2
GET  /__builder/check?previews=1
POST /__builder/export                body: { slug, overwrite? }
```

Errors come back as `{ error }` with a 400. The draft shape and the file renderer live in `src/builder/draft.ts` (unit-tested); the server-side operations in `vite-plugins/builder-ops.ts` are shared by the middleware and the CLI.
