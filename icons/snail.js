const k = require('../src/parts/critter');
// A snail gliding left: the coiled amber shell is the body, the soft foot and eye stalks come out under it.
const body = 'M54 28 A24 24 0 1 1 53.99 28 Z';
module.exports = {
  id: 'snail',
  name: 'Snail',
  emoji: '🐌',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['snail', 'slow', 'shell', 'garden', 'slime'],
  tone: 'amber',
  body,
  shine: [41, 37, -45],
  draw(c) {
    const foot = c.radial('foot', 'sand', 0.3, 0.2);
    const ink = '#3D2A0A';
    return `${k.legs('M26 52 L19 34 M30 51 L29 32', '#B08A4E', 3)}
      ${k.eye(19, 33, 2.8, ink)}${k.eye(29, 31, 2.8, ink)}
      ${k.part(c, 'M10 82 C9 78 13 76 18 74 C22 66 22 56 26 50 C28 46 34 46 35 52 C36 60 34 68 38 74 L82 75 C88 76 89 82 84 84 L14 84 C12 84 10 83.5 10 82 Z', foot, 'sand')}
      ${k.legs('M30 60.5 Q32 62.5 34.5 61', ink, 1.8)}
      <path d="${body}" fill="${c.radial('a', 'amber', 0.35, 0.25)}"/>
      ${k.legs(k.spiral(55, 53, 21, 2.2, 3.4, 0.3), '#5E2E00', 2.6)}`;
  },
};
