import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  themes: [
    {
      theme: 'Same title as a Taylor Swift song',
      tracks: [
        { id: 1301440487, artist: 'Bananarama', title: 'Cruel Summer' },
        { id: 282658484, artist: 'George Michael', title: 'Father Figure' },
        { id: 1428782513, artist: 'Maroon 5', title: 'This Love' },
        { id: 1758438884, artist: 'Aloe Blacc', title: 'The Man' },
      ],
    },
    {
      theme: 'Artist also has a hit TV theme song',
      tracks: [
        { id: 1439224953, artist: 'They Might Be Giants', title: 'Ana Ng', note: "Boss of Me (Malcolm in the Middle)" },
        { id: 128104360, artist: 'Paula Cole', title: 'Where Have All the Cowboys Gone?', note: "I Don't Want to Wait (Dawson's Creek)" },
        { id: 357814985, artist: 'The Rembrandts', title: 'Just the Way It Is, Baby', note: "I'll Be There for You (Friends)" },
        { id: 911789093, artist: 'Flatt & Scruggs', title: 'Foggy Mountain Breakdown', note: 'The Ballad of Jed Clampett (The Beverly Hillbillies)' },
      ],
    },
    {
      theme: 'Written by Burt Bacharach',
      tracks: [
        { id: 1429179335, artist: 'Carpenters', title: '(They Long to Be) Close to You', note: 'Bacharach / Hal David, 1970' },
        { id: 273426183, artist: 'Christopher Cross', title: "Arthur's Theme (Best That You Can Do)", note: 'Bacharach / Bayer Sager / Cross / Allen — Arthur (1981)' },
        { id: 452353379, artist: 'B.J. Thomas', title: "Raindrops Keep Fallin' On My Head", note: 'Bacharach / Hal David — Butch Cassidy and the Sundance Kid (1969)' },
        { id: 1629189339, artist: 'Naked Eyes', title: 'Always Something There to Remind Me', note: 'Bacharach / Hal David, 1964' },
      ],
    },
    {
      theme: 'Name-checked in "Instant Club Hit" by the Dead Milkmen',
      tracks: [
        { id: 803460027, artist: 'The Smiths', title: 'How Soon Is Now?' },
        { id: 1174246806, artist: 'Depeche Mode', title: 'Personal Jesus' },
        { id: 1313396599, artist: 'The Communards', title: "Don't Leave Me This Way" },
        { id: 300946667, artist: 'Book of Love', title: 'Boy' },
      ],
    },
  ],
};

export default puzzle;
