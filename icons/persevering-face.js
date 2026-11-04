const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'persevering-face',
  name: 'Persevering Face',
  emoji: '😣',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['persevere', 'struggle', 'strain', 'determined', 'tough'],
  draw: (c) => f.head(c) + f.brows.angry({ y: 35, slant: 3 }) + f.eyes.squint({ y: 46 }) + f.stroke('M38 70 Q48 63 58 70', 3.8) + f.stroke('M42 68 L54 68', 2, f.INK, ' opacity=".35"'),
};
