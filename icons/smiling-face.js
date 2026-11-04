const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'smiling-face',
  name: 'Smiling Face',
  emoji: '☺️',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['smile', 'content', 'warm', 'blush', 'serene'],
  draw: (c) => f.head(c) + f.eyes.closed({ y: 44 }) + f.extras.blush(c, { rx: 7, ry: 4, opacity: 0.6 }) + f.mouth.smile({ w: 13, lift: 2, tick: false }),
};
