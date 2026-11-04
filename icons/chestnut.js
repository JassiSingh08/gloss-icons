const L = require('../src/parts/leaf');
// Polished mahogany shell, a soft point with a pale tuft, and the rough pale scar at the base.
const body = 'M48 19 C54 22 66 28 74 38 C82 48 83 62 78 72 C74 80 64 83 48 83 C32 83 22 80 18 72 C13 62 14 48 22 38 C30 28 42 22 48 19 Z';
module.exports = {
  id: 'chestnut',
  name: 'Chestnut',
  emoji: '🌰',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['chestnut', 'nut', 'autumn', 'roast', 'conker'],
  tone: 'brown',
  body,
  shine: [29, 41, -45],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#F2B47E"/><stop offset="0.35" stop-color="#A44C1C"/><stop offset="0.75" stop-color="#5A2008"/><stop offset="1" stop-color="#2A0C02"/></radialGradient>`);
    c.def(`<linearGradient id="${c.id('scar')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F4E6C8"/><stop offset="1" stop-color="#B09670"/></linearGradient>`);
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <path d="M28 34 C26 44 26 56 30 66 M66 34 C70 44 71 56 68 66" stroke="#2A0C02" stroke-opacity=".3" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      <path d="M16.5 67 C28 73 68 73 79.5 67 C79 71 78.5 72 78 72 C74 80 64 83 48 83 C32 83 22 80 18 72 C17.4 71 17 69.5 16.5 67 Z" fill="url(#${c.id('scar')})"/>
      <g fill="#8A6E48" opacity=".55"><circle cx="30" cy="75" r=".9"/><circle cx="40" cy="78" r=".9"/><circle cx="52" cy="78.5" r=".9"/><circle cx="62" cy="76" r=".9"/><circle cx="70" cy="74.5" r=".9"/><circle cx="46" cy="74.5" r=".9"/><circle cx="36" cy="73.5" r=".9"/><circle cx="58" cy="73.5" r=".9"/></g>
      <path d="M46.5 20 L45 14 M48 20 L48.5 13 M49.5 20.5 L52 15" stroke="#E8D2A8" stroke-width="1.5" stroke-linecap="round"/>`;
  },
};
