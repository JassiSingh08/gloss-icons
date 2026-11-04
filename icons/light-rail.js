const v = require('../src/parts/vehicle');
const body = 'M10 72 Q7 72 7 68 L7 40 Q7 31 16 31 L74 31 Q82 31 85 38 L88 50 Q89 54 89 58 L89 68 Q89 72 85 72 Z';
module.exports = {
  id: 'light-rail',
  name: 'Light Rail',
  emoji: '🚈',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['tram', 'streetcar', 'city', 'commute', 'rail'],
  tone: 'lime',
  body,
  shine: [13, 37, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'lime', [0, 0, 0.3, 1], 0, 2);
    const l = c.ramp('lime');
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    return `<path d="M4 13 L92 13" stroke="#2E2E3A" stroke-width="1.4"/>
      <path d="M40 31 L48 21 L56 31 M44 21 L52 21 M48 21 L48 13.5" stroke="#3A3E52" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
      <rect x="38" y="28.5" width="20" height="3" rx="1" fill="#2E2E3A"/>
      <path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})"><rect x="0" y="58" width="96" height="16" fill="#2E2E3D" opacity=".55"/></g>
      ${v.win(c, 12, 38, 13, 16, 2)}${v.win(c, 28, 38, 13, 16, 2)}
      <rect x="45" y="31.5" width="5" height="40" fill="${l[3]}" opacity=".55"/>
      ${v.win(c, 54, 38, 13, 16, 2)}
      <path d="M71 38 L79 38 Q82 38 83 41 L86 54 L71 54 Z" fill="${v.glass(c)}"/>
      ${v.lamp(86, 63, 2.2, 2.2)}
      ${v.rail(4, 92)}
      ${v.bogie(c, 24, 79)}${v.bogie(c, 72, 79)}`;
  },
};
