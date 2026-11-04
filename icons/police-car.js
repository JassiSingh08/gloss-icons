const v = require('../src/parts/vehicle');
const body = v.SEDAN;
module.exports = {
  id: 'police-car',
  name: 'Police Car',
  emoji: '🚓',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['police', 'patrol', 'cop', 'emergency', 'law'],
  tone: 'navy',
  body,
  shine: [22, 51.5, -12],
  shineSize: [6, 2.4],
  draw(c) {
    const paint = c.radial('a', 'navy', 0.3, 0.2);
    const door = c.linear('door', 'white', [0, 0, 0, 1], 0, 2);
    c.def(`<clipPath id="${c.id('car')}"><path d="${body}"/></clipPath>`);
    return `<rect x="45" y="27.5" width="11" height="4" rx="1" fill="#141420"/>
      <path d="${v.rr(40, 23, 9.5, 6, [3, 0, 0, 1.5])}" fill="#FF3B30" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <path d="${v.rr(51.5, 23, 9.5, 6, [0, 3, 1.5, 0])}" fill="#2E8BFF" stroke="#001E4D" stroke-opacity=".5" stroke-width="1"/>
      <rect x="49.5" y="23" width="2" height="6" fill="#D9DCE8"/>
      <ellipse cx="43" cy="24.8" rx="2.4" ry="1" fill="#fff" opacity=".7"/>
      <path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('car')})"><path d="M30 47 L68 47 L68 67 L30 67 Z" fill="${door}"/></g>
      ${v.sedanDetails(c, 'navy')}
      <path d="M38 53 L42.5 53 L42.5 57 Q42.5 60.5 40.25 61.5 Q38 60.5 38 57 Z" fill="#FFC21A" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".8"/>
      ${v.wheel(c, 29, 74.5)}${v.wheel(c, 67, 74.5)}`;
  },
};
