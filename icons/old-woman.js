const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ cy: 39, hair: 'bun' });
module.exports = {
  id: 'old-woman',
  name: 'Old Woman',
  emoji: '👵',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['old woman', 'grandma', 'grandmother', 'senior'],
  ...p.spec(P, 'red'),
  draw: (c) => p.bust(c, P, {
    garment: 'red',
    neck: 'v',
    hair: 'bun',
    color: 'grey',
    face: f.brows.flat({ y: 38 }) + f.eyes.oval({ y: 49 }) + f.mouth.smile({ y: 68, w: 9 }),
    over: p.glasses(P),
  }),
};
