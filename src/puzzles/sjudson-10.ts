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
      theme: 'Musical Humorists',
      tracks: [
        { id: 51963379, artist: 'Randy Newman', title: 'Political Science', note: '' },
        { id: 1760166443, artist: 'Tom Lehrer', title: 'Wernher von Braun', note: '' },
        { id: 479081278, artist: 'Mose Allison', title: 'Your Mind Is On Vacation', note: '' },
        { id: 712193073, artist: 'Kinky Friedman', title: 'We Reserve the Right to Refuse Service to You', note: '' },
      ],
    },
    {
      theme: 'New Edition',
      tracks: [
        { id: 1443808042, artist: 'Johnny Gill', title: 'My, My, My', note: '' },
        { id: 1440770080, artist: 'Bell Biv DeVoe', title: 'Poison', note: '' },
        { id: 1440773792, artist: 'Bobby Brown', title: 'Every Little Step', note: '' },
        { id: 1440651307, artist: 'New Edition', title: 'Can You Stand The Rain', note: '' },
      ],
    },
    {
      theme: 'Bob Giraldi Music Videos',
      tracks: [
        { id: 269573341, artist: 'Michael Jackson', title: 'Beat It', note: '' },
        { id: 853593051, artist: 'Jermaine Jackson', title: 'Do What You Do', note: '' },
        { id: 724157493, artist: 'Pat Benatar', title: 'Love Is A Battlefield', note: '' },
        { id: 1440757799, artist: 'Lionel Richie', title: 'Hello', note: '' },
      ],
    },
    {
      theme: 'Rock Songs With No (Discernable) Guitar',
      tracks: [
        { id: 1441164806, artist: 'The Beatles', title: 'Eleanor Rigby', note: '' },
        { id: 715534872, artist: 'Grand Funk Railroad', title: 'Some Kind of Wonderful', note: '' },
        { id: 601405365, artist: 'Fitz and the Tantrums', title: 'Out of My League', note: '' },
        { id: 1440863120, artist: 'Elton John', title: 'Bennie and the Jets', note: 'Davey Johnstone plays guitar, but it\'s buried' },
      ],
    },
  ],
};

export default puzzle;
