import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'World capital cities in the title',
      tracks: [
        { id: 684811768, artist: 'The Clash', title: 'London Calling' },
        { id: 1630208751, artist: 'Ultravox', title: 'Vienna' },
        { id: 1607652668, artist: 'Guster', title: 'Amsterdam' },
        { id: 1434529339, artist: 'Teriyaki Boyz', title: 'Tokyo Drift (Fast & Furious)' },
      ],
    },
    {
      theme: 'Songs that never say their title in the lyrics',
      tracks: [
        { id: 264135997, artist: 'New Order', title: 'Blue Monday' },
        { id: 1440783625, artist: 'Nirvana', title: 'Smells Like Teen Spirit' },
        { id: 1440850320, artist: 'The Who', title: "Baba O'Riley" },
        { id: 1764544820, artist: 'Blur', title: 'Song 2' },
      ],
    },
    {
      theme: 'Songs featured in Quentin Tarantino films',
      tracks: [
        { id: 1440847524, artist: 'Stealers Wheel', title: 'Stuck in the Middle with You', note: 'Reservoir Dogs' },
        { id: 1436757249, artist: 'George Baker Selection', title: 'Little Green Bag', note: 'Reservoir Dogs' },
        { id: 721299102, artist: 'Bobby Womack', title: 'Across 110th Street', note: 'Jackie Brown' },
        { id: 1120149505, artist: 'Urge Overkill', title: "Girl, You'll Be a Woman Soon", note: 'Pulp Fiction' },
      ],
    },
    {
      theme: 'Artists who legally changed their single name or identity',
      tracks: [
        { id: 73273491, artist: 'Cher', title: 'Believe', note: 'Legally changed her full name to simply "Cher"' },
        { id: 1544173942, artist: 'Prince', title: '1999', note: 'Adopted the unpronounceable Love Symbol' },
        { id: 1442846328, artist: 'Kanye West', title: 'Stronger', note: 'Legally changed his name to "Ye"' },
        { id: 991385384, artist: 'Meat Loaf', title: 'Bat Out of Hell', note: 'Legally changed his first name to Michael' },
      ],
    },
  ],
};

export default puzzle;
