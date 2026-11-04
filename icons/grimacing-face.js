const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'grimacing-face',
  name: 'Grimacing Face',
  emoji: '😬',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['grimace', 'awkward', 'oops', 'yikes'],
  draw: (c) => f.head(c) + a.brows.sad() + f.eyes.oval() + f.mouth.teeth(),
};
