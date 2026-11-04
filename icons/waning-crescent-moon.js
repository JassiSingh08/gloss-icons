const sky = require('../src/parts/sky');

module.exports = {
  id: 'waning-crescent-moon',
  name: 'Waning Crescent Moon',
  emoji: '🌘',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'crescent', 'waning', 'night', 'lunar'],
  tone: 'slate',
  body: sky.moonDisc,
  shine: [32, 30, -40],
  draw: (c) => sky.moonPhase(c, -1, -0.45),
};
