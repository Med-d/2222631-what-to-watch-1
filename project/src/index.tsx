import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {FilmCardProps} from './components/FilmCard';

declare global {
  interface Window { FilmsList: FilmCardProps[] }
}

window.FilmsList = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    imgLink: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    imgLink: 'img/bohemian-rhapsody.jpg'
  },
  {
    id: 3,
    title: 'Macbeth',
    imgLink: 'img/macbeth.jpg'
  },
  {
    id: 4,
    title: 'Aviator',
    imgLink: 'img/aviator.jpg'
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    imgLink: 'img/we-need-to-talk-about-kevin.jpg'
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    imgLink: 'img/what-we-do-in-the-shadows.jpg'
  },
  {
    id: 7,
    title: 'Revenant',
    imgLink: 'img/revenant.jpg'
  },
  {
    id: 8,
    title: 'Johnny English',
    imgLink: 'img/johnny-english.jpg'
  },
  {
    id: 9,
    title: 'Shutter Island',
    imgLink: 'img/shutter-island.jpg'
  },
  {
    id: 10,
    title: 'Pulp Fiction',
    imgLink: 'img/pulp-fiction.jpg'
  },
  {
    id: 11,
    title: 'No Country for Old Men',
    imgLink: 'img/no-country-for-old-men.jpg'
  },
  {
    id: 12,
    title: 'Snatch',
    imgLink: 'img/snatch.jpg'
  },
  {
    id: 13,
    title: 'Moonrise Kingdom',
    imgLink: 'img/moonrise-kingdom.jpg'
  },
  {
    id: 14,
    title: 'Seven Years in Tibet',
    imgLink: 'img/seven-years-in-tibet.jpg'
  },
  {
    id: 15,
    title: 'Midnight Special',
    imgLink: 'img/midnight-special.jpg'
  },
  {
    id: 16,
    title: 'War of the Worlds',
    imgLink: 'img/war-of-the-worlds.jpg'
  },
  {
    id: 17,
    title: 'Dardjeeling Limited',
    imgLink: 'img/dardjeeling-limited.jpg'
  },
  {
    id: 18,
    title: 'Orlando',
    imgLink: 'img/orlando.jpg'
  },
  {
    id: 19,
    title: 'Mindhunter',
    imgLink: 'img/mindhunter.jpg'
  },
  {
    id: 20,
    title: 'Midnight Special',
    imgLink: 'img/midnight-special.jpg'
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
