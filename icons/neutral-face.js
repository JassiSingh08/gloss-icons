const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'neutral-face',
  name: 'Neutral Face',
  emoji: '😐',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['neutral', 'meh', 'blank', 'deadpan'],
  draw: (c) => f.head(c) + f.eyes.oval() + f.mouth.flat(),
};
