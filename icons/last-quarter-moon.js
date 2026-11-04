const sky = require('../src/parts/sky');

module.exports = {
  id: 'last-quarter-moon',
  name: 'Last Quarter Moon',
  emoji: '🌗',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'half moon', 'last quarter', 'night', 'lunar'],
  tone: 'slate',
  body: sky.moonDisc,
  shine: [32, 30, -40],
  draw: (c) => sky.moonPhase(c, -1, 0),
};
