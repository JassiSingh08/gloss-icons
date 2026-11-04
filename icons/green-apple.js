const L = require('../src/parts/leaf');
// Taller and squarer than the red apple, in sharp granny-smith green with pale lenticels.
const body = 'M48 28 C55 20.5 69 20.5 75.5 28.5 C81.5 36 82 50 79 61 C76 74 67 84 57 84 C53.5 84 50.5 82.5 48 82.5 C45.5 82.5 42.5 84 39 84 C29 84 20 74 17 61 C14 50 14.5 36 20.5 28.5 C27 20.5 41 20.5 48 28 Z';
module.exports = {
  id: 'green-apple',
  name: 'Green Apple',
  emoji: '🍏',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['apple', 'fruit', 'sour', 'healthy', 'green'],
  tone: 'lime',
  body,
  shine: [27, 37, -50],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#F4FFC0"/><stop offset="0.35" stop-color="#A9E040"/><stop offset="0.75" stop-color="#4E9A14"/><stop offset="1" stop-color="#1E4A05"/></radialGradient>`);
    const k = L.kit(c);
    const dots = [[34, 48], [60, 44], [44, 64], [66, 62], [28, 62], [54, 74]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1"/>`).join('');
    return `${L.twig('M48 30 C48.5 23 47 17 43.5 12', 2.6)}
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <g fill="#F4FFC0" opacity=".5">${dots}</g>
      <path d="M37 29.5 C42 33 54 33 59 29.5" stroke="#1E4A05" stroke-opacity=".45" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      ${k.leaf([47, 20], [67, 9.5], 0.27, 0.3)}`;
  },
};
