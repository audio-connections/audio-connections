import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Evil Donut :)',
  themes: [
    {
      theme: 'Educational songs',
      tracks: [
        { id: 1883466250, artist: 'AsapSCIENCE', title: 'The Pi Song 4.0 (400 Digits of Π)' },
        { id: 1593491151, artist: 'Hopscotch Songs', title: 'Climate Change Song' },
        { id: 1538239576, artist: 'Animaniacs', title: "Yakko's World" },
        { id: 674893854, artist: 'They Might Be Giants', title: 'Why Does The Sun Shine?' },
      ],
    },
    {
      theme: 'Williams (Williamses?)',
      tracks: [
        { id: 1440860872, artist: 'John Williams', title: 'Theme from Jurassic Park' },
        { id: 1452786717, artist: 'will.i.am', title: 'I Like To Move It' },
        { id: 863835363, artist: 'Pharrell Williams', title: 'Happy' },
        { id: 1846316299, artist: 'William Toll', title: 'Here I Am' },
      ],
    },
    {
      theme: 'Nonsense Lyrics',
      tracks: [
        { id: 1440631169, artist: 'Phineas and the Ferbtones', title: 'Gitchee Gitchee Goo' },
        { id: 1440936639, artist: 'Little Richard', title: 'Tutti Frutti' },
        { id: 1775299679, artist: 'Adriano Celentano', title: 'Prisencolinensinainciusol' },
        { id: 1443408342, artist: 'Otis Day & The Knights', title: 'Shamalamma Ding Dong' },
      ],
    },
    {
      theme: 'Braggadocious Songs',
      tracks: [
        { id: 1440635402, artist: 'Jemaine Clement', title: 'Shiny', note: 'Moana - Tamatoa brags about his treasure-encrusted shell' },
        { id: 353859978, artist: 'DJ Khaled', title: 'All I Do Is Win', note: 'No matter what!' },
        { id: 1440766607, artist: 'Kanye West & JAŸ-Z', title: "Who Gon Stop Me", note: 'Ye and Z are doing well for themselves' },
        { id: 1442903154, artist: 'Keri Hilson', title: 'Pretty Girl Rock', note: "Don't hate her 'cause she's beautiful" },
      ],
    },
  ],
};

export default puzzle;
