// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Rob Wood',
  // constraint: 'All singing, all dancing',  // optional pill + DJ-note modal; keep it phrase-length (80 char soft cap)
  themes: [
    {
      theme: 'TMNT',
      tracks: [
        { id: 716192601, artist: 'Katy Perry', title: 'Teenage Dream', note: 'Teenage' },
        { id: 1714270461, artist: 'Shane Eagle', title: 'Mutant', note: 'Mutant' },
        { id: 1649967672, artist: 'Classified', title: 'Inner Ninja', note: 'Ninja' },
        { id: 1783206199, artist: 'Jesse Welles', title: 'Turtles', note: 'Turtles' },
      ],
    },
    {
      theme: 'Obsolete communication methods',
      tracks: [
        { id: 1440752008, artist: 'Dire Straits', title: 'Telegraph Road', note: '"What hath God wrought!", sent May 24, 1844.' },
        { id: 1440808312, artist: 'Maroon 5', title: 'Payphone', note: 'NYC removed the last payphone in 2022' },
        { id: 1440882889, artist: 'The Police', title: 'Message in a Bottle', note: 'ACAB' },
        { id: 1145641207, artist: 'Johnny Johnson & the Bandwagon', title: 'On the Pony Express', note: 'Killed by telegraph after only 18mo' },
      ],
    },
    {
      theme: 'Songs about barbers?',
      tracks: [
        { id: 543018750, artist: 'Dominik Hauser', title: 'Edward Scissorhands', note: 'pretty sure he cut hair' },
        { id: 511726744, artist: 'Michael Ball', title: 'The Ballad of Sweeney Todd', note: 'the demon barber.' },
        { id: 1165683462, artist: 'James Levine & LSO', title: 'The Barber of Seville, Act I: Overture', note: 'Bugs Bunny did it better' },
        { id: 1485074974, artist: 'Tom Waits', title: 'Barber Shop', note: 'that deep deep rasp.' },
      ],
    },
    {
      theme: 'Clear Channel memorandum',
      tracks: [
        { id: 724349113, artist: 'Pat Benatar', title: 'Hit Me With Your Best Shot', note: '' },
        { id: 1440956157, artist: 'Creedence Clearwater Revival', title: 'Travelin\' Band', note: '' },
        { id: 322357878, artist: 'John Parr', title: 'St. Elmo\'s Fire (Man in Motion)', note: '' },
        { id: 157390229, artist: 'Savage Garden', title: 'Crash and Burn', note: '' },
      ],
    },
  ],
};

export default puzzle;
