import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Thomas Ptacek',
  themes: [
    {
      theme: 'Named for Other Musicians',
      tracks: [
        { id: 698654487, artist: 'The Replacements', title: 'Alex Chilton' },
        { id: 1440798133, artist: 'Weezer', title: 'Buddy Holly' },
        { id: 1475179821, artist: 'Drake', title: 'Girls Love Beyoncé' },
        { id: 1445837667, artist: 'Rick Ross', title: 'MC Hammer' },
      ],
    },
    {
      theme: 'Words Fail Me',
      tracks: [
        { id: 1594971126, artist: 'Harold Faltermeyer', title: 'Axel F' },
        { id: 1499501875, artist: 'Robert Miles', title: 'Children' },
        { id: 1205670757, artist: 'The Alan Parsons Project', title: 'Sirius' },
        { id: 157274264, artist: 'The Edgar Winter Group', title: 'Frankenstein' },
      ],
    },
    {
      theme: 'Crate Digging the 17th Century',
      tracks: [
        { id: 1604622826, artist: 'Coolio', title: 'C U When U Get There', note: 'Built on Pachelbel’s Canon in D.' },
        { id: 194641408, artist: 'Barry Manilow', title: 'Could It Be Magic', note: 'Built on Chopin’s Prelude in C minor, Op. 28 No. 20.' },
        { id: 162508312, artist: 'Nas', title: 'I Can', note: 'Built on Beethoven’s “Für Elise.”' },
        { id: 192966084, artist: 'Xzibit', title: 'Symphony in X Major', note: 'Samples Bach’s Brandenburg Concerto No. 3 (via Wendy Carlos).' },
      ],
    },
    {
      theme: 'There Are Desmond Child Songs Everywhere For Those With Ears To Hear',
      tracks: [
        { id: 1422955211, artist: 'Bon Jovi', title: 'Livin’ on a Prayer', note: 'Written by Desmond Child' },
        { id: 192821659, artist: 'Ricky Martin', title: 'Livin’ la Vida Loca', note: 'Yes, also Desmond Child' },
        { id: 1440823557, artist: 'Aerosmith', title: 'Angel', note: 'Still Desmond Child' },
        { id: 1443906189, artist: 'Sisqó', title: 'Thong Song', note: 'Wait for it: Desmond Child' },
      ],
    },
  ],
};

export default puzzle;
