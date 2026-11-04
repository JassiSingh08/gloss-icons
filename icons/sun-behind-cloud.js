const sky = require('../src/parts/sky');

const C = sky.cloud(44, 62, 0.95);
const body = sky.cloudPath(C);
module.exports = {
  id: 'sun-behind-cloud',
  name: 'Sun Behind Cloud',
  emoji: '⛅',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['partly cloudy', 'weather', 'sun', 'cloud', 'mild'],
  tone: 'silver',
  body,
  shine: sky.shineOn(C[1]),
  draw: (c) => sky.sun(c, 58, 38, 16) + sky.paintCloud(c, C),
};
