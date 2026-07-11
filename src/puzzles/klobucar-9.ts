import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  constraint: '🛋️ Grab the remote — 16 songs, 16 title sequences 📺',
  themes: [
    {
      theme: 'Shows on Fox',
      tracks: [
        { id: 260227740, artist: 'Danny Elfman', title: 'The Simpsons Theme (Orchestral Version)', note: 'The Simpsons' },
        { id: 1609311990, artist: 'They Might Be Giants', title: 'Boss of Me', note: 'Malcolm in the Middle' },
        { id: 1688631978, artist: 'Phantom Planet', title: 'California', note: 'The O.C.' },
        { id: 1440874843, artist: 'Frank Sinatra', title: 'Love and Marriage', note: 'Married... with Children' },
      ],
    },
    {
      theme: 'Shows on Adult Swim',
      tracks: [
        { id: 307784619, artist: 'JG Thirlwell', title: 'No Vacancy', note: 'The Venture Bros.' },
        { id: 895525052, artist: 'Asheru', title: 'The Boondocks Main Title', note: '' },
        { id: 1679481360, artist: 'Metalocalypse: Dethklok', title: 'Deththeme', note: 'Metalocalypse' },
        { id: 916550651, artist: 'Les Claypool', title: 'Robot Chicken', note: 'Robot Chicken' },
      ],
    },
    {
      theme: 'Shows on HBO',
      tracks: [
        { id: 270909515, artist: 'The Blind Boys of Alabama', title: 'Way Down In the Hole', note: 'The Wire' },
        { id: 1440841258, artist: 'The Beach Boys', title: 'God Only Knows', note: 'Big Love' },
        { id: 159548167, artist: 'Jace Everett', title: 'Bad Things', note: 'True Blood' },
        { id: 1657762046, artist: 'Luciano Michelini', title: 'Frolic', note: 'Curb Your Enthusiasm' },
      ],
    },
    {
      theme: 'Shows on FX & FXX',
      tracks: [
        { id: 6768778081, artist: 'Heinz Kiessling', title: 'Temptation Sensation (Main Title)', note: "It's Always Sunny in Philadelphia" },
        { id: 1217901391, artist: 'Norma Tanega', title: "You're Dead", note: 'What We Do in the Shadows' },
        { id: 796767466, artist: 'Slothrust', title: '7:30 Am', note: "You're the Worst" },
        { id: 911094689, artist: 'Photay', title: 'Reconstruct (feat. Seafloor)', note: 'Man Seeking Woman' },
      ],
    },
  ],
};

export default puzzle;
