import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Footwear in the title',
      tracks: [
        { id: 1576574977, artist: 'Nancy Sinatra', title: "These Boots Are Made for Walkin'" },
        { id: 671019789, artist: 'Elvis Presley', title: 'Blue Suede Shoes' },
        { id: 213008991, artist: 'Paolo Nutini', title: 'New Shoes' },
        { id: 529574619, artist: 'Paul Simon', title: 'Diamonds On the Soles of Her Shoes' },
      ],
    },
    {
      theme: 'Open with a nonmusical sound effect',
      tracks: [
        { id: 1665303764, artist: 'Pink Floyd', title: 'Money', note: 'Opens with a cash register and jingling coins' },
        { id: 158618443, artist: 'Billy Joel', title: 'You May Be Right', note: 'Opens with shattering glass' },
        { id: 640047752, artist: 'The Doors', title: 'Riders on the Storm', note: 'Opens with thunder and rain' },
        { id: 1441133197, artist: 'The Beatles', title: 'Back In the U.S.S.R.', note: 'Opens with a jet engine' },
      ],
    },
    {
      theme: 'Written by Jim Steinman',
      tracks: [
        { id: 303178223, artist: 'Air Supply', title: 'Making Love out of Nothing at All' },
        { id: 1473319246, artist: 'Céline Dion', title: "It's All Coming Back to Me Now" },
        { id: 265482646, artist: 'Barry Manilow', title: "Read 'em and Weep" },
        { id: 991385388, artist: 'Meat Loaf', title: "Two Out of Three Ain't Bad" },
      ],
    },
    {
      theme: 'Musicians who started as child actors',
      tracks: [
        { id: 1453336216, artist: 'Drake', title: 'Best I Ever Had', note: 'Starred as Jimmy Brooks on Degrassi: The Next Generation' },
        { id: 1440659919, artist: 'Fergie', title: "Big Girls Don't Cry", note: 'Starred on the children\'s television show Kids Incorporated as Stacy Ferguson' },
        { id: 883276315, artist: 'Jenny Lewis', title: 'Just One of the Guys', note: 'Child actress in Troop Beverly Hills and The Wizard before fronting Rilo Kiley' },
        { id: 1440649311, artist: 'Demi Lovato', title: 'Cool for the Summer', note: 'Started as a child actress on Barney & Friends before Disney Channel stardom' },
      ],
    },
  ],
};

export default puzzle;
