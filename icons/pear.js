const L = require('../src/parts/leaf');
// Narrow neck swelling into a heavy round bottom: the shape alone says pear.
const body = 'M48 19 C54 19 57.5 24 58 32 C58.5 40 63 44 69 50 C75 56 78 63 77 70 C75.5 79 65 84 48 84 C31 84 20.5 79 19 70 C18 63 21 56 27 50 C33 44 37.5 40 38 32 C38.5 24 42 19 48 19 Z';
module.exports = {
  id: 'pear',
  name: 'Pear',
  emoji: '🍐',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['pear', 'fruit', 'healthy', 'juicy'],
  tone: 'olive',
  body,
  shine: [41, 30, -70],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.3" r="0.95"><stop offset="0" stop-color="#FCFFC8"/><stop offset="0.38" stop-color="#D8E24A"/><stop offset="0.76" stop-color="#8FA418"/><stop offset="1" stop-color="#3B4A05"/></radialGradient>`);
    const k = L.kit(c);
    return `${L.twig('M48 21 C48 15 49.5 11 52.5 8', 2.6)}
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <ellipse cx="62" cy="67" rx="9" ry="7" fill="#F0702A" opacity=".18"/>
      <g fill="#6E5A10" opacity=".35"><circle cx="30" cy="64" r=".9"/><circle cx="44" cy="72" r=".9"/><circle cx="58" cy="56" r=".9"/><circle cx="50" cy="45" r=".9"/></g>
      ${k.leaf([50.5, 14], [69, 9], 0.27, 0.3)}`;
  },
};
