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
      theme: 'Bob Dylan Covers',
      tracks: [
        { id: 79029905, artist: 'Peter, Paul & Mary', title: "Blowin' In the Wind" },
        { id: 357653191, artist: 'Jimi Hendrix', title: 'All Along the Watchtower' },
        { id: 1444058834, artist: 'William Shatner', title: 'Mr. Tambourine Man' },
        { id: 1545382976, artist: 'Adele', title: 'Make You Feel My Love' },
      ],
    },
  ],
};

export default puzzle;
