const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'face-with-steam-from-nose',
  name: 'Face With Steam From Nose',
  emoji: '😤',
  group: 'Smileys & Emotion',
  subgroup: 'face-negative',
  tags: ['huff', 'triumph', 'fuming', 'frustrated', 'proud'],
  draw(c) {
    const steam = b.glow(c, 'steam', 'white', 30, 60, 40);
    const puff = (s) => b.puffs(c, [[48 + s * 9, 61, 2.6], [48 + s * 15, 64.5, 4.2], [48 + s * 23, 69, 5.8], [48 + s * 31, 72, 5]], { paint: steam, edge: '#8C83AD', sw: 1.6 });
    return f.head(c) + f.brows.angry({ y: 36, slant: 5 }) + f.eyes.lidded({ y: 46, tilt: 4 })
      + f.stroke('M42 73 Q48 69.5 54 73', 3.6) + f.stroke('M46.5 58.5 L46.5 59 M49.5 58.5 L49.5 59', 2.4)
      + puff(-1) + puff(1);
  },
};
