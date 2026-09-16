import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'David Adrian',
  constraint: 'TV over the years',
  themes: [
    {
      theme: '2010s',
      tracks: [
        { id: 665738402, artist: 'Regina Spektor', title: "You've Got Time", note: 'Orange Is the New Black (2013-2019)' },
        { id: 1440799057, artist: 'Ramin Djawadi', title: 'Main Title', note: 'Game of Thrones (2011-2019)' },
        { id: 1274656057, artist: 'Grouplove', title: "Back in the 90's", note: 'Bojack Horseman (2014-2020)' },
        { id: 1512826305, artist: 'Zooey Deschanel', title: 'Hey Girl', note: 'New Girl (2011-2018)' },
      ],
    },
    {
      theme: '2000s',
      tracks: [
        { id: 270909614, artist: 'Tom Waits', title: 'Way Down in the Hole', note: 'The Wire (2002-2008)' },
        { id: 1668262884, artist: 'The Dandy Warhols', title: 'We Used to Be Friends', note: 'Veronica Mars (2004-2007, 2014, 2019)'},
        { id: 1444166874, artist: 'Lazlo Bane', title: 'Superman', note: 'Scrubs (2001-2009, 2010, 2026)' },
        { id: 169731532, artist: 'Phantom Planet', title: 'California', note: 'The O.C. (2003-2007)' },
      ],
    },
    {
      theme: '90s',
      tracks: [
        { id: 373221221, artist: 'The Rembrandts', title: "I'll Be There for You", note: 'Friends (1994-2004)' },
        { id: 206201765, artist: 'DJ Jazzy Jeff', title: 'The Fresh Prince of Bel-Air', note: 'The Fresh Prince of Bel-Air (1990-1996)' },
        { id: 252563438, artist: 'Love Spit Love', title: 'How Soon Is Now?', note: 'Charmed (1998-2006)' },
        { id: 1444118093, artist: 'Ron Wasserman', title: 'Go Go Power Rangers', note: 'Mighty Morphin Power Rangers (1993-1995)' },
      ],
    },
    {
      theme: '80s',
      tracks: [
        { id: 7197543, artist: 'Gary Portnoy', title: 'Where Everybody Knows Your Name', note: 'Cheers (1982-1993)' },
        { id: 1455252355, artist: 'Carly Rae Jepsen', title: 'Everywhere You Look', note: 'Full House [cover of Jesse Frederick] (1987-1995)' },
        { id: 497246623, artist: 'Andrew Gold', title: 'Thank You for Being a Friend', note: 'Golden Girls (1985-1992)' },
        { id: 302076273, artist: 'B.J. Thomas', title: 'As Long As We Got Each Other', note: 'Growing Pains (1985-1992)' },
      ],
    },
  ],
};

export default puzzle;
