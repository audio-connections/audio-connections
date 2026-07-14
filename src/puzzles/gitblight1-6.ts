import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  themes: [
    {
      theme: 'Doubled word in the title',
      tracks: [
        { id: 1767045534, artist: 'Billy Idol', title: 'Mony Mony' },
        { id: 214805381, artist: 'The Archies', title: 'Sugar, Sugar' },
        { id: 121695005, artist: 'The Kingsmen', title: 'Louie Louie' },
        { id: 1440858721, artist: 'Frank Sinatra', title: 'Theme from New York, New York' },
      ],
    },
    {
      theme: 'Handclaps',
      tracks: [
        { id: 324127936, artist: 'Simon & Garfunkel', title: 'Cecilia' },
        { id: 1441133348, artist: 'The Beatles', title: 'I Want to Hold Your Hand' },
        { id: 1496273042, artist: 'Toni Basil', title: 'Hey Mickey' },
        { id: 1440651216, artist: 'Queen', title: 'We Will Rock You' },
      ],
    },
    {
      theme: 'Songs from John Hughes movies',
      tracks: [
        { id: 1675320717, artist: 'Thompson Twins', title: 'If You Were Here', note: 'Sixteen Candles (1984)' },
        { id: 726172620, artist: 'Orchestral Manoeuvres in the Dark', title: 'If You Leave', note: 'Pretty in Pink (1986)' },
        { id: 1444006984, artist: 'Yello', title: 'Oh Yeah', note: "Ferris Bueller's Day Off (1986)" },
        { id: 1440740351, artist: 'Oingo Boingo', title: 'Weird Science', note: 'Weird Science (1985)' },
      ],
    },
    {
      theme: 'Artist also has a hit TV theme song',
      tracks: [
        { id: 128104360, artist: 'Paula Cole', title: 'Where Have All the Cowboys Gone?', note: "I Don't Want to Wait (Dawson's Creek)" },
        { id: 911789093, artist: 'Flatt & Scruggs', title: 'Foggy Mountain Breakdown', note: 'The Ballad of Jed Clampett (The Beverly Hillbillies)' },
        { id: 1439224953, artist: 'They Might Be Giants', title: 'Ana Ng', note: "Boss of Me (Malcolm in the Middle)" },
        { id: 357814985, artist: 'The Rembrandts', title: 'Just the Way It Is, Baby', note: "I'll Be There for You (Friends)" },
      ],
    },
  ],
};

export default puzzle;
