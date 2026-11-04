const p = require('../src/parts/paper');
const body = 'M22 34 L74 34 Q78 34 78 38 L78 70 Q78 74 74 74 L22 74 Q18 74 18 70 L18 38 Q18 34 22 34 Z';
module.exports = {
  id: 'card-index',
  name: 'Card Index',
  emoji: '📇',
  group: 'Objects',
  subgroup: 'office',
  tags: ['contacts', 'rolodex', 'cards', 'index', 'address book'],
  tone: 'white',
  body,
  shine: [24, 39, -30],
  shineSize: [5, 2.2],
  draw(c) {
    const w = c.ramp('white');
    const k = c.ramp('black');
    return `<path d="M30 74 L22 84 L74 84 L66 74 Z" fill="${c.linear('base', 'black', [0, 0, 0, 1], 0, 2)}" stroke="#05050A" stroke-opacity=".6" stroke-width="1"/>
      <path d="M25 30 L27 18 Q27.4 16 29.4 16.3 L71 22 Q73 22.3 72.6 24.3 L70 38 Z" fill="${c.linear('c1', 'white', [0, 0, 0, 1], 1, 3)}"/>
      <path d="M22 34 L22 24 Q22 22 24 22 L72 22 Q74 22 74 24 L74 34 Z" fill="${c.linear('c2', 'white', [0, 0, 0, 1], 0, 2)}" stroke="${w[3]}" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M18.6 44 L77.4 44', '#E3120B', 1.4, 0.55)}
      ${p.line('M26 52 L58 52 M26 59 L66 59 M26 66 L50 66', w[3], 2, 0.55)}
      <path d="M13 54 L18 54 M78 54 L83 54" stroke="${k[2]}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="12" cy="54" r="4.4" fill="${c.radial('k1', 'silver', 0.3, 0.25)}"/>
      <circle cx="84" cy="54" r="4.4" fill="${c.radial('k2', 'silver', 0.3, 0.25)}"/>`;
  },
};
