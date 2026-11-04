const v = require('../src/parts/vehicle');
const body = v.rr(21, 12, 54, 64, [17, 17, 6, 6]);
module.exports = {
  id: 'train',
  name: 'Train',
  emoji: '🚆',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['rail', 'commute', 'platform', 'travel', 'railway'],
  tone: 'red',
  body,
  shine: [29, 19.5, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'red', [0, 0, 0.5, 1], 0, 2);
    const r = c.ramp('red');
    return `<rect x="16" y="81" width="64" height="3.5" rx="1" fill="#4A3020"/>
      <path d="M31 84 L33 70 M65 84 L63 70" stroke="#8E93AD" stroke-width="3"/>
      <rect x="27" y="74" width="10" height="9" rx="2" fill="#1E1E2A"/><rect x="59" y="74" width="10" height="9" rx="2" fill="#1E1E2A"/>
      <path d="${body}" fill="${paint}"/>
      <path d="${v.rr(27, 19, 42, 25, [11, 11, 3, 3])}" fill="${v.glass(c)}"/>
      <path d="${v.rr(36, 21.5, 24, 5, 1.5)}" fill="#141420"/>
      <path d="M39 24 L51 24" stroke="#FFC21A" stroke-width="2" stroke-linecap="round"/>
      <path d="M21.5 49 L74.5 49 L74.5 54 L21.5 54 Z" fill="#F7F5FF" opacity=".9"/>
      ${v.lamp(30, 62, 4.2, 3.4)}${v.lamp(66, 62, 4.2, 3.4)}
      <path d="${v.rr(40, 64, 16, 8, 2)}" fill="#141420"/>
      <path d="M43 68 L53 68" stroke="#8E93AD" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
