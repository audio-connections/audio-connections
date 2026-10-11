import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Street types in the title',
      tracks: [
        { id: 693606496, artist: 'Gerry Rafferty', title: 'Baker Street' },
        { id: 1716567638, artist: 'Eddy Grant', title: 'Electric Avenue' },
        { id: 1441163777, artist: 'The Beatles', title: 'Penny Lane' },
        { id: 1295797526, artist: 'Green Day', title: 'Boulevard of Broken Dreams' },
      ],
    },
    {
      theme: 'Begin with unaccompanied vocals',
      tracks: [
        { id: 6781024437, artist: 'Queen', title: 'Bohemian Rhapsody', note: 'Opens with four-part vocal harmony singing "Is this the real life? Is this just fantasy?"' },
        { id: 1444012604, artist: 'Suzanne Vega', title: "Tom's Diner", note: 'Original 1987 album opener is sung entirely a cappella' },
        { id: 917030923, artist: 'Janis Joplin', title: 'Mercedes Benz', note: 'Recorded as a pure a cappella vocal performance' },
        { id: 259814647, artist: 'Billy Joel', title: 'The Longest Time', note: 'Opens with unaccompanied finger-snapping and doo-wop vocal harmonies' },
      ],
    },
    {
      theme: 'Written or co-written by Sia for another artist',
      tracks: [
        { id: 1444321282, artist: 'Rihanna', title: 'Diamonds', note: 'Written by Sia with StarGate and Benny Blanco' },
        { id: 780519958, artist: 'Beyoncé', title: 'Pretty Hurts', note: 'Written by Sia with Ammo and Beyoncé' },
        { id: 734483791, artist: 'Britney Spears', title: 'Perfume', note: 'Co-written by Sia and Chris Braide' },
        { id: 1516033681, artist: 'Christina Aguilera', title: 'You Lost Me', note: 'Co-written by Sia with Samuel Dixon and Aguilera' },
      ],
    },
    {
      theme: 'Musicians who became ordained ministers',
      tracks: [
        { id: 976362823, artist: 'Al Green', title: "Let's Stay Together", note: 'Became an ordained pastor of Full Gospel Tabernacle in Memphis in 1976' },
        { id: 587084074, artist: 'Mase', title: 'Feel So Good', note: 'Retired from hip-hop in 1999 to lead S.A.N.E. Church as an ordained minister' },
        { id: 258594662, artist: 'Run-DMC', title: 'Down With the King', note: 'Joseph Simmons was ordained as a Pentecostal minister and adopted the name Rev. Run' },
        { id: 715954880, artist: 'MC Hammer', title: '2 Legit 2 Quit', note: 'Became an ordained Christian minister in the late 1990s' },
      ],
    },
  ],
};

export default puzzle;
