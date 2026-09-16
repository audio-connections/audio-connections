import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Foreign words or phrases in the song title',
      tracks: [
        { id: 1440825144, artist: 'Dean Martin', title: "That's Amore", note: 'Italian: "Amore" means love' },
        { id: 726155181, artist: 'Kraftwerk', title: 'Autobahn', note: 'German: "Autobahn" means motorway / highway' },
        { id: 1676601752, artist: 'Doris Day', title: 'Que Sera, Sera (Whatever Will Be, Will Be)', note: 'Spanish: "Que Sera, Sera" means whatever will be, will be' },
        { id: 1095422692, artist: 'Falco', title: 'Rock Me Amadeus', note: 'Latin: "Amadeus" means loved by God' },
      ],
    },
    {
      theme: 'Songs that begin with an unaccompanied drum intro',
      tracks: [
        { id: 1788380899, artist: 'Twisted Sister', title: "We're Not Gonna Take It" },
        { id: 1713861904, artist: 'Iron Maiden', title: 'Where Eagles Dare' },
        { id: 1440844995, artist: 'blink-182', title: 'First Date' },
        { id: 776001216, artist: 'Arctic Monkeys', title: 'R U Mine?' },
      ],
    },
    {
      theme: 'Hit songs written or co-written by Stevie Wonder for other artists',
      tracks: [
        { id: 1447414676, artist: 'Smokey Robinson & The Miracles', title: 'The Tears of a Clown', note: 'Music co-written with Stevie Wonder' },
        { id: 1411666388, artist: 'The Spinners', title: "It's a Shame", note: 'Written and produced by Stevie Wonder' },
        { id: 1444101111, artist: 'Rufus', title: 'Tell Me Something Good', note: 'Written by Stevie Wonder for Chaka Khan' },
        { id: 933582148, artist: 'Aretha Franklin', title: "Until You Come Back to Me (That's What I'm Gonna Do)", note: 'Written by Stevie Wonder and Clarence Paul' },
      ],
    },
    {
      theme: 'Musicians inducted into the Country Music Hall of Fame',
      tracks: [
        { id: 158498945, artist: 'Willie Nelson', title: 'On the Road Again', note: 'Inducted into the Country Music Hall of Fame in 1993' },
        { id: 1440840853, artist: 'Kenny Rogers', title: 'The Gambler', note: 'Inducted into the Country Music Hall of Fame in 2013' },
        { id: 1440849334, artist: 'George Strait', title: 'Amarillo by Morning', note: 'Inducted into the Country Music Hall of Fame in 2006' },
        { id: 1440826094, artist: 'Patsy Cline', title: 'Crazy', note: 'Inducted into the Country Music Hall of Fame in 1973' },
      ],
    },
  ],
};

export default puzzle;
