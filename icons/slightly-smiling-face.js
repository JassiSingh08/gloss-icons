const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'slightly-smiling-face',
  name: 'Slightly Smiling Face',
  emoji: '🙂',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['smile', 'polite', 'fine', 'content'],
  draw: (c) => f.head(c) + f.eyes.oval() + f.mouth.smile(),
};
