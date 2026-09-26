// Dev-only puzzle builder page (/?mode=builder under `npm run dev`).
//
// Search iTunes, audition previews, drop tracks into the four sides, name
// the categories, watch the reuse check, export a puzzle file. State lives
// in the dev server's draft file (see vite-plugins/builder-dev.ts), which the
// CLI (scripts/puzzle.ts) edits too — the page polls for outside changes so
// a person here and an agent in the terminal work on one draft.
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import './builder.css';
import { SIDES, emptyTrack, filledCount, type Draft, type DraftProblem, type DraftTrack } from './draft';
import type { CheckResult, PriorUse, SearchHit } from '../../vite-plugins/builder-ops.ts';
import { DEFAULT_REUSE_OPTIONS, type ReuseOccurrence, type ReuseWarning } from '../puzzles.reuse';
import { MAX_CONSTRAINT_LENGTH } from '../constraint';
import { PlayPauseIcon } from '../components/PlayPauseIcon';

const API = '/__builder';
const SAVE_DEBOUNCE_MS = 400;
const CHECK_DEBOUNCE_MS = 700;
const POLL_MS = 2000;
/** Slug the check gives the draft (DRAFT_SLUG in builder-ops, which can't be
 *  value-imported here: it pulls in node:fs). */
const DRAFT_SLUG = 'draft';
const SPOILER_KEY = 'builder:hideSpoilers';
/** TRACK_REUSE_DAYS in builder-ops, which can't be value-imported here. */
const TRACK_WINDOW_DAYS = DEFAULT_REUSE_OPTIONS.idWarnDays;

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const r = await fetch(`${API}${path}`, init);
  const body = (await r.json()) as T & { error?: string };
  if (!r.ok) throw new Error(body.error ?? `HTTP ${r.status}`);
  return body;
}

function slotLabel(side: number, index: number): string {
  return `${SIDES[side]}${index + 1}`;
}

/** Side index for a slot label like "C2" (or a bare side letter). */
function sideOf(label: string): number {
  return SIDES.indexOf(label[0] as (typeof SIDES)[number]);
}

type Status = { text: string; error?: boolean };

function PlayButton({
  playing,
  progress,
  onClick,
  disabled,
  label,
}: {
  playing: boolean;
  progress: number;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      className={`builder-play${playing ? ' playing' : ''}`}
      style={playing ? ({ '--p': progress } as CSSProperties) : undefined}
      onClick={onClick}
      disabled={disabled}
      aria-label={playing ? `Stop ${label}` : `Play preview of ${label}`}
      title={disabled ? 'No preview clip, so this release can’t be used' : undefined}
    >
      <PlayPauseIcon playing={playing} />
    </button>
  );
}

function SlotChips({ slots }: { slots: string[] }) {
  return (
    <span className="builder-chips">
      {slots.map((s) => (
        <span key={s} className={`builder-chip theme-${sideOf(s)}`}>
          {s}
        </span>
      ))}
    </span>
  );
}

/* ── Spoilers ──
   Maintainers play the game too. Anything that names an unreleased puzzle
   (upcoming day or backlog) can fold behind a generic warning. */

/** The side of a reuse warning that isn't this draft. */
function otherSide(w: ReuseWarning): ReuseOccurrence {
  return w.prev.slug === DRAFT_SLUG ? w.cur : w.prev;
}

function isUnreleased(o: ReuseOccurrence, today: string): boolean {
  return !o.date || o.date > today;
}

function Spoiler({ children }: { children: ReactNode }) {
  return (
    <details className="builder-spoiler">
      <summary>
        <span aria-hidden="true">⚠️</span> Spoiler warning, click to <span className="builder-spoiler-reveal">reveal</span>
        <span className="builder-spoiler-hide">hide</span>
      </summary>
      {children}
    </details>
  );
}

function readHideSpoilers(): boolean {
  try {
    return localStorage.getItem(SPOILER_KEY) !== '0';
  } catch {
    return true;
  }
}

/** Check messages are lower-case fragments; list them as sentences, but
 *  leave "iTunes id …" alone. */
function sentence(s: string): string {
  return s.startsWith('iTunes') ? s : s.charAt(0).toUpperCase() + s.slice(1);
}

function priorUseText(p: PriorUse): string {
  if (!p.day) return `Also in ${p.file} (backlog)`;
  const apart = p.gap === undefined ? '' : `, ${p.gap} day${p.gap === 1 ? '' : 's'} apart`;
  return `Also in ${p.file}, Day ${p.day} on ${p.date}${apart}${p.released ? '' : ' (upcoming)'}`;
}

export function Builder() {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [status, setStatusState] = useState<Status>({ text: 'Loading draft…' });
  const [term, setTerm] = useState('');
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [searchedFor, setSearchedFor] = useState('');
  const [searching, setSearching] = useState(false);
  const [check, setCheck] = useState<CheckResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [slug, setSlug] = useState('');
  const [overwrite, setOverwrite] = useState(false);
  const [hideSpoilers, setHideSpoilers] = useState(readHideSpoilers);
  const [exportMsg, setExportMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const checkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Local edits not yet acknowledged by the server. While > 0 the poller
  // must not clobber the page with an older server copy.
  const pendingSaves = useRef(0);
  const draftRef = useRef<Draft | null>(null);
  draftRef.current = draft;

  const setStatus = useCallback((text: string, error = false) => setStatusState({ text, error }), []);

  const toggleSpoilers = (on: boolean) => {
    setHideSpoilers(on);
    try {
      localStorage.setItem(SPOILER_KEY, on ? '1' : '0');
    } catch {
      /* private window: the choice lasts for this visit only */
    }
  };

  /* ── Draft sync ── */
  const runCheck = useCallback(() => {
    if (checkTimer.current) clearTimeout(checkTimer.current);
    checkTimer.current = setTimeout(() => {
      setChecking(true);
      api<CheckResult>('/check')
        .then(setCheck)
        .catch((e: Error) => setStatus(`Check failed: ${e.message}`, true))
        .finally(() => setChecking(false));
    }, CHECK_DEBOUNCE_MS);
  }, [setStatus]);

  useEffect(() => {
    api<Draft>('/draft')
      .then((d) => {
        setDraft(d);
        setStatus('Draft loaded.');
        runCheck();
      })
      .catch((e: Error) => setStatus(`Cannot reach the dev server: ${e.message}`, true));
  }, [runCheck, setStatus]);

  // Poll for edits made from the terminal.
  useEffect(() => {
    const id = setInterval(() => {
      if (pendingSaves.current > 0) return;
      api<Draft>('/draft')
        .then((remote) => {
          const local = draftRef.current;
          if (!local || remote.updatedAt <= local.updatedAt) return;
          setDraft(remote);
          setStatus(`Draft updated outside the page at ${new Date(remote.updatedAt).toLocaleTimeString()}.`);
          runCheck();
        })
        .catch(() => {});
    }, POLL_MS);
    return () => clearInterval(id);
  }, [runCheck, setStatus]);

  /** Apply a local edit: update state now, persist after a short debounce. */
  const edit = useCallback(
    (fn: (d: Draft) => void) => {
      setDraft((prev) => {
        if (!prev) return prev;
        const next = structuredClone(prev);
        fn(next);
        return next;
      });
      pendingSaves.current++;
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        const d = draftRef.current;
        if (!d) return;
        api<Draft>('/draft', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
          .then((saved) => {
            setDraft((cur) => (cur ? { ...cur, updatedAt: saved.updatedAt } : cur));
            setStatus(`Saved ${new Date(saved.updatedAt).toLocaleTimeString()}.`);
            runCheck();
          })
          .catch((e: Error) => setStatus(`Save failed: ${e.message}`, true))
          .finally(() => {
            pendingSaves.current = 0;
          });
      }, SAVE_DEBOUNCE_MS);
    },
    [runCheck, setStatus],
  );

  /* ── Audio ── */
  const stop = useCallback(() => {
    audioRef.current?.pause();
    audioRef.current = null;
    setPlayingId(null);
    setProgress(0);
  }, []);

  const play = useCallback(
    async (id: number, previewUrl?: string) => {
      if (playingId === id) return stop();
      stop();
      let url = previewUrl;
      if (!url) {
        const [hit] = await api<SearchHit[]>(`/lookup?ids=${id}`);
        url = hit?.previewUrl;
        if (!url) return setStatus(`iTunes id ${id} has no preview clip.`, true);
      }
      const a = new Audio(url);
      a.addEventListener('ended', () => setPlayingId((cur) => (cur === id ? null : cur)));
      a.addEventListener('timeupdate', () => {
        if (audioRef.current === a && a.duration) setProgress(a.currentTime / a.duration);
      });
      audioRef.current = a;
      setPlayingId(id);
      a.play().catch((e: Error) => setStatus(`Playback failed: ${e.message}`, true));
    },
    [playingId, stop, setStatus],
  );

  useEffect(() => () => audioRef.current?.pause(), []);

  /* ── Search ── */
  const search = useCallback(
    async (e?: { preventDefault(): void }) => {
      e?.preventDefault();
      const t = term.trim();
      if (!t) return;
      setSearching(true);
      try {
        setHits(await api<SearchHit[]>(`/search?term=${encodeURIComponent(t)}&limit=25`));
        setSearchedFor(t);
      } catch (err) {
        setStatus(`Search failed: ${(err as Error).message}`, true);
      } finally {
        setSearching(false);
      }
    },
    [term, setStatus],
  );

  /* ── Slots ── */
  const inDraft = (id: number): string | null => {
    if (!draft) return null;
    for (let i = 0; i < 4; i++) {
      const j = draft.themes[i]!.tracks.findIndex((tr) => tr.id === id);
      if (j !== -1) return slotLabel(i, j);
    }
    return null;
  };

  const addHit = (hit: SearchHit, side: number) => {
    if (!hit.previewUrl) return setStatus(`${hit.artist} — ${hit.title} has no preview clip; pick another release.`, true);
    const where = inDraft(hit.id);
    if (where) return setStatus(`Already in slot ${where}.`);
    const index = draft?.themes[side]!.tracks.findIndex((tr) => tr.id === null) ?? -1;
    if (index === -1) return setStatus(`Side ${SIDES[side]} is full.`);
    edit((d) => {
      d.themes[side]!.tracks[index] = {
        ...emptyTrack(),
        id: hit.id,
        artist: hit.artist,
        title: hit.title,
        previewUrl: hit.previewUrl,
        album: hit.album,
        year: hit.year,
      };
    });
  };

  const exportFile = async () => {
    setExportMsg(null);
    try {
      const r = await api<{ path: string }>('/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: slug.trim(), overwrite }),
      });
      setExportMsg({ ok: true, text: `Exported to ${r.path}. Next: run pnpm run validate, then open a PR.` });
    } catch (e) {
      setExportMsg({ ok: false, text: (e as Error).message });
    }
  };

  if (!draft) {
    return (
      <div className="builder-page">
        <p className={`builder-status${status.error ? ' builder-status--error' : ''}`} role="status">
          {status.text}
        </p>
      </div>
    );
  }

  const filled = filledCount(draft);
  const ready = check ? check.problems.length === 0 && check.noPreview.length === 0 : false;

  // Empty slots and unnamed sides are already visible on the card, so the
  // check lists them as compact chips and spells out only the other problems.
  const problems = check?.problems ?? [];
  const isEmptySlot = (p: DraftProblem) => p.message === `${p.where} is empty`;
  const isUnnamed = (p: DraftProblem) => p.message === `category ${p.where} has no name`;
  const emptySlots = problems.filter(isEmptySlot).map((p) => p.where);
  const unnamed = problems.filter(isUnnamed).map((p) => p.where);
  const otherProblems = problems.filter((p) => !isEmptySlot(p) && !isUnnamed(p));

  // The check already keeps only uses inside the track-reuse window.
  const priorBySlot = new Map<string, PriorUse[]>();
  for (const p of check?.priorUses ?? []) priorBySlot.set(p.slot, [...(priorBySlot.get(p.slot) ?? []), p]);

  const constraintLen = draft.constraint.length;
  // UTC, matching the dev server's notion of "today" in checkDraft().
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="builder-page">
      <div className="builder">
        <header className="builder-header">
          <div>
            <h1>Puzzle builder</h1>
            <p className="builder-sub">
              Dev only. The draft lives in <code>.puzzle-draft.json</code>, and <code>pnpm puzzle</code> edits the same draft from
              the terminal. <a href="/" className="builder-back">Back to game</a>
            </p>
          </div>
          <div className="builder-readout">
            <div className="builder-lcd" role="img" aria-label={`${filled} of 16 tracks placed`}>
              <span className="builder-lcd-count">{String(filled).padStart(2, '0')}</span>
              <span className="builder-lcd-of">/16</span>
              <span className="builder-lcd-label">tracks</span>
            </div>
            <p className={`builder-status${status.error ? ' builder-status--error' : ''}`} role="status" aria-live="polite">
              {status.text}
            </p>
            <label className="builder-toggle">
              <input type="checkbox" checked={hideSpoilers} onChange={(e) => toggleSpoilers(e.target.checked)} />
              Hide spoilers for unreleased puzzles
            </label>
          </div>
        </header>

        <div className="builder-columns">
          {/* ── Search ── */}
          <section className="builder-finder" aria-labelledby="builder-finder-h">
            <h2 id="builder-finder-h" className="builder-engraved">
              Find tracks
            </h2>
            <form className="builder-search" role="search" onSubmit={search}>
              <input
                className="builder-input"
                type="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Artist, title, or both"
                aria-label="Search iTunes"
                autoFocus
              />
              <button type="submit" className="builder-key" disabled={searching || !term.trim()}>
                {searching ? 'Searching…' : 'Search'}
              </button>
            </form>
            {searchedFor && (
              <p className="builder-results-meta">
                {hits.length === 0
                  ? `No iTunes results for “${searchedFor}”. Try fewer words or another spelling.`
                  : `${hits.length} result${hits.length === 1 ? '' : 's'} for “${searchedFor}”`}
              </p>
            )}
            {hits.length > 0 ? (
              <ul className="builder-hits">
                {hits.map((h) => {
                  const where = inDraft(h.id);
                  return (
                    <li key={h.id} className={`builder-hit${h.previewUrl ? '' : ' builder-hit--dead'}`}>
                      <PlayButton
                        playing={playingId === h.id}
                        progress={progress}
                        onClick={() => play(h.id, h.previewUrl)}
                        disabled={!h.previewUrl}
                        label={`${h.artist}, ${h.title}`}
                      />
                      <div className="builder-hit-text">
                        <div className="builder-hit-title">{h.title}</div>
                        <div className="builder-hit-artist">{h.artist}</div>
                        <div className="builder-hit-meta">
                          {h.album}
                          {h.year ? `, ${h.year}` : ''}
                          <span className="builder-hit-id">{h.id}</span>
                        </div>
                      </div>
                      <div className="builder-place">
                        {!h.previewUrl ? (
                          <span className="builder-tag">No preview</span>
                        ) : where ? (
                          <span className={`builder-tag builder-tag--placed theme-${sideOf(where)}`}>In {where}</span>
                        ) : (
                          SIDES.map((s, i) => {
                            const full = draft.themes[i]!.tracks.every((tr) => tr.id !== null);
                            return (
                              <button
                                key={s}
                                type="button"
                                className={`builder-side-key theme-${i}`}
                                onClick={() => addHit(h, i)}
                                disabled={full}
                                aria-label={`Place on side ${s}`}
                                title={full ? `Side ${s} is full` : `Place on side ${s}`}
                              >
                                {s}
                              </button>
                            );
                          })
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              !searchedFor && (
                <p className="builder-empty">
                  Play a result to hear its 30-second preview, then press A, B, C or D to place it in the next empty slot on
                  that side.
                </p>
              )
            )}
          </section>

          <div className="builder-main">
            {/* ── Draft, drawn as the cassette's J-card ── */}
            <section className="builder-card" aria-label="Draft">
              <div className="builder-card-meta">
                <label className="builder-field">
                  <span className="builder-field-label">Author</span>
                  <input
                    className="builder-line"
                    value={draft.author}
                    onChange={(e) => edit((d) => { d.author = e.target.value; })}
                    placeholder="Your name"
                  />
                </label>
                <label className="builder-field">
                  <span className="builder-field-label">
                    Constraint, optional
                    <span className={`builder-count${constraintLen > MAX_CONSTRAINT_LENGTH ? ' builder-count--over' : ''}`}>
                      {constraintLen}/{MAX_CONSTRAINT_LENGTH}
                    </span>
                  </span>
                  <input
                    className="builder-line"
                    value={draft.constraint}
                    onChange={(e) => edit((d) => { d.constraint = e.target.value; })}
                    placeholder="e.g. Only #1 hits"
                  />
                </label>
              </div>

              {draft.themes.map((t, i) => (
                <div key={SIDES[i]} className={`builder-side theme-${i}`}>
                  <div className="builder-side-band" aria-hidden="true">
                    Side {SIDES[i]}
                  </div>
                  <div className="builder-side-body">
                    <input
                      className="builder-category"
                      value={t.theme}
                      onChange={(e) => edit((d) => { d.themes[i]!.theme = e.target.value; })}
                      placeholder={i === 3 ? 'Name side D (purple, the freebie)' : `Name side ${SIDES[i]}`}
                      aria-label={`Category for side ${SIDES[i]}`}
                    />
                    <ol className="builder-slots">
                      {t.tracks.map((tr: DraftTrack, j) => {
                        const label = slotLabel(i, j);
                        const prior = priorBySlot.get(label);
                        return (
                          <li key={j} className={`builder-slot${tr.id === null ? ' builder-slot--empty' : ''}`}>
                            <span className="builder-slot-no">{label}</span>
                            {tr.id === null ? (
                              <span className="builder-slot-empty">Empty</span>
                            ) : (
                              <>
                                <PlayButton
                                  playing={playingId === tr.id}
                                  progress={progress}
                                  onClick={() => play(tr.id!, tr.previewUrl)}
                                  label={`${tr.artist}, ${tr.title}`}
                                />
                                <div className="builder-slot-body">
                                  <div className="builder-slot-title">
                                    <strong>{tr.title}</strong> <span>{tr.artist}</span>
                                  </div>
                                  {(tr.album || tr.year) && (
                                    <div className="builder-slot-album">
                                      {[tr.album, tr.year].filter(Boolean).join(', ')}
                                    </div>
                                  )}
                                  <input
                                    className="builder-note"
                                    value={tr.note}
                                    onChange={(e) => edit((d) => { d.themes[i]!.tracks[j]!.note = e.target.value; })}
                                    placeholder="Add a note shown after solving (optional)"
                                    aria-label={`Note for ${label}`}
                                  />
                                  {prior && (
                                    <ul className="builder-prior">
                                      {prior.map((p) => (
                                        <li key={p.file}>
                                          {hideSpoilers && !p.released ? <Spoiler>{priorUseText(p)}</Spoiler> : priorUseText(p)}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                                <button
                                  type="button"
                                  className="builder-remove"
                                  onClick={() => edit((d) => { d.themes[i]!.tracks[j] = emptyTrack(); })}
                                  aria-label={`Remove ${label}`}
                                  title="Remove"
                                >
                                  ×
                                </button>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              ))}
            </section>

            {/* ── Check + export ── */}
            <section className="builder-preflight" aria-labelledby="builder-preflight-h">
              <div className="builder-preflight-head">
                <h2 id="builder-preflight-h" className="builder-engraved">
                  Before export
                </h2>
                <span className={`builder-led${check ? (ready ? ' builder-led--ready' : ' builder-led--blocked') : ''}`} aria-hidden="true" />
                <span className="builder-verdict">
                  {checking || !check ? 'Checking…' : ready ? 'Ready to export' : 'Not ready yet'}
                </span>
              </div>
              {check && (
                <div className="builder-findings">
                  {!ready && (
                    <div className="builder-finding builder-finding--block">
                      <h3>Blocking export</h3>
                      <ul>
                        {emptySlots.length > 0 && (
                          <li>
                            Empty slots
                            <SlotChips slots={emptySlots} />
                          </li>
                        )}
                        {unnamed.length > 0 && (
                          <li>
                            Unnamed sides
                            <SlotChips slots={unnamed} />
                          </li>
                        )}
                        {check.noPreview.length > 0 && (
                          <li>
                            No preview clip, pick another release
                            <SlotChips slots={check.noPreview} />
                          </li>
                        )}
                        {otherProblems.map((p) => (
                          <li key={p.where + p.message}>{sentence(p.message)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="builder-finding">
                    <h3>Reuse if scheduled next</h3>
                    {check.reuse.length === 0 ? (
                      <p>No collisions with nearby days.</p>
                    ) : (
                      <ul>
                        {check.reuse.map((s, k) => (
                          <li key={s}>
                            {hideSpoilers && check.reuseRaw[k] && isUnreleased(otherSide(check.reuseRaw[k]), today) ? (
                              <Spoiler>{sentence(s)}</Spoiler>
                            ) : (
                              sentence(s)
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="builder-finding">
                    <h3>Tracks used within {TRACK_WINDOW_DAYS} days</h3>
                    {priorBySlot.size === 0 ? (
                      <p>
                        {filled === 0
                          ? 'Nothing placed yet.'
                          : `No placed track is used within ${TRACK_WINDOW_DAYS} days of this puzzle or in the backlog.`}
                      </p>
                    ) : (
                      <p>
                        {priorBySlot.size === 1 ? 'One track is' : `${priorBySlot.size} tracks are`} used within{' '}
                        {TRACK_WINDOW_DAYS} days of this puzzle or in the backlog. Each is marked on the card.
                        <SlotChips slots={[...priorBySlot.keys()]} />
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div className="builder-export">
                <label className="builder-path">
                  <span className="builder-path-fix">src/puzzles/</span>
                  <input
                    className="builder-path-input"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="handle-3"
                    aria-label="File name"
                    spellCheck={false}
                  />
                  <span className="builder-path-fix">.ts</span>
                </label>
                <label className="builder-toggle">
                  <input type="checkbox" checked={overwrite} onChange={(e) => setOverwrite(e.target.checked)} />
                  Replace if it exists
                </label>
                <button type="button" className="builder-export-key" onClick={exportFile} disabled={!ready || !slug.trim()}>
                  Export
                </button>
              </div>
              {ready && !slug.trim() && !exportMsg && <p className="builder-hint">Name the file to export.</p>}
              {exportMsg && (
                <p className={exportMsg.ok ? 'builder-ok' : 'builder-error'} role="status">
                  {exportMsg.text}
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
