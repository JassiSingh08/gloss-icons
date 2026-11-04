const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ cx: 44, cy: 40, r: 22, sw: 30, sy: 64, hair: 'bob' });
module.exports = {
  id: 'person-raising-hand',
  name: 'Person Raising Hand',
  emoji: '🙋',
  group: 'People & Body',
  subgroup: 'person-gesture',
  tags: ['raise hand', 'me', 'pick me', 'question', 'volunteer'],
  ...p.spec(P, 'orange'),
  draw: (c) => p.bust(c, P, {
    garment: 'orange',
    neck: 'crew',
    hair: 'bob',
    color: 'dark',
    face: f.brows.raised({ y: 38 }) + f.eyes.smile({ y: 50 }) + f.mouth.smile({ y: 67 }),
  }) + p.sleeve(c, P, [[70, 63], [77, 46], [79, 30]], 9.5) + p.hand(c, 79, 20, { rot: 6, s: 1.15 }),
};
