import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Bands formed while attending college / university',
      tracks: [
        { id: 20833655, artist: 'Talking Heads', title: 'Psycho Killer', note: 'Rhode Island School of Design' },
        { id: 270425151, artist: 'Vampire Weekend', title: 'A-Punk', note: 'Columbia University' },
        { id: 1027465608, artist: 'Pixies', title: 'Where Is My Mind?', note: 'UMass Amherst' },
        { id: 1422693816, artist: 'R.E.M.', title: 'Losing My Religion', note: 'University of Georgia' },
      ],
    },
    {
      theme: 'Colors in the song title',
      tracks: [
        { id: 264135997, artist: 'New Order', title: 'Blue Monday' },
        { id: 1440811686, artist: 'Soundgarden', title: 'Black Hole Sun' },
        { id: 1122782283, artist: 'Coldplay', title: 'Yellow' },
        { id: 1445664201, artist: 'UB40', title: 'Red Red Wine' },
      ],
    },
    {
      theme: 'Iconic spoken-word intro',
      tracks: [
        { id: 1229320470, artist: 'Prince & The Revolution', title: 'Let\'s Go Crazy', note: '"Dearly beloved, we are gathered here today…"' },
        { id: 1443011600, artist: 'Sir Mix-A-Lot', title: 'Baby Got Back', note: '"Oh my god, Becky, look at her butt"' },
        { id: 909398565, artist: 'The Shangri-Las', title: 'Leader of the Pack', note: '"Is she really going out with him?"' },
        { id: 991385389, artist: 'Meat Loaf', title: 'Paradise By the Dashboard Light', note: 'Phil Rizzuto\'s famous baseball play-by-play broadcast interlude' },
      ],
    },
    {
      theme: 'Bands named after places they aren\'t from',
      tracks: [
        { id: 301027918, artist: 'America', title: 'A Horse With No Name', note: 'Formed in London, England' },
        { id: 387194076, artist: 'Berlin', title: 'Take My Breath Away', note: 'Formed in Los Angeles, California' },
        { id: 1343375764, artist: 'Beirut', title: 'Elephant Gun', note: 'Formed in Santa Fe, New Mexico' },
        { id: 1651256476, artist: 'of Montreal', title: 'Wraith Pinned to the Mist and Other Games', note: 'Formed in Athens, Georgia' },
      ],
    },
  ],
};

export default puzzle;
