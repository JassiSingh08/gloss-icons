const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'face-holding-back-tears',
  name: 'Face Holding Back Tears',
  emoji: '🥹',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['touched', 'grateful', 'moved', 'proud', 'tearful'],
  draw: (c) => f.head(c) + b.worried({ y: 32, slant: 4, dx: 12 }) + b.bigEyes(c, { y: 46, dx: 12, water: true }) + f.stroke('M39 66.5 Q48 73 57 66.5', 3.4) + f.stroke('M42 69.6 Q48 72.2 54 69.6', 2.2, f.INK, ' opacity=".4"'),
};
