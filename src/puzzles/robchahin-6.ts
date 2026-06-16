import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Rob Chahin',
  themes: [
    {
      theme: 'Extinct Animals',
      tracks: [
        { id: 381237338, artist: 'Kesha', title: 'Dinosaur' },
        { id: 1472171996, artist: 'Genesis', title: 'Dodo / Lurker' },
        { id: 1645063615, artist: 'Interpol', title: 'Mammoth' },
        { id: 1278457428, artist: 'Kasabian', title: 'Velociraptor!' },
      ],
    },
    {
      theme: 'Former Places',
      tracks: [
        { id: 1442997476, artist: 'Elvis Costello & The Attractions', title: 'New Amsterdam', note: 'New York City' },
        { id: 158816130, artist: 'Billy Joel', title: 'Goodnight Saigon', note: 'Ho Chi Minh City' },
        {
          id: 298111047,
          artist: 'They Might Be Giants',
          title: 'Istanbul (Not Constantinople)',
          note: 'Constantinople',
        },
        { id: 250727833, artist: 'Boney M.', title: 'Rivers of Babylon', note: 'Babylon' },
      ],
    },
    {
      theme: 'No Native Speakers',
      tracks: [
        { id: 1375814326, artist: 'John Williams & London Symphony Orchestra', title: 'Duel of the Fates', note: 'Sanskrit' },
        { id: 339006457, artist: 'London Philharmonic Orchestra & David Parry', title: 'O Fortuna', note: 'Latin' },
        { id: 952663, artist: 'Madonna', title: 'Shanti / Ashtangi', note: 'Sanskrit' },
        { id: 62446397, artist: 'Enya', title: 'Cursum Perficio', note: 'Latin' },
      ],
    },
    {
      theme: '"___ is dead"',
      tracks: [
        { id: 1258823725, artist: 'LCD Soundsystem', title: 'american dream' },
        { id: 1440858472, artist: 'John Lennon', title: 'God' },
        { id: 1779782000, artist: 'Lana Del Rey', title: 'Radio' },
        { id: 580708178, artist: 'Led Zeppelin', title: 'Rock and Roll' },
      ],
    },
  ],
};

export default puzzle;
