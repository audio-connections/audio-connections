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
      theme: 'Blaxploitation Themes',
      tracks: [
        { id: 40059077, artist: 'Curtis Mayfield', title: 'Superfly', note: '' },
        { id: 1440937747, artist: 'Isaac Hayes', title: 'Theme From Shaft', note: '' },
        { id: 724419609, artist: 'Bobby Womack', title: 'Across 110th Street', note: '' },
        { id: 1444094024, artist: 'Willie Hutch', title: 'Theme of Foxy Brown', note: '' },
      ],
    },
    {
      theme: 'Oh Shit, I Guess Someone\'s Cheating',
      tracks: [
        { id: 1460430670, artist: 'Beyonce', title: 'Hold Up', note: '' },
        { id: 252606592, artist: 'Justin Timberlake', title: 'Cry Me A River', note: '' },
        { id: 1440912238, artist: 'Kelly Price', title: 'Friend of Mine', note: '' },
        { id: 1444106658, artist: 'Marvin Gaye', title: 'I Heard It Through The Grapevine', note: '' },
      ],
    },
    {
      theme: 'The International (Song) Workingmen\'s Association',
      tracks: [
        { id: 1527197034, artist: 'Ska-P', title: 'Jaque al Rey', note: '' },
        { id: 1531517352, artist: 'Isabel Frey', title: 'Arbetlose Marsch', note: 'originally by Mordechai Gebirtig' },
        { id: 1442451188, artist: 'Gogol Bordello', title: 'Immigraniada (We Comin\' Rougher)', note: '' },
        { id: 1621384500, artist: 'Gil Scott-Heron', title: 'The Revolution Will Not Be Televised', note: '' },
      ],
    },
    {
      theme: 'Sick Riffs From Someone Who Died Young',
      tracks: [
        { id: 344800179, artist: 'Jimi Hendrix', title: 'Voodoo Child', note: '' },
        { id: 28457962, artist: 'Chicago', title: '25 or 6 to 4', note: 'Terry Kath on lead guitar' },
        { id: 1440838661, artist: 'Lynyrd Skynyrd', title: 'Free Bird', note: 'Allen Collins and Steve Gaines both died young' },
        { id: 193063260, artist: 'Stevie Ray Vaughan & Double Trouble', title: 'Texas Flood', note: '' },
      ],
    },
  ],
};

export default puzzle;
