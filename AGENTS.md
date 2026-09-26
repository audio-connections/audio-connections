# Agent Guide for Audio Connections

## Package Manager & Installs
- This repository uses **`pnpm`** (`pnpm@12.6.0`). Do not use `npm` or `npx`.
- Run `pnpm run setup` for first-time setup (`pnpm install --frozen-lockfile` + Playwright browser install + git hooks).
- Supply-chain protections (`minimumReleaseAge: 10080` = 7 days, `ignoreScripts: true`) are configured in `pnpm-workspace.yaml`.

## Puzzle Authoring & iTunes Lookup CLI (Do Not Use `curl` / `jq` / `python3`)
Never craft ad-hoc `curl`, `jq`, or `python3` scripts to query the iTunes API or check track collisions. Use the built-in `pnpm` commands instead:

```sh
# Search iTunes for candidate tracks (pass multiple terms in one call; quote each term)
pnpm itunes:search "Artist - Title" "Other Artist - Title" [--limit=25] [--json]

# Look up one or more numeric iTunes track IDs (verifies song kind & previewUrl without modifying draft)
pnpm itunes:lookup 1440891230 269573364 [--json]

# Work on the shared puzzle draft (.puzzle-draft.json, synced live with /?mode=builder under `pnpm run dev`)
pnpm puzzle show                           # always run before assuming current draft state
pnpm puzzle search "Artist - Title" [...]  # same as pnpm itunes:search
pnpm puzzle lookup <id> [<id> ...]         # same as pnpm itunes:lookup
pnpm puzzle add <A|B|C|D|A1..D4> <id>      # validates ID & preview clip and places track in draft
pnpm puzzle remove <A1..D4>
pnpm puzzle set author "Name"
pnpm puzzle set constraint "Phrase (<=80 chars)"
pnpm puzzle set <A|B|C|D> "Category Name"
pnpm puzzle note <A1..D4> "Optional post-solve note"
pnpm puzzle check [slug]                   # checks completeness, live previewUrls, 45d/14d/7d reuse, and prior catalogue uses
pnpm puzzle export <handle-N> [--overwrite]
pnpm puzzle clear
```

## Repo Skills (`.agents/skills/`)
- [`puzzle-authoring`](.agents/skills/puzzle-authoring/SKILL.md) — Building, editing, or fixing puzzles and looking up iTunes IDs.
- [`puzzle-review`](.agents/skills/puzzle-review/SKILL.md) — Mechanical + semantic review of submitted puzzle PRs (`docs/puzzle-merge-review-sop.md`).
- [`backlog-scheduling`](.agents/skills/backlog-scheduling/SKILL.md) — Spoiler-free scheduling of backlog puzzles (`docs/backlog-reshuffler-sop.md`).

## Verification & Maintainer Commands
```sh
pnpm run typecheck          # TypeScript check
pnpm run test:unit          # Offline Vitest unit + puzzle data shape suite
pnpm run test:itunes        # Checks iTunes IDs for changed puzzle files
pnpm run test:past-days     # Ensures no already-released day moved relative to origin/main
pnpm run validate           # Composite check for puzzle authors (typecheck + test:unit + test:itunes + test:past-days)
pnpm run check:reuse        # Maintainer-only cross-puzzle reuse check (names future days; never paste into public PRs)
pnpm run schedule:preview   # Resolved schedule table + runway/gap warnings
pnpm run backlog:preview    # Unscheduled backlog puzzle list
pnpm test                   # Playwright E2E suite
```

## Spoiler-Free Rule
Maintainers also play the daily puzzle. Keep commit messages, branch names, and PR descriptions spoiler-free (never name categories, constraints, or track lists in commit messages or public PR bodies).
