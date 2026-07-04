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
      theme: 'Songs of the Sea',
      tracks: [
        { id: 313249880, artist: 'The Decemberists', title: 'The Mariner\'s Revenge Song', note: '' },
        { id: 388158216, artist: 'Looking Glass', title: 'Brandy', note: '' },
        { id: 321976504, artist: 'Gordon Lightfoot', title: 'Wreck of the Edmund Fitzgerald', note: '' },
        { id: 997088846, artist: 'Otis Redding', title: '(Sittin\' on) The Dock of the Bay', note: '' },
      ],
    },
    {
      theme: 'That\'s What Friends Are For',
      tracks: [
        { id: 1440788744, artist: 'Stevie Wonder', title: 'As', note: '' },
        { id: 50232579, artist: 'Dionne Warwick', title: 'I Say A Little Prayer', note: '' },
        { id: 1440926343, artist: 'Elton John', title: 'Crocodile Rock', note: '' },
        { id: 943204009, artist: 'Gladys Knight & The Pips', title: 'Midnight Train to Georgia', note: '' },
      ],
    },
    {
      theme: 'Chosen Melodies',
      tracks: [
        { id: 1443890065, artist: 'Sammy Davis, Jr.', title: 'It Ain\'t Necessarily So', note: 'from Porgy & Bess, interpolates the blessings surrounding a Torah reading' },
        { id: 192678510, artist: 'Leonard Cohen', title: 'Who By Fire', note: 'a modern reinterpretation of the Unetaneh Tokef' },
        { id: 155655971, artist: 'The Byrds', title: 'Turn! Turn! Turn!', note: 'a modern setting of Ecclesiastes 3' },
        { id: 1444207664, artist: 'Klezmer Conservatory Band', title: 'Sabbath Prayer', note: 'from Fiddler on the Roof, a modern reinterpretation of the Birkat Kohanim' },
      ],
    },
    {
      theme: 'That Daptone Sound',
      tracks: [
        { id: 1485053486, artist: 'The Budos Band', title: 'Up From the South', note: '' },
        { id: 1488038937, artist: 'Sharon Jones & The Dap-Kings', title: 'Stranger To My Happiness', note: '' },
        { id: 1485046320, artist: 'Charles Bradley', title: 'Why Is It So Hard', note: '' },
        { id: 1422677785, artist: 'Amy Winehouse', title: 'Back to Black', note: '' },
      ],
    },
  ],
};

export default puzzle;
