const L = require('../src/parts/leaf');
// Three glossy kidney beans: the front one is the body, the two behind carry their own edge.
const bean = 'M-16 -1 C-16 -9 -9 -13 -2.5 -10.5 C1 -9 3 -9 6.5 -11 C13 -14.5 19 -8 17.5 1 C16 9 8 13 -1 12.5 C-10 12 -16 6 -16 -1 Z';
const place = (x, y, r, s = 1) => L.xform(bean, { cx: 0, cy: 0, rotate: r, scale: s, dx: x, dy: y });
const front = place(48, 66, -8, 1.3);
module.exports = {
  id: 'beans',
  name: 'Beans',
  emoji: '🫘',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['beans', 'kidney beans', 'legume', 'chilli', 'protein'],
  tone: 'red',
  body: front,
  shine: [36, 56, -25],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#FF9C86"/><stop offset="0.35" stop-color="#B8302A"/><stop offset="0.75" stop-color="#661214"/><stop offset="1" stop-color="#2A0508"/></radialGradient>`);
    const fill = `url(#${c.id('a')})`;
    const back = (d) => `<path d="${d}" fill="${fill}" stroke="#2A0508" stroke-opacity=".5" stroke-width="1.3"/>`;
    return `${back(place(31, 40, -40, 1.15))}${back(place(64, 36, 28, 1.15))}
      ${L.glint(23, 37, 4, 1.8, -55)}${L.glint(58, 28, 4, 1.8, 0)}
      <path d="${front}" fill="${fill}"/>
      <path d="M33 63 C36 58 44 57 50 59" stroke="#FFD0C0" stroke-opacity=".3" stroke-width="1.5" stroke-linecap="round" fill="none"/>`;
  },
};
