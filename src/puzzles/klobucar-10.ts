import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  constraint: '🎓 Welcome to your 20-year reunion, Class of 2006 🥂',
  themes: [
    {
      theme: 'Topped the Hot 100 in 2006',
      tracks: [
        { id: 400946435, artist: 'Justin Timberlake', title: 'SexyBack (feat. Timbaland)', note: '#1 for seven weeks' },
        { id: 296790943, artist: 'Beyoncé', title: 'Irreplaceable', note: '#1 for ten weeks' },
        { id: 1443906056, artist: 'Chamillionaire', title: "Ridin' (feat. Krayzie Bone)", note: '' },
        { id: 1444005911, artist: 'Ludacris', title: 'Money Maker (feat. Pharrell Williams)', note: '' },
      ],
    },
    {
      theme: 'Made for a 2006 movie',
      tracks: [
        { id: 1440667482, artist: 'Rascal Flatts', title: 'Life Is a Highway', note: 'Cars — Tom Cochrane cover recorded for the film' },
        { id: 1440747342, artist: 'Troy & Gabriella', title: 'Breaking Free', note: 'High School Musical' },
        { id: 1469577741, artist: 'Jack Johnson', title: 'Upside Down', note: 'Curious George' },
        { id: 206338443, artist: 'Sarah McLachlan', title: 'Ordinary Miracle', note: "Charlotte's Web" },
      ],
    },
    {
      theme: 'MySpace scene anthems',
      tracks: [
        { id: 209388682, artist: 'My Chemical Romance', title: 'Welcome to the Black Parade', note: '' },
        { id: 1440776758, artist: 'AFI', title: 'Miss Murder', note: '' },
        { id: 1440839332, artist: 'Thirty Seconds to Mars', title: 'The Kill (Bury Me)', note: '' },
        { id: 1585055686, artist: 'Taking Back Sunday', title: 'MakeDamnSure', note: '' },
      ],
    },
    {
      theme: 'Debut singles',
      tracks: [
        { id: 189225213, artist: 'Lupe Fiasco', title: 'Kick, Push', note: "Lupe Fiasco's debut single" },
        { id: 726141811, artist: 'Lily Allen', title: 'Smile', note: "Lily Allen's debut single" },
        { id: 1552875311, artist: 'The Raconteurs', title: 'Steady, As She Goes', note: "The Raconteurs' debut single" },
        { id: 171980163, artist: 'Cassie', title: 'Me & U', note: "Cassie's debut single" },
      ],
    },
  ],
};

export default puzzle;
