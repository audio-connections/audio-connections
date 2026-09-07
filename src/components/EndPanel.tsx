import { useState } from 'react';
import type { Guess } from '../types';
import { buildShareTextStyled, canWebShare, type ShareStyle } from './shareText';
import type { Stats } from '../stats';
import { StatsCard } from './StatsCard';

interface EndPanelProps {
  won: boolean;
  day: number;
  guessHistory: Guess[];
  author: string;
  date: string;
  /** Lifetime record, already including this day's result. */
  stats: Stats;
  shareStyle: ShareStyle;
}

type CopyState = 'idle' | 'copied' | 'failed';

const COPY_LABEL: Record<CopyState, string> = {
  idle: 'Copy result',
  copied: 'Copied!',
  failed: 'Copy failed — select text manually',
};

export function EndPanel({ won, day, guessHistory, author, date, stats, shareStyle }: EndPanelProps) {
  const [copyState, setCopyState] = useState<CopyState>('idle');
  // A record without guessHistory came from the editor (or a future schema
  // that didn't carry it). The emoji grid and the per-side recovery count
  // need the history, so we render a simpler card without them.
  const hasHistory = guessHistory.length > 0;
  const shareText = buildShareTextStyled(shareStyle, { day, date, guessHistory });
  const showShare = canWebShare();
  const sidesDone = guessHistory.filter((g) => g.correct).length;
  const headline = won ? 'Mixtape Mastered.' : 'Out of Tape.';
  const subhead = won
    ? 'Full tape · 4/4 sides'
    : hasHistory
      ? `Recovered ${sidesDone}/4 sides`
      : 'Tape ejected';
  const cat = `AC-${String(day).padStart(3, '0')}`;
  const year = date.match(/\d{4}/)?.[0] ?? '';
  const runout = `${cat}-${won ? 'A' : 'B'} · ℗ ${year} · Puzzle by ${author} · Ferric Master NR`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 1500);
    } catch {
      setCopyState('failed');
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({ text: shareText });
    } catch {
      // AbortError when the player dismisses the sheet; anything else falls
      // back to the copy button that's still right there.
    }
  };

  return (
    <div className={`end-panel ${won ? 'win' : 'loss'}`} data-testid="end-panel">
      <div className="end-watermark" aria-hidden="true">
        Audio Connections
      </div>
      <div className="end-jcard-header">
        <span>Audio Connections · Master Insert</span>
        <span>NO. {String(day).padStart(3, '0')}</span>
      </div>
      <div className="end-stamp">{won ? 'CLEARED' : 'REWIND'}</div>
      <h2>{headline}</h2>
      <p className="end-subhead">{subhead}</p>
      <dl className="end-meta">
        <div>
          <dt>Catalogue</dt>
          <dd>Day {day}</dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd>{date}</dd>
        </div>
      </dl>
      {hasHistory && (
        <>
          <div className="share-text" data-testid="share-text" data-share-style={shareStyle}>
            {shareText}
          </div>
          <div className="share-actions">
            {showShare && (
              <button
                type="button"
                className="copy-btn"
                onClick={handleShare}
                data-testid="share-btn"
              >
                Share result
              </button>
            )}
            <button
              type="button"
              className={`copy-btn${copyState === 'copied' ? ' copied' : ''}${showShare ? ' copy-btn--secondary' : ''}`}
              onClick={handleCopy}
              data-testid="copy-btn"
            >
              {showShare && copyState === 'idle' ? 'Copy' : COPY_LABEL[copyState]}
            </button>
          </div>
        </>
      )}
      <section className="end-stats" aria-label="Your record">
        <h3 className="end-stats-title">Your record</h3>
        <StatsCard stats={stats} />
      </section>
      <div className="end-runout" aria-hidden="true">
        {runout}
      </div>
    </div>
  );
}
