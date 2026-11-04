const v = require('../src/parts/vehicle');
const body = 'M14 73 Q11 73 11 69 L11 47 Q11 45 13 45 L40 45 L40 32 Q40 27 45 27 L59 27 Q63 27 65.5 31 L72.5 44.5 Q84 46 84 53 L84 69 Q84 73 80 73 Z';
module.exports = {
  id: 'pickup-truck',
  name: 'Pickup Truck',
  emoji: '🛻',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['truck', 'haul', 'farm', 'work', 'country'],
  tone: 'orange',
  body,
  shine: [16, 49, -10],
  shineSize: [5, 2],
  draw(c) {
    const paint = c.radial('a', 'orange', 0.3, 0.2);
    const r = c.ramp('orange');
    return `<path d="${body}" fill="${paint}"/>
      <path d="M13 45 L40 45 L40 50 L13 50 Z" fill="${r[3]}" opacity=".45"/>
      <path d="M44 31.5 L58.5 31.5 Q61 31.5 62.5 34 L68 44.5 L44 44.5 Z" fill="${v.glass(c)}"/>
      <path d="M53 31.5 L53 44.5" stroke="${r[2]}" stroke-width="2.2"/>
      <path d="M40 46 L40 67" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1.3"/>
      <rect x="45" y="50" width="5" height="2" rx="1" fill="${r[3]}" opacity=".5"/>
      <path d="M83.8 53 L79 53 Q77 53 77 55 L77 57 Q77 59 79 59 L83.8 59 Z" fill="#FFF7A8"/>
      <path d="M11.3 52 L13.5 52 Q15 52 15 53.5 L15 56 Q15 57.5 13.5 57.5 L11.3 57.5 Z" fill="#FF3B30"/>
      <path d="M11 64.5 L84 64.5 L84 69 Q84 73 80 73 L14 73 Q11 73 11 69 Z" fill="#D9DCE8" opacity=".75"/>
      ${v.wheel(c, 26, 74.5)}${v.wheel(c, 68, 74.5)}`;
  },
};
