const v = require('../src/parts/vehicle');
module.exports = {
  id: 'oncoming-automobile',
  name: 'Oncoming Automobile',
  emoji: '🚘',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['car', 'headlights', 'drive', 'road', 'traffic'],
  tone: 'red',
  body: v.FRONT_CAR,
  shine: [20.5, 54, -60],
  shineSize: [4.5, 2],
  draw(c) {
    const car = v.frontCar(c, 'red');
    return `${car.under}${car.body}`;
  },
};
