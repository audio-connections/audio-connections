import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Seasons in the title',
      tracks: [
        { id: 1423291785, artist: 'Donna Summer', title: 'Spring Affair' },
        { id: 1299774701, artist: 'Bananarama', title: 'Cruel Summer' },
        { id: 316905776, artist: 'Justin Hayward', title: 'Forever Autumn' },
        { id: 281086428, artist: 'Fleet Foxes', title: 'White Winter Hymnal' },
      ],
    },
    {
      theme: 'Driven by a Hammond organ riff',
      tracks: [
        { id: 723623690, artist: 'The Spencer Davis Group', title: "Gimme Some Lovin'" },
        { id: 1682051688, artist: 'Procol Harum', title: 'A Whiter Shade of Pale' },
        { id: 83155547, artist: 'Deep Purple', title: 'Hush' },
        { id: 159363080, artist: "Booker T. & The M.G.'s", title: 'Green Onions' },
      ],
    },
    {
      theme: 'Laura Nyro songs recorded by others',
      tracks: [
        { id: 303078895, artist: 'The 5th Dimension', title: 'Wedding Bell Blues' },
        { id: 257560341, artist: 'Blood, Sweat & Tears', title: 'And When I Die' },
        { id: 1440744529, artist: 'Three Dog Night', title: "Eli's Coming" },
        { id: 186226746, artist: 'Barbra Streisand', title: 'Stoney End' },
      ],
    },
    {
      theme: 'Musicians who exhibited visual art',
      tracks: [
        { id: 1726641914, artist: 'Björk', title: 'Stonemilker', note: 'Her touring exhibition Björk Digital presented immersive video and virtual-reality works.' },
        { id: 1653408137, artist: 'Joni Mitchell', title: 'Free Man in Paris', note: 'A painter of many of her album covers, she presented retrospective gallery exhibitions such as Voices (2000).' },
        { id: 1347896328, artist: 'David Bowie', title: 'Ashes to Ashes', note: 'A painter and sculptor, he held solo exhibitions including New Afro/Pagan and Work: 1975–1995 in London.' },
        { id: 1031003337, artist: 'Ron Wood', title: 'I Can Feel the Fire', note: 'Formally trained at Ealing Art College, he has exhibited his paintings and portraits in galleries worldwide.' },
      ],
    },
  ],
};

export default puzzle;
