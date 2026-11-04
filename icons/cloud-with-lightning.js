const sky = require('../src/parts/sky');

const C = sky.cloud(48, 38, 1);
const body = sky.cloudPath(C);
module.exports = {
  id: 'cloud-with-lightning',
  name: 'Cloud With Lightning',
  emoji: '🌩️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['thunder', 'lightning', 'storm', 'weather', 'electric'],
  tone: 'slate',
  body,
  shine: sky.shineOn(C[1]),
  draw: (c) => sky.bolt(c, 36, 42, 0.56) + sky.paintCloud(c, C, { kind: 'storm' }),
};
