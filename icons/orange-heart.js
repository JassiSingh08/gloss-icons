const h = require('../src/parts/heart');
module.exports = {
  id: 'orange-heart',
  name: 'Orange Heart',
  emoji: '🧡',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['orange', 'love', 'friendship', 'warm', 'care'],
  ...h.solid('orange', 'tangerine'),
};
