const v = require('../src/parts/vehicle');
const body = 'M68 61 L37 61 Q31 61 30.5 55.5 L15 47 L11 31 Q10.5 28 13 28 L14 28 Q16 28 17 30 L21 40 L31.5 42.5 Q34 32 47 32 L60 32 Q76 32 82 46 Q84.5 54 78.5 58.5 Q74.5 61 68 61 Z';
module.exports = {
  id: 'helicopter',
  name: 'Helicopter',
  emoji: '🚁',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['chopper', 'rescue', 'flight', 'aerial', 'hover'],
  tone: 'red',
  body,
  shine: [41, 37, -18],
  shineSize: [5, 2],
  draw(c) {
    const paint = c.radial('a', 'red', 0.4, 0.2);
    const blade = c.linear('blade', 'black', [0, 0, 0, 1], 0, 2);
    const skid = c.linear('skid', 'silver', [0, 0, 0, 1], 0, 3);
    return `<path d="M51 32 L51 24" stroke="#2E2E3D" stroke-width="3.4"/>
      <path d="M7 22.5 Q30 20 51 21 Q72 20 93 22.5 Q72 25.5 51 24.5 Q30 25.5 7 22.5 Z" fill="${blade}"/>
      <rect x="45" y="19" width="12" height="5.5" rx="2.5" fill="#3A3E52"/>
      <circle cx="13" cy="33" r="7" fill="#E6F6FF" opacity=".25" stroke="#8E93AD" stroke-opacity=".6" stroke-width="1"/>
      <path d="M13 26 L13 40" stroke="#2E2E3D" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M42 61 L40 72 M68 61 L70 72" stroke="#3A3E52" stroke-width="2.6"/>
      <path d="M28 72 L80 72 Q85 72 86 68" stroke="#141420" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M28 72 L80 72 Q85 72 86 68" stroke="${skid}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M63 36 Q74 36 79.5 47 L63 47 Z" fill="${v.glass(c)}"/>
      ${v.win(c, 47, 37, 12, 10, 2)}
      <path d="M31 50 L83 50" stroke="#F7F5FF" stroke-opacity=".9" stroke-width="2.4"/>
      <path d="M44 51 L44 60" stroke="#3D0003" stroke-opacity=".4" stroke-width="1.3"/>`;
  },
};
