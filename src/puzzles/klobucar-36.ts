import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Beverages in the song title',
      tracks: [
        { id: 1440788926, artist: 'George Thorogood & The Destroyers', title: 'One Bourbon, One Scotch, One Beer' },
        { id: 1517447869, artist: 'Oasis', title: 'Champagne Supernova' },
        { id: 275018555, artist: 'Kelis', title: 'Milkshake' },
        { id: 1478343721, artist: 'Lizzo', title: 'Juice' },
      ],
    },
    {
      theme: 'Songs driven by an iconic synthesizer riff',
      tracks: [
        { id: 665413042, artist: 'Depeche Mode', title: "Just Can't Get Enough" },
        { id: 255966421, artist: 'Eurythmics', title: 'Sweet Dreams (Are Made of This)' },
        { id: 392429593, artist: 'a-ha', title: 'Take On Me' },
        { id: 196480329, artist: 'Europe', title: 'The Final Countdown' },
      ],
    },
    {
      theme: 'Hit songs produced by Rick Rubin',
      tracks: [
        { id: 1442879953, artist: 'LL COOL J', title: 'Going Back To Cali', note: 'Produced by Def Jam co-founder Rick Rubin (1988)' },
        { id: 945581840, artist: 'Red Hot Chili Peppers', title: 'Under the Bridge', note: 'Produced by Rick Rubin on Blood Sugar Sex Magik (1991)' },
        { id: 273714640, artist: 'System Of A Down', title: 'Chop Suey!', note: 'Produced by Rick Rubin on Toxicity (2001)' },
        { id: 1440824064, artist: 'Johnny Cash', title: "God's Gonna Cut You Down", note: "Produced by Rick Rubin for Cash's American V: A Hundred Highways (2006)" },
      ],
    },
    {
      theme: 'Pop and rock stars who composed the score for a Broadway musical',
      tracks: [
        { id: 1062401017, artist: 'Dolly Parton', title: 'Here You Come Again', note: 'Dolly Parton composed the Tony-nominated score for the 2009 Broadway musical 9 to 5' },
        { id: 795192837, artist: 'Cyndi Lauper', title: 'Time After Time', note: "Cyndi Lauper composed the score for Broadway's Kinky Boots, winning the 2013 Tony Award for Best Original Score" },
        { id: 1415203732, artist: 'Sting', title: 'Fields of Gold', note: 'Sting composed the Tony-nominated score for the 2014 Broadway musical The Last Ship' },
        { id: 216654835, artist: 'Duncan Sheik', title: 'Barely Breathing', note: "Duncan Sheik composed the score for Broadway's Spring Awakening, winning the 2007 Tony Award for Best Original Score" },
      ],
    },
  ],
};

export default puzzle;
