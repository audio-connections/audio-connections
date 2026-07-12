import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  constraint: '✈️🚂🚗 Planes, trains, automobiles… and then some',
  themes: [
    {
      theme: 'Trains 🚂',
      tracks: [
        { id: 169938961, artist: "The O'Jays", title: 'Love Train', note: '' },
        { id: 394943368, artist: 'Soul Asylum', title: 'Runaway Train', note: '' },
        { id: 1114231059, artist: 'The Monkees', title: 'Last Train to Clarksville', note: '' },
        { id: 1052498526, artist: 'Rod Stewart', title: 'Downtown Train', note: 'Written by Tom Waits' },
      ],
    },
    {
      theme: 'Planes ✈️',
      tracks: [
        { id: 498004218, artist: 'John Denver', title: 'Leaving on a Jet Plane', note: '' },
        { id: 1440843531, artist: 'Steve Miller Band', title: 'Jet Airliner', note: '' },
        { id: 368017285, artist: 'B.o.B', title: 'Airplanes', note: 'feat. Hayley Williams' },
        { id: 668403432, artist: 'Michael Bublé', title: 'Come Fly With Me', note: 'A Sinatra signature' },
      ],
    },
    {
      theme: 'Automobiles 🚗 — a car model in the title',
      tracks: [
        { id: 302112136, artist: 'Wilson Pickett', title: 'Mustang Sally', note: 'Ford Mustang' },
        { id: 1576786761, artist: 'Natalie Cole', title: 'Pink Cadillac', note: 'A Bruce Springsteen cover' },
        { id: 1423343703, artist: 'Commander Cody', title: 'Hot Rod Lincoln', note: '' },
        { id: 258627346, artist: 'Alan Jackson', title: 'Mercury Blues', note: 'The Ford Mercury, not the planet' },
      ],
    },
    {
      theme: '…and Bicycles 🚲',
      tracks: [
        { id: 726341452, artist: 'Kraftwerk', title: 'Tour de France', note: "Cycling's greatest race" },
        { id: 1452848752, artist: 'Katie Melua', title: 'Nine Million Bicycles', note: '' },
        { id: 1440767057, artist: 'Flobots', title: 'Handlebars', note: 'Riding a bike with no handlebars' },
        { id: 1450165157, artist: 'The Mixtures', title: 'The Pushbike Song', note: '' },
      ],
    },
  ],
};

export default puzzle;
