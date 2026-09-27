import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Musical instruments in the song title',
      tracks: [
        { id: 186224715, artist: 'Donovan', title: 'Hurdy Gurdy Man' },
        { id: 251016848, artist: 'T. Rex', title: 'Bang a Gong (Get It On)' },
        { id: 1440914018, artist: 'Taylor Swift', title: 'Teardrops On My Guitar' },
        { id: 840493985, artist: 'Jason Derulo', title: 'Trumpets' },
      ],
    },
    {
      theme: 'Songs featuring a prominent violin or fiddle hook',
      tracks: [
        { id: 194365235, artist: 'The Charlie Daniels Band', title: 'The Devil Went Down to Georgia' },
        { id: 1490914106, artist: 'Dexys Midnight Runners', title: 'Come On Eileen' },
        { id: 1440885120, artist: 'The Verve', title: 'Bitter Sweet Symphony' },
        { id: 992093768, artist: 'Clean Bandit', title: 'Rather Be' },
      ],
    },
    {
      theme: 'Hit songs written or co-written by Barry Gibb for other artists',
      tracks: [
        { id: 1144228138, artist: 'Samantha Sang', title: 'Emotion', note: 'Written by Barry and Robin Gibb, featuring Barry Gibb on harmony vocals' },
        { id: 360749620, artist: 'Frankie Valli', title: 'Grease', note: 'Written solely by Barry Gibb as the title song for the 1978 film Grease' },
        { id: 185861190, artist: 'Barbra Streisand', title: 'Woman In Love', note: "Written by Barry and Robin Gibb for Streisand's 1980 album Guilty" },
        { id: 362557558, artist: 'Dionne Warwick', title: 'Heartbreaker', note: 'Written by Barry, Robin, and Maurice Gibb and co-produced by Barry Gibb' },
      ],
    },
    {
      theme: '"Sibling" bands whose members aren\'t actually related',
      tracks: [
        { id: 1440492768, artist: 'The Righteous Brothers', title: "You've Lost That Lovin' Feelin'", note: "Bill Medley and Bobby Hatfield were not related; a Marine in their audience shouted 'That was righteous, brothers!'" },
        { id: 1111354162, artist: 'The Doobie Brothers', title: 'Listen to the Music', note: "No band members are related; 'Doobie' came from California slang for a marijuana joint" },
        { id: 714366406, artist: 'The Chemical Brothers', title: "Block Rockin' Beats", note: "British duo Tom Rowlands and Ed Simons are not related; originally performed as 'The Dust Brothers'" },
        { id: 1445879947, artist: 'Scissor Sisters', title: 'Take Your Mama', note: "None of the band's five members (Jake Shears, Babydaddy, Ana Matronic, Del Marquis, Randy Real) are related" },
      ],
    },
  ],
};

export default puzzle;
