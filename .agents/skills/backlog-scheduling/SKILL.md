---
name: backlog-scheduling
description: >-
  Use this skill when inspecting unscheduled backlog puzzles, previewing the
  release schedule, or slotting/reshuffling backlog puzzles into src/schedule.ts.
---

# Backlog Scheduling Skill

Use the repository's schedule and reuse CLI commands along with [docs/backlog-reshuffler-sop.md](../../../docs/backlog-reshuffler-sop.md) when scheduling backlog puzzles.

## 1. Commands

```sh
# List unscheduled puzzle files in src/puzzles/
pnpm run backlog:preview

# Print the resolved schedule table, day numbers, backlog count, and runway/gap warnings
pnpm run schedule:preview

# Check cross-puzzle reuse windows (45d category, 14d song/id, 7d artist)
pnpm run check:reuse
```

## 2. Procedure

1. Read [docs/backlog-reshuffler-sop.md](../../../docs/backlog-reshuffler-sop.md), `src/schedule.ts`, and the candidate puzzle files in `src/puzzles/`.
2. Default output must be **spoiler-free** (do not reveal song titles, artists, categories, constraints, or notes unless the maintainer explicitly asks for details).
3. Never move, rename, or renumber already-released days, and preserve held-date comments in `src/schedule.ts`.
4. Only edit `src/schedule.ts` after the maintainer asks to apply a proposal.
5. After editing `src/schedule.ts`, run `pnpm run schedule:preview` and `pnpm run validate`.
