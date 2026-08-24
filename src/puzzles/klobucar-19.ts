import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Title asks a direct question',
      tracks: [
        { id: 1731384547, artist: 'Haddaway', title: 'What Is Love' },
        { id: 723351644, artist: 'Baha Men', title: 'Who Let the Dogs Out' },
        { id: 1615142635, artist: 'Black Eyed Peas', title: 'Where Is The Love?' },
        { id: 1778048261, artist: 'Jet', title: 'Are You Gonna Be My Girl' },
      ],
    },
    {
      theme: 'A specific year in the song title',
      tracks: [
        { id: 1440823965, artist: 'Bryan Adams', title: "Summer of '69" },
        { id: 721224621, artist: 'The Smashing Pumpkins', title: '1979' },
        { id: 271371090, artist: 'Bowling for Soup', title: '1985' },
        { id: 1440924238, artist: 'Pulp', title: 'Disco 2000' },
      ],
    },
    {
      theme: 'Music videos with over one billion views on YouTube',
      tracks: [
        { id: 1447401620, artist: 'Luis Fonsi & Daddy Yankee', title: 'Despacito' },
        { id: 1193701392, artist: 'Ed Sheeran', title: 'Shape of You' },
        { id: 1488408568, artist: 'The Weeknd', title: 'Blinding Lights' },
        { id: 1440855562, artist: 'Maroon 5', title: 'Sugar' },
      ],
    },
    {
      theme: 'Singers who voiced animated Disney characters',
      tracks: [
        { id: 193018496, artist: 'Mandy Moore', title: 'Candy', note: 'Voiced Rapunzel in Tangled' },
        { id: 76155240, artist: 'Bette Midler', title: 'Wind Beneath My Wings', note: 'Voiced Georgette in Oliver & Company' },
        { id: 1443811916, artist: 'Tom Jones', title: "It's Not Unusual", note: 'Voiced Theme Song Guy in The Emperor\'s New Groove' },
        { id: 1742830149, artist: 'Eartha Kitt', title: 'Santa Baby', note: 'Voiced Yzma in The Emperor\'s New Groove' },
      ],
    },
  ],
};

export default puzzle;
