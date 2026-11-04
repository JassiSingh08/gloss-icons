const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ cx: 43, cy: 38, r: 22, sw: 30, sy: 63, hair: 'long' });
module.exports = {
  id: 'person-tipping-hand',
  name: 'Person Tipping Hand',
  emoji: '💁',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['sassy', 'info', 'whatever', 'help desk', 'flip hair'],
  ...p.spec(P, 'pink'),
  draw: (c) => p.bust(c, P, {
    garment: 'pink',
    neck: 'v',
    hair: 'long',
    color: 'auburn',
    face: f.brows.one({ y: 40 }) + f.eyes.wink({ y: 49, side: -1 }) + f.mouth.smirk({ y: 67 }),
  })
    + p.sleeve(c, P, [[69, 64], [74, 79], [79, 61]], 9.5) + p.hand(c, 80, 53, { rot: 80, s: 1.1, pose: 'flat' }),
};
