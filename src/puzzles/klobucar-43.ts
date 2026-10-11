import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Royal ranks in the title',
      tracks: [
        { id: 1444013390, artist: 'Gene Chandler', title: 'Duke of Earl' },
        { id: 456671351, artist: 'Spin Doctors', title: 'Two Princes' },
        { id: 1440820267, artist: 'ABBA', title: 'Dancing Queen' },
        { id: 1445094813, artist: 'Roger Miller', title: 'King of the Road' },
      ],
    },
    {
      theme: 'Prominent 12-string guitar',
      tracks: [
        { id: 153421332, artist: 'The Byrds', title: 'Mr. Tambourine Man', note: "Roger McGuinn's chiming Rickenbacker 12-string guitar intro and lead" },
        { id: 1441164417, artist: 'The Beatles', title: "A Hard Day's Night", note: "George Harrison's opening chord and solo on a Rickenbacker 12-string" },
        { id: 1440853370, artist: 'Tom Petty & The Heartbreakers', title: 'The Waiting', note: "Mike Campbell's jangly Rickenbacker 12-string guitar riff" },
        { id: 1442454239, artist: 'R.E.M.', title: 'Pretty Persuasion', note: "Peter Buck's signature arpeggiated 12-string Rickenbacker sound" },
      ],
    },
    {
      theme: 'Produced by Quincy Jones',
      tracks: [
        { id: 1444105756, artist: 'Lesley Gore', title: "It's My Party" },
        { id: 186166358, artist: 'Michael Jackson', title: 'Rock with You' },
        { id: 309576575, artist: 'George Benson', title: 'Give Me the Night' },
        { id: 1587041659, artist: 'Donna Summer', title: 'State of Independence' },
      ],
    },
    {
      theme: 'Musicians who published novels',
      tracks: [
        { id: 1826864089, artist: 'Leonard Cohen', title: 'Suzanne', note: 'Published the novels The Favourite Game (1963) and Beautiful Losers (1966)' },
        { id: 1435808593, artist: 'Nick Cave & The Bad Seeds', title: 'Red Right Hand', note: 'Nick Cave wrote the novels And the Ass Saw the Angel (1989) and The Death of Bunny Munro (2009)' },
        { id: 1445589202, artist: 'The Mountain Goats', title: 'This Year', note: 'Frontman John Darnielle published Wolf in White Van (2014) and Universal Harvester (2017)' },
        { id: 1440832545, artist: 'Steve Earle', title: 'Copperhead Road', note: "Published the novel I'll Never Get Out of This World Alive (2011)" },
      ],
    },
  ],
};

export default puzzle;
