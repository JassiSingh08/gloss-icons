const sky = require('../src/parts/sky');

const C = sky.cloud(48, 60, 1.05);
const body = sky.cloudPath(C);
module.exports = {
  id: 'cloud',
  name: 'Cloud',
  emoji: '☁️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['cloud', 'weather', 'cloudy', 'overcast', 'sky'],
  tone: 'silver',
  body,
  shine: sky.shineOn(C[1]),
  draw: (c) => sky.paintCloud(c, C),
};
