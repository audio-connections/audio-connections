import type { PuzzleContent } from '../types';

const puzzle: PuzzleContent = {
  author: 'Thomas Ptacek',
  themes: [
    {
      theme: 'Four Twos',
      tracks: [
        { id: 321975002, artist: 'Bill Withers', title: 'Just the Two of Us' },
        { id: 1440894676, artist: 'U2', title: 'Two Hearts Beat as One' },
        { id: 169628364, artist: 'Spin Doctors', title: 'Two Princes' },
        { id: 726416473, artist: 'Blur', title: 'Song 2' },
      ],
    },
    {
      theme: 'Unexpected Duets',
      tracks: [
        { id: 723675471, artist: 'Iggy Pop', title: 'Candy', note: 'A duet with Kate Pierson of the B-52’s.' },
        { id: 1005850935, artist: 'Philip Bailey', title: 'Easy Lover', note: 'Philip Bailey of Earth, Wind & Fire, in a duet with Phil Collins.' },
        { id: 1440810475, artist: 'Queen', title: 'Under Pressure', note: 'A duet between Queen and David Bowie.' },
        { id: 1558235412, artist: 'The Jacksons', title: 'State of Shock', note: 'Michael Jackson trading verses with Mick Jagger.' },
      ],
    },
    {
      theme: 'Uncredited Guest Vocals',
      tracks: [
        { id: 299545317, artist: 'Dire Straits', title: 'Money for Nothing', note: 'That’s Sting singing the “I want my MTV” hook, uncredited.' },
        { id: 1195110202, artist: 'David Bowie', title: 'Fame', note: 'Co-written and sung by John Lennon, uncredited.' },
        { id: 1057307827, artist: 'Carly Simon', title: 'You’re So Vain', note: 'Mick Jagger on uncredited backing vocals.' },
        { id: 771779017, artist: 'James Taylor', title: 'Carolina in My Mind', note: 'George Harrison on uncredited backing vocals.' },
      ],
    },
    {
      theme: 'Guest Guitar Heroes',
      tracks: [
        { id: 269573341, artist: 'Michael Jackson', title: 'Beat It', note: 'Eddie Van Halen plays the guitar solo.' },
        { id: 1434916256, artist: 'Joe Cocker', title: 'With a Little Help from My Friends', note: 'Jimmy Page on session guitar.' },
        { id: 1441133644, artist: 'The Beatles', title: 'While My Guitar Gently Weeps', note: 'Eric Clapton plays the lead guitar.' },
        { id: 1440912354, artist: 'Beastie Boys', title: 'No Sleep Till Brooklyn', note: 'Slayer’s Kerry King plays the guitar solo.' },
      ],
    },
  ],
};

export default puzzle;
