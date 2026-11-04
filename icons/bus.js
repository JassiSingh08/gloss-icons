const v = require('../src/parts/vehicle');
const body = v.rr(10, 20, 76, 54, [7, 11, 5, 5]);
module.exports = {
  id: 'bus',
  name: 'Bus',
  emoji: '🚌',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['bus', 'commute', 'public transport', 'city', 'school'],
  tone: 'blue',
  body,
  shine: [18, 26, -30],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'blue', [0, 0, 0.4, 1], 0, 2);
    const r = c.ramp('blue');
    return `<path d="${body}" fill="${paint}"/>
      ${v.win(c, 15, 29, 12, 17)}${v.win(c, 30, 29, 12, 17)}${v.win(c, 45, 29, 12, 17)}
      <path d="M61 29 L71 29 L71 69 L61 69 Z" fill="${r[3]}" opacity=".35"/>
      ${v.win(c, 62, 30, 8, 19, 1.5)}${v.win(c, 62, 50, 8, 17, 1.5)}
      <path d="M75 29 L80 29 Q85.5 29 85.5 36 L85.5 50 L75 50 Z" fill="${v.glass(c)}"/>
      <path d="M12 22.5 L70 22.5" stroke="#fff" stroke-opacity=".35" stroke-width="1.3"/>
      <rect x="10.5" y="53" width="50" height="4" fill="#F7F5FF" opacity=".85"/>
      <path d="M11 66 L60 66 M71 66 L85.5 66" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1.3"/>
      <path d="M85.7 58 L82 58 Q80.5 58 80.5 59.5 L80.5 62 Q80.5 63.5 82 63.5 L85.7 63.5 Z" fill="#FFF7A8"/>
      <path d="M10.3 58 L12.5 58 Q14 58 14 59.5 L14 62 Q14 63.5 12.5 63.5 L10.3 63.5 Z" fill="#FF3B30"/>
      ${v.wheel(c, 26, 74.5)}${v.wheel(c, 72, 74.5)}`;
  },
};
