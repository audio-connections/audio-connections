import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Specific anatomical body parts in the song title',
      tracks: [
        { id: 1440825700, artist: 'Tears for Fears', title: 'Head Over Heels' },
        { id: 1510827146, artist: 'Beck', title: 'Devils Haircut' },
        { id: 254685026, artist: 'Survivor', title: 'Eye of the Tiger' },
        { id: 1445877561, artist: 'Pat Benatar', title: 'Heartbreaker' },
      ],
    },
    {
      theme: 'Songs that open directly with the chorus before the first verse',
      tracks: [
        { id: 190655992, artist: 'Kansas', title: 'Carry On Wayward Son', note: 'Opens directly with "Carry on my wayward son..."' },
        { id: 169782152, artist: 'Quiet Riot', title: 'Cum On Feel the Noize', note: 'Opens directly with "Girls, rock your boys..."' },
        { id: 1443232307, artist: 'The Who', title: 'You Better You Bet', note: 'Opens directly with "You better you better you bet..."' },
        { id: 1881685586, artist: 'Joan Jett & The Blackhearts', title: 'I Love Rock \'N Roll', note: 'Opens directly with "I love rock \'n roll..."' },
      ],
    },
    {
      theme: 'Hit songs written or co-written by Max Martin',
      tracks: [
        { id: 283567164, artist: 'Backstreet Boys', title: 'I Want It That Way', note: 'Written and produced by Max Martin' },
        { id: 715891620, artist: 'Katy Perry', title: 'I Kissed a Girl', note: 'Co-written and produced by Max Martin' },
        { id: 303171383, artist: '*NSYNC', title: 'It\'s Gonna Be Me', note: 'Co-written by Max Martin' },
        { id: 304745146, artist: 'Robyn', title: 'Show Me Love', note: 'Co-written by Max Martin and Denniz Pop' },
      ],
    },
    {
      theme: 'Rock bands named after classic literature, novels, or poetry',
      tracks: [
        { id: 1440860171, artist: 'Steppenwolf', title: 'Born to Be Wild', note: 'Named after Hermann Hesse\'s novel Steppenwolf' },
        { id: 1050415253, artist: 'The Velvet Underground', title: 'Sweet Jane', note: 'Named after Michael Leigh\'s novel The Velvet Underground' },
        { id: 439593478, artist: 'Joy Division', title: 'Love Will Tear Us Apart', note: 'Named after the House of Dolls novel Joy Division' },
        { id: 396483776, artist: 'Genesis', title: 'Invisible Touch', note: 'Named after the Book of Genesis' },
      ],
    },
  ],
};

export default puzzle;
