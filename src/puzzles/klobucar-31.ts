import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Bodies of water in the song title',
      tracks: [
        { id: 1440952830, artist: 'Creedence Clearwater Revival', title: 'Green River' },
        { id: 201257641, artist: 'Modest Mouse', title: 'Ocean Breathes Salty' },
        { id: 322969532, artist: 'The Stone Roses', title: 'Waterfall' },
        { id: 1440847004, artist: 'The Band', title: 'Up on Cripple Creek' },
      ],
    },
    {
      theme: 'Songs featuring an iconic saxophone hook',
      tracks: [
        { id: 604770244, artist: 'Sade', title: 'Smooth Operator' },
        { id: 1443834437, artist: 'Quarterflash', title: 'Harden My Heart' },
        { id: 828779772, artist: 'INXS', title: 'Never Tear Us Apart' },
        { id: 693107448, artist: 'Spandau Ballet', title: 'True' },
      ],
    },
    {
      theme: 'Hit songs written by Carole King for other artists',
      tracks: [
        { id: 453763551, artist: 'The Shirelles', title: 'Will You Love Me Tomorrow', note: 'Co-written with Gerry Goffin; reached #1 on Billboard Hot 100 in 1961' },
        { id: 59403273, artist: 'The Drifters', title: 'Up on the Roof', note: 'Co-written with Gerry Goffin; reached #5 on Billboard Hot 100 in 1963' },
        { id: 4512420, artist: 'The Monkees', title: 'Pleasant Valley Sunday', note: 'Co-written with Gerry Goffin; reached #3 on Billboard Hot 100 in 1967' },
        { id: 715531894, artist: 'The Chiffons', title: 'One Fine Day', note: 'Co-written with Gerry Goffin; reached #5 on Billboard Hot 100 in 1963' },
      ],
    },
    {
      theme: 'Musicians who were awarded a Pulitzer Prize',
      tracks: [
        { id: 1440871886, artist: 'Kendrick Lamar', title: 'Alright', note: 'Won the 2018 Pulitzer Prize for Music for DAMN.' },
        { id: 1459444213, artist: 'Thelonious Monk', title: "'Round Midnight", note: 'Awarded a posthumous Pulitzer Prize Special Citation in 2006' },
        { id: 185995701, artist: 'Wynton Marsalis', title: 'Caravan', note: 'Won the 1997 Pulitzer Prize for Music for Blood on the Fields' },
        { id: 1213701752, artist: 'Scott Joplin', title: 'The Entertainer', note: 'Awarded a posthumous Pulitzer Prize Special Citation in 1976' },
      ],
    },
  ],
};

export default puzzle;
