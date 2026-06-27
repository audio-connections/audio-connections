// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Samuel Judson',
  constraint: 'Disco never died, it just went away for a little while…',
  themes: [
    {
      theme: 'Disco… Revitalized',
      tracks: [
        { id: 1630005850, artist: 'Beyonce', title: 'Cuff It', note: '' },
        { id: 1597024424, artist: 'BTS', title: 'Dynamite', note: '' },
        { id: 1689238922, artist: 'Dua Lipa', title: 'Dance The Night', note: '' },
        { id: 1612867735, artist: 'Silk Sonic', title: 'Skate', note: '' },
      ],
    },
    {
      theme: 'That Shit\'s Gay (Complimentary)',
      tracks: [
        { id: 1444143456, artist: 'Sylvester', title: 'You Make Me Feel (Mighty Real)', note: '' },
        { id: 1442897218, artist: 'The Weather Girls', title: 'It\'s Raining Men', note: '' },
        { id: 1452792418, artist: 'Diana Ross', title: 'I\'m Coming Out', note: '' },
        { id: 1443818368, artist: 'Gloria Gaynor', title: 'I Will Survive', note: '' },
      ],
    },
    {
      theme: 'I Guess White People Can Be Funky Too',
      tracks: [
        { id: 1422648513, artist: 'ABBA', title: 'Dancing Queen', note: '' },
        { id: 315232272, artist: 'Peter Brown', title: 'Dance With Me', note: '' },
        { id: 267552570, artist: 'John Davis & The Monster Orchestra', title: 'Up Jumped The Devil', note: '' },
        { id: 1442259373, artist: 'The Bee Gees', title: 'Night Fever', note: '' },
      ],
    },
    {
      theme: 'Demolished But Not Forgotten (pre-July 12, 1979 hits)',
      tracks: [
        { id: 301649381, artist: 'Chic', title: 'Le Freak', note: '' },
        { id: 1425179375, artist: 'Donna Summer', title: 'Bad Girls', note: '' },
        { id: 523223725, artist: 'Earth, Wind & Fire with The Emotions', title: 'Boogie Wonderland', note: '' },
        { id: 1445668685, artist: 'Kool & The Gang', title: 'Open Sesame', note: '' },
      ],
    },
  ],
};

export default puzzle;
