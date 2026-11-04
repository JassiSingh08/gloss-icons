const v = require('../src/parts/vehicle');
module.exports = {
  id: 'oncoming-police-car',
  name: 'Oncoming Police Car',
  emoji: '🚔',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['police', 'siren', 'emergency', 'patrol', 'cop'],
  tone: 'navy',
  body: v.FRONT_CAR,
  shine: [20.5, 54, -60],
  shineSize: [4.5, 2],
  draw(c) {
    const car = v.frontCar(c, 'navy');
    const red = c.radial('red', 'red', 0.35, 0.25);
    const blue = c.radial('blue', 'blue', 0.35, 0.25);
    return `${car.under}
      <rect x="31" y="22" width="34" height="7" rx="2" fill="#141420"/>
      <path d="${v.rr(31, 17, 16, 8, [4, 1, 1, 2])}" fill="${red}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="${v.rr(49, 17, 16, 8, [1, 4, 2, 1])}" fill="${blue}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.1"/>
      <rect x="47" y="18" width="2" height="6" fill="#D9DCE8"/>
      <ellipse cx="36" cy="19.2" rx="3.2" ry="1.1" fill="#fff" opacity=".75"/><ellipse cx="54" cy="19.2" rx="3.2" ry="1.1" fill="#fff" opacity=".75"/>
      ${car.body}
      <path d="M14 51 L82 51 L82 54 L14 54 Z" fill="#F7F5FF" opacity=".9"/>`;
  },
};
