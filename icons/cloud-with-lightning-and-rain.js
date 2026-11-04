const sky = require('../src/parts/sky');

const C = sky.cloud(48, 42, 1);
const body = sky.cloudPath(C);
module.exports = {
  id: 'cloud-with-lightning-and-rain',
  name: 'Cloud With Lightning And Rain',
  emoji: '⛈️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['thunderstorm', 'storm', 'rain', 'lightning', 'weather'],
  tone: 'slate',
  body,
  shine: sky.shineOn(C[1]),
  draw: (c) => sky.bolt(c, 38, 46, 0.5) + sky.paintCloud(c, C, { kind: 'storm' })
    + sky.drop(c, 27, 74, { scale: 0.8 }) + sky.drop(c, 34, 84, { scale: 0.62 }) + sky.drop(c, 70, 74, { scale: 0.8 }) + sky.drop(c, 63, 84, { scale: 0.62 }),
};
