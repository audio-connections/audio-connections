// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Samuel Judson',
  themes: [
    {
      theme: 'Womack Family Values',
      tracks: [
        { id: 1892925001, artist: 'The Womack Sisters', title: 'If I Let You', note: '' },
        { id: 1361759637, artist: 'Womack & Womack', title: 'Teardrops', note: '' },
        { id: 1551256078, artist: 'Bobby Womack', title: 'If You Think You\'re Lonely Now', note: '' },
        { id: 1440495265, artist: 'Sam Cooke', title: 'A Change Is Gonna Come', note: '' },
      ],
    },
    {
      theme: 'Funky Instrumentals',
      tracks: [
        { id: 313742198, artist: 'Hypnotic Brass Ensemble', title: 'War', note: '' },
        { id: 1018562859, artist: 'George Benson', title: 'Six to Four', note: '' },
        { id: 1432783705, artist: 'The Soul Searchers', title: 'Ashley\'s Roachclip', note: '' },
        { id: 1617039637, artist: 'Ice', title: 'Racubah', note: '' },
      ],
    },
    {
      theme: 'Spike Lee\'s Borrowed Joints',
      tracks: [
        { id: 715917676, artist: 'E.U.', title: 'Da Butt', note: 'used in School Daze' },
        { id: 1440751885, artist: 'Public Enemy', title: 'Fight the Power', note: 'used in Do The Right Thing' },
        { id: 724661857, artist: 'Cornelius Brothers & Sister Rose', title: 'Too Late To Turn Back Now', note: 'used in BlacKkKlansman' },
        { id: 1745600252, artist: 'Stevie Wonder', title: 'Gotta Have You', note: 'used in Jungle Fever' },
      ],
    },
    {
      theme: 'Wrecking Crew Alumni',
      tracks: [
        { id: 1443109565, artist: 'Glen Campbell', title: 'Wichita Lineman', note: '' },
        { id: 142956316, artist: 'Barney Kessel', title: 'Autumn Leaves', note: '' },
        { id: 145075811, artist: 'Dr. John', title: 'Right Place, Wrong Time', note: '' },
        { id: 1624760647, artist: 'Leon Russell', title: 'This Masquerade', note: '' },
      ],
    },
  ],
};

export default puzzle;
