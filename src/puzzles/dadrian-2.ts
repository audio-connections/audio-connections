// New here? See PUZZLE_AUTHORS.md at the repo root for the full guide.
// Fill in the fields, then run `npm run validate` to check your work before
// opening a PR. The day number and release date aren't set here — accepted
// puzzles can sit in the backlog until a maintainer schedules them.

import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'David Adrian',
  constraint: '4 ⨉ (3+1)',
  themes: [
    {
      theme: 'Paul McCartney',
      tracks: [
        {
          id: 1441133277,
          artist: 'The Beatles',
          title: 'Hey Jude',
        },
        {
          id: 1440953751,
          artist: 'Paul McCartney',
          title: 'Coming Up',
        },
        {
          id: 1443413828,
          artist: 'Paul McCartney & Wings',
          title: 'Band On The Run',
        },
        {
          id: 1445162256,
          artist: 'Kanye West',
          title: 'Only One',
          note: 'Features Paul McCartney on keyboards',
        },
      ],
    },
    {
      theme: 'Jack White',
      tracks: [
        { id: 1533513365, artist: 'The White Stripes', title: 'Fell In Love With a Girl' },
        { id: 1552875311, artist: 'The Raconteurs', title: 'Steady, As She Goes', note: 'Another Jack White band' },
        { id: 293230345, artist: 'Jack White & Alicia Keys', title: 'Another Way to Die' },
        {
          id: 1440821843,
          artist: 'Eminem',
          title: "'Till I Collapse (feat. Nate Dogg)",
          note: 'Fellow Detroiters Eminem and Jack White performed this live at the Detroit Lions’ 2025 Thanksgiving halftime show.',
        },
      ],
    },
    {
      theme: 'Dave Grohl on drums',
      tracks: [
        {
          id: 1440783625,
          artist: 'Nirvana',
          title: 'Smells Like Teen Spirit',
          note: 'Dave Grohl was the drummer for Nirvana',
        },
        {
          id: 362133488,
          artist: 'Foo Fighters',
          title: 'My Hero',
          note: 'Dave Grohl plays drums on the studio recording.',
        },
        {
          id: 1237748996,
          artist: 'Them Crooked Vultures',
          title: 'New Fang',
          note: 'Supergroup with Dave on drums',
        },
        {
          id: 892018553,
          artist: 'Tom Petty',
          title: 'Honey Bee',
          note: 'Dave Grohl played drums with Tom Petty on SNL on November 19, 1994, between the end of Nirvana and starting Foo Fighters',
        },
      ],
    },
    {
      theme: 'Slash on guitar',
      tracks: [
        { id: 1377813288, artist: "Guns N' Roses", title: 'Welcome To The Jungle' },
        { id: 303131453, artist: 'Velvet Revolver', title: 'Slither' },
        { id: 1689239593, artist: 'Ryan Gosling', title: 'I’m Just Ken' },
        {
          id: 1469579583,
          artist: 'The Allman Brothers Band',
          title: 'Jessica',
          note: 'Slash played the Top Gear theme, “Jessica,” on his Top Gear episode; he also has a guitar named Jessica.',
        },
      ],
    },
  ],
};

export default puzzle;
