const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'pleading-face',
  name: 'Pleading Face',
  emoji: '🥺',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['pleading', 'puppy eyes', 'please', 'begging', 'aww'],
  draw: (c) => f.head(c) + b.worried({ y: 32, slant: 5, dx: 12 }) + b.bigEyes(c, { y: 46, dx: 12 }) + f.stroke('M42 70 Q48 66.5 54 70', 3.4),
};
