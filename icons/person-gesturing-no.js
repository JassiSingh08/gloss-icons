const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ cy: 34, r: 21, sw: 33, sy: 60, hair: 'short' });
module.exports = {
  id: 'person-gesturing-no',
  name: 'Person Gesturing NO',
  emoji: '🙅',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['no', 'stop', 'not allowed', 'nope', 'refuse'],
  ...p.spec(P, 'red'),
  draw: (c) => p.bust(c, P, {
    garment: 'red',
    neck: 'crew',
    hair: 'short',
    color: 'black',
    face: f.brows.angry({ y: 40 }) + f.eyes.oval({ y: 50 }) + f.mouth.flat({ y: 69, w: 8 }),
  })
    + p.sleeve(c, P, [[18, 62], [22, 80], [64, 64]], 10) + p.hand(c, 68, 57, { rot: 40, s: 1.15 })
    + p.sleeve(c, P, [[78, 62], [74, 80], [32, 64]], 10) + p.hand(c, 28, 57, { rot: -40, s: 1.15, flip: true }),
};
