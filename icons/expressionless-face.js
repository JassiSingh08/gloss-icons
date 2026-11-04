const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'expressionless-face',
  name: 'Expressionless Face',
  emoji: '😑',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['expressionless', 'deadpan', 'unimpressed', 'blank', 'meh'],
  draw: (c) => f.head(c) + a.eyes.line({ y: 46 }) + f.mouth.flat({ w: 10 }),
};
