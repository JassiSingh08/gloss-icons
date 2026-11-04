const sky = require('../src/parts/sky');

module.exports = {
  id: 'waning-gibbous-moon',
  name: 'Waning Gibbous Moon',
  emoji: '🌖',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'gibbous', 'waning', 'night', 'lunar'],
  tone: 'gold',
  body: sky.moonDisc,
  shine: [32, 30, -40],
  draw: (c) => sky.moonPhase(c, -1, 0.5),
};
