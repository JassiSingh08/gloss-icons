const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'confused-face',
  name: 'Confused Face',
  emoji: '😕',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['confused', 'puzzled', 'unsure', 'huh', 'hmm'],
  draw: (c) => f.head(c) + f.stroke('M31 38 Q36.5 34.5 42 36.5', 3.2) + f.stroke('M54 35.5 L65 38.5', 3.2) + f.eyes.oval() + f.stroke('M38 69 Q44 64.5 51 65.5 Q56 66.5 59 64', 3.6),
};
