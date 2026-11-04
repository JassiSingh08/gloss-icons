const sky = require('../src/parts/sky');

const u = require('./umbrella').umbrella(20);
module.exports = {
  ...u,
  id: 'umbrella-with-rain-drops',
  name: 'Umbrella With Rain Drops',
  emoji: '☔',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['umbrella', 'rain', 'rainy day', 'wet', 'weather'],
  draw: (c) => u.draw(c) + sky.drop(c, 24, 15, { scale: 0.95, rot: 10 }) + sky.drop(c, 74, 11, { scale: 1, rot: 10 }) + sky.drop(c, 82, 66, { scale: 0.8, rot: 10 }) + sky.drop(c, 16, 68, { scale: 0.8, rot: 10 }),
};
