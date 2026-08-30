import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  constraint: 'NO singing! This station is 100% instrumentals',
  themes: [
    {
      theme: 'Covers of rock songs',
      tracks: [
        { id: 1541245799, artist: "Booker T. & The M.G.'s", title: 'Something', note: 'off McLemore Avenue, their whole-album Abbey Road cover' },
        { id: 393940737, artist: 'Alice Donut', title: 'War Pigs', note: 'Black Sabbath, on trombone' },
        { id: 1646532607, artist: 'Apocalyptica', title: 'Enter Sandman', note: 'Metallica, on four cellos' },
        { id: 83385127, artist: 'Kronos Quartet', title: 'Purple Haze', note: 'Hendrix, on strings' },
      ],
    },
    {
      theme: 'Artist name is a nobility title',
      tracks: [
        { id: 1440754725, artist: 'Queen', title: 'Procession' },
        { id: 1434900735, artist: 'Count Basie', title: "One O'Clock Jump" },
        { id: 199336114, artist: 'Duke Ellington', title: "Take the 'A' Train" },
        { id: 1442400732, artist: 'Earl Sweatshirt', title: 'Riot!' },
      ],
    },
    {
      theme: 'The smooth jazz block',
      tracks: [
        { id: 1601435207, artist: 'Grover Washington, Jr.', title: 'Winelight' }, // 3:29 edit; album cut is 7:32
        { id: 1605184223, artist: 'Spyro Gyra', title: 'Morning Dance' },
        { id: 299723620, artist: 'Kenny G', title: 'Songbird' },
        { id: 1434887050, artist: 'Chuck Mangione', title: 'Feels So Good' }, // 3:32 single edit; album cut is 9:42
      ],
    },
    {
      theme: 'Billboard Hot 100 Number Ones',
      tracks: [
        { id: 1016990480, artist: 'Dave "Baby" Cortez', title: 'The Happy Organ', note: '1959 - the first instrumental #1' },
        { id: 1435988070, artist: 'The Tornados', title: 'Telstar', note: '1962 - the first US #1 by a British group' },
        { id: 191435788, artist: 'Percy Faith and His Orchestra', title: 'Theme from A Summer Place', note: '1960 - nine weeks at #1' },
        { id: 1450958727, artist: 'Vangelis', title: 'Chariots of Fire', note: '1982' },
      ],
    },
  ],
};

export default puzzle;
