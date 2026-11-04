const sky = require('../src/parts/sky');

module.exports = {
  id: 'new-moon',
  name: 'New Moon',
  emoji: '🌑',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'new moon', 'dark', 'night', 'lunar'],
  tone: 'slate',
  body: sky.moonDisc,
  shine: [32, 30, -40],
  draw: (c) => sky.moonPhase(c, 0, 0, { dark: true }),
};
