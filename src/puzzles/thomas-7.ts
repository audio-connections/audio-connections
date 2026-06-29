import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Thomas Ptacek',
  themes: [
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
      theme: 'Two Songs, One Track',
      tracks: [
        { id: 1440863114, artist: 'Elton John', title: 'Funeral for a Friend / Love Lies Bleeding', note: 'An instrumental that segues straight into a separate rock song.' },
        { id: 321974250, artist: 'Crosby, Stills, Nash & Young', title: 'Carry On', note: "Folds the earlier Stills song 'Questions' into its second half." },
        { id: 1441165168, artist: 'The Beatles', title: 'A Day in the Life', note: 'Two unfinished fragments — Lennon’s and McCartney’s — spliced into one.' },
        { id: 1467438670, artist: 'Simon & Garfunkel', title: 'Scarborough Fair / Canticle', note: "A traditional ballad with a separate antiwar 'Canticle' woven over it." },
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
