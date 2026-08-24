import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Three repeating words in the title',
      tracks: [
        { id: 266809619, artist: "Destiny's Child", title: 'Bills, Bills, Bills' },
        { id: 725823663, artist: 'The Beach Boys', title: 'Fun, Fun, Fun' },
        { id: 1606701276, artist: 'Mötley Crüe', title: 'Girls, Girls, Girls' },
        { id: 1440939410, artist: 'Paul McCartney & Michael Jackson', title: 'Say Say Say' },
      ],
    },
    {
      theme: 'Songs with an iconic countdown or counting intro',
      tracks: [
        { id: 1441164819, artist: 'The Beatles', title: 'I Saw Her Standing There', note: '"One, two, three, four!"' },
        { id: 1440891551, artist: 'U2', title: 'Vertigo', note: '"Uno, dos, tres, catorce!"' },
        { id: 1127410268, artist: 'Ramones', title: 'Blitzkrieg Bop', note: '"1-2-3-4!"' },
        { id: 1444137692, artist: 'Sam the Sham & The Pharaohs', title: 'Wooly Bully', note: '"Uno, dos, one, two, tres, cuatro!"' },
      ],
    },
    {
      theme: 'Artists named after real geographical places they are from',
      tracks: [
        { id: 913902137, artist: 'Boston', title: 'More Than a Feeling', note: 'Boston, Massachusetts' },
        { id: 28457962, artist: 'Chicago', title: '25 or 6 to 4', note: 'Chicago, Illinois' },
        { id: 193730684, artist: 'Kansas', title: 'Dust In the Wind', note: 'Topeka, Kansas' },
        { id: 253356146, artist: 'Alabama', title: 'Mountain Music', note: 'Fort Payne, Alabama' },
      ],
    },
    {
      theme: 'Musicians who served in the United States military',
      tracks: [
        { id: 357225355, artist: 'The Jimi Hendrix Experience', title: 'Purple Haze', note: '101st Airborne Division, US Army' },
        { id: 825832056, artist: 'Johnny Cash', title: 'I Walk the Line', note: 'US Air Force radio intercept operator' },
        { id: 962484556, artist: 'John Coltrane', title: 'Giant Steps', note: 'US Navy' },
        { id: 663662731, artist: 'Grateful Dead', title: 'Touch of Grey', note: 'Jerry Garcia served in the US Army' },
      ],
    },
  ],
};

export default puzzle;
