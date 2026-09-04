import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'David Adrian',
  constraint: 'Directors',
  themes: [
    {
      theme: 'Michael Bay',
      tracks: [
        { id: 258416690, artist: 'Linkin Park', title: "What I've Done", note: 'Transformers' },
        { id: 217271368, artist: 'Aerosmith', title: "I Don't Want to Miss a Thing", note: 'Armageddon' },
        { id: 98414939, artist: 'Faith Hill', title: "There You'll Be", note: 'Pearl Harbor' },
        { id: 1718302126, artist: 'Inner Circle', title: 'Bad Boys', note: 'Bad Boys' },
      ],
    },
    {
      theme: 'James Gunn',
      tracks: [
        { id: 1440657708, artist: 'Redbone', title: 'Come and Get Your Love', note: 'Guardians of the Galaxy' },
        { id: 1440629905, artist: 'Sweet', title: 'Fox On the Run', note: 'Guardians of the Galaxy Vol. 2' },
        { id: 1685072220, artist: 'Florence + the Machine', title: 'Dog Days Are Over', note: 'Guardians of the Galaxy Vol. 3' },
        { id: 189227899, artist: 'Teddybears feat. Iggy Pop', title: 'Punkrocker', note: 'Superman' },
      ],
    },
    {
      theme: 'Zack Snyder',
      tracks: [
        { id: 305688807, artist: 'My Chemical Romance', title: 'Desolation Row', note: 'Watchmen' },
        { id: 1455159630, artist: 'Yoav feat. Emily Browning', title: 'Where Is My Mind?', note: 'Sucker Punch' },
        { id: 1192962310, artist: 'The Doors', title: 'The End', note: 'Army of the Dead' },
        { id: 192678693, artist: 'Leonard Cohen', title: 'Hallelujah', note: "Watchmen; Allison Crowe's cover appears in Zack Snyder's Justice League" },
      ],
    },
    {
      theme: 'The George Lucas Extended Universe (Legends)',
      tracks: [
        { id: 1486454268, artist: 'Bill Haley and His Comets', title: "(We're Gonna) Rock Around the Clock", note: 'American Graffiti' },
        { id: 1442871771, artist: 'The Beach Boys', title: "Surfin' Safari", note: 'American Graffiti' },
        { id: 381035812, artist: 'Del Shannon', title: 'Runaway', note: 'American Graffiti' },
        { id: 1446295827, artist: 'Jefferson Starship', title: 'Light the Sky on Fire', note: 'The Star Wars Holiday Special' },
      ],
    },
  ],
};

export default puzzle;
