// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  // constraint: 'All singing, all dancing',  // optional pill + DJ-note modal; keep it phrase-length (80 char soft cap)
  themes: [
    {
      theme: 'Specific amount of money in the title',
      tracks: [
        { id: 1784970962, artist: 'Diva Cup', title: '10.63', note: '$10.63 is minimum wage for tipped workers in Colorado' },
        { id: 1113063295, artist: 'Ruth Etting', title: 'Ten Cents a Dance' },
        { id: 1349848606, artist: 'Soul Coughing', title: '$300' },
        { id: 3247003, artist: 'The Reverend Horton Heat', title: '400 Bucks' },
      ],
    },
    {
      theme: 'Artist name is a current or former S&P 500 corporation',
      tracks: [
        { id: 1440895365, artist: 'Tesla', title: 'Love Song' },
        { id: 153432187, artist: 'Fiona Apple', title: 'Extraordinary Machine' },
        { id: 298272085, artist: 'Lita Ford', title: 'Kiss Me Deadly' },
        { id: 1446115365, artist: 'Kodak Black', title: 'ZEZE (feat. Travis Scott & Offset)' },
      ],
    },
    {
      theme: 'Original and a cover were both US #1 hits',
      tracks: [
        { id: 1444133527, artist: 'The Marvelettes', title: 'Please Mr. Postman', note: "1961, Carpenters' cover reached #1 in 1975" },
        { id: 293336485, artist: 'Shocking Blue', title: 'Venus', note: "1970, Bananarama's cover hit #1 in 1986" },
        { id: 1443630839, artist: 'Kim Wilde', title: "You Keep Me Hangin' On", note: "1987, The Supremes' original was #1 in 1966" },
        { id: 181448355, artist: 'Mariah Carey', title: "I'll Be There", note: "1992, The Jackson 5 original was #1 in 1970" },
      ],
    },
    {
      theme: "CSN&Y's other bands",
      tracks: [
        { id: 275689910, artist: 'The Byrds', title: 'Eight Miles High', note: 'David Crosby' },
        { id: 192969898, artist: 'The Hollies', title: 'Bus Stop', note: 'Graham Nash' },
        { id: 265611986, artist: 'Buffalo Springfield', title: "For What It's Worth", note: 'Stephen Stills and Neil Young' },
        { id: 1459704503, artist: 'The Mynah Birds', title: "It's My Time", note: 'Neil Young — and Rick James on vocals, for Motown' },
      ],
    },
  ],
};

export default puzzle;
