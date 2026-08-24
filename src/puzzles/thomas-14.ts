import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Thomas Ptacek',
  constraint: 'Memento Mori',
  themes: [
    {
      theme: 'Songs About Death',
      tracks: [
        { id: 217556132, artist: 'Blue Öyster Cult', title: '(Don’t Fear) The Reaper' },
        { id: 337392882, artist: 'Eric Clapton', title: 'Tears in Heaven' },
        { id: 2521492, artist: 'Warren Zevon', title: 'Keep Me in Your Heart' },
        { id: 1476457513, artist: 'The Jim Carroll Band', title: 'People Who Died' },
      ],
    },
    {
      theme: 'Murdered',
      tracks: [
        { id: 1442454886, artist: 'Marvin Gaye', title: 'Ain’t That Peculiar', note: 'Shot and killed by his father in 1984.' },
        { id: 1440662041, artist: '2Pac', title: 'California Love', note: 'Murdered in a 1996 Las Vegas drive-by shooting.' },
        { id: 1440853776, artist: 'John Lennon', title: 'Imagine', note: 'Shot outside his New York apartment in 1980.' },
        { id: 1440827900, artist: 'Selena', title: 'Como La Flor', note: 'Murdered by her fan-club president in 1995.' },
      ],
    },
    {
      theme: 'Killed in Air Crashes',
      tracks: [
        { id: 466357994, artist: 'Ritchie Valens', title: 'La Bamba', note: 'Died in the 1959 plane crash, “The Day the Music Died.”' },
        { id: 1434877718, artist: 'Buddy Holly', title: 'Peggy Sue', note: 'Died in the same 1959 crash as Ritchie Valens.' },
        { id: 1816083311, artist: 'Aaliyah', title: 'Try Again', note: 'Killed in a 2001 plane crash in the Bahamas.' },
        { id: 266390271, artist: 'Stevie Ray Vaughan', title: 'Crossfire', note: 'Died in a 1990 helicopter crash.' },
      ],
    },
    {
      theme: 'Death Hoaxes',
      tracks: [
        { id: 1443151733, artist: 'Paul McCartney', title: 'Maybe I’m Amazed', note: 'The “Paul is dead” hoax claimed he died in 1966.' },
        { id: 315025826, artist: 'Avril Lavigne', title: 'Sk8er Boi', note: 'A conspiracy theory says she was replaced by a double named Melissa.' },
        { id: 273143820, artist: 'Britney Spears', title: '...Baby One More Time', note: 'Falsely reported dead in a car crash with Justin Timberlake.' },
        { id: 1443227554, artist: 'Queen Latifah', title: 'U.N.I.T.Y.', note: 'A death hoax forced her to record a proof-of-life video.' },
      ],
    },
  ],
};

export default puzzle;
