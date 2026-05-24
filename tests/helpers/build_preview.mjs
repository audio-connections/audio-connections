#!/usr/bin/env node
// Generates tests/helpers/preview_check.html from src/puzzles/day-*.ts.
// Embeds only the days you ask for so an open browser tab can't spoil a day
// you didn't pick. Re-run whenever puzzle files (or your day selection)
// change. No npm/node_modules required — uses regex + Function() to pluck
// the puzzle object literal out of each TS file.
//
// Usage:
//   node tests/helpers/build_preview.mjs 32 33     # just those days
//   node tests/helpers/build_preview.mjs 30-33     # range
//   node tests/helpers/build_preview.mjs           # ALL days (use with care)
//   node tests/helpers/build_preview.mjs --help

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const puzzleDir = path.join(repoRoot, 'src/puzzles');
const outPath = path.join(__dirname, 'preview_check.html');

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log('Usage: node tests/helpers/build_preview.mjs [day|range ...]');
  console.log('  e.g.  node tests/helpers/build_preview.mjs 32 33');
  console.log('        node tests/helpers/build_preview.mjs 30-33');
  console.log('        node tests/helpers/build_preview.mjs        (all days)');
  process.exit(0);
}

let dayFilter = null;
if (args.length) {
  dayFilter = new Set();
  for (const arg of args) {
    const range = arg.match(/^(\d+)-(\d+)$/);
    if (range) {
      const lo = +range[1], hi = +range[2];
      for (let i = lo; i <= hi; i++) dayFilter.add(i);
    } else if (/^\d+$/.test(arg)) {
      dayFilter.add(+arg);
    } else {
      console.error(`Bad day arg: ${arg} (expected N or N-M)`);
      process.exit(1);
    }
  }
}

function parsePuzzle(file) {
  const text = fs.readFileSync(file, 'utf8');
  const m = text.match(
    /const puzzle:\s*Puzzle\s*=\s*(\{[\s\S]*?\});\s*[\r\n]+\s*export default puzzle/,
  );
  if (!m) throw new Error(`Could not parse puzzle object in ${file}`);
  // Puzzle files use JS object-literal syntax (single quotes, trailing commas,
  // unquoted keys). new Function() handles it directly — no JSON conversion.
  return new Function(`return ${m[1]}`)();
}

const files = fs
  .readdirSync(puzzleDir)
  .filter((f) => /^day-\d+\.ts$/.test(f))
  .map((f) => path.join(puzzleDir, f));

const allPuzzles = files.map(parsePuzzle).sort((a, b) => a.day - b.day);
const puzzles = dayFilter
  ? allPuzzles.filter((p) => dayFilter.has(p.day))
  : allPuzzles;

if (dayFilter) {
  const found = new Set(puzzles.map((p) => p.day));
  const missing = [...dayFilter].filter((d) => !found.has(d));
  if (missing.length) {
    console.error(`No puzzle file(s) found for day(s): ${missing.join(', ')}`);
    process.exit(1);
  }
}
if (!puzzles.length) {
  console.error('No puzzles selected — nothing to write.');
  process.exit(1);
}

const dataJson = JSON.stringify(puzzles, null, 2);

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Preview identifiability check</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 920px; margin: 1.5rem auto; padding: 0 1rem; background: #fafafa; }
  h1 { font-size: 1.4rem; }
  h2 { font-size: 1.1rem; margin-top: 1.5rem; border-bottom: 1px solid #ddd; padding-bottom: .25rem; }
  h3 { font-size: .95rem; color: #555; margin-top: 1rem; }
  .toolbar { position: sticky; top: 0; background: #fafafa; padding: .5rem 0; border-bottom: 1px solid #ddd; z-index: 10; }
  .days-row { display: flex; flex-wrap: wrap; gap: .35rem .65rem; margin: .25rem 0; align-items: center; font-size: .9rem; }
  .days-row label { cursor: pointer; user-select: none; padding: 0 .15rem; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; }
  .card { border: 1px solid #ccc; border-radius: 6px; padding: .5rem .75rem; background: white; }
  .card audio { width: 100%; margin-top: .35rem; }
  .label { font-size: .8rem; color: #888; }
  .answer { margin-top: .35rem; font-weight: 600; color: #333; min-height: 1.2em; }
  .answer .note { font-weight: 400; color: #666; font-style: italic; display: block; font-size: .85rem; }
  .hidden { color: #bbb; font-weight: 400; font-style: italic; }
  .failed { color: #b00; font-size: .85rem; }
  button { font: inherit; padding: .25rem .6rem; cursor: pointer; }
</style>
</head>
<body>
<h1>Preview identifiability check</h1>
<p>
  Each preview loads its <code>previewUrl</code> from iTunes via JSONP (same path
  the app uses). Titles start hidden — play, try to identify, then click
  <em>Reveal</em>. Selection persists in the URL hash (e.g.
  <code>#days=32,33</code>) so you can bookmark or reload a configuration.
</p>
<div class="toolbar">
  <div class="days-row" id="dayPicker"></div>
  <div class="days-row">
    <button id="selectAll">All</button>
    <button id="clearDays">None</button>
    <button id="revealAll">Reveal all</button>
    <button id="hideAll">Hide all</button>
    <span id="status" class="label" style="margin-left:.5rem"></span>
  </div>
</div>
<div id="content"></div>

<script>
const DATA = ${dataJson};

const dayByNum = new Map(DATA.map((p) => [p.day, p]));

function readSelection() {
  const hash = location.hash.replace(/^#/, '');
  const raw = new URLSearchParams(hash).get('days');
  if (!raw) {
    // Default to the most recent day — usually the one being authored.
    return DATA.length ? new Set([DATA[DATA.length - 1].day]) : new Set();
  }
  return new Set(raw.split(',').map(Number).filter((n) => dayByNum.has(n)));
}

function writeSelection(set) {
  const days = [...set].sort((a, b) => a - b);
  location.hash = days.length ? 'days=' + days.join(',') : '';
}

const picker = document.getElementById('dayPicker');
const cbByDay = new Map();
const dayLabel = document.createElement('span');
dayLabel.className = 'label';
dayLabel.textContent = 'Days:';
picker.appendChild(dayLabel);

for (const puzzle of DATA) {
  const wrap = document.createElement('label');
  const cb = document.createElement('input');
  cb.type = 'checkbox';
  cb.value = String(puzzle.day);
  cb.addEventListener('change', () => {
    const set = new Set();
    for (const [day, box] of cbByDay) if (box.checked) set.add(day);
    writeSelection(set);
  });
  wrap.appendChild(cb);
  wrap.appendChild(document.createTextNode(' ' + puzzle.day));
  picker.appendChild(wrap);
  cbByDay.set(puzzle.day, cb);
}

function syncCheckboxes(set) {
  for (const [day, cb] of cbByDay) cb.checked = set.has(day);
}

document.getElementById('selectAll').addEventListener('click', () => {
  writeSelection(new Set(DATA.map((p) => p.day)));
});
document.getElementById('clearDays').addEventListener('click', () => writeSelection(new Set()));

// Cache by track id — flipping which days are shown shouldn't re-fetch
// previews we already pulled.
const previewCache = new Map();
function jsonpLookup(id) {
  if (previewCache.has(id)) return previewCache.get(id);
  const promise = new Promise((resolve) => {
    const cb = '__cb_' + id + '_' + Math.random().toString(36).slice(2);
    const s = document.createElement('script');
    const timer = setTimeout(() => { cleanup(); resolve(null); }, 12000);
    function cleanup() { delete window[cb]; s.remove(); clearTimeout(timer); }
    window[cb] = (data) => { cleanup(); resolve(data && data.results && data.results[0] || null); };
    s.onerror = () => { cleanup(); resolve(null); };
    s.src = 'https://itunes.apple.com/lookup?id=' + id + '&callback=' + cb;
    document.head.appendChild(s);
  });
  previewCache.set(id, promise);
  return promise;
}

const content = document.getElementById('content');
const statusEl = document.getElementById('status');
let activeCards = [];

function setAnswer(card, track, revealed) {
  const el = card.querySelector('.answer');
  if (revealed) {
    el.classList.remove('hidden');
    el.innerHTML = (track.artist + ' — ' + track.title) +
      (track.note ? '<span class="note">' + track.note + '</span>' : '');
  } else {
    el.classList.add('hidden');
    el.textContent = '— hidden —';
  }
}

let renderToken = 0;
async function render(set) {
  const myToken = ++renderToken;
  content.innerHTML = '';
  activeCards = [];
  const selectedDays = DATA.filter((p) => set.has(p.day));
  if (!selectedDays.length) {
    content.innerHTML = '<p class="label">No days selected — check one above.</p>';
    statusEl.textContent = '';
    return;
  }

  const cardsToLoad = [];
  for (const puzzle of selectedDays) {
    const h2 = document.createElement('h2');
    h2.textContent = 'Day ' + puzzle.day;
    content.appendChild(h2);
    puzzle.themes.forEach((theme, themeIdx) => {
      const h3 = document.createElement('h3');
      h3.textContent = 'Theme ' + (themeIdx + 1) + ': ' + theme.theme;
      content.appendChild(h3);
      const grid = document.createElement('div');
      grid.className = 'grid';
      content.appendChild(grid);
      theme.tracks.forEach((track, trackIdx) => {
        const card = document.createElement('div');
        card.className = 'card';
        const label = 'Day ' + puzzle.day + ' · T' + (themeIdx + 1) +
          ' · Track ' + (trackIdx + 1);
        card.innerHTML =
          '<div class="label">' + label + ' <span class="label" style="float:right">id ' + track.id + '</span></div>' +
          '<audio controls preload="none"></audio>' +
          '<div class="answer hidden">— hidden —</div>' +
          '<button class="reveal">Reveal</button>';
        grid.appendChild(card);
        card.querySelector('.reveal').addEventListener('click', () => {
          const isHidden = card.querySelector('.answer').classList.contains('hidden');
          setAnswer(card, track, isHidden);
        });
        activeCards.push({ card, track });
        cardsToLoad.push({ card, track });
      });
    });
  }

  let loaded = 0, failed = 0;
  statusEl.textContent = 'loading ' + cardsToLoad.length + ' previews…';
  for (const { card, track } of cardsToLoad) {
    if (myToken !== renderToken) return; // newer render started; stop populating
    const result = await jsonpLookup(track.id);
    if (myToken !== renderToken) return;
    if (result && result.previewUrl) {
      card.querySelector('audio').src = result.previewUrl;
      loaded++;
    } else {
      failed++;
      const el = document.createElement('div');
      el.className = 'failed';
      el.textContent = 'no preview returned';
      card.appendChild(el);
    }
    statusEl.textContent = 'loaded ' + loaded + '/' + cardsToLoad.length + (failed ? ' (' + failed + ' failed)' : '');
    await new Promise((r) => setTimeout(r, 50));
  }
}

document.getElementById('revealAll').addEventListener('click', () => {
  for (const { card, track } of activeCards) setAnswer(card, track, true);
});
document.getElementById('hideAll').addEventListener('click', () => {
  for (const { card, track } of activeCards) setAnswer(card, track, false);
});

function reactToHash() {
  const set = readSelection();
  syncCheckboxes(set);
  render(set);
}
window.addEventListener('hashchange', reactToHash);
reactToHash();
</script>
</body>
</html>
`;

fs.writeFileSync(outPath, html);
const days = puzzles.map((p) => p.day).join(', ');
console.log(`Wrote ${path.relative(repoRoot, outPath)} (${puzzles.length} days: ${days})`);
