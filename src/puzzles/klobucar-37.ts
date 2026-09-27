import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: '"Beautiful" in the song title',
      tracks: [
        { id: 1443100723, artist: 'U2', title: 'Beautiful Day' },
        { id: 275820157, artist: 'Sean Kingston', title: 'Beautiful Girls' },
        { id: 1376707066, artist: 'Luke Combs', title: 'Beautiful Crazy' },
        { id: 1440848001, artist: 'John Lennon', title: 'Beautiful Boy (Darling Boy)' },
      ],
    },
    {
      theme: 'Songs driven by a prominent banjo',
      tracks: [
        { id: 40454154, artist: 'Eric Weissberg & Steve Mandell', title: 'Dueling Banjos', note: 'From the Deliverance soundtrack — a banjo-and-guitar duel' },
        { id: 1771710643, artist: 'Mumford & Sons', title: 'Little Lion Man', note: "Winston Marshall's banjo drives the whole track" },
        { id: 1440920597, artist: 'Taylor Swift', title: 'Mean', note: 'Opens on a bluegrass banjo riff' },
        { id: 724348972, artist: 'Keith Urban', title: 'Somebody Like You', note: 'Keith Urban plays a six-string banjo ("ganjo") riff' },
      ],
    },
    {
      theme: 'Hit songs written by Babyface for other artists',
      tracks: [
        { id: 1440926391, artist: 'Boyz II Men', title: "I'll Make Love to You", note: 'Written and produced by Babyface — 14 weeks at #1' },
        { id: 288167226, artist: 'Toni Braxton', title: 'Breathe Again', note: "Written by Babyface for Toni Braxton's debut album" },
        { id: 1068719484, artist: 'Brandy', title: "Sittin' Up In My Room", note: 'Written and produced by Babyface for the Waiting to Exhale soundtrack' },
        { id: 270246722, artist: 'TLC', title: 'Red Light Special', note: 'Written by Babyface for CrazySexyCool' },
      ],
    },
    {
      theme: 'Musicians who worked as schoolteachers',
      tracks: [
        { id: 1650882898, artist: 'Sting', title: 'Englishman In New York', note: "Taught at St Paul's First School in Cramlington before The Police" },
        { id: 355038523, artist: 'Roberta Flack', title: 'Killing Me Softly With His Song', note: 'Taught music and English in Farmville, NC, then at D.C. junior high schools' },
        { id: 1440907214, artist: 'Sheryl Crow', title: 'Soak Up the Sun', note: 'Music teacher at Kellison Elementary in Fenton, Missouri' },
        { id: 201409747, artist: 'Art Garfunkel', title: 'All I Know', note: 'Taught math at Litchfield Preparatory School in Connecticut (1971)' },
      ],
    },
  ],
};

export default puzzle;
