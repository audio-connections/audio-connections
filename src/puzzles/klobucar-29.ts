import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Song titles ending with the word "It"',
      tracks: [
        { id: 336673792, artist: 'Devo', title: 'Whip It' },
        { id: 732709942, artist: 'Salt-N-Pepa', title: 'Push It' },
        { id: 1444081381, artist: 'Kool & The Gang', title: 'Get Down On It' },
        { id: 263685000, artist: 'Metro Station', title: 'Shake It' },
      ],
    },
    {
      theme: 'Songs featuring a dramatic upward key change (modulation) in the final chorus',
      tracks: [
        { id: 1422955211, artist: 'Bon Jovi', title: 'Livin\' On a Prayer', note: 'Famous minor-third truck driver\'s modulation from E minor to G minor' },
        { id: 626205216, artist: 'Beyoncé', title: 'Love On Top', note: 'Features four consecutive upward key changes in the climactic final section' },
        { id: 551515758, artist: 'Michael Jackson', title: 'Man in the Mirror', note: 'Iconic dramatic key change from G-sharp major to A-flat major on "Make that... CHANGE!"' },
        { id: 388152024, artist: 'Whitney Houston', title: 'I Have Nothing', note: 'Dramatic whole-step upward key modulation into the soaring final chorus' },
      ],
    },
    {
      theme: 'Musicians inducted into the Rock and Roll Hall of Fame as both a solo artist and band member',
      tracks: [
        { id: 993867446, artist: 'Tina Turner', title: 'What\'s Love Got to Do with It', note: 'Inducted with Ike & Tina Turner (1991) and as a solo artist (2021)' },
        { id: 987872731, artist: 'Peter Gabriel', title: 'Sledgehammer', note: 'Inducted with Genesis (2010) and as a solo artist (2014)' },
        { id: 1067474759, artist: 'Curtis Mayfield', title: 'Move On Up', note: 'Inducted with The Impressions (1991) and as a solo artist (1999)' },
        { id: 135132767, artist: 'Neil Young', title: 'Harvest Moon', note: 'Inducted with Buffalo Springfield (1997) and as a solo artist (1995)' },
      ],
    },
    {
      theme: 'Artists who played every instrument on the recording',
      tracks: [
        { id: 258512044, artist: 'Foo Fighters', title: 'This Is a Call', note: 'Dave Grohl played drums, bass, guitar, and vocals on the entire debut album' },
        { id: 723338326, artist: 'Lenny Kravitz', title: 'Fly Away', note: 'Lenny Kravitz performed all vocals, electric guitars, bass, and drums' },
        { id: 1084074830, artist: 'Todd Rundgren', title: 'I Saw the Light', note: 'Todd Rundgren performed all vocals and played every instrument on Something/Anything?' },
        { id: 1830553336, artist: 'John Fogerty', title: 'The Old Man Down The Road', note: 'John Fogerty played every instrument and sang all parts on the Centerfield album' },
      ],
    },
  ],
};

export default puzzle;
