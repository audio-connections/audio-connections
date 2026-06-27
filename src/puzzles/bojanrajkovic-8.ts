import type { PuzzleContent } from "../types";

const puzzle: PuzzleContent = {
  author: "Bojan Rajkovic",
  themes: [
    {
      theme: "Songs with very polite titles",
      tracks: [
        { id: 1752214912, artist: "Sabrina Carpenter", title: "Please Please Please" },
        { id: 1450334169, artist: "Ariana Grande", title: "Thank U, Next" },
        { id: 1440829610, artist: "Justin Bieber", title: "Sorry" },
        { id: 187454524, artist: "Incubus", title: "Pardon Me" },
      ],
    },
    {
      theme: "Revenge songs",
      tracks: [
        { id: 255286939, artist: "Blu Cantrell", title: "Hit 'Em Up Style" },
        { id: 214696369, artist: "Carrie Underwood", title: "Before He Cheats" },
        { id: 309893745, artist: "The Chicks", title: "Goodbye Earl" },
        { id: 1031419960, artist: "Alanis Morissette", title: "You Oughta Know" },
      ],
    },
    {
      theme: "Songs by very large bands",
      tracks: [
        { id: 1746566980, artist: "Wu-Tang Clan", title: "C.R.E.A.M.", note: "Nine founding MCs from Staten Island" },
        { id: 716436758, artist: "Edward Sharpe & The Magnetic Zeros", title: "Home", note: "A ten-piece folk-rock collective" },
        { id: 926187670, artist: "Slipknot", title: "Psychosocial", note: "Nine masked, numbered members" },
        { id: 1249418625, artist: "Arcade Fire", title: "Wake Up", note: "Montréal's seven-ish-piece art-rock troupe" },
      ],
    },
    {
      theme: "Bathroom emergencies",
      tracks: [
        { id: 966661461, artist: "Jukebox the Ghost", title: "Hold It In", note: "Hold it in" },
        { id: 251002253, artist: "Johnny Cash", title: "Ring of Fire", note: "The morning after the spicy meal" },
        { id: 285143177, artist: "Foreigner", title: "Urgent", note: "When you gotta go, you gotta go" },
        { id: 413632188, artist: "Cascada", title: "Evacuate the Dancefloor", note: "Clear the room — fast" },
      ],
    },
  ],
};

export default puzzle;
