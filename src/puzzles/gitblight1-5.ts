import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  constraint: 'Jazz hands at the ready — every track is a showtune',
  themes: [
    {
      theme: 'Patter songs',
      tracks: [
        { id: 1442948604, artist: 'Robert Preston', title: 'Ya Got Trouble', note: "The Music Man — the con man's rapid-fire sell" },
        { id: 1707958767, artist: 'Steve Martin', title: 'Which of the Pickwick Triplets Did It?', note: '"Death Rattle Dazzle" (Only Murders in the Building) — a Sondheim-style whodunit patter number' },
        { id: 1025212468, artist: 'Original Broadway Cast of Hamilton', title: 'Guns and Ships', note: "Hamilton — Lafayette's rapid-fire verse (Daveed Diggs)" },
        { id: 797527613, artist: 'The Pirates of Penzance', title: 'I Am the Very Model of a Modern Major-General', note: 'The Pirates of Penzance (Gilbert & Sullivan) — the ur-patter song' },
      ],
    },
    {
      theme: 'Villain songs',
      tracks: [
        { id: 1440661299, artist: 'Pat Carroll', title: 'Poor Unfortunate Souls', note: 'The Little Mermaid — Ursula, the sea witch' },
        { id: 272095308, artist: 'Danny Sewell', title: 'My Name', note: 'Oliver! — Bill Sikes announces himself' },
        { id: 79026982, artist: 'Robert Cuccioli', title: 'Confrontation', note: 'Jekyll & Hyde — Hyde takes over' },
        { id: 932410636, artist: 'Ray Walston', title: 'Those Were the Good Old Days', note: 'Damn Yankees — Applegate, the Devil, gloats' },
      ],
    },
    {
      theme: 'Movie → musical → movie',
      tracks: [
        { id: 159504663, artist: 'Matthew Broderick', title: 'I Wanna Be a Producer', note: 'The Producers — 1967 film → 2001 musical → 2005 film' },
        { id: 1454446818, artist: 'Nikki Blonsky', title: 'Good Morning Baltimore', note: 'Hairspray — 1988 film → 2002 musical → 2007 film' },
        { id: 1434903241, artist: 'Michelle Weeks, Tisha Campbell, Tichina Arnold, Ellen Greene & Rick Moranis', title: 'Skid Row (Downtown)', note: 'Little Shop of Horrors — 1960 film → 1982 musical → 1986 film' },
        { id: 1720486063, artist: "Auli'i Cravalho", title: "I'd Rather Be Me", note: 'Mean Girls — 2004 film → 2018 musical → 2024 film' },
      ],
    },
    {
      theme: 'Original song added for the film, Oscar-nominated for Best Original Song',
      tracks: [
        { id: 311574074, artist: 'Madonna', title: 'You Must Love Me', note: 'Evita (1996) — written for the film; WON Best Original Song' },
        { id: 464321089, artist: 'Beyoncé', title: 'Listen', note: 'Dreamgirls (2006) — written for the film; nominated' },
        { id: 1442461969, artist: 'Hugh Jackman', title: 'Suddenly', note: 'Les Misérables (2012) — written for the film; nominated' },
        { id: 1843485437, artist: 'Minnie Driver', title: 'Learn to Be Lonely', note: 'The Phantom of the Opera (2004) — written for the film; nominated' },
      ],
    },
  ],
};

export default puzzle;
