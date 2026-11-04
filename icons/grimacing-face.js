const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'grimacing-face',
  name: 'Grimacing Face',
  emoji: '😬',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['grimace', 'awkward', 'oops', 'yikes'],
  draw: (c) => f.head(c) + f.brows.worried() + f.eyes.oval() + f.mouth.teeth(),
};
