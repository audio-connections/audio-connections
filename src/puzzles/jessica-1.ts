import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jessica Dreher',
  themes: [
    {
      theme: 'Que Sara Sarah',
      tracks: [
        { id: 1446293231, artist: 'Starship', title: 'Sara' },
        { id: 217709579, artist: 'Daryl Hall & John Oates', title: 'Sara Smile' },
        { id: 1472171784, artist: 'Genesis', title: 'Me and Sarah Jane' },
        { id: 190084512, artist: 'Ben Folds', title: 'Zak and Sara' },
      ],
    },
    {
      theme: 'Female Artist, Female Name in Title',
      tracks: [
        { id: 1715762817, artist: 'Alanis Morissette', title: 'Mary Jane' },
        { id: 981366651, artist: 'Tori Amos', title: 'Yes, Anastasia' },
        { id: 1062400330, artist: 'Dolly Parton', title: 'Jolene' },
        { id: 1544268361, artist: 'Taylor Swift', title: 'marjorie' },
      ],
    },
    {
      theme: '1970s Billboard Hot 100 #1',
      tracks: [
        { id: 917030915, artist: 'Janis Joplin', title: 'Me and Bobby McGee', note: 'Hit #1 in March 1971.' },
        { id: 388158216, artist: 'Looking Glass', title: "Brandy (You're a Fine Girl)", note: 'Hit #1 in August 1972.' },
        { id: 177410267, artist: 'Barry Manilow', title: 'Mandy', note: 'Hit #1 in January 1975.' },
        { id: 1458663244, artist: 'John Denver', title: "Annie's Song", note: 'Hit #1 in July 1974.' },
      ],
    },
    {
      theme: 'Artist Born in Michigan',
      tracks: [
        { id: 267574906, artist: 'Hank Ballard', title: 'Work with Me Annie', note: 'Detroit.' },
        { id: 40458553, artist: 'Alice Cooper', title: 'Ballad of Dwight Fry', note: 'Detroit.' },
        { id: 1442858375, artist: 'Mike Posner', title: 'Iris', note: 'Metro Detroit (Southfield).' },
        { id: 1440788542, artist: 'Stevie Wonder', title: 'Sir Duke', note: 'Saginaw.' },
      ],
    },
  ],
};

export default puzzle;
