const L = require('../src/parts/leaf');
// Papery white bulb with a pinched tip and cloves bulging round the bottom.
const body = 'M48 13 C49.5 20 52 25 58 30 C70 38 80 48 79 62 C78.5 70 74 76 67 78 C63 82 56 84 48 84 C40 84 33 82 29 78 C22 76 17.5 70 17 62 C16 48 26 38 38 30 C44 25 46.5 20 48 13 Z';
module.exports = {
  id: 'garlic',
  name: 'Garlic',
  emoji: '🧄',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['garlic', 'clove', 'cooking', 'vampire', 'flavour'],
  tone: 'white',
  body,
  shine: [28, 48, -55],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.3" r="0.95"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.4" stop-color="#F6F0F4"/><stop offset="0.78" stop-color="#D2C2D6"/><stop offset="1" stop-color="#8A7896"/></radialGradient>`);
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <g stroke="#8E6FA8" stroke-opacity=".45" stroke-width="1.6" stroke-linecap="round" fill="none">
        <path d="M46 30 C37 44 36 64 41 83"/><path d="M50 30 C59 44 60 64 55 83"/><path d="M41 34 C28 46 25 64 29 78"/><path d="M55 34 C68 46 71 64 67 78"/>
      </g>
      <path d="M47 15 C44 11 43 8 44.5 6 M49 15 C52 11 54 9 53 6" stroke="#D2C2D6" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M42 84 L40 88 M46 84.5 L45.5 89 M50 84.5 L50.5 89 M54 84 L56 88" stroke="#C9B48A" stroke-width="1.3" stroke-linecap="round"/>`;
  },
};
