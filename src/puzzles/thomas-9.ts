import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Thomas Ptacek',
  constraint: 'Collective Action',
  themes: [
    {
      theme: 'Wu-Tang Clan',
      tracks: [
        { id: 1471576657, artist: 'Ghostface Killah', title: 'Kilo' },
        { id: 1440835949, artist: 'GZA', title: '4th Chamber' },
        { id: 1526799068, artist: "Ol' Dirty Bastard", title: 'Shimmy Shimmy Ya' },
        { id: 716706153, artist: 'Raekwon', title: 'House of Flying Daggers' },
      ],
    },
    {
      theme: 'Native Tongues',
      tracks: [
        { id: 1806751246, artist: 'A Tribe Called Quest', title: 'Go Ahead in the Rain' },
        { id: 1673854007, artist: 'De La Soul', title: 'Tread Water' },
        { id: 1604634105, artist: 'Queen Latifah', title: 'Ladies First' },
        { id: 3241998, artist: 'Jungle Brothers', title: 'Because I Got It Like That' },
      ],
    },
    {
      theme: 'Dungeon Family',
      tracks: [
        { id: 712356792, artist: 'Janelle Monáe', title: "Lettin' Go", note: 'Broke out through Big Boi’s Purple Ribbon, under the Dungeon Family umbrella.' },
        { id: 1536684150, artist: 'OutKast', title: 'Ms. Jackson' },
        { id: 304749196, artist: 'Goodie Mob', title: 'Cell Therapy' },
        { id: 1539530164, artist: 'Killer Mike', title: 'A.D.I.D.A.S.', note: 'Debuted on OutKast’s Stankonia; a Dungeon Family affiliate.' },
      ],
    },
    {
      theme: 'Soulquarians',
      tracks: [
        { id: 1637359682, artist: 'Slum Village', title: 'Fall in Love', note: 'J Dilla, Slum Village’s producer, was a core Soulquarian.' },
        { id: 1440756135, artist: 'Erykah Badu', title: "Didn't Cha Know" },
        { id: 1443734443, artist: 'Common', title: 'The Light' },
        { id: 1444214037, artist: 'Mos Def', title: 'Ms. Fat Booty' },
      ],
    },
  ],
};

export default puzzle;
