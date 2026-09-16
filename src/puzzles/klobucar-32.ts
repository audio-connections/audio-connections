import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Musical genres in the song title',
      tracks: [
        { id: 1423346443, artist: 'Chuck Berry', title: 'Rock and Roll Music' },
        { id: 1440925912, artist: 'Parliament', title: 'Give Up the Funk (Tear the Roof Off the Sucker)' },
        { id: 1440858997, artist: 'Bob Marley & The Wailers', title: 'Roots, Rock, Reggae' },
        { id: 1499608062, artist: 'Arthur Conley', title: 'Sweet Soul Music' },
      ],
    },
    {
      theme: 'Songs featuring a harmonized twin-guitar lead',
      tracks: [
        { id: 1425261763, artist: 'Scorpions', title: 'Rock You Like a Hurricane' },
        { id: 1440902940, artist: 'Def Leppard', title: 'Photograph' },
        { id: 65621021, artist: 'Avenged Sevenfold', title: 'Bat Country' },
        { id: 190654418, artist: 'Molly Hatchet', title: "Flirtin' with Disaster" },
      ],
    },
    {
      theme: 'Official songs or anthems of the Olympic Games',
      tracks: [
        { id: 271792484, artist: 'Gloria Estefan', title: 'Reach', note: 'Official theme song of the 1996 Summer Olympics in Atlanta' },
        { id: 1440651890, artist: 'Freddie Mercury & Montserrat Caballé', title: 'Barcelona', note: 'Featured theme song of the 1992 Summer Olympics in Barcelona' },
        { id: 190618991, artist: 'Céline Dion', title: 'The Power of the Dream', note: 'Commissioned and performed for the 1996 Summer Olympics opening ceremony in Atlanta' },
        { id: 21393713, artist: 'Björk', title: 'Oceania', note: 'Commissioned and performed for the 2004 Summer Olympics opening ceremony in Athens' },
      ],
    },
    {
      theme: 'Bands named after mythical or folkloric creatures',
      tracks: [
        { id: 1771710017, artist: 'Phoenix', title: 'Lisztomania', note: 'Phoenix, the mythical bird reborn from ashes' },
        { id: 1679612971, artist: 'DragonForce', title: 'Through the Fire and Flames', note: 'Dragon, the legendary fire-breathing beast' },
        { id: 1440905969, artist: 'White Zombie', title: "Thunder Kiss '65", note: 'Zombie, the reanimated folkloric creature' },
        { id: 385900860, artist: 'Goblin', title: 'Suspiria', note: 'Goblin, the grotesque folkloric creature' },
      ],
    },
  ],
};

export default puzzle;
