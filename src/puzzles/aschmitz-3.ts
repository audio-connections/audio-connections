import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'aschmitz',
  constraint: 'I just got 400 Bad Requests, good luck!',
  themes: [
    {
      theme: 'HTTP 401: Unauthorized',
      tracks: [
        { id: 203772420, artist: 'Men At Work', title: 'Who Can It Be Now?' },
        { id: 1469576664, artist: 'The Who', title: 'Who Are You' },
        { id: 1469583292, artist: 'Lynyrd Skynyrd', title: "What's Your Name" },
        { id: 723398368, artist: 'Spice Girls', title: 'Who Do You Think You Are' },
      ],
    },
    {
      theme: 'HTTP 402: Payment Required',
      tracks: [
        { id: 469302953, artist: 'Aloe Blacc', title: 'I Need a Dollar' },
        { id: 1443196867, artist: 'Donna Summer', title: 'She Works Hard For the Money' },
        { id: 1441164799, artist: 'The Beatles', title: 'Taxman' },
        { id: 194949982, artist: 'Bruce Springsteen', title: 'Pay Me My Money Down' },
      ],
    },
    {
      theme: 'HTTP 403: Forbidden',
      tracks: [
        { id: 724315201, artist: 'MC Hammer', title: "U Can't Touch This" },
        { id: 1440781966, artist: 'The Rolling Stones', title: 'Get Off of My Cloud' },
        { id: 1441164953, artist: 'The Beatles', title: 'Get Back' },
        { id: 1442440805, artist: 'Tom Petty', title: "Don't Come Around Here No More" },
      ],
    },
    {
      theme: 'HTTP 404: Not Found',
      tracks: [
        { id: 1442994818, artist: 'Counting Crows', title: 'Big Yellow Taxi' },
        { id: 1440754487, artist: 'Gotye', title: 'Somebody That I Used to Know' },
        { id: 1441164805, artist: 'The Beatles', title: 'Yesterday' },
        { id: 1480026462, artist: 'James Taylor', title: 'Fire and Rain' },
      ],
    },
  ],
};

export default puzzle;
