const h = require('../src/parts/heart');
module.exports = {
  id: 'light-blue-heart',
  name: 'Light Blue Heart',
  emoji: '🩵',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['light blue', 'love', 'cyan', 'peace', 'soft'],
  ...h.solid('sky'),
};
