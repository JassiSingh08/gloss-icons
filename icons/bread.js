// A loaf with its cut end towards us: the pale crumb inside the crust is what says bread, not cake.
const d = require('../src/parts/dish');
const slice = 'M18 84 Q14 84 14 80 L14 53 C7 51 7 36 18 34 C22 25 46 25 50 34 C61 36 61 51 54 53 L54 80 Q54 84 50 84 Z';
const body = 'M18 84 Q14 84 14 80 L14 53 C7 51 7 36 18 34 C22 27 33 21 42 20 C46 11 70 11 74 20 C85 22 85 37 78 39 L78 66 Q78 70 75 71.5 L53 83 Q51.5 84 50 84 Z';
module.exports = {
  id: 'bread',
  name: 'Bread',
  emoji: '🍞',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['bread', 'loaf', 'toast', 'bakery', 'breakfast'],
  tone: 'brown',
  body,
  shine: [36, 24, -28],
  draw(c) {
    c.def(`<radialGradient id="${c.id('crust')}" cx="0.4" cy="0.15" r="0.95"><stop offset="0" stop-color="#FFD99A"/><stop offset="0.35" stop-color="#E39A45"/><stop offset="0.75" stop-color="#A8561A"/><stop offset="1" stop-color="#4A2206"/></radialGradient>`);
    const crumb = c.radial('crumb', 'cream', 0.3, 0.25);
    const side = c.linear('side', 'brown', [0, 0, 1, 0], 1, 3);
    const pore = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.7}" fill="#E0B472" opacity=".7"/>`;
    return `<path d="${body}" fill="url(#${c.id('crust')})"/>
      <path d="M54 53 L78 39 L78 66 Q78 70 75 71.5 L53 83 Q51.5 84 50 84 L54 80 Z" fill="${side}" opacity=".55"/>
      <path d="M26 28 C34 23 40 22 44 18 C50 13 64 13 70 18" stroke="#FFF0C8" stroke-opacity=".55" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="${slice}" fill="#B5641F"/>
      <path d="${slice}" fill="${crumb}" transform="translate(34 58) scale(0.84 0.86) translate(-34 -58)"/>
      ${pore(25, 46, 1.6)}${pore(40, 42, 1.3)}${pore(33, 57, 1.8)}${pore(45, 64, 1.4)}${pore(24, 70, 1.3)}${pore(38, 75, 1.6)}`;
  },
};
