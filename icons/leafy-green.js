const L = require('../src/parts/leaf');
// Bok choy: pale fleshy stalks fanning into big ruffled leaves.
const LEAF = [
  [24, 44, 11], [21, 31, 9.5], [29, 21, 10], [41, 15, 10.5], [55, 15, 10.5], [67, 21, 10], [75, 31, 9.5], [72, 44, 11],
  [36, 33, 13], [48, 28, 13], [60, 33, 13], [48, 46, 14], [36, 52, 9], [60, 52, 9],
];
const body = L.blob(LEAF, [48, 36]);
module.exports = {
  id: 'leafy-green',
  name: 'Leafy Green',
  emoji: '🥬',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['bok choy', 'lettuce', 'cabbage', 'greens', 'salad'],
  tone: 'green',
  body,
  shine: [22, 30, -60],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<linearGradient id="${c.id('stalk')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFFFF4"/><stop offset=".6" stop-color="#E4F5C8"/><stop offset="1" stop-color="#9CC878"/></linearGradient>`);
    const stalk = `url(#${c.id('stalk')})`;
    const s = (d) => `<path d="${d}" fill="${stalk}" stroke="#2E6E1A" stroke-opacity=".5" stroke-width="1.1"/>`;
    return `<path d="${body}" fill="${c.radial('a', 'green', 0.35, 0.25)}"/>
            ${s('M40 84 C34 78 30 68 30 58 C30 52 33 49 37 50 C40 51 41 55 42 60 C43 68 44 76 46 84 Z')}
      ${s('M56 84 C62 78 66 68 66 58 C66 52 63 49 59 50 C56 51 55 55 54 60 C53 68 52 76 50 84 Z')}
      ${s('M42 84 C41 74 41 62 42 50 C43 44 45 41 48 41 C51 41 53 44 54 50 C55 62 55 74 54 84 Z')}
      <path d="M48 42 C48 34 48.5 26 48 17 M35 51 C32 43 28 36 23 30 M61 51 C64 43 68 36 73 30" stroke="#E4F5C8" stroke-opacity=".8" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <path d="M48 33 C45 29 41 26 36 25 M48 33 C51 29 55 26 60 25 M30 41 C27 39 23 39 19 41 M66 41 C69 39 73 39 77 41" stroke="#E4F5C8" stroke-opacity=".5" stroke-width="1.3" stroke-linecap="round" fill="none"/>`;
  },
};
