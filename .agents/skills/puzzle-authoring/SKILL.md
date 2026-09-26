---
name: puzzle-authoring
description: >-
  Use this skill when creating, editing, verifying, or fixing Audio Connections
  puzzles (src/puzzles/*.ts), searching iTunes for tracks, looking up iTunes track
  IDs, or checking track preview clips and catalog collisions.
---

# Puzzle Authoring & iTunes Lookup Skill

Use the repository's built-in `pnpm` CLI tools (`scripts/puzzle.ts`) for all iTunes queries, draft editing, and collision checks. **Never** write ad-hoc `curl`, `jq`, or `python3` scripts to query `itunes.apple.com` or grep for track collisions by hand.

## 1. CLI Commands

All commands run on plain Node (the dev server does not need to be running). Add `--json` to any command when structured output is needed.

```sh
# Read current draft (.puzzle-draft.json is shared live with /?mode=builder)
pnpm puzzle show

# Search iTunes for songs (quote each term; pass a whole category's candidates in one call)
pnpm itunes:search "Artist - Title" "Other Artist - Title" [--limit=25] [--json]
# (Equivalent to: pnpm puzzle search "Artist - Title" ...)

# Look up one or more numeric iTunes track IDs without modifying the draft
pnpm itunes:lookup 1440891230 269573364 [--json]
# (Equivalent to: pnpm puzzle lookup 1440891230,269573364)

# Modify the shared draft (.puzzle-draft.json)
pnpm puzzle add <A|B|C|D|A1..D4> <id>       # looks up ID, refuses missing previewUrl, fills slot
pnpm puzzle remove <A1..D4>                 # clears slot
pnpm puzzle set author "Author Name"
pnpm puzzle set constraint "Short rule"     # optional puzzle-wide note (<= 80 chars; blank clears)
pnpm puzzle set <A|B|C|D> "Category Name"
pnpm puzzle note <A1..D4> "Post-solve note" # optional one-line explanation (blank clears)

# Check completeness, live previewUrl validity, 45d/14d/7d reuse, and prior catalog uses
pnpm puzzle check                           # checks .puzzle-draft.json
pnpm puzzle check <slug>                    # checks an existing src/puzzles/<slug>.ts

# Export draft to src/puzzles/<slug>.ts
pnpm puzzle export <handle-N> [--overwrite]

# Reset draft
pnpm puzzle clear
```

## 2. Authoring Workflow

1. **Sync state first**: Always run `pnpm puzzle show` before assuming the draft state — the human may be editing `/?mode=builder` in the browser simultaneously.
2. **Brainstorm before verifying**: When brainstorming themes and tracks with a user, propose candidate tracks from knowledge first and wait for the user to pick before running `pnpm itunes:search` or `pnpm puzzle add`.
3. **Batch searches per category**: Once tracks are chosen, pass all candidates in a single `pnpm itunes:search "Artist 1 - Song 1" "Artist 2 - Song 2"` call rather than one search per tool call. Only hits with a preview clip (no `✗` marker) can be used.
4. **Add & configure**:
   - Place tracks with `pnpm puzzle add <side|slot> <id>`. Never paste unverified IDs directly into `.puzzle-draft.json` or `src/puzzles/*.ts`.
   - Strip answer-revealing parentheticals (e.g. `(Theme from ...)`) from displayed track titles if they give away the category while keeping the same iTunes `id`.
   - For audio-feature categories (e.g. a specific instrument, spoken intro, key change), confirm the 30-second `previewUrl` clip actually contains that audible hook.
5. **Check & export**:
   - Run `pnpm puzzle check` to inspect `problems`, `noPreview`, `reuse` (45d category / 14d song / 7d artist proximity), and `priorUses` across the catalog. Surface any `reuse` or `priorUses` hits to the user rather than silently working around them.
   - Export with `pnpm puzzle export <handle-N>` and run `pnpm run validate`.
6. **Keep commits & PRs spoiler-free**:
   - Maintainers play the game. Never include category labels, constraints, or track lists in commit messages, branch names, or PR descriptions.
   - Never paste `pnpm puzzle check` or `pnpm run check:reuse` output naming future scheduled days into a public PR.

## References
- Builder CLI & HTTP API details: [docs/puzzle-builder.md](../../../docs/puzzle-builder.md)
- Puzzle design rules: [PUZZLE_AUTHORS.md](../../../PUZZLE_AUTHORS.md)
