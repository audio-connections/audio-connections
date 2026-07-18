import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jessica Dreher',
  themes: [
    {
      theme: 'Green Days',
      tracks: [
        { id: 1409113850, artist: 'Kermit The Frog', title: "Bein' Green" },
        { id: 1429663163, artist: 'Lorde', title: 'Green Light' },
        { id: 663115245, artist: 'Blake Shelton', title: 'Green' },
        { id: 1685920227, artist: 'Jason Aldean', title: 'Big Green Tractor' },
      ],
    },
    {
      theme: 'Four for Fighting (Songs About War)',
      tracks: [
        { id: 190758945, artist: 'Bob Dylan', title: 'Masters of War' },
        { id: 1440735264, artist: 'The Cranberries', title: 'Zombie', note: 'Written about the IRA bombing in Warrington.' },
        { id: 715555588, artist: 'The Decemberists', title: 'This Is Why We Fight' },
        { id: 1440950725, artist: 'Creedence Clearwater Revival', title: 'Fortunate Son' },
      ],
    },
    {
      theme: 'The Presidents of the United States of America',
      tracks: [
        { id: 206559394, artist: 'Gretchen Wilson', title: 'Redneck Woman', note: 'President Woodrow Wilson.' },
        { id: 1443279742, artist: 'Bush', title: 'Swallowed', note: 'Presidents George H. W. and George W. Bush.' },
        { id: 1504111288, artist: 'Bonnie Tyler', title: 'Total Eclipse of the Heart', note: 'President John Tyler.' },
        { id: 1440656342, artist: 'Bryan Adams', title: 'Cuts Like a Knife', note: 'Presidents John and John Quincy Adams.' },
      ],
    },
    {
      theme: 'The Decemberists (Artists Born in December)',
      tracks: [
        { id: 251948354, artist: 'Britney Spears', title: 'Toxic', note: 'Born December 2.' },
        { id: 1485070290, artist: 'Tom Waits', title: "God's Away on Business", note: 'Born December 7.' },
        { id: 1442998478, artist: 'Frank Zappa', title: 'Muffin Man', note: 'Born December 21.' },
        { id: 1629185305, artist: 'Sinéad O’Connor', title: "The Emperor's New Clothes", note: 'Born December 8.' },
      ],
    },
  ],
};

export default puzzle;
