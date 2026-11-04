const sky = require('../src/parts/sky');

const C = sky.cloud(54, 50, 0.86);
const body = sky.cloudPath(C);
module.exports = {
  id: 'sun-behind-rain-cloud',
  name: 'Sun Behind Rain Cloud',
  emoji: '🌦️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['showers', 'weather', 'rain', 'sun', 'cloud'],
  tone: 'slate',
  body,
  shine: sky.shineOn(C[1]),
  draw: (c) => sky.sun(c, 35, 35, 15) + sky.paintCloud(c, C, { kind: 'rain' })
    + sky.drop(c, 40, 77, { scale: 0.85 }) + sky.drop(c, 56, 81, { scale: 0.85 }) + sky.drop(c, 71, 76, { scale: 0.85 }),
};
