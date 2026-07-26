import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  themes: [
    {
      theme: 'The title is the only lyric',
      tracks: [
        { id: 110409299, artist: 'The Champs', title: 'Tequila', note: 'One word, spoken three times' },
        { id: 1354226233, artist: 'The Surfaris', title: 'Wipe Out', note: 'A cackle, the title, then two minutes of drums' },
        { id: 298111077, artist: 'They Might Be Giants', title: 'Minimum Wage', note: 'The title, a whipcrack, and 44 more seconds of instrumental' },
        { id: 696886431, artist: 'Daft Punk', title: 'Around the World', note: 'Seven minutes, no other words' },
      ],
    },
    {
      theme: 'Clothing in the title',
      tracks: [
        { id: 217633914, artist: 'Elvis Presley', title: 'Blue Suede Shoes' },
        { id: 1450974117, artist: 'Brian Hyland', title: 'Itsy Bitsy Teenie Weenie Yellow Polka Dot Bikini' },
        { id: 181630818, artist: 'CAKE', title: 'Short Skirt/Long Jacket' },
        { id: 1524801580, artist: 'Taylor Swift', title: 'cardigan' },
      ],
    },
    {
      theme: "80s/90s Supergroups",
      tracks: [
        { id: 1421430452, artist: 'Asia', title: 'Heat of the Moment', note: 'Yes + King Crimson + ELP + The Buggles' },
        { id: 191034541, artist: 'Bad English', title: 'When I See You Smile', note: 'Journey + The Babys' },
        { id: 321975428, artist: 'Damn Yankees', title: 'High Enough', note: 'Styx + Night Ranger + Ted Nugent' },
        { id: 332670339, artist: 'The Firm', title: 'Radioactive', note: 'Led Zeppelin + Bad Company' },
      ],
    },
    {
      // Each season of The Wire used a different cover of Tom Waits' "Way Down in the Hole"
      // Category shows each artist's own non-cover hit; the trivia is the Wire cover.
      theme: 'Covered "Way Down in the Hole" for a Wire season',
      tracks: [
        { id: 1653693701, artist: 'The Blind Boys of Alabama', title: 'Run On For A Long Time', note: 'S1' },
        { id: 1695048155, artist: 'Tom Waits', title: 'Downtown Train', note: 'S2 — original artist' },
        { id: 322037300, artist: 'The Neville Brothers', title: 'Tell It Like It Is', note: 'S3' },
        { id: 1440832545, artist: 'Steve Earle', title: 'Copperhead Road', note: 'S5' },
      ],
    },
  ],
};

export default puzzle;
