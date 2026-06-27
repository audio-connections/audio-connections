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
        { id: 1440674160, artist: 'The Police', title: 'Every Breath You Take', note: 'A song about jealous surveillance, not devotion.' },
        { id: 1443184298, artist: 'U2', title: 'Pride (In the Name of Love)', note: 'About the assassination of Dr. King.' },
        { id: 1440850621, artist: 'R.E.M.', title: 'The One I Love', note: "“A simple prop to occupy my time” — it's a kiss-off, not a love song." },
        { id: 121052337, artist: 'Stephen Stills', title: "Love the One You're With", note: 'An anthem for infidelity.' },
      ],
    },
    {
      theme: 'Sleeper Anti-Right-Wing Songs',
      tracks: [
        { id: 1446013598, artist: 'Nena', title: '99 Luftballons', note: 'A Cold War protest about nuclear-war paranoia.' },
        { id: 1716567638, artist: 'Eddy Grant', title: 'Electric Avenue', note: 'Written about the 1981 Brixton riots and racism.' },
        { id: 847943125, artist: 'Ramones', title: 'Bonzo Goes to Bitburg', note: "Joey Ramone's rebuke of Reagan's visit to a cemetery holding SS graves." },
        { id: 725282420, artist: 'Red Rider', title: 'Lunatic Fringe', note: 'Written in response to resurgent antisemitism.' },
      ],
    },
  ],
};

export default puzzle;
