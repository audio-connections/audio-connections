import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Celestial objects and astronomy in the song title',
      tracks: [
        { id: 311629509, artist: 'Train', title: 'Drops of Jupiter (Tell Me)' },
        { id: 1440811686, artist: 'Soundgarden', title: 'Black Hole Sun' },
        { id: 992221997, artist: 'Muse', title: 'Supermassive Black Hole' },
        { id: 1629105396, artist: 'The Waterboys', title: 'The Whole of the Moon' },
      ],
    },
    {
      theme: 'Famous songs that interpolate or reference a classic children\'s nursery rhyme',
      tracks: [
        { id: 1054461705, artist: 'Fugees', title: 'Ready or Not', note: 'Interpolates the playground hiding chant "Ready or not, here I come, you can\'t hide"' },
        { id: 1831584958, artist: 'Korn', title: 'Shoots and Ladders', note: 'Lyrical medley of Ring Around the Rosie, London Bridge, and Mary Had a Little Lamb' },
        { id: 164394654, artist: 'Third Eye Blind', title: 'Semi-Charmed Life', note: 'Lyrically references Sing a Song of Sixpence ("four and twenty blackbirds")' },
        { id: 1440912109, artist: 'Jackson 5', title: 'ABC', note: 'Built on the alphabet song and nursery school counting rhymes ("A-B-C, 1-2-3")' },
      ],
    },
    {
      theme: 'One-hit wonders of the 1990s alternative rock explosion',
      tracks: [
        { id: 1444009361, artist: 'Chumbawamba', title: 'Tubthumping' },
        { id: 1443912092, artist: 'Semisonic', title: 'Closing Time' },
        { id: 1440762717, artist: 'New Radicals', title: 'You Get What You Give' },
        { id: 725821929, artist: 'Blind Melon', title: 'No Rain' },
      ],
    },
    {
      theme: 'Bands whose original lead singer was replaced by a fan discovered online or in a tribute band',
      tracks: [
        { id: 1640102584, artist: 'Journey', title: 'Don\'t Stop Believin\'', note: 'Arnel Pineda was discovered singing Journey covers on YouTube by Neal Schon' },
        { id: 207346225, artist: 'Judas Priest', title: 'Breaking the Law', note: 'Tim "Ripper" Owens was recruited directly from tribute band British Steel' },
        { id: 913902137, artist: 'Boston', title: 'More Than a Feeling', note: 'Tommy DeCarlo was discovered by Tom Scholz after posting Brad Delp covers on MySpace' },
        { id: 1049009209, artist: 'Yes', title: 'Roundabout', note: 'Jon Davison was discovered and hired while fronting Yes tribute band Roundabout' },
      ],
    },
  ],
};

export default puzzle;
