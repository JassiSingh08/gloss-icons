const h = require('../src/parts/heart');
module.exports = {
  id: 'white-heart',
  name: 'White Heart',
  emoji: '🤍',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['white', 'love', 'pure', 'clean', 'peace'],
  ...h.solid('white'),
};
