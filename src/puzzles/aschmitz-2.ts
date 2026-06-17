// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'aschmitz',
  // constraint: 'All singing, all dancing',  // optional pill + DJ-note modal; keep it phrase-length (80 char soft cap)
  themes: [
    {
      theme: 'An easy theme',
      tracks: [
        { id: 1443875578, artist: 'Three Dog Night', title: 'Easy to be Hard' },
        { id: 1442972225, artist: 'The Commodores', title: 'Easy' },
        { id: 1440951018, artist: 'Frank Sinatra', title: "Nice 'N' Easy" },
        { id: 265608660, artist: 'England Dan & John Ford Coley', title: "Some Things Don't Come Easy" },
      ],
    },
    {
      theme: 'One-hit wonders',
      tracks: [
        { id: 1552121134, artist: 'Lipps, Inc.', title: 'Funkytown' },
        { id: 1440902348, artist: '4 Non Blondes', title: "What's Up?" },
        { id: 715829705, artist: 'Right Said Fred', title: "I'm Too Sexy" },
        { id: 1604628161, artist: 'House of Pain', title: 'Jump Around' },
      ],
    },
    {
      theme: 'Vocals by Sia',
      tracks: [
        { id: 1814454650, artist: 'Zero 7', title: 'Speed Dial No. 2' },
        { id: 693226464, artist: 'David Guetta', title: 'Titanium' },
        { id: 613867347, artist: 'Flo Rida', title: 'Wild Ones' },
        { id: 1440805823, artist: 'Hilltop Hoods', title: 'I Love It' },
      ],
    },
    {
      theme: 'Songs that prominently use the Amen Break',
      tracks: [
        { id: 1478946359, artist: 'N.W.A', title: 'Straight Outta Compton' },
        { id: 1504583013, artist: 'Christopher Tyng', title: 'Futurama Main Theme' },
        { id: 500162231, artist: 'The Prodigy', title: 'Mindfields' },
        { id: 1257259293, artist: 'Galantis', title: 'No Money' },
      ],
    },
  ],
};

export default puzzle;
