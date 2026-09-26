---
name: puzzle-review
description: >-
  Use this skill when reviewing a submitted puzzle file or pull request in
  src/puzzles/*.ts for mechanical validity, iTunes preview playability, catalog
  reuse, and semantic merge quality.
---

# Puzzle Review Skill

Follow this two-stage process when reviewing a submitted puzzle in `src/puzzles/<slug>.ts`.

## 1. Mechanical & Reuse Checks (Run First)

Run the automated checks before doing semantic review:

```sh
# Check completeness, live iTunes preview clips, proximity reuse, and catalog collisions for one puzzle
pnpm puzzle check <slug>

# Or run the repo test & reuse suites
pnpm run test:unit
pnpm run test:itunes
pnpm run test:past-days
pnpm run check:reuse
```

If mechanical validation (`test:unit`, `test:itunes`, `test:past-days`, or `problems`/`noPreview` in `pnpm puzzle check <slug>`) fails, stop and ask the author to fix the failing output before spending effort on semantic review.

Note: `pnpm run check:reuse` and `pnpm puzzle check <slug>` output names future scheduled puzzles. Keep future schedule details confidential when writing feedback for a submitter.

## 2. Semantic Merge-Quality Review

Evaluate the puzzle against the rules in [docs/puzzle-merge-review-sop.md](../../../docs/puzzle-merge-review-sop.md):

1. Read `src/puzzles/<slug>.ts` and [docs/puzzle-merge-review-sop.md](../../../docs/puzzle-merge-review-sop.md).
2. Check for hard failures:
   - Multiple plausible complete 4x4 solutions.
   - Category logic depending on invisible metadata or unknowable trivia with no foothold or post-solve notes.
   - Overly vague categories where many other tracks in the grid also fit.
3. Produce the structured review output specified in [docs/puzzle-merge-review-sop.md](../../../docs/puzzle-merge-review-sop.md) (`outcome`, `maintainer rating`, `difficulty note`, `contact`, `summary`, `mechanical concerns`, `semantic concerns`, and spoiler-safe `submitter feedback`).
