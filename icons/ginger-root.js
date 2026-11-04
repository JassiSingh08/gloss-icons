const L = require('../src/parts/leaf');
// A knobbly hand of ginger with ringed joints and one cut end showing the yellow flesh.
const body = 'M15 66 C13 58 19 52 27 53 C28 45 34 40 41 42 C43 33 51 29 57 33 C61 26 71 26 74 34 C76 40 72 45 68 48 C76 49 83 55 81 64 C79 72 71 75 63 73 C56 79 44 81 36 77 C28 81 17 76 15 66 Z';
module.exports = {
  id: 'ginger-root',
  name: 'Ginger Root',
  emoji: '🫚',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['ginger', 'root', 'spice', 'cooking', 'tea'],
  tone: 'sand',
  body,
  shine: [37, 47, -40],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#FCEBC4"/><stop offset="0.35" stop-color="#DAAE68"/><stop offset="0.75" stop-color="#9C6E2E"/><stop offset="1" stop-color="#4A300C"/></radialGradient>`);
    const cut = c.radial('cut', 'yellow', 0.4, 0.35);
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <g stroke="#7A5420" stroke-opacity=".5" stroke-width="1.4" stroke-linecap="round" fill="none">
        <path d="M29 55 C31 60 31 66 29 71"/><path d="M42 44 C46 47 48 51 48 56"/><path d="M58 35 C60 39 62 42 66 45"/><path d="M64 51 C62 57 63 64 66 70"/><path d="M45 62 C47 67 47 72 45 77"/>
      </g>
      <g stroke="#FCEBC4" stroke-opacity=".45" stroke-width="1.1" stroke-linecap="round" fill="none"><path d="M31 55.5 C33 60 33 65 31 69.5"/><path d="M60 35.5 C62 39 64 41 67.5 43.5"/></g>
      <ellipse cx="19" cy="66.5" rx="4.2" ry="8.6" fill="${cut}" stroke="#B88A00" stroke-opacity=".6" stroke-width="1.1" transform="rotate(12 19 66.5)"/>
      <ellipse cx="19" cy="66.5" rx="1.8" ry="4.5" fill="none" stroke="#D9A400" stroke-opacity=".5" stroke-width="1" transform="rotate(12 19 66.5)"/>`;
  },
};
