import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: '"Sorry" or "apologize" in the song title',
      tracks: [
        { id: 1440826320, artist: 'Justin Bieber', title: 'Sorry' },
        { id: 1440749959, artist: 'Timbaland', title: 'Apologize (feat. OneRepublic)' },
        { id: 1013383867, artist: 'Chicago', title: "Hard to Say I'm Sorry" },
        { id: 1440922852, artist: 'Elton John', title: 'Sorry Seems to Be the Hardest Word' },
      ],
    },
    {
      theme: 'Bands with punctuation in their names',
      tracks: [
        { id: 1361152303, artist: 'Panic! At the Disco', title: 'High Hopes' },
        { id: 601186061, artist: 'Fun.', title: 'Some Nights' },
        { id: 1229315050, artist: 'Portugal. The Man', title: 'Feel It Still' },
        { id: 574051551, artist: 'AC/DC', title: 'Moneytalks' },
      ],
    },
    {
      theme: 'Palindromic song titles (ignoring punctuation)',
      tracks: [
        { id: 1440866685, artist: 'Rihanna', title: 'SOS', note: 'SOS reads the same forwards and backwards' },
        { id: 1477887497, artist: 'Post Malone', title: 'Wow.', note: 'WOW reads the same forwards and backwards when the period is ignored' },
        { id: 1552875320, artist: 'The Raconteurs', title: 'Level', note: 'LEVEL reads the same forwards and backwards' },
        { id: 206903602, artist: '"Weird Al" Yankovic', title: 'Bob', note: 'BOB reads the same forwards and backwards' },
      ],
    },
    {
      theme: 'Eurovision-winning songs',
      tracks: [
        { id: 1422649021, artist: 'ABBA', title: 'Waterloo', note: 'Won for Sweden in 1974' },
        { id: 568114160, artist: 'Loreen', title: 'Euphoria', note: 'Won for Sweden in 2012' },
        { id: 1541620784, artist: 'Duncan Laurence', title: 'Arcade', note: 'Won for the Netherlands in 2019' },
        { id: 1558504599, artist: 'Måneskin', title: 'ZITTI E BUONI', note: 'Won for Italy in 2021' },
      ],
    },
  ],
};

export default puzzle;
