const h = require('../src/parts/heart');
// Two lungs, the windpipe running down between them and splitting into each.
const left = 'M33 18 C39 16 43.5 21 43.5 29 L43.5 73 C43.5 79 38 82.5 30 81.5 C20 80.5 13.5 76 13.5 66 C13.5 46 21 24 33 18 Z';
const right = left.replace(/(-?[\d.]+) (-?[\d.]+)/g, (_, x, y) => `${96 - x} ${y}`);
module.exports = {
  id: 'lungs',
  name: 'Lungs',
  emoji: '🫁',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['lungs', 'breath', 'breathe', 'organ', 'anatomy'],
  tone: 'pink',
  body: [left, right],
  shine: [27, 33, -60],
  shineSize: [6, 2.4],
  draw(c) {
    const pipe = c.linear('pipe', 'cream', [0, 0, 1, 0], 0, 2);
    const twig = 'M41 46 C34 48 28 54 26 62 M33 51 C30 50 26 50 23 52 M30 57 C32 62 36 66 37 72';
    const flip = (d) => d.replace(/(-?[\d.]+) (-?[\d.]+)/g, (_, x, y) => `${96 - x} ${y}`);
    return `<path d="${left}" fill="${h.paint(c, 'a', 'rose')}"/>
      <path d="${right}" fill="${h.paint(c, 'b', 'rose')}"/>
      <path d="${twig} ${flip(twig)}" stroke="#7A1640" stroke-opacity=".35" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M48 8 L48 38 M48 37 C46 41 43 43 39 45 M48 37 C50 41 53 43 57 45" stroke="#8A5A1E" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M48 8 L48 38 M48 37 C46 41 43 43 39 45 M48 37 C50 41 53 43 57 45" stroke="${pipe}" stroke-width="6.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M45 14 L51 14 M45 20 L51 20 M45 26 L51 26 M45 32 L51 32" stroke="#8A5A1E" stroke-opacity=".5" stroke-width="1.2"/>`;
  },
};
