const v = require('../src/parts/vehicle');
const body = 'M10 59 L26 57 L30 45 Q31 42 34 42 L38 42 L41 34 Q42 32 44.5 32 L56 32 Q59 32 60.5 34.5 L64.5 42 Q67.5 42 69.5 45 L74 52.5 L89 51 Q87 63 77 72 L22 72 Q13 68 10 59 Z';
module.exports = {
  id: 'motor-boat',
  name: 'Motor Boat',
  emoji: '🛥️',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['yacht', 'cruise', 'marina', 'luxury', 'boat'],
  tone: 'white',
  body,
  shine: [32, 46, -65],
  shineSize: [4, 1.6],
  draw(c) {
    const paint = c.linear('a', 'white', [0, 0, 0.3, 1], 0, 2);
    const navy = c.linear('navy', 'navy', [0, 0, 1, 0], 1, 2);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    return `<path d="M50 32 L50 22 M50 25 L56 25" stroke="#3A3E52" stroke-width="1.8" stroke-linecap="round"/>
      <path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})"><path d="M0 63 L96 59 L96 66 L0 70 Z" fill="${navy}"/></g>
      <path d="M33 47 L67 47 L70.5 52.5 L31 52.5 Z" fill="${v.glass(c, 'dark')}"/>
      <path d="M44 36 L57 36 L59.5 41 L42 41 Z" fill="${v.glass(c, 'dark')}"/>
      <path d="M10.5 59.5 L26 57.5 L74 53 L88.5 51.5" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.2" fill="none"/>
      ${v.water(c, 72)}`;
  },
};
