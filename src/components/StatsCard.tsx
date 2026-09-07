import type { Stats } from '../stats';

interface StatsCardProps {
  stats: Stats;
}

const BUCKET_LABELS = ['0', '1', '2', '3'] as const;

/** Lifetime record. Styling-neutral (inherits color) so it reads correctly
 *  on both the paper j-card (EndPanel) and the dark chassis (Settings). */
export function StatsCard({ stats }: StatsCardProps) {
  const peak = Math.max(1, ...stats.winsByMistakes, stats.lost);
  return (
    <div className="stats-card" data-testid="stats-card">
      <dl className="stats-grid">
        <div>
          <dt>Played</dt>
          <dd data-testid="stats-played">{stats.played}</dd>
        </div>
        <div>
          <dt>Win %</dt>
          <dd data-testid="stats-win-rate">{stats.winRate}</dd>
        </div>
        <div>
          <dt>Streak</dt>
          <dd data-testid="stats-streak">{stats.currentStreak}</dd>
        </div>
        <div>
          <dt>Best</dt>
          <dd data-testid="stats-max-streak">{stats.maxStreak}</dd>
        </div>
        <div>
          <dt>Flawless</dt>
          <dd data-testid="stats-perfect">{stats.perfect}</dd>
        </div>
      </dl>
      <div className="stats-dist" role="img" aria-label={distributionLabel(stats)}>
        <div className="stats-dist-title">Wins by mistakes</div>
        {stats.winsByMistakes.map((n, i) => (
          <div className="stats-dist-row" key={i}>
            <span className="stats-dist-label">{BUCKET_LABELS[i]}</span>
            <span className="stats-dist-track">
              <span className="stats-dist-bar" style={{ width: `${(n / peak) * 100}%` }} />
            </span>
            <span className="stats-dist-count">{n}</span>
          </div>
        ))}
        <div className="stats-dist-row stats-dist-row--loss">
          <span className="stats-dist-label">✕</span>
          <span className="stats-dist-track">
            <span className="stats-dist-bar" style={{ width: `${(stats.lost / peak) * 100}%` }} />
          </span>
          <span className="stats-dist-count">{stats.lost}</span>
        </div>
      </div>
    </div>
  );
}

function distributionLabel(stats: Stats): string {
  const parts = stats.winsByMistakes.map(
    (n, i) => `${n} ${n === 1 ? 'win' : 'wins'} with ${i} ${i === 1 ? 'mistake' : 'mistakes'}`,
  );
  parts.push(`${stats.lost} ${stats.lost === 1 ? 'loss' : 'losses'}`);
  return parts.join(', ');
}
