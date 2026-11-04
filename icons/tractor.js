const v = require('../src/parts/vehicle');
const body = 'M18 62 L18 22 Q18 18 22 18 L46 18 Q50 18 50 22 L50 42 L78 42 Q85 42 85 49 L85 60 Q85 65 80 65 L22 65 Q18 65 18 62 Z';
module.exports = {
  id: 'tractor',
  name: 'Tractor',
  emoji: '🚜',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['farm', 'harvest', 'countryside', 'field', 'agriculture'],
  tone: 'green',
  body,
  shine: [23, 23, -40],
  shineSize: [4.5, 2],
  draw(c) {
    const paint = c.linear('a', 'green', [0, 0, 0.5, 1], 0, 2);
    const g = c.ramp('green');
    const pipe = c.linear('pipe', 'black', [0, 0, 1, 0], 0, 2);
    const tread = Array.from({ length: 16 }, (_, i) => {
      const t = (i * Math.PI) / 8;
      return `M${(31 + 17 * Math.cos(t)).toFixed(1)} ${(65 + 17 * Math.sin(t)).toFixed(1)} L${(31 + 19.6 * Math.cos(t)).toFixed(1)} ${(65 + 19.6 * Math.sin(t)).toFixed(1)}`;
    }).join(' ');
    return `<rect x="66" y="27" width="4.5" height="16" rx="1.5" fill="${pipe}"/>
      <path d="${body}" fill="${paint}"/>
      <path d="${v.rr(22, 23, 24, 19, [3, 3, 1, 1])}" fill="${v.glass(c)}"/>
      <path d="M53 46 L80 46 M53 50 L80 50 M53 54 L80 54" stroke="${g[3]}" stroke-opacity=".45" stroke-width="1.5" stroke-linecap="round"/>
      ${v.lamp(83, 47, 1.8, 2.6)}
      <path d="${tread}" stroke="#141420" stroke-width="3.2"/>
      ${v.wheel(c, 31, 65, 17.5, { hub: 'gold', hubR: 8 })}
      ${v.wheel(c, 72, 74.5, 9.5, { hub: 'gold' })}`;
  },
};
