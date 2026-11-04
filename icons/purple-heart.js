const h = require('../src/parts/heart');
module.exports = {
  id: 'purple-heart',
  name: 'Purple Heart',
  emoji: '💜',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['purple', 'love', 'compassion', 'kpop', 'bond'],
  ...h.solid('purple'),
};
