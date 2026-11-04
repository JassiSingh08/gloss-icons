const v = require('../src/parts/vehicle');
const body = 'M27 63 L27 47 C27 32 36 22 48 22 C60 22 69 32 69 47 L69 63 Z';
module.exports = {
  id: 'police-car-light',
  name: 'Police Car Light',
  emoji: '🚨',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['siren', 'alert', 'emergency', 'urgent', 'alarm'],
  tone: 'red',
  body,
  shine: [35, 33, -50],
  shineSize: [6, 2.6],
  draw(c) {
    const dome = c.radial('a', 'red', 0.35, 0.3);
    const core = c.radial('core', 'flame', 0.5, 0.45);
    const base = c.linear('base', 'silver', [0, 0, 0, 1], 0, 3);
    const ray = (deg, len) => `<path d="M45.6 ${48 - 30} L50.4 ${48 - 30} L48 ${48 - 30 - len} Z" fill="#FFC21A" stroke="#C98500" stroke-opacity=".6" stroke-width=".8" stroke-linejoin="round" transform="rotate(${deg} 48 48)"/>`;
    return `${ray(-80, 8)}${ray(-50, 9)}${ray(-24, 9)}${ray(0, 9)}${ray(24, 9)}${ray(50, 9)}${ray(80, 8)}
      <path d="${body}" fill="${dome}"/>
      <ellipse cx="48" cy="49" rx="11" ry="12" fill="${core}" opacity=".9"/>
      <path d="M31 50 C31 37 38 28 48 28" stroke="#FF9A7A" stroke-opacity=".6" stroke-width="1.4" fill="none"/>
      <path d="${v.rr(18, 62, 60, 17, 5)}" fill="${base}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M22 70.5 L74 70.5" stroke="#3A3E52" stroke-opacity=".4" stroke-width="1.3"/>`;
  },
};
