import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  constraint: '"There\'s a theme to this puzzle," said Taylor categorically',
  themes: [
    {
      theme: "Taylor Swift's exes",
      tracks: [
        { id: 1615585009, artist: 'Harry Styles', title: 'Daylight', note: '2012–13' },
        { id: 283699764, artist: 'John Mayer', title: 'No Such Thing', note: '2009–10' },
        { id: 1440867865, artist: 'DNCE', title: 'Cake By the Ocean', note: 'Joe Jonas — 2008–09' },
        { id: 1440832196, artist: 'The 1975', title: 'Somebody Else', note: 'Matty Healy — 2023' },
      ],
    },
    {
      theme: "Opened for Taylor Swift on tour",
      tracks: [
        { id: 630283721, artist: 'Hunter Hayes', title: 'I Want Crazy (Encore)', note: 'Speak Now World Tour (2011–12)' },
        { id: 1440843848, artist: 'Shawn Mendes', title: 'Stitches', note: '1989 World Tour (2015)' },
        { id: 1321217032, artist: 'Camila Cabello', title: 'Havana (feat. Young Thug)', note: 'Reputation Stadium Tour (2018)' },
        { id: 1631586891, artist: 'Sabrina Carpenter', title: 'Nonsense', note: 'Eras Tour (2023–24)' },
      ],
    },
    {
      theme: "Featured vocals on a Taylor Swift track",
      tracks: [
        { id: 275965256, artist: 'Panic! At the Disco', title: 'Nine In the Afternoon', note: 'Brendon Urie on ME! (2019)' },
        { id: 1440882165, artist: 'Kendrick Lamar', title: 'HUMBLE.', note: 'Bad Blood remix (2015)' },
        { id: 1440812085, artist: 'Lana Del Rey', title: 'Summertime Sadness', note: 'Snow on the Beach — Midnights (2022)' },
        { id: 1477880561, artist: 'Post Malone', title: 'Circles', note: 'Fortnight — TTPD (2024)' },
      ],
    },
    {
      theme: "Covered live by Taylor Swift",
      tracks: [
        { id: 1456623340, artist: 'Earth, Wind & Fire', title: 'September', note: 'Spotify Singles (2018)' },
        { id: 724363409, artist: 'Kim Carnes', title: 'Bette Davis Eyes', note: 'Speak Now World Tour Live album (2011)' },
        { id: 1088545747, artist: 'Phil Collins', title: "Can't Stop Loving You", note: 'BBC Radio 1 Live Lounge (2019)' },
        { id: 1441154437, artist: 'Rihanna', title: 'Umbrella (feat. Jay-Z)', note: 'Fearless Tour (2009–10)' },
      ],
    },
  ],
};

export default puzzle;
