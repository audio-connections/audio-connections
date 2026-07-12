import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Color in the artist name',
      tracks: [
        { id: 1431053629, artist: 'Barry White', title: "Can't Get Enough of Your Love, Babe", note: '' },
        { id: 294361564, artist: 'Simply Red', title: 'Holding Back the Years', note: '' },
        { id: 1160082180, artist: 'Green Day', title: 'Basket Case', note: '' },
        { id: 1440769310, artist: 'Black Eyed Peas', title: 'I Gotta Feeling', note: '' },
      ],
    },
    {
      theme: 'Moon in the title',
      tracks: [
        { id: 208819580, artist: 'King Harvest', title: 'Dancing in the Moonlight', note: '' },
        { id: 192826926, artist: 'Ozzy Osbourne', title: 'Bark at the Moon', note: '' },
        { id: 1440950057, artist: 'R.E.M.', title: 'Man on the Moon', note: '' },
        { id: 576655100, artist: 'Bruno Mars', title: 'Talking to the Moon', note: '' },
      ],
    },
    {
      theme: 'Charity singles',
      tracks: [
        { id: 41737859, artist: 'U.S.A. for Africa', title: 'We Are the World', note: 'African famine relief' },
        { id: 1609249447, artist: 'Band Aid', title: "Do They Know It's Christmas?", note: 'Ethiopian famine relief' },
        { id: 1666653800, artist: 'George Harrison', title: 'Bangla Desh', note: 'Bangladesh refugee relief' },
        { id: 1440916882, artist: 'Elton John', title: 'Candle in the Wind 1997', note: 'Diana Memorial Fund' },
      ],
    },
    {
      theme: 'Knighted artists',
      tracks: [
        { id: 1443151733, artist: 'Paul McCartney', title: "Maybe I'm Amazed", note: 'Knighted 1997' },
        { id: 1469581280, artist: 'Rod Stewart', title: 'Maggie May', note: 'Knighted 2016' },
        { id: 1443118275, artist: 'Tom Jones', title: "She's a Lady", note: 'Knighted 2006' },
        { id: 697669247, artist: 'Cliff Richard', title: 'Devil Woman', note: 'Knighted 1995 — the first rock star knighted' },
      ],
    },
  ],
};

export default puzzle;
