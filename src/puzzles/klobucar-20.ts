import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Food in the title',
      tracks: [
        { id: 198468208, artist: 'Warrant', title: 'Cherry Pie' },
        { id: 1440865978, artist: 'Weezer', title: 'Pork and Beans' },
        { id: 1440867865, artist: 'DNCE', title: 'Cake by the Ocean' },
        { id: 1440857795, artist: 'Jack Johnson', title: 'Banana Pancakes' },
      ],
    },
    {
      theme: 'Parenthetical phrases for 400, Trebek',
      tracks: [
        { id: 1443846163, artist: 'Rupert Holmes', title: 'Escape (The Pina Colada Song)' },
        { id: 217556132, artist: 'Blue Öyster Cult', title: "(Don't Fear) The Reaper" },
        { id: 1468029636, artist: 'The Beatles', title: 'Norwegian Wood (This Bird Has Flown)' },
        { id: 1440743544, artist: 'The Rolling Stones', title: "(I Can't Get No) Satisfaction" },
      ],
    },
    {
      theme: 'Card games and gambling terms in the title',
      tracks: [
        { id: 1577631231, artist: 'Lady Gaga', title: 'Poker Face' },
        { id: 1439443121, artist: 'Motörhead', title: 'Ace of Spades' },
        { id: 1109715467, artist: 'Radiohead', title: 'House of Cards' },
        { id: 1440775735, artist: 'Rihanna', title: 'Russian Roulette' },
      ],
    },
    {
      theme: 'Rockstars with PhD degrees in STEM',
      tracks: [
        { id: 1485042250, artist: 'Bad Religion', title: 'Atomic Garden', note: 'Greg Graffin earned a PhD in Zoology from Cornell University' },
        { id: 1485034811, artist: 'The Offspring', title: 'Self Esteem', note: 'Dexter Holland earned a PhD in Molecular Biology from USC' },
        { id: 1614602775, artist: 'Descendents', title: 'Hope', note: 'Milo Aukerman earned a PhD in Biochemistry from UC San Diego' },
        { id: 1440770302, artist: 'Queen', title: 'Fat Bottomed Girls', note: 'Brian May earned a PhD in Astrophysics from Imperial College London' },
      ],
    },
  ],
};

export default puzzle;
