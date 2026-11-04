const h = require('../src/parts/heart');
module.exports = {
  id: 'green-heart',
  name: 'Green Heart',
  emoji: '💚',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['green', 'love', 'nature', 'jealous', 'eco'],
  ...h.solid('green'),
};
