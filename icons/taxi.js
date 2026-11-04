const v = require('../src/parts/vehicle');
const body = v.SEDAN;
module.exports = {
  id: 'taxi',
  name: 'Taxi',
  emoji: '🚕',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['cab', 'ride', 'city', 'airport', 'fare'],
  tone: 'gold',
  body,
  shine: [22, 51.5, -12],
  shineSize: [6, 2.4],
  draw(c) {
    const paint = c.radial('a', 'gold', 0.3, 0.2);
    const sign = c.linear('sign', 'cream', [0, 0, 0, 1], 0, 2);
    c.def(`<clipPath id="${c.id('car')}"><path d="${body}"/></clipPath>`);
    const checks = Array.from({ length: 24 }, (_, i) => `<rect x="${12 + i * 3}" y="${i % 2 ? 57.5 : 54.5}" width="3" height="3" fill="#2E2E3D"/>`).join('');
    return `<path d="${v.rr(41, 22.5, 16, 9.5, [3, 3, 0, 0])}" fill="${sign}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.2"/>
      <rect x="44" y="25.5" width="10" height="3" rx="1" fill="#E02A00"/>
      <path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('car')})">${checks}</g>
      ${v.sedanDetails(c, 'gold')}
      ${v.wheel(c, 29, 74.5)}${v.wheel(c, 67, 74.5)}`;
  },
};
