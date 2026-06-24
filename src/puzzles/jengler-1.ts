import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Justin Engler',
  themes: [
    {
      theme: 'Iconic Percussion',
      tracks: [
          { id: 1076779225, artist: 'Phil Collins', title: "In the Air Tonight", note: 'Most iconic "Gated Reverb" example in the break' },
          { id: 580708184, artist: 'Led Zeppelin', title: "When the Levee Breaks", note: 'Recorded in a three story foyer to catch the reverb' },
          { id: 541340715, artist: 'The Winstons', title: "Amen, Brother'", note: 'Drum break is the origin of the Drum and Bass/Jungle genre'  },
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
      theme: 'Trumpet is the only brass instrument',
      tracks: [
        { id: 1632569208, artist: 'Cake', title: "The Distance" },
        { id: 1321155903 , artist: 'Pet Shop Boys', title: "West End Girls" },
        { id: 992222005, artist: 'Muse', title: "Knights of Cydonia" },
        { id: 304756750, artist: 'Groove Armada', title: "At the River" },
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
