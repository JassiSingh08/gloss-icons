const v = require('../src/parts/vehicle');
module.exports = {
  id: 'oncoming-taxi',
  name: 'Oncoming Taxi',
  emoji: '🚖',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['cab', 'hail', 'ride', 'city', 'pickup'],
  tone: 'gold',
  body: v.FRONT_CAR,
  shine: [20.5, 54, -60],
  shineSize: [4.5, 2],
  draw(c) {
    const car = v.frontCar(c, 'gold');
    const sign = c.linear('sign', 'cream', [0, 0, 0, 1], 0, 2);
    c.def(`<clipPath id="${c.id('car')}"><path d="${v.FRONT_CAR}"/></clipPath>`);
    const checks = Array.from({ length: 24 }, (_, i) => `<rect x="${12 + i * 3}" y="${i % 2 ? 51 : 48}" width="3" height="3" fill="#2E2E3D"/>`).join('');
    return `${car.under}
      <path d="${v.rr(36, 17, 24, 12, [4, 4, 0, 0])}" fill="${sign}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.2"/>
      <rect x="40" y="20.5" width="16" height="4.5" rx="1.2" fill="#E02A00"/>
      ${car.body}
      <g clip-path="url(#${c.id('car')})">${checks}</g>`;
  },
};
