const sky = require('../src/parts/sky');

const C = sky.cloud(48, 44, 1);
const body = sky.cloudPath(C);
module.exports = {
  id: 'cloud-with-snow',
  name: 'Cloud With Snow',
  emoji: '🌨️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['snow', 'weather', 'winter', 'cold', 'snowfall'],
  tone: 'silver',
  body,
  shine: sky.shineOn(C[1]),
  draw: (c) => sky.paintCloud(c, C)
    + sky.flake(c, 30, 75, 0.2) + sky.flake(c, 50, 80, 0.2) + sky.flake(c, 69, 73, 0.2),
};
