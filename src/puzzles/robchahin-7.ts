import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Rob Chahin',
  themes: [
    {
      theme: 'Songs about dance floors',
      tracks: [
        { id: 1425259944, artist: 'Michael Sembello', title: 'Maniac' },
        { id: 1443920952, artist: 'Sophie Ellis-Bextor', title: 'Murder On The Dancefloor' },
        { id: 111153391, artist: 'Arctic Monkeys', title: 'I Bet You Look Good on the Dancefloor' },
        { id: 193015409, artist: 'Michael Jackson', title: 'Blood on the Dance Floor' },
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
