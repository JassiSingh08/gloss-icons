const L = require('../src/parts/leaf');
// A beetroot: round crimson bulb, a whiskery tail, and leaves on red stalks.
const body = 'M48 34 C64 34 78 44 78 57 C78 68 68 74 57 76 C52 77 48 79 44 83 C42 85 38.5 85 39.5 82 C40.5 79 40.5 77.5 38.5 76 C27 73 18 66 18 56 C18 43 32 34 48 34 Z';
module.exports = {
  id: 'root-vegetable',
  name: 'Root Vegetable',
  emoji: '🫜',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['beetroot', 'beet', 'root', 'radish', 'vegetable'],
  tone: 'pink',
  body,
  shine: [28, 46, -40],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#F28AB8"/><stop offset="0.35" stop-color="#B8186A"/><stop offset="0.75" stop-color="#620A38"/><stop offset="1" stop-color="#2A0018"/></radialGradient>`);
    const k = L.kit(c);
    const red = (d) => `<path d="${d}" stroke="#4A0020" stroke-width="4.4" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#D0306E" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;
    return `${red('M44 36 C40 28 34 22 26 18')}${red('M48 35 C48 26 50 18 54 11')}${red('M52 36 C58 30 66 26 74 25')}
      ${k.leaf([29, 20], [9, 8], 0.36, 0.15)}
      ${k.leaf([53, 14], [57, 1], 0.36, -0.15)}
      ${k.leaf([71, 25], [90, 15], 0.36, 0.15)}
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="M36 36.5 C30 44 28 56 33 66" stroke="#F28AB8" stroke-opacity=".3" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M30 72 L26 75 M62 74.5 L66 78" stroke="#7A1A48" stroke-width="1.2" stroke-linecap="round" fill="none"/>
      <path d="M40 84 C38 86 36 87.5 33 88" stroke="#7A1A48" stroke-width="1.4" stroke-linecap="round" fill="none"/>`;
  },
};
