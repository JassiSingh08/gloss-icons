const h = require('../src/parts/heart');
module.exports = {
  id: 'black-heart',
  name: 'Black Heart',
  emoji: '🖤',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['black', 'love', 'dark', 'goth', 'grief'],
  ...h.solid('black'),
};
