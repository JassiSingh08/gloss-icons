const B = require('../src/parts/building');

const body = 'M18 84 Q14 84 14 80 L14 76 L18 76 L18 39 L14 39 Q12 39 12 37 L12 35 Q12 33 14 32 L45.5 14.5 Q48 13 50.5 14.5 L82 32 Q84 33 84 35 L84 37 Q84 39 82 39 L78 39 L78 76 L82 76 L82 80 Q82 84 78 84 Z';
module.exports = {
  id: 'bank',
  name: 'Bank',
  emoji: '🏦',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['money', 'finance', 'savings', 'vault', 'loan'],
  tone: 'sand',
  body,
  shine: [28, 26, -28],
  draw(c) {
    const stone = c.linear('a', 'cream', [0, 0, 1, 1], 0, 2);
    const ped = c.linear('ped', 'cream', [0, 0, 0, 1], 0, 1);
    const col = c.linear('col', 'cream', [0, 0, 1, 0], 0, 2);
    const coin = c.radial('coin', 'gold', 0.35, 0.25);
    const cols = [21, 34, 55, 68].map((x) => `<path d="M${x} 42 L${x + 7} 42 L${x + 7} 73 L${x} 73 Z" fill="${col}"/><path d="M${x - 1} 40 L${x + 8} 40 L${x + 8} 43 L${x - 1} 43 Z M${x - 1} 72 L${x + 8} 72 L${x + 8} 75 L${x - 1} 75 Z" fill="#C9A06A"/>`).join('');
    return `<path d="${body}" fill="${stone}"/>
      <path d="M18 39 L78 39 L78 76 L18 76 Z" fill="#8A5A1E" opacity=".3"/>
      <path d="M14 32 L45.5 14.5 Q48 13 50.5 14.5 L82 32 Q84 33 84 35 L84 37 Q84 39 82 39 L14 39 Q12 39 12 37 L12 35 Q12 33 14 32 Z" fill="${ped}"/>
      <path d="M18 33 L48 17 L78 33 Z" fill="none" stroke="#C9A06A" stroke-width="1.4" stroke-linejoin="round"/>
      <circle cx="48" cy="27.5" r="5.5" fill="${coin}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1.1"/>
      <circle cx="48" cy="27.5" r="3" fill="none" stroke="#C98500" stroke-width="1.1"/>
      ${B.eave(18, 39, 60, 3)}
      ${cols}
      <path d="M43 75 L43 54 Q43 49 48 49 Q53 49 53 54 L53 75 Z" fill="${c.radial('door', 'brown', 0.3, 0.2)}" stroke="#331805" stroke-opacity=".5" stroke-width="1"/>
      <path d="M48 50 L48 75" stroke="#331805" stroke-opacity=".45" stroke-width="1"/>
      <path d="M14 76 L82 76 L82 80 L14 80 Z" fill="#E0B472" opacity=".55"/>`;
  },
};
