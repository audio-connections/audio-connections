import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: '"Human" in the title',
      tracks: [
        { id: 1440864350, artist: 'The Killers', title: 'Human', note: 'Are we human, or are we dancer?' },
        { id: 273048790, artist: 'Michael Jackson', title: 'Human Nature', note: '' },
        { id: 300205497, artist: 'Björk', title: 'Human Behaviour', note: '' },
        { id: 192669857, artist: 'Bruce Springsteen', title: 'Human Touch', note: '' },
      ],
    },
    {
      theme: 'Discovered on a TV singing competition',
      tracks: [
        { id: 275765380, artist: 'Kelly Clarkson', title: 'Since U Been Gone', note: 'American Idol season 1 winner' },
        { id: 214695747, artist: 'Carrie Underwood', title: 'Jesus, Take the Wheel', note: 'American Idol season 4 winner' },
        { id: 482734113, artist: 'One Direction', title: 'What Makes You Beautiful', note: 'Formed on The X Factor UK — they finished third' },
        { id: 1440862440, artist: 'Phillip Phillips', title: 'Home', note: 'American Idol season 11 coronation song' },
      ],
    },
    {
      theme: 'Title starts with a keyboard key',
      tracks: [
        { id: 1440831640, artist: 'Janet Jackson', title: 'Control', note: 'Ctrl' },
        { id: 1676421247, artist: 'David Bowie', title: 'Space Oddity', note: 'Space bar' },
        { id: 81902612, artist: 'Mark Morrison', title: 'Return of the Mack', note: 'Return' },
        { id: 1440776985, artist: 'Boyz II Men', title: 'End of the Road', note: 'End' },
      ],
    },
    {
      theme: 'Music that shipped with an operating system',
      tracks: [
        { id: 1582976450, artist: 'David Byrne', title: 'Like Humans Do', note: 'Windows XP sample music' },
        { id: 1890580960, artist: 'Weezer', title: 'Buddy Holly', note: 'Music video included on the Windows 95 CD' },
        { id: 1440664026, artist: 'Beck', title: 'Beautiful Way', note: 'Windows Me — the Windows Media Player 7 demo (beck.asf)' },
        { id: 416290548, artist: 'Mr. Scruff', title: 'Kalimba', note: 'Windows 7 sample music' },
      ],
    },
  ],
};

export default puzzle;
