import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: '"Radio" in the title',
      tracks: [
        { id: 1440651297, artist: 'Queen', title: 'Radio Ga Ga' },
        { id: 1444090128, artist: 'The Buggles', title: 'Video Killed the Radio Star' },
        { id: 1585423388, artist: 'Elvis Costello & The Attractions', title: 'Radio, Radio' },
        { id: 1358795530, artist: 'Donna Summer', title: 'On the Radio' },
      ],
    },
    {
      theme: 'Prominent cowbell in the rhythm',
      tracks: [
        { id: 217556132, artist: 'Blue Öyster Cult', title: '(Don\'t Fear) The Reaper' },
        { id: 192492200, artist: 'Mountain', title: 'Mississippi Queen' },
        { id: 1202371162, artist: 'War', title: 'Low Rider' },
        { id: 724670493, artist: 'Grand Funk Railroad', title: 'We\'re An American Band' },
      ],
    },
    {
      theme: 'Music videos directed by Spike Jonze',
      tracks: [
        { id: 724971921, artist: 'Beastie Boys', title: 'Sabotage' },
        { id: 714928246, artist: 'Fatboy Slim', title: 'Praise You' },
        { id: 300205693, artist: 'Björk', title: 'It\'s Oh So Quiet' },
        { id: 696885792, artist: 'Daft Punk', title: 'Da Funk' },
      ],
    },
    {
      theme: 'One-hit wonders who wrote massive hits for other artists',
      tracks: [
        { id: 1443912092, artist: 'Semisonic', title: 'Closing Time', note: 'Dan Wilson co-wrote Adele\'s "Someone Like You"' },
        { id: 1440762717, artist: 'New Radicals', title: 'You Get What You Give', note: 'Gregg Alexander wrote Santana & Michelle Branch\'s "The Game of Love"' },
        { id: 1440902348, artist: '4 Non Blondes', title: 'What\'s Up?', note: 'Linda Perry wrote Christina Aguilera\'s "Beautiful" and Pink\'s "Get the Party Started"' },
        { id: 1443354981, artist: 'Cathy Dennis', title: 'Touch Me (All Night Long)', note: 'Cathy Dennis wrote Britney Spears\' "Toxic" and Katy Perry\'s "I Kissed a Girl"' },
      ],
    },
  ],
};

export default puzzle;
