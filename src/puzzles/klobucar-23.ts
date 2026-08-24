import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'US State names in the title',
      tracks: [
        { id: 1881665710, artist: 'Ray Charles', title: 'Georgia On My Mind' },
        { id: 217636260, artist: 'Elvis Presley', title: 'Kentucky Rain' },
        { id: 1413948381, artist: 'Lynyrd Skynyrd', title: 'Sweet Home Alabama' },
        { id: 1440796325, artist: 'The Mamas & The Papas', title: "California Dreamin'" },
      ],
    },
    {
      theme: 'Famous 90s hits built on 1970s soul and funk samples',
      tracks: [
        { id: 1605189373, artist: 'Coolio', title: "Gangsta's Paradise (feat. L.V.)", note: 'Samples Stevie Wonder - Pastime Paradise' },
        { id: 906586721, artist: 'The Notorious B.I.G.', title: 'Mo Money Mo Problems (feat. Mase & Puff Daddy)', note: 'Samples Diana Ross - I\'m Coming Out' },
        { id: 1478457166, artist: 'Warren G', title: 'Regulate (feat. Nate Dogg)', note: 'Samples Michael McDonald - I Keep Forgettin\'' },
        { id: 724647729, artist: 'MC Hammer', title: "U Can't Touch This", note: 'Samples Rick James - Super Freak' },
      ],
    },
    {
      theme: 'Featured on the original Shrek soundtracks',
      tracks: [
        { id: 1440915693, artist: 'Smash Mouth', title: 'All Star', note: 'Shrek' },
        { id: 1444195172, artist: 'Counting Crows', title: 'Accidentally In Love', note: 'Shrek 2' },
        { id: 1872452691, artist: 'Joan Jett & The Blackhearts', title: 'Bad Reputation', note: 'Shrek' },
        { id: 1440894566, artist: 'Frou Frou', title: 'Holding Out For a Hero', note: 'Shrek 2' },
      ],
    },
    {
      theme: 'Rock legends who were born outside their fame country',
      tracks: [
        { id: 976832495, artist: 'Van Halen', title: 'Jump', note: 'Eddie & Alex Van Halen born in Amsterdam, Netherlands' },
        { id: 124921347, artist: 'Talking Heads', title: 'Once In a Lifetime', note: 'David Byrne born in Dumbarton, Scotland' },
        { id: 1440854356, artist: 'Kiss', title: 'Rock and Roll All Nite', note: 'Gene Simmons born in Tirat Carmel, Israel' },
        { id: 574044008, artist: 'AC/DC', title: 'Highway to Hell', note: 'Bon Scott, Malcolm & Angus Young born in Scotland' },
      ],
    },
  ],
};

export default puzzle;
