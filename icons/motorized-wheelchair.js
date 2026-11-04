const v = require('../src/parts/vehicle');
const body = 'M22 23 Q22 17 28 17 L33 17 Q39 17 39 23 L39 43 L64 43 Q69 43 69 48 L69 53 Q69 58 64 58 L27 58 Q22 58 22 53 Z';
module.exports = {
  id: 'motorized-wheelchair',
  name: 'Motorized Wheelchair',
  emoji: '🦼',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['power chair', 'wheelchair', 'accessibility', 'mobility', 'electric'],
  tone: 'navy',
  body,
  shine: [26, 24, -80],
  shineSize: [5, 2],
  draw(c) {
    const paint = c.linear('a', 'navy', [0, 0, 1, 1], 0, 2);
    const base = c.linear('base', 'grey', [0, 0, 0, 1], 1, 3);
    const arm = c.linear('arm', 'black', [0, 0, 0, 1], 0, 2);
    const knob = c.radial('knob', 'red', 0.35, 0.3);
    return `<path d="M58 38 L58 30" stroke="#2E2E3D" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="58" cy="29" r="3" fill="${knob}"/>
      <path d="${v.rr(20, 58, 56, 10, 3)}" fill="${base}" stroke="#2E2E3A" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${body}" fill="${paint}"/>
      <path d="${v.rr(40, 37, 26, 5, 2)}" fill="${arm}"/>
      <path d="M39.5 48 L68 48" stroke="#080C3D" stroke-opacity=".35" stroke-width="1.3"/>
      ${v.wheel(c, 18, 78, 6)}${v.wheel(c, 76, 78, 6)}${v.wheel(c, 44, 72, 12)}`;
  },
};
