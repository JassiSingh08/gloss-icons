const h = require('../src/parts/heart');
module.exports = {
  id: 'yellow-heart',
  name: 'Yellow Heart',
  emoji: '💛',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['yellow', 'love', 'friendship', 'happy', 'sunny'],
  ...h.solid('gold'),
};
