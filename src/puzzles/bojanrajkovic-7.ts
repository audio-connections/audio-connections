import type { PuzzleContent } from "../types";

const puzzle: PuzzleContent = {
  author: "Bojan Rajkovic",
  themes: [
    {
      theme: "Cats, cats, cats",
      tracks: [
        { id: 1638770087, artist: "The Cure", title: "The Lovecats" },
        { id: 806224715, artist: "The Red Jumpsuit Apparatus", title: "Cat and Mouse" },
        { id: 40286679, artist: "Harry Chapin", title: "Cat's in the Cradle" },
        { id: 160423223, artist: "Al Stewart", title: "Year of the Cat" },
      ],
    },
    {
      theme: "The Land Down Under",
      tracks: [
        { id: 402297422, artist: "Men at Work", title: "Overkill", note: "Melbourne" },
        { id: 2859582, artist: "Jet", title: "Cold Hard Bitch", note: "Melbourne" },
        { id: 1440838488, artist: "Tame Impala", title: "The Less I Know the Better", note: "Perth" },
        { id: 1876026820, artist: "King Gizzard & the Lizard Wizard", title: "Rattlesnake", note: "Melbourne" },
      ],
    },
    {
      theme: "Off the band's self-titled album",
      tracks: [
        { id: 723895262, artist: "Wilson Phillips", title: "Hold On", note: "Their 1990 debut" },
        { id: 1088527515, artist: "The Cars", title: "Just What I Needed", note: "Their 1978 debut" },
        { id: 307029144, artist: "Dire Straits", title: "Sultans of Swing", note: "Their 1978 debut" },
        { id: 1572046436, artist: "Metallica", title: "Enter Sandman", note: "Their fifth (1991) — the 'Black Album'" },
      ],
    },
    {
      theme: "The Fairport Connection",
      tracks: [
        { id: 1443434869, artist: "Richard Thompson", title: "Beeswing", note: "A founding member, on guitar" },
        { id: 1444195546, artist: "Sandy Denny", title: "Who Knows Where the Time Goes", note: "Their lead singer, 1968–69" },
        { id: 1442256082, artist: "Fairport Convention", title: "Meet on the Ledge", note: "The band itself — their enduring anthem" },
        { id: 1629119630, artist: "Steeleye Span", title: "All Around My Hat", note: "Founded by Ashley Hutchings, Fairport's original bassist" },
      ],
    },
  ],
};

export default puzzle;
