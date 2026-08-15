import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Exclamation mark in the artist or title',
      tracks: [
        { id: 193084947, artist: 'Wham!', title: 'Wake Me Up Before You Go-Go' },
        { id: 275965256, artist: 'Panic! At the Disco', title: 'Nine in the Afternoon' },
        { id: 1032178989, artist: 'Outkast', title: 'Hey Ya!' },
        { id: 1441164536, artist: 'The Beatles', title: 'Help!' },
      ],
    },
    {
      theme: 'Featured on the original Tony Hawk\'s Pro Skater 1 & 2',
      tracks: [
        { id: 254825686, artist: 'Goldfinger', title: 'Superman' },
        { id: 1442890442, artist: 'Primus', title: 'Jerry Was a Racecar Driver' },
        { id: 1450006275, artist: 'Papa Roach', title: 'Blood Brothers' },
        { id: 1485032585, artist: 'Millencolin', title: 'No Cigar' },
      ],
    },
    {
      theme: 'Prominent talkbox or vocoder',
      tracks: [
        { id: 1443825517, artist: 'Peter Frampton', title: 'Do You Feel Like We Do' },
        { id: 1422955211, artist: 'Bon Jovi', title: 'Livin\' On a Prayer' },
        { id: 332672898, artist: 'Zapp & Roger', title: 'More Bounce to the Ounce' },
        { id: 196426738, artist: 'Electric Light Orchestra', title: 'Mr. Blue Sky' },
      ],
    },
    {
      theme: 'Artists who were competitive athletes before music',
      tracks: [
        { id: 209564252, artist: 'Julio Iglesias', title: 'Begin the Beguine', note: 'Goalkeeper for Real Madrid Castilla before a car accident' },
        { id: 1443737237, artist: '2 Chainz', title: 'I\'m Different', note: 'Played NCAA Division I basketball at Alabama State' },
        { id: 1440919037, artist: 'Sheryl Crow', title: 'All I Wanna Do', note: 'All-state high-school hurdles medalist in Missouri' },
        { id: 724647729, artist: 'MC Hammer', title: 'U Can\'t Touch This', note: 'Oakland A\'s batboy/executive & minor league prospect' },
      ],
    },
  ],
};

export default puzzle;
