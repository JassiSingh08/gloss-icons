const h = require('../src/parts/heart');
module.exports = {
  id: 'pink-heart',
  name: 'Pink Heart',
  emoji: '🩷',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['pink', 'love', 'cute', 'sweet', 'crush'],
  ...h.solid('pink', 'rose'),
};
