import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Family member in the title',
      tracks: [
        { id: 80815248, artist: 'Madonna', title: "Papa Don't Preach", note: '' },
        { id: 192970205, artist: 'The Hollies', title: "He Ain't Heavy, He's My Brother", note: '' },
        { id: 1440648051, artist: 'Night Ranger', title: 'Sister Christian', note: '' },
        { id: 1065976152, artist: 'Pink Floyd', title: 'Mother', note: '' },
      ],
    },
    {
      theme: 'Song titles you can dial',
      tracks: [
        { id: 1443903159, artist: 'The Marvelettes', title: 'Beechwood 4-5789', note: '' },
        { id: 281713766, artist: 'Wilson Pickett', title: '634-5789', note: '' },
        { id: 273891021, artist: 'The Time', title: '777-9311', note: "The digits were guitarist Dez Dickerson's real home number — he had to change it" },
        { id: 275613740, artist: 'The Partridge Family', title: 'Echo Valley 2-6809', note: '' },
      ],
    },
    {
      theme: 'Prominent whistling',
      tracks: [
        { id: 723398328, artist: 'Bobby McFerrin', title: "Don't Worry, Be Happy", note: '' },
        { id: 1442990320, artist: 'Peter Bjorn and John', title: 'Young Folks', note: '' },
        { id: 1443100831, artist: 'Monty Python', title: 'Always Look On the Bright Side of Life', note: '' },
        { id: 1461280616, artist: 'OneRepublic', title: 'Good Life', note: '' },
      ],
    },
    {
      theme: 'B-sides that became the hit',
      tracks: [
        { id: 1440492772, artist: 'The Righteous Brothers', title: 'Unchained Melody', note: 'B-side of "Hung on You" — DJs flipped the record' },
        { id: 1440854891, artist: 'Kiss', title: 'Beth', note: 'B-side of "Detroit Rock City" — radio flipped it into Kiss\'s biggest hit' },
        { id: 1110962224, artist: 'The Doobie Brothers', title: 'Black Water', note: 'B-side of "Another Park, Another Sunday" — became a surprise #1' },
        { id: 799969782, artist: 'The Smiths', title: 'How Soon Is Now?', note: 'B-side of "William, It Was Really Nothing" — became the Smiths\' signature song' },
      ],
    },
  ],
};

export default puzzle;
