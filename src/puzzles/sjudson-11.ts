// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Copy this file to src/puzzles/<your-github-handle>-N.ts,
// fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Samuel Judson',
  themes: [
    {
      theme: 'Millennial Music (Released in 2000)',
      tracks: [
        { id: 1440918199, artist: 'Sisqo', title: 'Thong Song', note: '' },
        { id: 303171368, artist: '*NSYNC', title: 'Bye Bye Bye', note: '' },
        { id: 1440745627, artist: 'Shaggy', title: 'It Wasn\'t Me', note: '' },
        { id: 1434909210, artist: 'Nelly', title: 'Country Grammar (Hot Shit)', note: '' },
      ],
    },
    {
      theme: 'Cross-Generational Features',
      tracks: [
        { id: 255985502, artist: 'Groove Armada (ft. Richie Havens)', title: 'Hands of Time', note: '' },
        { id: 1358286224, artist: 'Kali Uchis (ft. Tyler, The Creator & Bootsy Collins)', title: 'After the Storm', note: '' },
        { id: 1781967987, artist: 'N.A.S.A. (ft. Tom Waits & Kool Keith)', title: 'Spacious Thoughts', note: '' },
        { id: 1630005861, artist: 'Beyonce (ft. Grace Jones & Tems)', title: 'Move', note: '' },
      ],
    },
    {
      theme: 'The Dungeon Family',
      tracks: [
        { id: 1774796505, artist: 'Outkast (ft. Sleepy Brown)', title: 'The Way You Move', note: '' },
        { id: 286635629, artist: 'Janelle Monae', title: 'Many Moons', note: '' },
        { id: 270246724, artist: 'TLC', title: 'Waterfalls', note: '' },
        { id: 298577671, artist: 'Goodie Mob (ft. Outkast)', title: 'Black Ice (Sky High)', note: '' },
      ],
    },
    {
      theme: 'Artists Parodied In Walk Hard: The Dewey Cox Story',
      tracks: [
        { id: 1441164370, artist: 'The Beatles', title: 'Norwegian Wood (This Bird Has Flown)', note: '' },
        { id: 1289685004, artist: 'Johnny Cash', title: 'I Walk The Line', note: '' },
        { id: 201281527, artist: 'Bob Dylan', title: 'Like A Rolling Stone', note: '' },
        { id: 46592140, artist: 'Ray Charles', title: 'Mess Around', note: '' },
      ],
    },
  ],
};

export default puzzle;
