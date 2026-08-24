import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Spatial directions in the title',
      tracks: [
        { id: 1552255040, artist: 'Cardi B', title: 'Up' },
        { id: 1443085141, artist: 'Jay Sean', title: 'Down (feat. Lil Wayne)' },
        { id: 1633318759, artist: 'Charlie Puth & Jung Kook', title: 'Left and Right' },
        { id: 1452791458, artist: 'Diana Ross', title: 'Upside Down' },
      ],
    },
    {
      theme: 'Song begins with an unaccompanied bass guitar riff',
      tracks: [
        { id: 945575407, artist: 'Red Hot Chili Peppers', title: 'Around the World' },
        { id: 1474185654, artist: 'TOOL', title: 'Schism' },
        { id: 157317248, artist: 'Alice In Chains', title: 'Would?' },
        { id: 259070613, artist: 'blink-182', title: 'Carousel' },
      ],
    },
    {
      theme: 'Occupations / professions in the song title',
      tracks: [
        { id: 324127939, artist: 'Simon & Garfunkel', title: 'The Boxer' },
        { id: 1122776155, artist: 'Coldplay', title: 'The Scientist' },
        { id: 697409665, artist: 'Tina Turner', title: 'Private Dancer' },
        { id: 1700433698, artist: 'Thompson Twins', title: 'Doctor! Doctor!' },
      ],
    },
    {
      theme: 'Bands named after movies, fictional characters, or books',
      tracks: [
        { id: 693610953, artist: 'Duran Duran', title: 'Hungry Like the Wolf', note: 'Dr. Durand Durand in Barbarella' },
        { id: 192859115, artist: 'Save Ferris', title: 'Come On Eileen', note: 'Ferris Bueller\'s Day Off' },
        { id: 1440749367, artist: 'Fall Out Boy', title: 'Dance, Dance', note: 'Fallout Boy in The Simpsons' },
        { id: 785232521, artist: 'Black Sabbath', title: 'Paranoid', note: 'Black Sabbath (1963 Boris Karloff film)' },
      ],
    },
  ],
};

export default puzzle;
