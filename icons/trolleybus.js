const v = require('../src/parts/vehicle');
const body = v.rr(10, 28, 76, 46, [6, 11, 5, 5]);
module.exports = {
  id: 'trolleybus',
  name: 'Trolleybus',
  emoji: '🚎',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['trolley', 'electric', 'bus', 'city', 'overhead wires'],
  tone: 'purple',
  body,
  shine: [17, 33, -30],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'purple', [0, 0, 0.4, 1], 0, 2);
    const box = c.linear('box', 'grey', [0, 0, 0, 1], 0, 2);
    const p = c.ramp('purple');
    return `<path d="M4 9 L92 9 M4 13 L92 13" stroke="#2E2E3A" stroke-width="1.3"/>
      <path d="M24 26 L66 9.5 M28 26 L72 13.5" stroke="#3A3E52" stroke-width="2" stroke-linecap="round"/>
      <path d="${v.rr(18, 24, 18, 5, 1.5)}" fill="${box}" stroke="#2E2E3A" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${paint}"/>
      ${v.win(c, 15, 36, 16, 15)}${v.win(c, 34, 36, 16, 15)}
      <path d="M54 35 L64 35 L64 69 L54 69 Z" fill="${p[3]}" opacity=".35"/>
      ${v.win(c, 55, 36, 8, 31, 1.5)}
      <path d="M68 36 L80 36 Q85.5 36 85.5 42 L85.5 54 L68 54 Z" fill="${v.glass(c)}"/>
      <rect x="10.5" y="57" width="43" height="4" fill="#F7F5FF" opacity=".85"/>
      <path d="M85.7 60 L82 60 Q80.5 60 80.5 61.5 L80.5 64 Q80.5 65.5 82 65.5 L85.7 65.5 Z" fill="#FFF7A8"/>
      <path d="M10.3 62 L12.5 62 Q14 62 14 63.5 L14 66 Q14 67.5 12.5 67.5 L10.3 67.5 Z" fill="#FF3B30"/>
      ${v.wheel(c, 27, 74.5)}${v.wheel(c, 72, 74.5)}`;
  },
};
