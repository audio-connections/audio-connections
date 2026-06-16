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
      theme: 'Magic',
      tracks: [
        { id: 1443225590, artist: 'Teena Marie', title: 'It Must Be Magic', note: '' },
        { id: 267552953, artist: 'John Davis & The Monster Orchestra', title: 'The Magic Is You', note: '' },
        { id: 1440921665, artist: 'Grover Washington, Jr.', title: 'Mister Magic', note: '' },
        { id: 1290541763, artist: 'Tom Browne', title: 'Magic', note: '' },
      ],
    },
    {
      theme: 'Witchcraft',
      tracks: [
        { id: 1764411040, artist: 'Hector Berlioz', title: 'Songe d\'une nuit du Sabbat', note: 'Symphonie Fantastique: V' },
        { id: 1595220195, artist: 'Funkadelic', title: 'March to the Witch\'s Castle', note: '' },
        { id: 529716990, artist: 'Eddie Johns', title: 'More Spell On You', note: '' },
        { id: 1445667962, artist: 'Nina Simone', title: 'I Put A Spell On You', note: '' },
      ],
    },
    {
      theme: 'Battles & Invasions',
      tracks: [
        { id: 217509668, artist: 'Pete Rock and CL Smooth', title: 'They Reminisce Over You (T.R.O.Y.)', note: '' },
        { id: 1422649021, artist: 'ABBA', title: 'Waterloo', note: '' },
        { id: 976832496, artist: 'Van Halen', title: 'Panama', note: '' },
        { id: 168394509, artist: 'Johnny Horton', title: 'Sink The Bismarck', note: '' },
      ],
    },
    {
      theme: 'The Story of Adam',
      tracks: [
        { id: 780234010, artist: 'Iron Butterfly', title: 'In-A-Gadda-Da-Vida', note: '' },
        { id: 1452440084, artist: 'The Band', title: 'Forbidden Fruit', note: '' },
        { id: 918568442, artist: 'King Crimson', title: 'Exiles', note: '' },
        { id: 308873908, artist: 'Maxwell', title: 'Ascension', note: '' },
      ],
    },
  ],
};

export default puzzle;
