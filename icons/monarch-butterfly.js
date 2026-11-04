const k = require('../src/parts/critter');
// A monarch at rest with wings open: long pointed forewings in orange, black veins and border, white dots.
const wingL = 'M46 40 C38 26 26 14 12 12 C8 12 6 15 8 20 C10 30 16 40 28 46 C20 52 18 62 22 70 C26 76 34 76 39 70 C43 64 45 56 46 48 Z';
const mirror = (d) => d.replace(/(-?\d+\.?\d*) (-?\d+\.?\d*)/g, (m, x, y) => `${k.n(96 - x)} ${y}`);
const body = [wingL, mirror(wingL)];
const veinsL = 'M45 42 C36 30 24 20 12 16 M45 43 C36 36 26 30 14 28 M45 44 C38 42 32 42 26 44 M45 48 C40 54 34 60 26 66 M45 50 C42 58 38 66 34 72 M44 47 C38 50 32 54 24 58';
module.exports = {
  id: 'monarch-butterfly',
  name: 'Monarch Butterfly',
  emoji: '🫌',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['monarch', 'butterfly', 'migration', 'orange', 'insect'],
  tone: 'orange',
  body,
  shine: [18, 20, -40],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<clipPath id="${c.id('w')}"><path d="${body.join(' ')}"/></clipPath>`);
    const ink = '#1A0A00';
    const dots = [[11, 17], [14, 25], [20, 34], [24, 70], [30, 74], [20, 63]];
    return `<path d="${body.join(' ')}" fill="${c.radial('a', 'orange', 0.5, 0.5)}"/>
      <g clip-path="url(#${c.id('w')})">
        ${k.legs(`${veinsL} ${mirror(veinsL)}`, ink, 1.8)}
        <path d="${body.join(' ')}" fill="none" stroke="${ink}" stroke-width="8"/>
        <path d="M8 12 L26 12 C22 18 18 22 10 26 Z M88 12 L70 12 C74 18 78 22 86 26 Z" fill="${ink}"/>
      </g>
      ${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.3" fill="#fff"/><circle cx="${96 - x}" cy="${y}" r="1.3" fill="#fff"/>`).join('')}
      ${k.legs('M46.5 34 C44 26 40 20 36 17 M49.5 34 C52 26 56 20 60 17', ink, 1.8)}
      <circle cx="36" cy="17" r="1.9" fill="${ink}"/><circle cx="60" cy="17" r="1.9" fill="${ink}"/>
      <path d="${k.ellipse(48, 51, 3.4, 18)}" fill="${c.linear('body', 'black', [0, 0, 1, 0], 0, 2)}"/>
      <circle cx="48" cy="34" r="3.6" fill="${c.radial('head', 'black', 0.3, 0.3)}"/>`;
  },
};
