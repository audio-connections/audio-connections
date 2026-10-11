import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Possessive name in the title',
      tracks: [
        { id: 286005748, artist: 'Rick Springfield', title: "Jessie's Girl" },
        { id: 712721787, artist: 'Fountains Of Wayne', title: "Stacy's Mom" },
        { id: 1440913644, artist: 'Aerosmith', title: "Janie's Got a Gun" },
        { id: 723497116, artist: 'Danny Wilson', title: "Mary's Prayer" },
      ],
    },
    {
      theme: 'Prominent sitar or electric sitar',
      tracks: [
        { id: 1441164865, artist: 'The Beatles', title: 'Within You Without You', note: 'Features George Harrison playing sitar and dilruba' },
        { id: 1440745782, artist: 'The Rolling Stones', title: 'Paint It, Black', note: 'Driven by Brian Jones on sitar' },
        { id: 1650885292, artist: 'Steely Dan', title: 'Do It Again', note: 'Features Denny Dias playing an electric sitar solo' },
        { id: 283974709, artist: 'The Box Tops', title: 'Cry Like a Baby', note: 'Opens with Reggie Young on electric sitar' },
      ],
    },
    {
      theme: 'Written by Shel Silverstein',
      tracks: [
        { id: 824812910, artist: 'Johnny Cash', title: 'A Boy Named Sue (Live)', note: 'Written by Shel Silverstein, who gave Cash the song before the San Quentin concert' },
        { id: 186230923, artist: 'Dr. Hook', title: 'Cover of the Rolling Stone', note: 'Written by Shel Silverstein for the album Sloppy Seconds' },
        { id: 1577449977, artist: 'Loretta Lynn', title: "One's On The Way", note: 'Written by Shel Silverstein' },
        { id: 740360680, artist: 'Bobby Bare', title: 'Marie Laveau', note: 'Written by Shel Silverstein and Baxter Taylor' },
      ],
    },
    {
      theme: 'Musicians with asteroids named after them',
      tracks: [
        { id: 96216872, artist: 'Enya', title: 'Only Time', note: 'Minor planet 6433 Enya was named in her honour in 1997' },
        { id: 1450958727, artist: 'Vangelis', title: 'Chariots of Fire (Titles)', note: 'Asteroid 6354 Vangelis was named after the Greek composer in 1995' },
        { id: 1562897107, artist: 'Frank Zappa', title: 'Peaches En Regalia', note: 'Asteroid 3834 Zappa was named in his honour in 1994' },
        { id: 6781081252, artist: 'Freddie Mercury', title: 'The Great Pretender', note: 'Asteroid 17473 Freddiemercury was named for him on what would have been his 70th birthday' },
      ],
    },
  ],
};

export default puzzle;
