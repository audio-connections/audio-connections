import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  themes: [
    {
      theme: '"Dead" in the band name',
      tracks: [
        { id: 663696490, artist: 'Grateful Dead', title: 'Casey Jones' },
        { id: 1760852796, artist: 'Dead Kennedys', title: 'Holiday in Cambodia' },
        { id: 1648408595, artist: 'The Dead Milkmen', title: 'Instant Club Hit (You’ll Dance to Anything)', note: "You'll dance to anything by..." },
        { id: 320973994, artist: 'The Dead Weather', title: 'Treat Me Like Your Mother' },
      ],
    },
    {
      theme: 'Alliterative artists',
      tracks: [
        { id: 362133505, artist: 'Foo Fighters', title: 'Everlong' },
        { id: 1440831855, artist: 'Janet Jackson', title: 'Nasty' },
        { id: 315844084, artist: 'Franz Ferdinand', title: 'Take Me Out' },
        { id: 1440862445, artist: 'Phillip Phillips', title: 'Gone, Gone, Gone' },
      ],
    },
    {
      theme: 'Members of the Traveling Wilburys',
      tracks: [
        { id: 201281527, artist: 'Bob Dylan', title: 'Like a Rolling Stone', note: 'Lucky Wilbury' },
        { id: 388154726, artist: 'Roy Orbison', title: 'Crying', note: 'Lefty Wilbury' },
        { id: 1666662606, artist: 'George Harrison', title: 'My Sweet Lord', note: 'Nelson Wilbury' },
        { id: 1469579559, artist: 'Tom Petty & The Heartbreakers', title: 'American Girl', note: 'Charlie T. Wilbury Jr.' },
      ],
    },
    {
      theme: 'Name-checked in "Instant Club Hit" by the Dead Milkmen',
      tracks: [
        { id: 1313396599, artist: 'The Communards', title: "Don't Leave Me This Way" },
        { id: 300946667, artist: 'Book of Love', title: 'Boy' },
        { id: 802231070, artist: 'The Smiths', title: 'Panic' },
        { id: 1174246806, artist: 'Depeche Mode', title: 'Personal Jesus', note: 'The song calls them “Depeche Commode”' },
      ],
    },
  ],
};

export default puzzle;
