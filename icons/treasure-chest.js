const p = require('../src/parts/paper');
const body = 'M14 47 L14 40 C14 28 29 20 48 20 C67 20 82 28 82 40 L82 80 Q82 84 78 84 L18 84 Q14 84 14 80 Z';
module.exports = {
  id: 'treasure-chest',
  name: 'Treasure Chest',
  emoji: '🪎',
  group: 'Objects',
  subgroup: 'money',
  tags: ['treasure', 'chest', 'pirate', 'gold', 'loot', 'riches'],
  tone: 'brown',
  body,
  shine: [24, 32, -40],
  draw(c) {
    const b = c.ramp('brown');
    const gold = c.linear('gold', 'gold', [0, 0, 1, 0], 0, 2);
    const gd = c.ramp('gold');
    return `<path d="${body}" fill="${c.radial('a', 'brown', 0.3, 0.2)}"/>
      ${p.line('M15 33 C26 30 70 30 81 33 M14.5 62 L81.5 62 M14.5 73 L81.5 73', b[3], 1.4, 0.5)}
      <path d="M14 45 L82 45 L82 51 L14 51 Z" fill="${b[3]}" opacity=".55"/>
      <path d="M14 46 L82 46 L82 50 L14 50 Z" fill="${gold}"/>
      <path d="M22 24.5 C24 23.4 27 22.2 30 21.5 L30 84 L22 84 Z M66 21.5 C69 22.2 72 23.4 74 24.5 L74 84 L66 84 Z" fill="${gold}" stroke="${gd[3]}" stroke-opacity=".5" stroke-width="1"/>
      ${p.line('M23.5 26 L23.5 82', '#fff', 1, 0.5)}
      <path d="${p.rr(40, 42, 16, 19, 3)}" fill="${c.linear('plate', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="${gd[3]}" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="M48 47 A2.6 2.6 0 0 1 49.4 51.8 L50.2 56 L45.8 56 L46.6 51.8 A2.6 2.6 0 0 1 48 47 Z" fill="#331805"/>
      ${[26, 70].map((x) => [36, 58, 78].map((y) => `<circle cx="${x}" cy="${y}" r="1.4" fill="${gd[3]}" opacity=".6"/>`).join('')).join('')}`;
  },
};
