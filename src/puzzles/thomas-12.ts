import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Thomas Ptacek',
  themes: [
    {
      theme: 'Song Name Becomes Band Name',
      tracks: [
        { id: 1644461511, artist: 'Talking Heads', title: 'Radio Head', note: 'Radiohead took their name from this song.' },
        { id: 724922233, artist: 'Roxy Music', title: 'Ladytron', note: 'Namesake of the synth-pop band Ladytron.' },
        { id: 695991370, artist: 'Bernard Cribbins', title: 'Right Said Fred', note: 'The band Right Said Fred is named after this novelty hit.' },
        { id: 847960918, artist: 'Ramones', title: 'Bad Brain', note: 'The hardcore band Bad Brains named themselves after this Ramones song.' },
      ],
    },
    {
      theme: 'christian rock',
      tracks: [
        { id: 785239198, artist: 'Black Sabbath', title: 'After Forever' },
        { id: 982476438, artist: 'Insane Clown Posse', title: 'Miracles' },
        { id: 724315470, artist: 'MC Hammer', title: 'Pray' },
        { id: 158580872, artist: 'Kansas', title: 'Hold On' },
      ],
    },
    {
      theme: 'Not Christian At All',
      tracks: [
        { id: 1174246806, artist: 'Depeche Mode', title: 'Personal Jesus' },
        { id: 1440890415, artist: 'XTC', title: 'Dear God' },
        { id: 1443063132, artist: 'JAY-Z', title: 'Holy Grail' },
        { id: 1444005843, artist: 'Chief Keef', title: 'Hallelujah' },
      ],
    },
    {
      theme: 'Technically Considered Punk Music',
      tracks: [
        { id: 1038568064, artist: 'Patti Smith', title: 'Gloria' },
        { id: 1440930363, artist: 'Blondie', title: 'Heart of Glass' },
        { id: 1445885135, artist: 'New York Dolls', title: 'Looking for a Kiss' },
        { id: 300965547, artist: 'Talking Heads', title: 'Heaven' },
      ],
    },
  ],
};

export default puzzle;
