import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Rob Chahin',
  themes: [
    {
      theme: 'Actor-name titles',
      tracks: [
        { id: 1440763492, artist: 'MIKA', title: 'Grace Kelly' },
        { id: 1299774708, artist: 'Bananarama', title: "Robert De Niro's Waiting" },
        { id: 1786856061, artist: 'Duck Sauce', title: 'Barbra Streisand (Radio Edit)' },
        { id: 724363409, artist: 'Kim Carnes', title: 'Bette Davis Eyes' },
      ],
    },
    {
      theme: 'Bollywood Crossovers',
      tracks: [
        { id: 1671313142, artist: 'Panjabi MC feat. Jay-Z', title: 'Beware of the Boys (Mundian to Bach Ke)' },
        { id: 1445277970, artist: 'A.R. Rahman & The Pussycat Dolls', title: 'Jai Ho! (You Are My Destiny)' },
        { id: 1123225125, artist: 'Akon & Hamsika Iyer', title: 'Chammak Challo' },
        { id: 1130971735, artist: 'Kylie Minogue & Sonu Nigam', title: 'Chiggy Wiggy' },
      ],
    },
    {
      theme: 'Public-domain recordings',
      tracks: [
        { id: 1715994242, artist: 'Tom Lehrer', title: 'Poisoning Pigeons in the Park' },
        {
          id: 591262951,
          artist: 'George Gershwin & Paul Whiteman and His Concert Orchestra',
          title: 'Rhapsody In Blue (Acoustic Version 1924)',
        },
        { id: 740001697, artist: 'Bessie Smith', title: 'St. Louis Blues (with Louis Armstrong)' },
        { id: 571717132, artist: 'United States Marine Band', title: 'The Liberty Bell' },
      ],
    },
    {
      theme: 'English adaptations of non-English songs',
      tracks: [
        { id: 1672585478, artist: 'Nena', title: '99 Red Balloons', note: 'German: 99 Luftballons' },
        { id: 1475517693, artist: 'Frank Sinatra', title: 'My Way', note: "French: Comme d'habitude" },
        { id: 253339563, artist: 'Laura Branigan', title: 'Gloria', note: 'Italian: Gloria' },
        { id: 1564499116, artist: 'Terry Jacks', title: 'Seasons in the Sun', note: 'French: Le Moribond' },
      ],
    },
  ],
};

export default puzzle;
