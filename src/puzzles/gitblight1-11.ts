import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  constraint: '16 artists, 4 TV title sequences',
  themes: [
    {
      theme: 'The Wire — "Way Down in the Hole"',
      tracks: [
        { id: 1653693830, artist: 'Blind Boys of Alabama', title: 'Amazing Grace', note: 'Sang the theme for Season 1' },
        { id: 1452329564, artist: 'Tom Waits', title: 'Downtown Train', note: 'Wrote and sang the Season 2 original' },
        { id: 1469584605, artist: 'The Neville Brothers', title: 'Yellow Moon', note: 'Season 3' },
        { id: 1440832545, artist: 'Steve Earle', title: 'Copperhead Road', note: 'Season 5' },
      ],
    },
    {
      theme: 'Weeds — "Little Boxes"',
      tracks: [
        { id: 1324903310, artist: 'Malvina Reynolds', title: 'What Have They Done to the Rain?', note: 'Season 1, the original' },
        { id: 294809842, artist: 'Elvis Costello', title: 'Veronica', note: 'Season 2, the first cover of the run' },
        { id: 1452235657, artist: 'Engelbert Humperdinck', title: 'Release Me', note: 'Season 2' },
        { id: 730582813, artist: 'Randy Newman', title: 'Short People', note: 'Season 3' },
      ],
    },
    {
      theme: 'One Tree Hill — "I Don\'t Want to Be"',
      tracks: [
        { id: 277743086, artist: 'Gavin DeGraw', title: 'Chariot', note: 'The original — Seasons 1–7 and the Season 8 premiere' },
        { id: 1440725537, artist: 'Fall Out Boy', title: "Sugar, We're Goin Down", note: 'Patrick Stump covered it for Season 8' },
        { id: 1111759273, artist: 'Tegan and Sara', title: 'Closer', note: 'Season 8' },
        { id: 331242218, artist: 'Aimee Mann', title: 'Wise Up', note: 'Season 8' },
      ],
    },
    {
      theme: "The Leftovers — actual songs from Season 3 episodes",
      tracks: [
        { id: 1250228686, artist: 'Iris DeMent', title: 'Let the Mystery Be', note: 'The Season 2 main title theme, and again for the Season 3 finale' },
        { id: 1869482307, artist: 'Richard Cheese', title: 'Personal Jesus', note: '"Crazy Whitefella Thinking" — a lounge cover of Depeche Mode' },
        { id: 457464910, artist: 'Ray LaMontagne & The Pariah Dogs', title: 'This Love Is Over', note: '"G\'Day Melbourne"' },
        { id: 443835821, artist: 'Gravediggaz', title: '1-800-Suicide', note: '"Certified"' },
      ],
    },
  ],
};

export default puzzle;
