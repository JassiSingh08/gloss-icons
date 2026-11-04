const v = require('../src/parts/vehicle');
const roof = 'M8 31 L46 14.5 Q48 13.6 50 14.5 L88 31 L88 34 Q88 36 86 36 L10 36 Q8 36 8 34 Z';
const platform = v.rr(7, 76, 82, 8, 2);
module.exports = {
  id: 'station',
  name: 'Station',
  emoji: '🚉',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['platform', 'railway', 'train', 'departures', 'commute'],
  tone: 'red',
  body: [roof, platform],
  shine: [22, 28, -23],
  shineSize: [6, 2],
  draw(c) {
    const red = c.linear('a', 'red', [0, 0, 0.4, 1], 0, 2);
    const slab = c.linear('slab', 'grey', [0, 0, 0, 1], 0, 2);
    const post = c.linear('post', 'silver', [0, 0, 1, 0], 0, 3);
    const train = c.linear('train', 'blue', [0, 0, 0.5, 1], 0, 2);
    const face = c.radial('face', 'white', 0.35, 0.3);
    return `<rect x="13" y="36" width="5" height="41" fill="${post}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1"/>
      <rect x="78" y="36" width="5" height="41" fill="${post}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1"/>
      <path d="${v.rr(44, 44, 30, 36, [11, 11, 2, 2])}" fill="${train}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${v.rr(48, 49, 22, 13, [7, 7, 2, 2])}" fill="${v.glass(c)}"/>
      <rect x="44.5" y="65" width="29" height="3" fill="#F7F5FF" opacity=".85"/>
      ${v.lamp(50, 72, 2.6, 2.2)}${v.lamp(68, 72, 2.6, 2.2)}
      <path d="${roof}" fill="${red}"/>
      <path d="M10 33.5 L86 33.5" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.3"/>
      <path d="M29 36 L29 41" stroke="#3A3E52" stroke-width="1.6"/>
      <circle cx="29" cy="49" r="8.5" fill="${face}" stroke="#2E2E3A" stroke-width="2"/>
      <path d="M29 49 L29 44 M29 49 L32.5 51" stroke="#12002E" stroke-width="1.8" stroke-linecap="round"/>
      <path d="${platform}" fill="${slab}"/>
      <rect x="7.5" y="76.5" width="81" height="2.4" fill="#FFD82E"/>`;
  },
};
