import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: '"Please" in the song title',
      tracks: [
        { id: 1752214912, artist: 'Sabrina Carpenter', title: 'Please Please Please' },
        { id: 27496664, artist: 'KC and the Sunshine Band', title: "Please Don't Go" },
        { id: 1444133527, artist: 'The Marvelettes', title: 'Please Mr. Postman' },
        { id: 1457762418, artist: 'P!nk', title: "Please Don't Leave Me" },
      ],
    },
    {
      theme: 'Opposite pairs in the song title',
      tracks: [
        { id: 1755762802, artist: 'Vengaboys', title: 'Up & Down' },
        { id: 715891658, artist: 'Katy Perry', title: 'Hot n Cold' },
        { id: 1442949835, artist: 'Ella Fitzgerald', title: 'Night and Day' },
        { id: 298099932, artist: 'Black Sabbath', title: 'Heaven and Hell' },
      ],
    },
    {
      theme: 'Songs on the original Footloose soundtrack',
      tracks: [
        { id: 1164757333, artist: 'Kenny Loggins', title: 'Footloose' },
        { id: 1164757334, artist: 'Deniece Williams', title: "Let's Hear It for the Boy" },
        { id: 1164757336, artist: 'Bonnie Tyler', title: 'Holding Out for a Hero' },
        { id: 1164757337, artist: 'Shalamar', title: 'Dancing In the Sheets' },
      ],
    },
    {
      theme: 'Acts featuring twin siblings',
      tracks: [
        { id: 693789492, artist: 'The Proclaimers', title: "I'm On My Way", note: 'Twin brothers Craig and Charlie Reid' },
        { id: 1111759273, artist: 'Tegan and Sara', title: 'Closer', note: 'Twin sisters Tegan and Sara Quin' },
        { id: 288051955, artist: 'Good Charlotte', title: 'Lifestyles of the Rich & Famous', note: 'Twin brothers Joel and Benji Madden' },
        { id: 1444203853, artist: 'Nelson', title: "(Can't Live Without Your) Love and Affection", note: 'Twin brothers Matthew and Gunnar Nelson' },
      ],
    },
  ],
};

export default puzzle;
