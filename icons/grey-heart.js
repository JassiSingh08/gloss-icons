const h = require('../src/parts/heart');
module.exports = {
  id: 'grey-heart',
  name: 'Grey Heart',
  emoji: '🩶',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['grey', 'gray', 'love', 'calm', 'neutral'],
  ...h.solid('grey'),
};
