const v = require('../src/parts/vehicle');
const body = 'M23 14 L43 14 Q47 14 47 18 L47 38 Q50 45 58 47.5 L75 51.5 Q84 54 84 62 L84 66 Q84 69 81 69 L23 69 Q19 69 19 65 L19 18 Q19 14 23 14 Z';
module.exports = {
  id: 'roller-skate',
  name: 'Roller Skate',
  emoji: '🛼',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['skating', 'roller disco', 'retro', 'rink', 'skate'],
  tone: 'pink',
  body,
  shine: [24, 22, -70],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'pink', [0, 0, 0.6, 1], 0, 2);
    const sole = c.linear('sole', 'white', [0, 0, 0, 1], 0, 2);
    const plate = c.linear('plate', 'silver', [0, 0, 0, 1], 1, 3);
    const stop = c.radial('stop', 'black', 0.35, 0.3);
    const p = c.ramp('pink');
    return `<path d="M80 66 L88 66 Q90 66 90 68 L90 72 Q90 75 87 75 L82 75 Z" fill="${stop}"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M19 62 L84 62 L84 66 Q84 69 81 69 L23 69 Q19 69 19 65 Z" fill="${sole}"/>
      <path d="M19.5 22 L46.5 22" stroke="#F7F5FF" stroke-width="3"/>
      <path d="M48 30 L56 36 M48 36 L56 30 M50 39 L60 46 M50 45 L59 40 M57 47 L64 52 M60 50 L66 48" stroke="#F7F5FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M45.5 26 L45.5 46" stroke="${p[3]}" stroke-opacity=".45" stroke-width="1.3"/>
      <path d="${v.rr(22, 69, 58, 4.5, 1.5)}" fill="${plate}"/>
      ${v.wheel(c, 27, 77, 7)}${v.wheel(c, 41, 77, 7)}${v.wheel(c, 61, 77, 7)}${v.wheel(c, 75, 77, 7)}`;
  },
};
