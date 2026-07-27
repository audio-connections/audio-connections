import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jessica Dreher',
  themes: [
    {
      theme: 'Weather Report',
      tracks: [
        { id: 1442454238, artist: 'R.E.M.', title: "So. Central Rain (I'm Sorry)" },
        { id: 947688607, artist: 'Red Hot Chili Peppers', title: 'Snow (Hey Oh)' },
        { id: 1429194116, artist: 'Natasha Bedingfield', title: 'Pocketful of Sunshine' },
        { id: 574051407, artist: 'AC/DC', title: 'Thunderstruck' },
      ],
    },
    {
      theme: 'THIS is American Idol',
      tracks: [
        { id: 984746114, artist: 'Adam Lambert', title: 'Ghost Town', note: 'Season 8 runner-up.' },
        { id: 214412768, artist: 'Daughtry', title: "It's Not Over", note: 'Chris Daughtry, Season 5, 4th place.' },
        { id: 337336592, artist: 'Kris Allen', title: "Live Like We're Dying", note: 'Season 8 winner — he beat Adam Lambert.' },
        { id: 1752741279, artist: 'Jax', title: "Victoria's Secret", note: 'Season 14, 3rd place.' },
      ],
    },
    {
      theme: 'The Luck o’ the Irish',
      tracks: [
        { id: 1443301193, artist: 'Snow Patrol', title: 'Chasing Cars', note: 'Frontman Gary Lightbody is from Bangor, Northern Ireland.' },
        { id: 1687585358, artist: 'Hozier', title: 'De Selby (Part 1)' },
        { id: 1440918941, artist: 'Thin Lizzy', title: 'The Boys Are Back in Town' },
        { id: 1443822819, artist: 'The Boomtown Rats', title: "I Don't Like Mondays" },
      ],
    },
    {
      theme: 'Songs in 7 (Seven Beats to the Bar)',
      tracks: [
        { id: 1479225946, artist: 'Dave Matthews Band', title: 'Seven', note: '7/4 — the meter it takes its name from.' },
        { id: 1474185844, artist: 'Tool', title: 'Ticks & Leeches', note: 'Drives on a 7/8 riff before shifting through other odd meters.' },
        { id: 1440646017, artist: 'Christophe Beck', title: 'Theme from Ant-Man', note: 'A march in 7/4.' },
        { id: 1586832546, artist: 'Cat Stevens', title: 'Rubylove', note: '7/8 — a rare pop example of the meter.' },
      ],
    },
  ],
};

export default puzzle;
