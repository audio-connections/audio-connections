import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Justin Engler',
  themes: [
    {
      theme: 'A Single Trumpet',
      tracks: [
        { id: 1632569208, artist: 'Cake', title: "The Distance" },
        { id: 1321155903 , artist: 'Tears for Fears', title: "West End Girls" },
        { id: 840381890, artist: 'Jason Derulo', title: "Talk Dirty" },
        { id: 304756750, artist: 'Groove Armada', title: "At the River" },
      ],
    },
    {
      theme: 'Iconic Percussion',
      tracks: [
          { id: 1076779225, artist: 'Phil Collins', title: "In the Air Tonight", note: 'Most iconic "Gated Reverb" example' },
          { id: 580708184, artist: 'Led Zepplin', title: "When the Levee Breaks", note: 'Recorded in a three story foyer to catch the reverb' },
          { id: 541340715, artist: 'The Winstons', title: "Amen Brother'", note: 'Drum break is the origin of the Jungle/Drum and Bass genre'  },
          { id: 1440651216, artist: "Queen", title: "We Will Rock You" },
      ],
    },
    {
      theme: 'Piano-forward',
      tracks: [
          { id: 1122776156 , artist: 'Coldplay', title: "Clocks" },
          { id: 3654442, artist: 'Tori Amos', title: "Cornflake Girl" },
          { id: 1440883284, artist: 'The Police', title: "Every Little Thing She Does is Magic" },
          { id: 1148642452, artist: 'Phil Collins', title: "Against All Odds" },
      ],
    },
    {
      theme: 'Weird Instruments',
      tracks: [
          { id: 319402506, artist: 'Van Halen', title: "Pound Cake", note:"Drill mimics an electric guitar" },
          { id: 1827235433, artist: 'The Stranglers', title: "Golden Brown", note:"Harpsichord" },
          { id: 1676421247, artist: 'David Bowie', title: "Space Oddity", note: "Stylophone and Mellotron"},
          { id: 1440811873, artist: 'Soundgarden', title: "Spoonman", note:"Spoons, Pots and Pans" },
      ],
    },
  ],
};

export default puzzle;
