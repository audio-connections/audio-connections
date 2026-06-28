import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'J. Bowman Light',
  themes: [
    {
      theme: 'Religious figures',
      tracks: [
        { id: 3243546, artist: 'The Reverend Horton Heat', title: 'Bad Reputation' },
        { id: 723343714, artist: 'Maxi Priest', title: 'Close to You' },
        { id: 1788380910, artist: 'Twisted Sister', title: 'I Wanna Rock' },
        { id: 1442260360, artist: 'Thelonious Monk', title: 'Just a Gigolo' },
      ],
    },
    {
      theme: 'Breakout solo artists',
      tracks: [
        { id: 302058668, artist: 'David Lee Roth', title: 'Just a Gigolo', note: 'left Van Halen' },
        { id: 1872452691, artist: 'Joan Jett', title: 'Bad Reputation', note: 'left The Runaways' },
        { id: 1146195724, artist: 'Frank Ocean', title: 'Close to You', note: 'left Odd Future' },
        { id: 1440771048, artist: 'Belinda Carlisle', title: 'Heaven Is a Place on Earth', note: "left The Go-Go's" },
      ],
    },
    {
      theme: 'Bands with the same name as an MLB team',
      tracks: [
        { id: 321975426, artist: 'Damn Yankees', title: 'Bad Reputation', note: 'New York Yankees' },
        { id: 298111056, artist: 'They Might Be Giants', title: 'We Want a Rock', note: 'San Francisco Giants' },
        { id: 1440648044, artist: 'Night Ranger', title: '(You Can Still) Rock In America', note: 'Texas Rangers' },
        { id: 258200075, artist: 'Cocteau Twins', title: 'Heaven or Las Vegas', note: 'Minnesota Twins' },
      ],
    },
    {
      theme: 'Singer Guested on a Gorillaz track',
      tracks: [
        { id: 715979694, artist: 'Snoop Dogg', title: 'I Wanna Rock', note: "Welcome to the World of the Plastic Beach" },
        { id: 31739774, artist: 'The Cure', title: 'Just Like Heaven', note: 'Robert Smith on Strange Timez' },
        { id: 594061856, artist: 'Fleetwood Mac', title: 'Dreams', note: 'Stevie Nicks on Oil' },
        { id: 1050415254, artist: 'The Velvet Underground', title: 'Rock & Roll', note: 'Lou Reed on Some Kind of Nature' },
      ],
    },
  ],
};

export default puzzle;
