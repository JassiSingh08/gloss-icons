const L = require('../src/parts/leaf');
// A kidney shape, green at the shoulder and blushing red-orange where it ripened in the sun.
const body = 'M58 24 C71 25 81 37 80 53 C79 70 66 83 48 84 C32 85 17 77 16 63 C15 53 22 47 31 44 C39 41.5 43 37 46 31 C49 26 53 23.5 58 24 Z';
module.exports = {
  id: 'mango',
  name: 'Mango',
  emoji: '🥭',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['mango', 'tropical', 'fruit', 'sweet', 'summer'],
  tone: 'orange',
  body,
  shine: [24, 54, -30],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.4" r="0.95"><stop offset="0" stop-color="#FFF6A8"/><stop offset="0.35" stop-color="#FFB524"/><stop offset="0.72" stop-color="#F0501E"/><stop offset="1" stop-color="#7A1408"/></radialGradient>`);
    c.def(`<radialGradient id="${c.id('g')}" gradientUnits="userSpaceOnUse" cx="64" cy="27" r="26"><stop offset="0" stop-color="#7BC63A" stop-opacity=".95"/><stop offset=".55" stop-color="#9BCB3A" stop-opacity=".45"/><stop offset="1" stop-color="#C8C83A" stop-opacity="0"/></radialGradient>`);
    const k = L.kit(c);
    return `${L.twig('M57 26 C57 20 59 16 62 13', 2.6)}
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="${body}" fill="url(#${c.id('g')})"/>
      ${k.leaf([60, 17], [84, 20], 0.2, 0.3)}`;
  },
};
