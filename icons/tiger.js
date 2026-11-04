const a = require('../src/parts/animal');
const { feline } = require('./cat');

const STRIPES = [
  [48, 41, 45, 56, 2.4, -1], [54, 41.5, 53, 58, 2.4, 0], [60, 41, 60, 57, 2.4, 0], [66, 40.5, 67, 55, 2.3, 1],
  [72, 41.5, 75, 54, 2.2, 1], [78, 45, 81, 52, 1.8, 0], [42, 40.5, 38, 52, 2.2, -1], [30, 36, 25, 44, 2, -1], [23, 28, 18, 30, 1.4, 0],
];
module.exports = feline({
  id: 'tiger',
  name: 'Tiger',
  emoji: '🐅',
  tags: ['tiger', 'big cat', 'stripes', 'jungle', 'wild'],
  coat: 'orange',
  ink: '#260800',
  legW: 1.15,
  overlay: (c, body) => a.clip(c, 'st', body, `<ellipse cx="45" cy="64" rx="22" ry="5" fill="#FFF4D6" opacity=".75"/><ellipse cx="11" cy="41" rx="5" ry="3.6" fill="#FFF4D6" opacity=".8"/>
    <path d="${STRIPES.map((s) => a.taper(...s)).join(' ')}" fill="#2A0A00"/>`),
  tailOver: () => `<path d="M80 40 L90 42 L90 44.5 L80 42.5 Z M80 31 L90 31 L90 33.5 L80 33.5 Z M76 22 L86 22 L86 24.5 L76 24.5 Z" fill="#2A0A00"/>`,
  legOver: (c) => {
    c.def(`<pattern id="${c.id('legst')}" patternUnits="userSpaceOnUse" width="96" height="7"><path d="M0 0 L96 0 L96 2 L0 2.6 Z" fill="#2A0A00"/></pattern>`);
    return `url(#${c.id('legst')})`;
  },
});
