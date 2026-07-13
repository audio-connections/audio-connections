import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: '"Rain" in the title',
      tracks: [
        { id: 1440896193, artist: "Guns N' Roses", title: 'November Rain', note: '' },
        { id: 1544491988, artist: 'Adele', title: 'Set Fire to the Rain', note: '' },
        { id: 673369645, artist: 'Milli Vanilli', title: 'Blame It On the Rain', note: '' },
        { id: 206869247, artist: 'Eurythmics', title: 'Here Comes the Rain Again', note: '' },
      ],
    },
    {
      theme: '"Yeah" in the title',
      tracks: [
        { id: 1444006984, artist: 'Yello', title: 'Oh Yeah', note: "Chick-chicka-chickahhh — Ferris Bueller's Day Off" },
        { id: 386153478, artist: 'Usher', title: 'Yeah! (feat. Lil Jon & Ludacris)', note: '' },
        { id: 1108209449, artist: 'Chris Brown', title: 'Yeah 3X', note: '' },
        { id: 135130107, artist: 'The Flaming Lips', title: 'The Yeah Yeah Yeah Song', note: '' },
      ],
    },
    {
      theme: 'Songs from rock operas',
      tracks: [
        { id: 1461215934, artist: 'The Who', title: "We're Not Gonna Take It", note: 'Tommy (1969) — not the Twisted Sister song' },
        { id: 1065976170, artist: 'Pink Floyd', title: 'Comfortably Numb', note: 'The Wall (1979)' },
        { id: 1161539471, artist: 'Green Day', title: 'American Idiot', note: 'American Idiot (2004)' },
        { id: 1440714786, artist: 'Styx', title: 'Mr. Roboto', note: 'Kilroy Was Here (1983)' },
      ],
    },
    {
      theme: 'Performed in comically oversized clothing',
      tracks: [
        { id: 1452805016, artist: 'Elton John', title: 'Pinball Wizard', note: 'Giant Doc Martens boots in Tommy (1975)' },
        { id: 290073045, artist: 'Talking Heads', title: 'Girlfriend Is Better (Live)', note: "David Byrne's big suit in Stop Making Sense" },
        { id: 250500433, artist: '"Weird Al" Yankovic', title: 'Fat', note: 'The fat suit, parodying "Bad"' },
        { id: 302943332, artist: 'Missy Elliott', title: 'The Rain (Supa Dupa Fly)', note: 'The inflatable vinyl suit in the video' },
      ],
    },
  ],
};

export default puzzle;
