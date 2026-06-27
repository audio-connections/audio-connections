import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Thomas Ptacek',
  themes: [
    {
      theme: 'Gratüitous Umlaüts',
      tracks: [
        { id: 1764395683, artist: 'Mötley Crüe', title: 'Dr. Feelgood' },
        { id: 185865186, artist: 'Blue Öyster Cult', title: "Burnin' for You" },
        { id: 192927499, artist: 'Motörhead', title: 'Hellraiser' },
        { id: 282973121, artist: 'Hüsker Dü', title: "Don't Want to Know If You Are Lonely" },
      ],
    },
    {
      theme: 'Rap Rock',
      tracks: [
        { id: 254344996, artist: 'Run-DMC & Aerosmith', title: 'Walk This Way' },
        { id: 1440738384, artist: 'Anthrax & Public Enemy', title: 'Bring the Noise' },
        { id: 186088629, artist: 'Jay-Z & Linkin Park', title: 'Numb / Encore' },
        { id: 1468166326, artist: 'Lil Nas X feat. Billy Ray Cyrus', title: 'Old Town Road (Remix)' },
      ],
    },
    {
      theme: 'Terrible Wedding Songs',
      tracks: [
        { id: 1440674160, artist: 'The Police', title: 'Every Breath You Take', note: 'Stalking.' },
        { id: 1443184298, artist: 'U2', title: 'Pride (In the Name of Love)', note: 'MLK.' },
        { id: 1440850621, artist: 'R.E.M.', title: 'The One I Love', note: "Disdain." },
        { id: 121052337, artist: 'Stephen Stills', title: "Love the One You're With", note: 'Cheating.' },
      ],
    },
    {
      theme: 'Unexpectedly Anti-Right-Wing',
      tracks: [
        { id: 1446013598, artist: 'Nena', title: '99 Luftballons' },
        { id: 1716567638, artist: 'Eddy Grant', title: 'Electric Avenue' },
        { id: 847943125, artist: 'Ramones', title: 'Bonzo Goes to Bitburg' },
        { id: 725282420, artist: 'Red Rider', title: 'Lunatic Fringe' },
      ],
    },
  ],
};

export default puzzle;
