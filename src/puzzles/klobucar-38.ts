import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Jonathon Klobucar',
  themes: [
    {
      theme: 'Songs that became stadium chants',
      tracks: [
        { id: 1423345807, artist: 'Neil Diamond', title: 'Sweet Caroline', note: 'Sung by the crowd at Fenway Park in the 8th inning of Red Sox games' },
        { id: 1533513537, artist: 'The White Stripes', title: 'Seven Nation Army', note: 'Its riff became a football-terrace chant around the world' },
        { id: 1434901987, artist: 'Steam', title: 'Na Na Hey Hey Kiss Him Goodbye', note: 'Crowds sing it to taunt departing opponents and pulled pitchers' },
        { id: 1714235527, artist: 'Gala', title: 'Freed From Desire', note: 'Its "na-na-na" hook became a European football chant' },
      ],
    },
    {
      theme: 'Medleys and mashups',
      tracks: [
        { id: 303078892, artist: 'The 5th Dimension', title: 'Aquarius/Let the Sunshine In', note: 'Two songs from the musical Hair stitched together — #1 for six weeks in 1969' },
        { id: 119840744, artist: 'Stars On 45', title: 'Stars on 45', note: 'A Beatles-heavy medley over a disco beat — a US #1 in 1981' },
        { id: 390992367, artist: 'Glee Cast', title: 'Halo / Walking On Sunshine', note: 'Beyoncé\'s "Halo" mashed up with Katrina and the Waves' },
        { id: 877651737, artist: 'Pentatonix', title: 'Daft Punk', note: 'An a cappella medley of Daft Punk songs — won a Grammy' },
      ],
    },
    {
      theme: 'Hits that lost or settled a songwriting-credit dispute',
      tracks: [
        { id: 1443153734, artist: 'Robin Thicke', title: 'Blurred Lines (feat. T.I. & Pharrell)', note: 'A jury found it copied Marvin Gaye\'s "Got to Give It Up"' },
        { id: 1440814425, artist: 'Sam Smith', title: 'Stay With Me', note: 'Tom Petty and Jeff Lynne were added as writers over "I Won\'t Back Down"' },
        { id: 1440885120, artist: 'The Verve', title: 'Bitter Sweet Symphony', note: 'Sampled an orchestral cover of the Stones\' "The Last Time" — Jagger and Richards held the credit until 2019' },
        { id: 295535860, artist: 'Rod Stewart', title: "Da Ya Think I'm Sexy?", note: 'Rod Stewart settled with Jorge Ben over its resemblance to "Taj Mahal"' },
      ],
    },
    {
      theme: 'Guest stars on The Muppet Show',
      tracks: [
        { id: 355055115, artist: 'Alice Cooper', title: 'Welcome to My Nightmare', note: "Season 3 — played the Devil's agent and sang this on the show" },
        { id: 1440929996, artist: 'Blondie', title: 'One Way or Another', note: 'Season 5 — Debbie Harry guest-starred and sang this on the show' },
        { id: 175541237, artist: 'Harry Belafonte', title: 'Turn the World Around', note: 'Season 3 — sang this on the show surrounded by Muppet tribal masks' },
        { id: 872638018, artist: 'Linda Ronstadt', title: 'Blue Bayou', note: 'Season 5 — sang this on the show in a Muppet swamp' },
      ],
    },
  ],
};

export default puzzle;
