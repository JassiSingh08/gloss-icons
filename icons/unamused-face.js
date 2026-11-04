const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'unamused-face',
  name: 'Unamused Face',
  emoji: '😒',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['unamused', 'annoyed', 'side eye', 'unimpressed', 'meh'],
  draw: (c) => f.head(c) + f.brows.flat({ y: 37, sw: 3 }) + a.eyes.half({ look: 2.2 })
    + f.stroke('M45 68 Q53 63.5 60 66.5', 3.6),
};
