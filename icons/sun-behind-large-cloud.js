const sky = require('../src/parts/sky');

const C = sky.cloud(51, 61, 1);
const body = sky.cloudPath(C);
module.exports = {
  id: 'sun-behind-large-cloud',
  name: 'Sun Behind Large Cloud',
  emoji: '🌥️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['mostly cloudy', 'weather', 'cloud', 'sun', 'overcast'],
  tone: 'silver',
  body,
  shine: sky.shineOn(C[1]),
  draw: (c) => sky.sun(c, 33, 34, 13) + sky.paintCloud(c, C),
};
