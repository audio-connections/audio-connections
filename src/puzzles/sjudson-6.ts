// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Samuel Judson',
  constraint: 'Look let\'s just get this out of the way: it\'s all Sondheim',
  themes: [
    {
      theme: 'Title Tracks',
      tracks: [
        { id: 1086882400, artist: 'The Cast of "Sweeney Todd: The Demon Barber of Fleet Street"', title: 'The Ballad of Sweeney Todd', note: '' },
        { id: 214976533, artist: 'The Cast of "Company"', title: 'Company', note: '' },
        { id: 1716801698, artist: 'The Cast of "Merrily We Roll Along"', title: 'Merrily We Roll Along', note: '' },
        { id: 218852858, artist: 'The Cast of "Sunday In The Park With George"', title: 'Sunday in the Park with George', note: '' },
      ],
    },
    {
      theme: 'Standards Beyond The Stage',
      tracks: [
        { id: 1444104585, artist: 'Frank Sinatra', title: 'Send In The Clowns', note: 'from A Little Night Music' },
        { id: 933029039, artist: 'Aretha Franklin', title: 'Somewhere', note: 'from West Side Story' },
        { id: 170137017, artist: 'Liza Minnelli', title: 'Losing My Mind', note: 'from Follies' },
        { id: 498592328, artist: 'The Dave Brubeck Quartet', title: 'Tonight', note: 'from West Side Story' },
      ],
    },
    {
      theme: 'Wait, They Sing?',
      tracks: [
        { id: 214977681, artist: 'Raul Esparza', title: 'Being Alive', note: 'from Company' },
        { id: 1086882656, artist: 'Angela Lansbury', title: 'The Worst Pies In London', note: 'from Sweeney Todd' },
        { id: 218853159, artist: 'Mandy Patinkin', title: 'Finishing The Hat', note: 'from Sunday in the Park with George' },
        { id: 1716801706, artist: 'Daniel Radcliffe', title: 'Franklin Shepard Inc.', note: 'from Merrily We Roll Along' },
      ],
    },
    {
      theme: 'Diva Down',
      tracks: [
        { id: 1494712784, artist: 'Elaine Stritch', title: 'I\'m Still Here', note: 'from Follies' },
        { id: 1450647832, artist: 'Patti LuPone', title: 'The Ladies Who Lunch', note: 'from Company' },
        { id: 0, artist: 'Audra McDonald', title: 'The Glamorous Life', note: 'from A Little Night Music' },
        { id: 219251308, artist: 'Bernadette Peters', title: 'Not A Day Goes By', note: 'from Merrily We Roll Along' },
      ],
    },
  ],
};

export default puzzle;
