const m = require('../src/parts/metal');
const body = 'M30 36 Q30 29 37 29 L59 29 Q66 29 66 36 L69 77 Q69.5 84 62 84 L34 84 Q26.5 84 27 77 Z';
module.exports = {
  id: 'lotion-bottle',
  name: 'Lotion Bottle',
  emoji: '🧴',
  group: 'Objects',
  subgroup: 'household',
  tags: ['lotion', 'sunscreen', 'moisturiser', 'skincare', 'self care'],
  tone: 'teal',
  body,
  shine: [36, 37, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const plastic = c.radial('a', 'teal', 0.3, 0.2);
    const cap = c.linear('c', 'white', [0, 0, 1, 0], 0, 2);
    const label = c.linear('l', 'white', [0, 0, 1, 1], 0, 1);
    const drop = c.radial('d', 'sky', 0.35, 0.35);
    return `${m.part(m.round([[45, 13], [51, 13], [51, 22], [45, 22]], 0.5), cap, 'white')}
      ${m.part(m.round([[36, 8], [62, 8], [62, 12], [74, 12], [74, 15], [60, 15], [60, 14], [36, 14]], 1.5), cap, 'white')}
      ${m.part(m.round([[39, 20], [57, 20], [58, 30], [38, 30]], 2), cap, 'white')}
      <path d="${body}" fill="${plastic}"/>
      ${m.part(m.round([[35, 46], [61, 46], [62, 72], [34, 72]], 3), label, 'white')}
      <path d="M48 51 C51 55 54 58 54 61.5 A6 6 0 0 1 42 61.5 C42 58 45 55 48 51 Z" fill="${drop}"/>`;
  },
};
