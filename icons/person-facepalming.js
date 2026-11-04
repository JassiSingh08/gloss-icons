const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ hair: 'short' });
module.exports = {
  id: 'person-facepalming',
  name: 'Person Facepalming',
  emoji: '🤦',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['facepalm', 'disbelief', 'exasperated', 'ugh', 'really'],
  ...p.spec(P, 'navy'),
  draw: (c) => p.bust(c, P, {
    garment: 'navy',
    neck: 'shirt',
    hair: 'short',
    color: 'brown',
    face: f.eyes.closed({ y: 50, dx: 11 }) + f.mouth.flat({ y: 70, w: 7, tilt: 3 }),
  })
    + p.sleeve(c, P, [[17, 62], [22, 82], [32, 54]], 10.5) + p.hand(c, 38, 42, { rot: 28, s: 1.55 }),
};
