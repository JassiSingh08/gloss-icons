const f = require('../src/parts/face');
const p = require('../src/parts/person');

const HAIR = 'curly';
const P = p.pose({ cy: 39, r: 24, sw: 29, sy: 65, neck: 0.9, hair: HAIR });
module.exports = {
  id: 'child',
  name: 'Child',
  emoji: '🧒',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['child', 'kid', 'youngster', 'young'],
  ...p.spec(P, 'gold'),
  draw: (c) => p.bust(c, P, {
    garment: 'gold',
    neck: 'crew',
    hair: HAIR,
    color: 'dark',
    face: f.brows.flat({ y: 41 }) + f.eyes.oval({ y: 51, ry: 5 }) + f.mouth.smile({ y: 68, w: 9, lift: 3 }),
  }),
};
