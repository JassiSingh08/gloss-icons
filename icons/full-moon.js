const sky = require('../src/parts/sky');

module.exports = {
  id: 'full-moon',
  name: 'Full Moon',
  emoji: '🌕',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'full moon', 'night', 'lunar', 'werewolf'],
  tone: 'gold',
  body: sky.moonDisc,
  shine: [32, 30, -40],
  draw: (c) => sky.moonPhase(c, 0, 0, { full: true }),
};
