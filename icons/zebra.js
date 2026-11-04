const a = require('../src/parts/animal');
const { equine } = require('./horse');

// Stripes run down the body and round the legs; the coat itself is white.
const STRIPES = [
  [44, 38, 40, 60, 2.6, -2], [50, 40, 47, 64, 2.6, -2], [56, 40.5, 55, 66, 2.6, -1], [62, 40.5, 62, 64, 2.4, 0],
  [68, 39.5, 69, 58, 2.4, 1], [74, 41, 78, 54, 2.2, 1], [79, 45, 82, 52, 1.8, 0],
  [38, 31, 30, 41, 2.3, -1], [33, 23, 27, 32, 2, -1], [28, 17, 23, 22, 1.6, 0], [41, 36, 33, 51, 2.2, -1],
  [36, 62, 34, 52, 1.8, 0],
];
module.exports = equine({
  id: 'zebra',
  name: 'Zebra',
  emoji: '🦓',
  tags: ['zebra', 'stripes', 'safari', 'africa', 'savanna'],
  coat: 'white',
  hair: ['#4A4A5E', '#22222E', '#141420', '#05050A'],
  ink: '#0E0E18',
  hoof: '#141420',
  // A short upright mane, like a brush.
  mane: a.spline([[21, 10], [29, 13], [37, 22], [45, 34], [44, 39.5], [38, 33], [31, 24], [25, 18]]),
  tail: a.spline([[79, 45], [83, 49], [84, 60], [83, 70], [86, 79, 1], [80, 76, 1], [80.5, 62], [79, 52]]),
  legOver: (c) => {
    c.def(`<pattern id="${c.id('legst')}" patternUnits="userSpaceOnUse" width="96" height="5.2"><rect y="0" width="96" height="2.4" fill="#141420"/></pattern>`);
    return `url(#${c.id('legst')})`;
  },
  overlay: (c, body) => a.clip(c, 'stripes', body, `<path d="${STRIPES.map((s) => a.taper(...s)).join(' ')}" fill="${c.radial('st', 'black', 0.3, 0.2)}"/>
    <ellipse cx="10.5" cy="39" rx="6.5" ry="6.5" fill="${c.radial('nose', 'black', 0.3, 0.25)}"/>`),
});
