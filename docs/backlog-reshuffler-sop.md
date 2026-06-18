# Backlog Reshuffler SOP

This SOP explains how to reshuffle backlog puzzles into the public Audio Connections calendar. It is written for both human maintainers and LLM tooling. When passed to an LLM, this document is the ruleset to follow.

The reshuffler helps maintainers choose dated homes for backlog puzzles without damaging variety, held dates, or the public calendar. It may propose rows only, or it may update `src/schedule.ts` when the maintainer explicitly asks it to apply an accepted proposal.

## Source Of Truth

Use the existing source files directly:

- `src/schedule.ts` is the public calendar. It owns explicit `{ slug, date }` rows.
- `src/puzzles/*.ts` are the puzzle files. Scheduled files are named in `src/schedule.ts`; other valid puzzle files are backlog.
- Schedule comments may mark held dates or explain why a date is special. Held dates remain comments for v1.

Do not invent a new maintainer-facing input format. If implementation code serializes source data before calling an LLM, that is internal transport only.

## Default Mode

Default output is spoiler-free.

Maintainers may also want to play the puzzles, so do not reveal song titles, artists, categories, constraints, or notes in the default proposal. Reveal confidence, placement quality, held dates, and whether conflicts exist. Reveal specific puzzle details only when the maintainer explicitly asks, or when a conflict cannot be made actionable without naming the specific song or category.

## Command Modes

Support these v1 modes:

- Fill a requested date range, such as "fill 2026-06-15 through 2026-06-29, preserving held dates."
- Rank backlog candidates for the next open date.
- Reveal details for a proposal, row, or conflict when explicitly asked.
- Apply an accepted proposal to `src/schedule.ts` when explicitly asked.

Range fill is the default high-value mode because it keeps runway healthy. Ranking is useful when a maintainer wants to make the final pick manually.

## Procedure

1. Read `src/schedule.ts`.
2. Read the relevant puzzle files in `src/puzzles/`.
3. Identify scheduled puzzles and backlog puzzles.
4. For scheduled puzzles, use the release date from `src/schedule.ts`.
5. For every puzzle under consideration, inspect slug, puzzle categories, optional constraint, track notes, and song id/title/artist.
6. Preserve held-date comments as constraints.
7. Evaluate novelty using the rules below.
8. Produce a spoiler-free proposal unless the maintainer requested details.
9. If the maintainer asks to apply the proposal, update `src/schedule.ts` with explicit `{ slug, date }` rows.
10. After applying rows, run or recommend `npm run schedule:preview`; before merge, run or recommend `npm run validate`.

## Novelty Rules

Evaluate novelty by calendar distance, not list distance.

- Treat obvious category, concept, constraint, or puzzle-shape reuse as the most serious novelty problem because it can spoil the answer space. Avoid category/concept reuse when the two puzzle dates are fewer than 21 calendar days apart.
- Treat exact duplicate track ids or same normalized artist/title as the next-most serious signal. Avoid exact song reuse when the two puzzle dates are fewer than 14 calendar days apart.
- Treat artist reuse as the most forgiving signal. Avoid artist reuse when the two puzzle dates are fewer than 7 calendar days apart.
- Exact threshold distances are acceptable by default: 14 days for songs, 7 days for artists, and 21 days for categories/concepts. Mention edge placements when they are important to the proposal, but do not score them as conflicts unless another signal also applies.
- A category/concept concern should be meaningful, not just a shared generic word. Prefer human judgment over token overlap for broad words such as "song", "title", "cover", "movie", or "artist".
- Multiple collisions are more severe than a single collision. Surface combined concerns clearly: for example, a same-category pair with an exact song repeat is worse than either issue alone, and two repeated songs are worse than one repeated song.

Definitions:

- `exact song reuse`: same track id, or the same normalized artist + title even when track ids differ.
- `artist reuse`: same normalized artist name after trimming punctuation/case and obvious featuring suffixes.
- `category/concept reuse`: same or strongly overlapping category idea, answer mechanism, constraint, or puzzle shape.

The LLM must inspect and surface novelty concerns across all signals. Static analysis may exist and may produce useful hints, but it is inherently limited. Do not assume a static analyzer has already handled exact track collisions, artist repetition, category overlap, or puzzle-concept similarity.

## Hard Constraints

Never violate these constraints:

- Do not move released dates.
- Do not rename released slugs.
- Do not renumber released days.
- Do not silently move public future dates marked as held.
- Do not place two puzzles on the same date unless explicitly requested.
- Do not leave calendar gaps inside the requested fill range unless explicitly requested.
- Do not schedule a slug that does not have a puzzle file.
- Do not schedule the same slug twice.
- Do not propose bare string schedule entries for the live schedule; use explicit `{ slug, date }` rows.
- Do not write to `src/schedule.ts` unless the maintainer explicitly asks to apply a proposal.

## Confidence And Severity

Use this spoiler-free vocabulary.

Proposal confidence:

- `high`: no hard constraints are violated, no signal-specific novelty thresholds are violated, and any category similarity is weak or at/over the 21-day edge.
- `medium`: the proposal is usable, but one or more placements have an explainable song, artist, or category compromise, limited alternatives, or a maintainer-approved gap.
- `low`: the proposal technically fills the range, but one or more placements have a sharp local novelty conflict or too little backlog/date depth to avoid weak novelty.

Conflict severity:

- `blocker`: violates a hard constraint, such as moving a released day, duplicating a slug, scheduling a missing slug, or creating an unrequested two-per-day placement.
- `high`: no hard constraint is broken, but there is category/concept reuse fewer than 21 days apart, especially when song reuse also appears; or there are multiple song repeats fewer than 14 days apart.
- `medium`: exact song reuse fewer than 14 days apart, multiple artist repeats fewer than 7 days apart, or a placement acceptable only because held dates, a thin backlog, or approved gaps limit alternatives.
- `low`: a single artist repeat fewer than 7 days apart, edge-threshold placement, mild thematic resemblance, or weak repetition that should be noted but does not need action.

Spoiler-free example:

```text
overall confidence: high
2026-06-15 example-1: high confidence; no category <21d, song <14d, or artist <7d concern.
2026-06-16 example-2: medium confidence; exact song repeat inside 14 days; alternate available on 2026-06-18.
2026-06-17 example-3: low confidence; category/concept reuse inside 21 days. Ask for details before applying.
```

## Scheduling Mechanics

Do not wing the reshuffle. Use a repeatable process and report the compromises.

1. Build the candidate date set from the requested range, existing future dates, and any maintainer-approved gaps. Preserve held dates and their comments as fixed rows.
2. Build the candidate slug set from the requested backlog scope. Do not silently drop a backlog slug unless the maintainer asked for a partial fill.
3. Extract metadata for every fixed and candidate puzzle once: slug, author, constraint, category labels, track ids, normalized artist/title keys, normalized artists, and track notes.
4. Precompute pairwise novelty signals for every candidate/fixed and candidate/candidate date pairing. Cache these results for the run so scoring does not repeatedly parse files.
5. Score proposals lexicographically, in this order:
   - hard-constraint violations
   - category/concept reuse fewer than 21 days apart, counting both number of affected pairs and number of overlapping concepts
   - exact song reuse fewer than 14 days apart, counting both number of affected pairs and number of repeated songs
   - artist reuse fewer than 7 days apart, counting both number of affected pairs and number of repeated artists
   - unapproved calendar gaps inside the requested fill range
   - approved but noteworthy gaps, edge-threshold placements, and other mild variety notes
6. Prefer a natural daily cadence for a daily puzzle. Leaving holes is allowed only when the maintainer requested or accepted them, and should be called out.
7. For small searches, evaluate all permutations when feasible. For larger searches, start from a deterministic baseline (sorted slugs over sorted dates), then use deterministic greedy insertion plus pairwise swaps until no swap improves the lexicographic score. If randomized local search is used as a helper, run it only after the deterministic pass and report that it was used.
8. Compare the proposed order against the current order or a naive chronological fill. The output should explain whether the reshuffle materially improves the top concerns.
9. When the best available proposal still has novelty conflicts, prefer surfacing the few sharpest conflicts over hiding them in an aggregate score.

Performance guidance:

- Exhaustively evaluate permutations only for 8 or fewer candidate puzzles. For 9 or more candidate puzzles, use deterministic greedy insertion plus pairwise swaps; if needed, add a bounded local search over the best deterministic result.
- Use pairwise scoring caches keyed by `slug@date`.
- Keep exact-song detection cheap and deterministic: compare track ids and normalized artist/title keys.
- Use token/category matching as a hint only; the final category/concept concern should be judged from the actual labels, constraints, and notes.
- If the run is cut short, say so and present the best deterministic result, not an unqualified optimum.

## Proposal Output

Default spoiler-free output should include:

- Summary of the requested range and how many dates were filled.
- Proposed `src/schedule.ts` rows.
- Overall confidence.
- Per-row confidence or risk level.
- Non-specific novelty warnings and detected collisions.
- Held dates preserved.
- Compromises and why they were accepted.
- Verification commands.

If the proposal says a puzzle needs rework or maintainer follow-up, name who to contact inline. Use the puzzle author from the puzzle file when available, while keeping puzzle specifics spoiler-free unless details were explicitly requested.

Use this row style:

```ts
  { slug: 'example-1', date: '2026-06-15' },
```

Spoiler-free rationale should avoid specifics:

```text
2026-06-15 example-1: high confidence; no category <21d, song <14d, or artist <7d concern.
```

Spoiler-free warnings should be actionable without revealing content:

```text
warning: example-2 on 2026-06-16 has a medium category/concept conflict inside 21 days. Ask for details or choose the alternate 2026-06-18 placement.
rework: example-3 needs author follow-up before scheduling; contact Ada Example.
```

When details are explicitly requested, revealed output may name nearby categories, songs, artists, and exact tradeoffs.

## Applying A Proposal

Only apply a proposal after the maintainer explicitly asks.

When applying:

- Add explicit `{ slug, date }` rows to `src/schedule.ts`.
- Keep the live schedule in calendar order.
- Preserve released rows.
- Preserve held rows and their comments.
- Do not add duplicate slugs.
- Do not change puzzle files.
- Run `npm run schedule:preview` after editing when possible.

Before merging, run `npm run validate`.

## Machine Checks

Existing repo checks remain the enforcement layer:

- `resolve()` should succeed.
- Every scheduled slug should have content.
- No duplicate scheduled slugs should exist.
- The live schedule should remain date-explicit.
- The live schedule should remain in calendar order.
- Released days should not move relative to `origin/main`.
- `previewWarnings()` should have no unexpected forward gaps.
- The requested fill range should have no unintentional empty dates.
- The future runway should meet the configured floor.

Static novelty checks can remain useful backstops, but they do not replace the LLM's novelty review.

## Non-Goals For V1

- Automatic GitHub issue or PR creation.
- Rewriting puzzle content.
- Selecting "best" puzzle quality.
- Inferring player-specific solved history.
- Revealing puzzle specifics in the default output.
- Author or contributor spacing as a default scheduling goal.
- Replacing existing validation, preview, or past-day guard checks.
