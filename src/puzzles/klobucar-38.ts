import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'A chemical element in the song title',
      tracks: [
        { id: 785232524, artist: 'Black Sabbath', title: 'Iron Man', note: 'Iron (Fe)' },
        { id: 291896531, artist: 'Brooks & Dunn', title: 'Neon Moon', note: 'Neon (Ne)' },
        { id: 1440634112, artist: 'Evanescence', title: 'Lithium', note: 'Lithium (Li)' },
        { id: 1440881266, artist: 'Sia', title: 'Helium', note: 'Helium (He)' },
      ],
    },
    {
      theme: 'Songs driven by an iconic trumpet hook',
      tracks: [
        { id: 1440832696, artist: 'Bill Conti', title: 'Gonna Fly Now (Theme From "Rocky")', note: 'The Rocky fanfare — a #1 hit in 1977' },
        { id: 1530071135, artist: 'Herb Alpert & The Tijuana Brass', title: 'A Taste of Honey', note: "Herb Alpert's trumpet — won the Grammy for Record of the Year" },
        { id: 250520544, artist: 'Pérez Prado and His Orchestra', title: 'Cherry Pink and Apple Blossom White', note: "Billy Regis' swooping trumpet — #1 for 10 weeks in 1955" },
        { id: 1817217063, artist: 'Shakira', title: "Hips Don't Lie (feat. Wyclef Jean)", note: 'The trumpet hook is sampled from Jerry Rivera\'s 1992 "Amores Como el Nuestro"' },
      ],
    },
    {
      theme: 'Hit songs written by the Bee Gees for other artists',
      tracks: [
        { id: 1440844630, artist: 'Frankie Valli', title: 'Grease', note: 'Written by Barry Gibb for the Grease film' },
        { id: 185861190, artist: 'Barbra Streisand', title: 'Woman In Love', note: 'Written by Barry and Robin Gibb; Barry co-produced the Guilty album' },
        { id: 362557558, artist: 'Dionne Warwick', title: 'Heartbreaker', note: 'Written by Barry, Robin and Maurice Gibb' },
        { id: 1301495872, artist: "Destiny's Child", title: 'Emotion', note: 'Written by Barry and Robin Gibb; first a hit for Samantha Sang in 1978' },
      ],
    },
    {
      theme: 'Guest stars on The Muppet Show',
      tracks: [
        { id: 355055115, artist: 'Alice Cooper', title: 'Welcome to My Nightmare', note: "Season 3 (1978) — played the Devil's agent and sang this on the show" },
        { id: 1440929996, artist: 'Blondie', title: 'One Way or Another', note: 'Debbie Harry guest-starred in 1981 and sang this on the show' },
        { id: 175541237, artist: 'Harry Belafonte', title: 'Turn the World Around', note: 'Season 3 — sang this on the show surrounded by Muppet tribal masks' },
        { id: 872638018, artist: 'Linda Ronstadt', title: 'Blue Bayou', note: 'Season 5 — sang this on the show in a Muppet swamp' },
      ],
    },
  ],
};

export default puzzle;
