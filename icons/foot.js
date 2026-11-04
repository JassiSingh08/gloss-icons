const s = require('../src/parts/skin');
// The sole of a foot, toes up: wide at the ball, narrowing through the arch to a round heel.
const toe = (x, y, rx, ry) => `M${x} ${y - ry} C${x + rx * 1.33} ${y - ry} ${x + rx * 1.33} ${y + ry} ${x} ${y + ry} C${x - rx * 1.33} ${y + ry} ${x - rx * 1.33} ${y - ry} ${x} ${y - ry} Z`;
const sole = 'M42 31.5 C55 28.5 70 31 71 43 C71.5 52 65 58 62.5 66 C60 76 56 84.5 47 84.5 C38.5 84.5 34.5 77 35.5 69 C36.5 62 31 55 31 45 C31 38 35 33 42 31.5 Z';
const TOES = [[38, 20, 6.4, 7.8], [50.5, 15.5, 4.6, 5.6], [60, 17.5, 4.2, 5], [67.5, 22.5, 3.7, 4.4], [73, 30, 3.2, 3.8]];
const body = [sole, ...TOES.map((t) => toe(...t))];
module.exports = {
  id: 'foot',
  name: 'Foot',
  emoji: '🦶',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['foot', 'step', 'stomp', 'barefoot', 'sole'],
  tone: 'amber',
  body,
  shine: [37, 41, -55],
  shineSize: [6, 2.6],
  draw(c) {
    return `${body.map((d) => `<path d="${d}" fill="${s.fill(c)}"/>`).join('')}
      ${s.crease('M38 44 C46 41 58 41 66 45', 1.4)}
      ${s.crease('M40 70 C44 73 50 73 54 70', 1.2)}
      ${TOES.slice(1).map(([x, y]) => `<ellipse cx="${x - 1}" cy="${y - 1.5}" rx="1.4" ry=".8" fill="#fff" opacity=".7" transform="rotate(-40 ${x - 1} ${y - 1.5})"/>`).join('')}`;
  },
};
