import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  themes: [
    {
      theme: 'Band name contains a color',
      tracks: [
        { id: 1099334871, artist: 'Deep Purple', title: 'Highway Star', note: 'purple' },
        { id: 294361564, artist: 'Simply Red', title: 'Holding Back the Years', note: 'red' },
        { id: 399891668, artist: 'P!nk', title: 'Get the Party Started', note: 'pink' },
        { id: 1160082180, artist: 'Green Day', title: 'Basket Case', note: 'green' },
      ],
    },
    {
      theme: 'Whistling',
      tracks: [
        { id: 986713201, artist: 'Peter Gabriel', title: 'Games Without Frontiers' },
        { id: 1377827086, artist: "Guns N' Roses", title: 'Patience' },
        { id: 1442990320, artist: 'Peter Bjorn and John', title: 'Young Folks' },
        { id: 1438813154, artist: 'Scorpions', title: 'Wind of Change' },
      ],
    },
    {
      theme: 'Same title as a Taylor Swift song',
      tracks: [
        { id: 1301440487, artist: 'Bananarama', title: 'Cruel Summer' },
        { id: 282658484, artist: 'George Michael', title: 'Father Figure' },
        { id: 1615585009, artist: 'Harry Styles', title: 'Daylight' },
        { id: 1758438884, artist: 'Aloe Blacc', title: 'The Man' },
      ],
    },
    {
      theme: 'Written by Burt Bacharach',
      tracks: [
        { id: 1429179335, artist: 'Carpenters', title: '(They Long to Be) Close to You', note: 'Bacharach / Hal David, 1970' },
        { id: 273426183, artist: 'Christopher Cross', title: "Arthur's Theme (Best That You Can Do)", note: 'Bacharach / Bayer Sager / Cross / Allen — Arthur (1981)' },
        { id: 452353379, artist: 'B.J. Thomas', title: "Raindrops Keep Fallin' On My Head", note: 'Bacharach / Hal David — Butch Cassidy and the Sundance Kid (1969)' },
        { id: 1629189339, artist: 'Naked Eyes', title: 'Always Something There to Remind Me', note: 'Bacharach / Hal David, 1964' },
      ],
    },
  ],
};

export default puzzle;
