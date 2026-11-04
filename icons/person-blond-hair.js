const p = require('../src/parts/person');

const P = p.pose({ hair: 'bob' });
module.exports = {
  id: 'person-blond-hair',
  name: 'Person: Blond Hair',
  emoji: '👱',
  group: 'People & Body',
  subgroup: 'person',
  tags: ['blond', 'blonde', 'fair hair', 'person'],
  ...p.spec(P, 'navy'),
  draw: (c) => p.bust(c, P, { garment: 'navy', neck: 'crew', hair: 'bob', color: 'blond', face: p.face.calm() }),
};
