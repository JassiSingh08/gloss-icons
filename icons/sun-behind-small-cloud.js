const sky = require('../src/parts/sky');

const C = sky.cloud(60, 68, 0.64);
const body = sky.cloudPath(C);
module.exports = {
  id: 'sun-behind-small-cloud',
  name: 'Sun Behind Small Cloud',
  emoji: '🌤️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['mostly sunny', 'weather', 'sun', 'cloud', 'fair'],
  tone: 'silver',
  body,
  shine: sky.shineOn(C[1]),
  shineSize: [5, 2.4],
  draw: (c) => sky.sun(c, 42, 43, 20) + sky.paintCloud(c, C),
};
