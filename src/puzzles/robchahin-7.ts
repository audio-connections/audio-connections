import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Rob Chahin',
  themes: [
    {
      theme: 'Eponymous songs',
      tracks: [
        { id: 697203109, artist: 'Talk Talk', title: 'Talk Talk' },
        { id: 4512384, artist: 'The Monkees', title: 'The Monkees' },
        { id: 787645012, artist: 'Black Sabbath', title: 'Black Sabbath' },
        { id: 978942755, artist: 'Bad Company', title: 'Bad Company' },
      ],
    },
    {
      theme: 'Na na na na',
      tracks: [
        { id: 1441133277, artist: 'The Beatles', title: 'Hey Jude' },
        { id: 943232471, artist: 'Ini Kamoze', title: 'Here Comes the Hotstepper' },
        { id: 206201781, artist: 'Will Smith', title: "Gettin' Jiggy Wit It" },
        { id: 296670964, artist: 'Neal Hefti and His Orchestra', title: 'Batman Theme' },
      ],
    },
    {
      theme: "Songs you don't know by artists you do",
      tracks: [
        { id: 1778643308, artist: 'Chumbawamba', title: 'Torturing James Hetfield', note: 'Tubthumping' },
        { id: 1467952810, artist: 'Gotye', title: 'State of the Art', note: 'Somebody That I Used to Know' },
        { id: 1444090134, artist: 'The Buggles', title: 'I Love You (Miss Robot)', note: 'Video Killed the Radio Star' },
        { id: 1444074829, artist: 'Sir Mix-A-Lot', title: 'My Hooptie', note: 'Baby Got Back' },
      ],
    },
    {
      theme: 'Songs abused to torture people',
      tracks: [
        { id: 1572051818, artist: 'Metallica', title: 'Enter Sandman' },
        { id: 279647295, artist: 'Christina Aguilera', title: 'Dirrty' },
        { id: 574050607, artist: 'AC/DC', title: 'You Shook Me All Night Long' },
        { id: 1512035438, artist: 'Barney', title: 'I Love You' },
      ],
    },
  ],
};

export default puzzle;
