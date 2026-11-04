const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ hair: 'crop' });
module.exports = {
  id: 'older-person',
  name: 'Older Person',
  emoji: '🧓',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['older', 'elder', 'senior', 'grey hair'],
  ...p.spec(P, 'slate'),
  draw: (c) => p.bust(c, P, {
    garment: 'slate',
    neck: 'shirt',
    hair: 'crop',
    color: 'grey',
    face: f.brows.flat({ y: 38 }) + f.eyes.oval({ y: 49 }) + f.mouth.smile({ y: 68 }),
    over: p.glasses(P),
  }),
};
