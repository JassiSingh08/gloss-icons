const k = require('../src/parts/critter');
// A blue morpho, wings open: each side's two wings are one silhouette, edged in ink with pale spots.
const wingL = 'M46 42 C40 27 30 16 18 14 C10 14 7 22 9 30 C11 38 18 44 28 46 C18 50 14 58 17 66 C21 74 32 75 38 69 C42 63 44 55 46 49 Z';
const mirror = (d) => d.replace(/(-?\d+\.?\d*) (-?\d+\.?\d*)/g, (m, x, y) => `${k.n(96 - x)} ${y}`);
const body = [wingL, mirror(wingL)];
module.exports = {
  id: 'butterfly',
  name: 'Butterfly',
  emoji: '🦋',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['butterfly', 'morpho', 'pretty', 'insect', 'transform'],
  tone: 'blue',
  body,
  shine: [20, 22, -30],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<clipPath id="${c.id('w')}"><path d="${body.join(' ')}"/></clipPath>`);
    const wing = c.radial('a', 'blue', 0.45, 0.45);
    const ink = '#001E4D';
    const spots = [[14, 24], [18, 32], [22, 20], [21, 62], [82, 24], [78, 32], [74, 20], [75, 62]];
    return `<path d="${body.join(' ')}" fill="${wing}"/>
      <g clip-path="url(#${c.id('w')})"><path d="${body.join(' ')}" fill="none" stroke="${ink}" stroke-width="7"/></g>
      ${spots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#E6F4FF"/>`).join('')}
      ${k.legs('M46.5 34 C44 26 40 20 36 17 M49.5 34 C52 26 56 20 60 17', ink, 1.8)}
      <circle cx="36" cy="17" r="1.9" fill="${ink}"/><circle cx="60" cy="17" r="1.9" fill="${ink}"/>
      <path d="${k.ellipse(48, 51, 3.4, 18)}" fill="${c.linear('body', 'black', [0, 0, 1, 0], 0, 2)}"/>
      <circle cx="48" cy="34" r="3.6" fill="${c.radial('head', 'black', 0.3, 0.3)}"/>`;
  },
};
