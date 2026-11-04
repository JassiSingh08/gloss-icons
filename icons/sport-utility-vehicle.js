const v = require('../src/parts/vehicle');
const body = 'M17 73 Q13 73 13 69 L13 51 Q13 46.5 18 46 L22 45.5 L26.5 30 Q27.8 26 32 26 L61 26 Q65 26 67.5 29.5 L75.5 44.5 Q84 46 84 53 L84 69 Q84 73 80 73 Z';
module.exports = {
  id: 'sport-utility-vehicle',
  name: 'Sport Utility Vehicle',
  emoji: '🚙',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['suv', 'jeep', 'off road', 'family', 'road trip'],
  tone: 'green',
  body,
  shine: [19, 50, -15],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.radial('a', 'green', 0.3, 0.2);
    const r = c.ramp('green');
    return `<path d="M32 23 L32 26 M60 23 L60 26 M30 23 L63 23" stroke="#2E2E3D" stroke-width="2.2" stroke-linecap="round"/>
      ${v.wheel(c, 12.5, 57, 8)}
      <path d="${body}" fill="${paint}"/>
      <path d="M28.5 45 L32 33 Q33 31 35 31 L40 31 L40 45 Z" fill="${v.glass(c)}"/>
      ${v.win(c, 43, 31, 12, 14, 1.5)}
      <path d="M58 31 L62 31 Q64 31 65.2 33 L71.5 45 L58 45 Z" fill="${v.glass(c)}"/>
      <path d="M56.5 46 L56.5 66 M41.5 46 L41.5 66" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1.3"/>
      <rect x="46" y="51" width="5" height="2" rx="1" fill="${r[3]}" opacity=".5"/><rect x="61" y="51" width="5" height="2" rx="1" fill="${r[3]}" opacity=".5"/>
      <path d="M83.8 53 L79 53 Q77 53 77 55 L77 57 Q77 59 79 59 L83.8 59 Z" fill="#FFF7A8"/>
      <path d="M13 64 L84 64 L84 69 Q84 73 80 73 L17 73 Q13 73 13 69 Z" fill="#2E2E3D" opacity=".55"/>
      ${v.wheel(c, 29, 73.5, 10.5)}${v.wheel(c, 68, 73.5, 10.5)}`;
  },
};
