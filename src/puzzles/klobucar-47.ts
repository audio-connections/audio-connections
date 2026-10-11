import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Months in the title',
      tracks: [
        { id: 691425203, artist: 'Pilot', title: 'January' },
        { id: 260336565, artist: 'Prince & The Revolution', title: 'Sometimes It Snows In April' },
        { id: 1456444818, artist: 'Earth, Wind & Fire', title: 'September' },
        { id: 1440920489, artist: 'Taylor Swift', title: 'Back to December' },
      ],
    },
    {
      theme: 'Prominent accordion',
      tracks: [
        { id: 581741457, artist: 'Paul Simon', title: 'The Boy In the Bubble', note: 'Features Forere Motloheloa on accordion' },
        { id: 298111051, artist: 'They Might Be Giants', title: 'Particle Man', note: 'Features John Linnell on accordion' },
        { id: 1249418559, artist: 'Arcade Fire', title: 'Neighborhood #2 (Laika)', note: 'Driven by accordion played by Richard Reed Parry and Régine Chassagne' },
        { id: 186149937, artist: 'Bruce Springsteen', title: '4th of July, Asbury Park (Sandy)', note: 'Features Danny Federici on accordion' },
      ],
    },
    {
      theme: 'Produced by Trevor Horn',
      tracks: [
        { id: 1049010768, artist: 'Yes', title: 'Owner of a Lonely Heart', note: 'Produced by Trevor Horn for the 90125 album' },
        { id: 1365569655, artist: 'Frankie Goes to Hollywood', title: 'Relax', note: 'Produced by Trevor Horn for Welcome to the Pleasuredome' },
        { id: 302788219, artist: 'Seal', title: 'Kiss from a Rose', note: 'Produced by Trevor Horn for Seal II' },
        { id: 1454026498, artist: 't.A.T.u.', title: 'All the Things She Said', note: 'Produced by Trevor Horn for 200 KM/H in the Wrong Lane' },
      ],
    },
    {
      theme: 'Musicians who opened restaurants',
      tracks: [
        { id: 1751417875, artist: 'Jimmy Buffett', title: 'Margaritaville', note: 'Founded the Margaritaville restaurant and hospitality franchise' },
        { id: 40458497, artist: 'Alice Cooper', title: 'No More Mr. Nice Guy', note: "Opened Cooper'stown sports bar and restaurant in Phoenix, Arizona" },
        { id: 1440657907, artist: 'Jon Bon Jovi', title: 'Blaze of Glory', note: 'Founded the non-profit JBJ Soul Kitchen community restaurant network' },
        { id: 1456413820, artist: 'Ludacris', title: 'Rollout (My Business)', note: 'Opened Straits and Chicken + Beer in Atlanta' },
      ],
    },
  ],
};

export default puzzle;
