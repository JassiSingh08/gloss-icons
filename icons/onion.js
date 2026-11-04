const L = require('../src/parts/leaf');
// Round golden-brown bulb, a dry twist at the top, fine lines running pole to pole.
const body = 'M48 18 C50 25 54 29 61 33 C73 39 81 49 80 62 C79 75 66 84 48 84 C30 84 17 75 16 62 C15 49 23 39 35 33 C42 29 46 25 48 18 Z';
module.exports = {
  id: 'onion',
  name: 'Onion',
  emoji: '🧅',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['onion', 'cooking', 'layers', 'tears', 'vegetable'],
  tone: 'brown',
  body,
  shine: [27, 48, -50],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.28" r="0.95"><stop offset="0" stop-color="#FFE7B0"/><stop offset="0.35" stop-color="#E5A050"/><stop offset="0.75" stop-color="#A35420"/><stop offset="1" stop-color="#4A1E05"/></radialGradient>`);
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <g stroke="#6E2E0A" stroke-opacity=".4" stroke-width="1.3" stroke-linecap="round" fill="none">
        <path d="M47 24 C38 36 35 60 42 83"/><path d="M49 24 C58 36 61 60 54 83"/><path d="M44 28 C28 40 22 62 32 80"/><path d="M52 28 C68 40 74 62 64 80"/>
      </g>
      <g stroke="#FFE7B0" stroke-opacity=".45" stroke-width="1.1" stroke-linecap="round" fill="none"><path d="M44.5 30 C37 42 36 58 38 70"/><path d="M38 33 C29 43 27 56 29 66"/></g>
      <path d="M48 20 C47 14 45 10 42 7 M48.5 20 C50 15 52.5 11 55 9" stroke="#8A4A1A" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M42 84 C41 86 39 87.5 37 88 M46 84.5 L45 89 M50 84.5 L51 89 M54 84 C55 86 57 87.5 59 88" stroke="#E8D2A8" stroke-width="1.3" stroke-linecap="round" fill="none"/>`;
  },
};
