const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'smirking-face',
  name: 'Smirking Face',
  emoji: '😏',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['smirk', 'sly', 'smug', 'suggestive'],
  draw: (c) => f.head(c) + f.brows.one() + f.eyes.lidded() + f.mouth.smirk(),
};
