import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  themes: [
    {
      theme: 'Prominent harmonica',
      tracks: [
        { id: 1440646815, artist: 'Blues Traveler', title: 'But Anyway' },
        { id: 580708184, artist: 'Led Zeppelin', title: 'When the Levee Breaks' },
        { id: 158617575, artist: 'Billy Joel', title: 'Piano Man' },
        { id: 1440521779, artist: 'Supertramp', title: 'Take the Long Way Home' },
      ],
    },
    {
      theme: 'Title is a U.S. state capital',
      tracks: [
        { id: 1156311432, artist: 'My Chemical Romance', title: 'Helena', note: 'Montana' },
        { id: 1775760776, artist: 'Drugdealer', title: 'Madison', note: 'Wisconsin' },
        { id: 251002611, artist: 'Johnny Cash & June Carter', title: 'Jackson', note: 'Mississippi (only title in the group actually about the capital)' },
        { id: 1744420425, artist: 'Oasis', title: 'Columbia', note: 'South Carolina' },
      ],
    },
    {
      theme: 'Prominent songs from Stranger Things',
      tracks: [
        { id: 685585941, artist: 'The Clash', title: 'Should I Stay or Should I Go', note: "S1 - Will's touchstone in the Upside Down" },
        { id: 1473595046, artist: 'Limahl', title: 'Never Ending Story', note: "S3 - Dustin and Suzie's duet" },
        { id: 1675375090, artist: 'Kate Bush', title: 'Running Up That Hill', note: "S4 - Max's grounding song" },
        { id: 1746833484, artist: 'Prince & The Revolution', title: 'Purple Rain', note: 'Series finale - never licensed for film or TV before; the estate agreed on the strength of what S4 did for Kate Bush' },
      ],
    },
    {
      // DEFINITION IS PINNED to Muscle Shoals Sound Studio (3614 Jackson Highway,
      // Sheffield AL), NOT "Muscle Shoals" generally and NOT "backed by the
      // Swampers." Those are three different sets and that is where every
      // attribution fight lives: FAME Studios is a separate room down the road
      // with the same players (Aretha's 'I Never Loved a Man' is FAME, not this
      // studio), and the Rhythm Section also cut sessions elsewhere. All four
      // tiles below are 3614 Jackson Highway specifically.
      // REJECTED, and both traps are easy to fall back into:
      //  - 'Night Moves' is NOT this studio. It was cut at Nimbus Nine in
      //    TORONTO with local session players. Only four tracks on that album
      //    are Muscle Shoals and the title track is not one of them. The
      //    studio's own Wikipedia entry has a typo that reads as if the SONG
      //    was recorded here rather than part of the ALBUM — do not re-add it
      //    on the strength of that page.
      //  - 'Old Time Rock and Roll' is correct on the facts but spent in
      //    day-17 (released 2026-05-26).
      theme: 'Recorded at Muscle Shoals Sound Studio',
      tracks: [
        { id: 40287869, artist: 'R.B. Greaves', title: 'Take a Letter Maria', note: "the studio's very first hit, cut 19 August 1969" },
        { id: 1440812675, artist: 'The Rolling Stones', title: 'Wild Horses', note: 'Sticky Fingers, December 1969' },
        { id: 380589464, artist: 'Paul Simon', title: 'Kodachrome' },
        { id: 1440877852, artist: 'Bob Seger & The Silver Bullet Band', title: 'Mainstreet', note: 'the Swampers playing, not the Silver Bullet Band' },
      ],
    },
  ],
};

export default puzzle;
