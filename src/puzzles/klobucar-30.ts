import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Gemstones or precious metals in the song title',
      tracks: [
        { id: 150058668, artist: 'America', title: 'Sister Golden Hair' },
        { id: 1687588016, artist: 'Steely Dan', title: 'Pearl of the Quarter' },
        { id: 1440858499, artist: 'Kacey Musgraves', title: 'Silver Lining' },
        { id: 1443919262, artist: 'Kaiser Chiefs', title: 'Ruby' },
      ],
    },
    {
      theme: 'Theme songs from James Bond films',
      tracks: [
        { id: 1444202576, artist: 'Gladys Knight', title: 'Licence to Kill', note: 'Theme from Licence to Kill (1989)' },
        { id: 1442846669, artist: 'Garbage', title: 'The World Is Not Enough', note: 'Theme from The World Is Not Enough (1999)' },
        { id: 1799831677, artist: 'Rita Coolidge', title: 'All Time High', note: 'Theme from Octopussy (1983)' },
        { id: 1498647654, artist: 'Billie Eilish', title: 'No Time to Die', note: 'Theme from No Time to Die (2021)' },
      ],
    },
    {
      theme: "Songs featuring a children's choir",
      tracks: [
        { id: 1459135021, artist: 'Martika', title: 'Toy Soldiers', note: 'Features a chorus of children chanting the hook' },
        { id: 300206618, artist: 'P.O.D.', title: 'Youth of the Nation', note: 'Features a youth choir singing the chorus' },
        { id: 850571369, artist: 'Gorillaz', title: 'Dirty Harry', note: 'Features the San Fernandez Youth Chorus' },
        { id: 534798882, artist: 'Passion Pit', title: 'Take a Walk', note: 'Features the PS22 Chorus in backing vocals' },
      ],
    },
    {
      theme: 'Bands named after birds',
      tracks: [
        { id: 635770204, artist: 'Eagles', title: 'Life in the Fast Lane', note: 'Eagle' },
        { id: 1195540939, artist: 'The Flamingos', title: 'I Only Have Eyes for You', note: 'Flamingo' },
        { id: 1874711522, artist: 'A Flock of Seagulls', title: 'I Ran (So Far Away)', note: 'Seagull' },
        { id: 1440810837, artist: 'The Black Crowes', title: 'Hard to Handle', note: 'Crow' },
      ],
    },
  ],
};

export default puzzle;
