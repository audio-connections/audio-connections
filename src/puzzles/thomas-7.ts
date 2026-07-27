import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Thomas Ptacek',
  themes: [
    {
      theme: 'Visionary',
      tracks: [
        { id: 217273922, artist: 'Johnny Nash', title: 'I Can See Clearly Now' },
        { id: 1550183926, artist: 'The Who', title: 'I Can See for Miles' },
        { id: 959563981, artist: 'Ace of Base', title: 'The Sign' },
        { id: 300981123, artist: 'Wilco', title: 'Kamera' },
      ],
    },
    {
      theme: 'Tracks With Extended Outros',
      tracks: [
        { id: 1440663520, artist: 'Derek & The Dominos', title: 'Layla' },
        { id: 1440834224, artist: 'The Beatles', title: 'Hey Jude' },
        { id: 1440896193, artist: "Guns N' Roses", title: 'November Rain' },
        { id: 1440838661, artist: 'Lynyrd Skynyrd', title: 'Free Bird' },
      ],
    },
    {
      theme: 'Tracks With Extended Openings',
      tracks: [
        { id: 1440851980, artist: 'The Temptations', title: "Papa Was a Rollin' Stone", note: 'The 12-minute album cut, with the long instrumental build before the first verse.' },
        { id: 913902278, artist: 'Boston', title: 'Foreplay / Long Time' },
        { id: 256310684, artist: 'Vanilla Fudge', title: "You Keep Me Hangin' On" },
        { id: 1440830911, artist: 'Heart', title: 'Crazy On You' },
      ],
    },
    {
      theme: 'Played Out at Guitar Center',
      tracks: [
        { id: 580708180, artist: 'Led Zeppelin', title: 'Stairway to Heaven' },
        { id: 1099335223, artist: 'Deep Purple', title: 'Smoke on the Water' },
        { id: 1440783625, artist: 'Nirvana', title: 'Smells Like Teen Spirit' },
        { id: 1377826892, artist: "Guns N' Roses", title: "Sweet Child o' Mine" },
      ],
    },
  ],
};

export default puzzle;
