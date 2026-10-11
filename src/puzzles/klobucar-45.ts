import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Imperative song titles',
      tracks: [
        { id: 1030462242, artist: 'The Isley Brothers', title: 'Shout, Pts. 1 & 2' },
        { id: 1365569655, artist: 'Frankie Goes to Hollywood', title: 'Relax' },
        { id: 738196409, artist: 'Ben E. King', title: 'Stand By Me' },
        { id: 594061859, artist: 'Fleetwood Mac', title: 'Go Your Own Way' },
      ],
    },
    {
      theme: 'Prominent bagpipes',
      tracks: [
        { id: 574124819, artist: 'AC/DC', title: "It's a Long Way to the Top (If You Wanna Rock 'N' Roll)", note: "Bon Scott's iconic bagpipe riffs and solo" },
        { id: 1440941189, artist: 'Wings', title: 'Mull of Kintyre', note: 'Features the Campbeltown Pipe Band throughout' },
        { id: 270340413, artist: 'John Farnham', title: "You're the Voice", note: 'Features an anthemic bagpipe solo played by Kevin Todd' },
        { id: 1485050464, artist: 'Dropkick Murphys', title: "I'm Shipping up to Boston", note: 'Driven by high-energy bagpipes and accordion' },
      ],
    },
    {
      theme: 'Springsteen compositions recorded by others',
      tracks: [
        { id: 209671962, artist: 'Patti Smith Group', title: 'Because the Night', note: 'Co-written with Bruce Springsteen, who gave Smith the unfinished track' },
        { id: 1199683433, artist: "Manfred Mann's Earth Band", title: 'Blinded By the Light', note: 'Written by Bruce Springsteen on Greetings from Asbury Park, N.J.' },
        { id: 367515038, artist: 'The Pointer Sisters', title: 'Fire', note: 'Written by Bruce Springsteen in 1977' },
        { id: 186039589, artist: 'Southside Johnny & The Asbury Jukes', title: 'Hearts of Stone', note: 'Written by Bruce Springsteen and given to Southside Johnny' },
      ],
    },
    {
      theme: 'Musicians who created comic books',
      tracks: [
        { id: 1438925812, artist: 'Gerard Way', title: "Baby You're a Haunted House", note: 'Created and wrote the Eisner Award-winning comic series The Umbrella Academy' },
        { id: 1086262258, artist: 'Lights', title: 'Up We Go', note: 'Wrote and illustrated the graphic novel series Skin&Earth' },
        { id: 1881652838, artist: 'Tom Morello', title: 'Every Step That I Take (feat. Portugal. The Man and Whethan)', note: 'Wrote the 12-issue Dark Horse comic book series Orchid' },
        { id: 1440915969, artist: 'Rob Zombie', title: 'Dragula', note: 'Wrote comic books including The Nail, Bigfoot, and Spookshow International' },
      ],
    },
  ],
};

export default puzzle;
