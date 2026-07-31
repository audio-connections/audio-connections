// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'David Adrian',
  constraint: 'grab a light beer from the garage',  // optional pill + DJ-note modal; keep it phrase-length (80 char soft cap)
  themes: [
    {
      theme: 'Songs performed on MTV Unplugged',
      tracks: [
        { id: 268435292, artist: 'Alice In Chains', title: 'Nutshell' },
        { id: 669728225, artist: 'Nirvana', title: 'About a Girl' },
        { id: 425465351, artist: 'Pearl Jam', title: 'Black' },
        { id: 1285806815, artist: 'Stone Temple Pilots', title: 'Creep' },
      ],
    },
    {
      theme: 'Christian imagery but not Christian Rock',
      tracks: [
        {
          id: 1440631628,
          artist: 'Creed',
          title: 'Higher',
          note: 'Heaven is a place with Golden Streets',
        },
        {
          id: 214403584,
          artist: 'Nickelback',
          title: "Savin' Me",
          note: "Heaven's gates will not open for him.",
        },
        {
          id: 1440763711,
          artist: 'Hinder',
          title: 'Lips of an Angel',
          note: 'The former lover is compared to an angel.',
        },
        {
          id: 1109658204,
          artist: 'The Goo Goo Dolls',
          title: 'Iris',
          note: 'The closest Rzeznik will ever be to heaven.',
        },
      ],
    },
    {
      theme: 'Songs reflecting on parents and children',
      tracks: [
        {
          id: 279812102,
          artist: 'Shinedown',
          title: 'Second Chance',
          note: 'A child addressing both parents.',
        },
        {
          id: 209388682,
          artist: 'My Chemical Romance',
          title: 'Welcome to the Black Parade',
          note: 'A father addressing his son.',
        },
        {
          id: 1440838314,
          artist: 'Lynyrd Skynyrd',
          title: 'Simple Man',
          note: 'A mother addressing her son.',
        },
        {
          id: 263065220,
          artist: 'Staind',
          title: "It's Been Awhile",
          note: 'An adult son reflecting on his father.',
        },
      ],
    },
    {
      theme: 'Artists who contributed to the Halo 2 soundtrack',
      tracks: [
        {
          id: 1445150297,
          artist: 'Breaking Benjamin',
          title: 'Blow Me Away',
          note: 'On the soundtrack directly',
        },
        {
          id: 271792734,
          artist: 'Incubus',
          title: 'Wish You Were Here',
          note: "Incubus contributed the four-part 'Odyssey' suite.",
        },
        {
          id: 1722840331,
          artist: 'Hoobastank',
          title: 'The Reason',
          note: "Hoobastank contributed 'Connected' as a bonus track.",
        },
        {
          id: 184335660,
          artist: 'John Mayer',
          title: 'Gravity',
          note: "Mayer performed an uncredited guitar part in 'Epilogue'.",
        },
      ],
    },
  ],
};

export default puzzle;
