import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Days of the week in the song title',
      tracks: [
        { id: 1440795944, artist: 'The Mamas & The Papas', title: 'Monday, Monday' },
        { id: 1288102605, artist: 'The Cure', title: "Friday I'm In Love" },
        { id: 271457297, artist: 'Bay City Rollers', title: 'Saturday Night' },
        { id: 1440845552, artist: 'No Doubt', title: 'Sunday Morning' },
      ],
    },
    {
      theme: 'Songs that spell out a word letter-by-letter in the lyrics',
      tracks: [
        { id: 1491226770, artist: 'Gwen Stefani', title: 'Hollaback Girl', note: 'B-A-N-A-N-A-S' },
        { id: 1443926626, artist: 'Village People', title: 'Y.M.C.A.', note: 'Y-M-C-A' },
        { id: 1542626668, artist: 'The Kinks', title: 'Lola', note: 'L-O-L-A' },
        { id: 1440760244, artist: 'John Cougar Mellencamp', title: 'R.O.C.K. in the U.S.A.', note: 'R-O-C-K' },
      ],
    },
    {
      theme: 'Hit songs written by Prince for other artists',
      tracks: [
        { id: 200007628, artist: 'The Bangles', title: 'Manic Monday', note: 'Written by Prince under the pseudonym Christopher' },
        { id: 140249673, artist: 'Chaka Khan', title: 'I Feel for You', note: 'Written by Prince' },
        { id: 1629185307, artist: 'Sinéad O\'Connor', title: 'Nothing Compares 2 U', note: 'Written by Prince' },
        { id: 302057926, artist: 'The Time', title: 'Jungle Love', note: 'Written and produced by Prince' },
      ],
    },
    {
      theme: 'Musicians who are commercially licensed airplane pilots',
      tracks: [
        { id: 1713861908, artist: 'Iron Maiden', title: 'The Trooper', note: 'Bruce Dickinson is a commercial airline captain for Astraeus Airlines' },
        { id: 251652727, artist: 'Gary Numan', title: 'Cars', note: 'Licensed aerobatic display pilot and flight instructor' },
        { id: 1440673879, artist: 'Jimmy Buffett', title: 'Margaritaville', note: 'Commercial pilot with multi-engine and seaplane ratings' },
        { id: 1485034811, artist: 'The Offspring', title: 'Self Esteem', note: 'Dexter Holland is an airline transport pilot and flight instructor' },
      ],
    },
  ],
};

export default puzzle;
