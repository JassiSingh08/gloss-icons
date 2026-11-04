const v = require('../src/parts/vehicle');
const body = v.rr(19, 12, 58, 66, [11, 11, 6, 6]);
module.exports = {
  id: 'oncoming-bus',
  name: 'Oncoming Bus',
  emoji: '🚍',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['bus', 'arriving', 'commute', 'public transport', 'stop'],
  tone: 'blue',
  body,
  shine: [25, 18.5, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'blue', [0, 0, 0.5, 1], 0, 2);
    const r = c.ramp('blue');
    const arm = (s) => `<path d="M${48 + s * 27} 24 L${48 + s * 34} 24 L${48 + s * 34} 29" stroke="#2E2E3D" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
      <path d="${v.rr(s > 0 ? 80 : 10, 28, 6, 13, 2.5)}" fill="#2E2E3D"/>`;
    return `${v.tyreFront(c, 22, 70, 11, 14)}${v.tyreFront(c, 63, 70, 11, 14)}
      ${arm(-1)}${arm(1)}
      <path d="${body}" fill="${paint}"/>
      <path d="${v.rr(27, 16, 42, 8, 2)}" fill="#141420"/>
      <path d="M31 20 L51 20" stroke="#FFC21A" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M55 20 L65 20" stroke="#FFC21A" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>
      <path d="${v.rr(23.5, 28, 49, 27, 4)}" fill="${v.glass(c)}"/>
      <path d="M48 28 L48 55" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1.6"/>
      <rect x="19.5" y="59" width="57" height="3.5" fill="#F7F5FF" opacity=".85"/>
      ${v.lamp(28, 68.5, 4.5, 3.5)}${v.lamp(68, 68.5, 4.5, 3.5)}
      <path d="${v.rr(38, 65.5, 20, 6, 2)}" fill="#141420"/>
      <rect x="41" y="73" width="14" height="3.5" rx="1" fill="#F7F5FF"/>`;
  },
};
