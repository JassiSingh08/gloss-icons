const f = require('../src/parts/face');
const p = require('../src/parts/person');

const P = p.pose({ hair: 'crop' });
module.exports = {
  id: 'adult',
  name: 'Person',
  emoji: '🧑',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['person', 'adult', 'someone', 'human'],
  ...p.spec(P, 'teal'),
  draw: (c) => p.bust(c, P, { garment: 'teal', neck: 'crew', hair: 'crop', color: 'brown', face: p.face.calm() }),
};
