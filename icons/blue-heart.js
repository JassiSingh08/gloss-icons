const h = require('../src/parts/heart');
module.exports = {
  id: 'blue-heart',
  name: 'Blue Heart',
  emoji: '💙',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['blue', 'love', 'trust', 'loyal', 'calm'],
  ...h.solid('blue'),
};
