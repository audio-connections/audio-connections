// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Frank Arana',
  // constraint: 'All singing, all dancing',  // optional pill + DJ-note modal; keep it phrase-length (80 char soft cap)
  themes: [
    {
      theme: '90s Television Themes',
      tracks: [
        { id: 374382372, artist: 'Angelo Badalamenti', title: 'Twin Peaks', note: '' },
        { id: 1003790136, artist: 'John Beal', title: 'The X Files', note: '' },
        { id: 322839119, artist: 'The Refreshments', title: 'King of the Hill', note: '' },
        { id: 1608608752, artist: 'Alabama 3', title: 'Woke Up This Morning', note: '' },
      ],
    },
    {
      theme: 'R&B and Rapper Duets',
      tracks: [
        { id: 1440906939, artist: 'SZA, Kendrick Lamar', title: 'All The Stars', note: '' },
        { id: 1371597594, artist: 'Ja Rule', title: 'Always on Time', note: 'feat. Ashanti' },
        { id: 1440935229, artist: 'JAY Z', title: "03' Bonnie & Clyde", note: 'feat. Beyoncé Knowles' },
        { id: 1440770466, artist: 'Nelly', title: 'Dilemma', note: 'feat. Kelly Rowland' },
      ],
    },
    {
      theme: 'Telling a Story',
      tracks: [
        { id: 1440834658, artist: 'Slick Rick', title: "Children's Story", note: '' },
        { id: 1441133857, artist: 'The Beatles', title: 'Rocky Raccoon', note: '' },
        { id: 41229186, artist: 'Arlo Guthrie', title: "Alice's Restaurant Massacree", note: '' },
        { id: 1565224352, artist: 'Bright Eyes', title: 'At the Bottom of Everything', note: '' },
      ],
    },
    {
      theme: 'Berry Gordy Family',
      tracks: [
        { id: 1589119250, artist: 'Rockwell', title: "Somebody's Watching Me", note: 'Son of Berry Gordy Jr.' },
        { id: 1440636627, artist: 'LMFAO', title: 'Party Rock Anthem', note: 'Grandson and son of Berry Gordy Jr.' },
        { id: 1444106658, artist: 'Marvin Gaye', title: 'I Heard it through the Grapevine', note: "Married Berry Gordy Jr's sister Anna Gordy" },
        { id: 1443160111, artist: 'Diana Ross', title: "I'm Coming Out", note: 'dated Berry Gordy Jr, share a daughter' },
      ],
    },
  ],
};

export default puzzle;
