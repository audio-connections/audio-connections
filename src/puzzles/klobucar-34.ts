import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Geometric shapes in the song title',
      tracks: [
        { id: 1445732940, artist: 'Elton John', title: 'Circle of Life' },
        { id: 1123076813, artist: 'Coldplay', title: 'Square One' },
        { id: 198227598, artist: 'Toto', title: 'Hold the Line' },
        { id: 1440838104, artist: 'Nine Inch Nails', title: 'The Downward Spiral' },
      ],
    },
    {
      theme: 'Songs that open with an iconic piano riff',
      tracks: [
        { id: 1440865959, artist: 'Vanessa Carlton', title: 'A Thousand Miles' },
        { id: 821031488, artist: 'The Fray', title: 'How to Save a Life' },
        { id: 258604737, artist: 'Sara Bareilles', title: 'Love Song' },
        { id: 255953233, artist: 'Bruce Hornsby & The Range', title: 'The Way It Is' },
      ],
    },
    {
      theme: 'Hit songs produced or co-produced by Nile Rodgers',
      tracks: [
        { id: 301649381, artist: 'Chic', title: 'Le Freak', note: 'Written and produced by Nile Rodgers and Bernard Edwards' },
        { id: 121052796, artist: 'Sister Sledge', title: 'We Are Family', note: 'Written and produced by Nile Rodgers and Bernard Edwards' },
        { id: 80815215, artist: 'Madonna', title: 'Like a Virgin', note: 'Produced by Nile Rodgers' },
        { id: 693606402, artist: 'Duran Duran', title: 'Notorious', note: 'Produced by Nile Rodgers' },
      ],
    },
    {
      theme: 'Artists who performed at the 1969 Woodstock Festival',
      tracks: [
        { id: 265816708, artist: 'Santana', title: 'Black Magic Woman', note: 'Santana delivered a legendary breakthrough performance at Woodstock in August 1969' },
        { id: 281811771, artist: 'Jefferson Airplane', title: 'White Rabbit', note: 'Jefferson Airplane performed their famous set at Woodstock on Sunday morning, August 17, 1969' },
        { id: 917030915, artist: 'Janis Joplin', title: 'Me and Bobby McGee', note: 'Janis Joplin performed a historic 10-song set at Woodstock in August 1969' },
        { id: 41229186, artist: 'Arlo Guthrie', title: "Alice's Restaurant Massacree", note: 'Arlo Guthrie performed on Friday night at Woodstock, August 15, 1969' },
      ],
    },
  ],
};

export default puzzle;
