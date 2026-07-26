import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  themes: [
    {
      theme: 'Named for a real road',
      tracks: [
        { id: 1441163777, artist: 'The Beatles', title: 'Penny Lane', note: 'A street in Liverpool' },
        { id: 342373184, artist: 'America', title: 'Ventura Highway', note: 'US 101 up the California coast' },
        { id: 1442433683, artist: 'Bee Gees', title: 'Nights on Broadway', note: 'Manhattan, by way of the theater district' },
        { id: 157482130, artist: 'G. Love & Special Sauce', title: 'I-76', note: "The interstate through G. Love's Philadelphia" },
      ],
    },
    {
      theme: 'Prominent flute',
      tracks: [
        { id: 699621263, artist: 'Jethro Tull', title: 'Thick as a Brick' },
        { id: 1794391882, artist: 'The Marshall Tucker Band', title: "Can't You See" },
        { id: 724943192, artist: 'Beastie Boys', title: 'Sure Shot', note: 'The loop is a Jeremy Steig flute sample' },
        { id: 1253125872, artist: 'Future', title: 'Mask Off', note: 'Flute lifted from Tommy Butler’s "Prison Song"' },
      ],
    },
    {
      theme: 'Hit covers of reggae songs',
      tracks: [
        { id: 724403372, artist: 'Blondie', title: 'The Tide Is High', note: 'orig. The Paragons, 1967' },
        { id: 217272849, artist: 'Johnny Nash', title: 'Stir It Up', note: 'orig. Bob Marley & The Wailers, 1967' },
        { id: 1440768600, artist: 'Eric Clapton', title: 'I Shot the Sheriff', note: 'orig. Bob Marley & The Wailers, 1973' },
        { id: 1629177626, artist: 'The Specials', title: 'A Message to You Rudy', note: 'orig. Dandy Livingstone, 1967' },
      ],
    },
    {
      theme: 'Artist nominated for an acting Oscar',
      tracks: [
        { id: 1443424300, artist: 'Frank Sinatra', title: 'Summer Wind', note: 'Won — From Here to Eternity (1953)' },
        { id: 1440905221, artist: 'Cher', title: 'If I Could Turn Back Time', note: 'Won — Moonstruck (1987)' },
        { id: 1443861177, artist: 'Marky Mark and the Funky Bunch', title: 'Good Vibrations', note: 'Nominated — The Departed (2006)' },
        { id: 1440817530, artist: 'Mary J. Blige', title: 'Family Affair', note: 'Nominated — Mudbound (2017)' },
      ],
    },
  ],
};

export default puzzle;
