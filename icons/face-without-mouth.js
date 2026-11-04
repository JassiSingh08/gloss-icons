const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'face-without-mouth',
  name: 'Face Without Mouth',
  emoji: '😶',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['speechless', 'silent', 'no words', 'blank', 'quiet'],
  draw: (c) => f.head(c) + f.eyes.oval({ y: 48 }),
};
