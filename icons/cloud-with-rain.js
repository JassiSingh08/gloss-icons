const sky = require('../src/parts/sky');

const C = sky.cloud(48, 44, 1);
const body = sky.cloudPath(C);
module.exports = {
  id: 'cloud-with-rain',
  name: 'Cloud With Rain',
  emoji: '🌧️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['rain', 'weather', 'rainy', 'wet', 'shower'],
  tone: 'slate',
  body,
  shine: sky.shineOn(C[1]),
  draw: (c) => sky.paintCloud(c, C, { kind: 'rain' })
    + sky.drop(c, 28, 76, { scale: 0.85 }) + sky.drop(c, 45, 80) + sky.drop(c, 62, 75, { scale: 0.9 }) + sky.drop(c, 75, 82, { scale: 0.7 }),
};
