const h = require('../src/parts/heart');
module.exports = {
  id: 'brown-heart',
  name: 'Brown Heart',
  emoji: '🤎',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['brown', 'love', 'cosy', 'chocolate', 'earthy'],
  ...h.solid('brown'),
};
