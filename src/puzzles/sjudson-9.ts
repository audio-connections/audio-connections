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
      theme: 'Slap That Bass',
      tracks: [
        { id: 1434901768, artist: 'Brothers Johnson', title: 'Stomp', note: 'Louis Johnson' },
        { id: 365016814, artist: 'Graham Central Station', title: 'Hair', note: 'Larry Graham' },
        { id: 1319585761, artist: 'Patrice Rushen', title: 'Forget Me Nots', note: 'Freddie Washington' },
        { id: 410731495, artist: 'Cheryl Lynn', title: 'Got To Be Real', note: 'David Shields' },
      ],
    },
    {
      theme: 'Gogo Covers',
      tracks: [
        { id: 1109139918, artist: 'Backyard Band', title: 'Hello', note: 'originally by Adele' },
        { id: 733561564, artist: 'Rare Essence', title: 'Pieces of Me', note: 'originally by Ashlee Simpson' },
        { id: 66802046, artist: 'Suttle Thoughts', title: 'Diamond in the Back', note: 'originally by William DeVaughn' },
        { id: 1389319935, artist: 'Chuck Brown & The Soul Searchers', title: 'Run Joe', note: 'originally by Louis Jordan' },
      ],
    },
    {
      theme: 'One Artist, Many Instruments',
      tracks: [
        { id: 1440808990, artist: 'Stevie Wonder', title: 'Blame It On The Sun', note: 'on lead vocals, backing vocals, piano, harpsichord, drums, and synths' },
        { id: 1746833079, artist: 'Prince & The Revolution', title: 'When Doves Cry', note: 'on lead vocals, backing vocals, guitar synths, and drum machine' },
        { id: 216547171, artist: 'Sly and the Family Stone', title: 'Family Affair', note: 'Sly Stone on vocals, bass, lead guitar, drums, and drum machine' },
        { id: 328074563, artist: 'Sufjan Stevens', title: 'Jacksonville', note: 'couldn\'t find a per-track breakdown, but generally played everything but strings and horns' },
      ],
    },
    {
      theme: 'The Last Waltz Guests',
      tracks: [
        { id: 1488849801, artist: 'The Staple Singers', title: 'The Weight', note: '' },
        { id: 145076965, artist: 'Dr. John', title: 'Such A Night', note: '' },
        { id: 834450830, artist: 'Bob Dylan', title: 'Forever Young', note: '' },
        { id: 1443411510, artist: 'Muddy Waters', title: 'Caldonia', note: '' },
      ],
    },
  ],
};

export default puzzle;
