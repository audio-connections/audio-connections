// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Frank Arana',
  // constraint: 'All singing, all dancing',  // optional pill + DJ-note modal; keep it phrase-length (80 char soft cap)
  themes: [
    {
      theme: 'Russian Artists',
      tracks: [
        { id: 1488643157, artist: 'Ruki Vverh!', title: 'Песенка', note: '' },
        { id: 1652031569, artist: 'Ivan Surzhikov', title: 'Коробе́йники', note: '' },
        { id: 1440812146, artist: 't.A.T.u', title: 'All the Things She Said', note: '' },
        { id: 1178733242, artist: 'VITAS ', title: '7-элемент', note: '' },
      ],
    },
    {
      theme: 'Prison Songs',
      tracks: [
        { id: 825516880, artist: 'Johnny Cash', title: 'Folsom Prison Blues', note: '' },
        { id: 1440731291, artist: 'Akon', title: 'Locked Up', note: '' },
        { id: 995156925, artist: 'Otis Redding', title: 'Chain Gang', note: '' },
        { id: 647246433, artist: 'The Clash', title: 'I Fought the Law', note: '' },
      ],
    },
    {
      theme: 'Trapped in Love',
      tracks: [
        { id: 1440654461, artist: 'Sublime', title: "Doin' Time", note: '' },
        { id: 651880159, artist: 'Fleetwood Mac', title: 'The Chain', note: '' },
        { id: 1652782742, artist: 'Sean Paul', title: "I'm Still in Love with You", note: '' },
        { id: 996111414, artist: 'Joy Division', title: 'Love Will Tear Us Apart', note: '' },
      ],
    },
    {
      theme: "Can you believe it's one guy??",
      tracks: [
        { id: 850571371, artist: 'Gorillaz', title: 'Feel Good Inc.', note: '' },
        { id: 1836226730, artist: 'Tame Impala', title: 'Dracula', note: '' },
        { id: 1440783289, artist: 'Owl City', title: 'Fireflies', note: '' },
        { id: 1440852198, artist: 'Nine Inch Nails', title: 'The Hand That Feeds', note: '' },
      ],
    },
  ],
};

export default puzzle;
