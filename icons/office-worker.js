const p = require('../src/parts/person');

const P = p.pose({ hair: 'short' });
module.exports = {
  id: 'office-worker',
  name: 'Office Worker',
  emoji: '🧑‍💼',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['office', 'business', 'manager', 'suit', 'work'],
  ...p.spec(P, 'slate'),
  draw(c) {
    const leather = c.linear('case', 'brown', [0, 0, 1, 1], 0, 2);
    const e = c.ramp('brown')[3];
    const bag = `<path d="M65 68 L65 65 Q65 63 67 63 L75 63 Q77 63 77 65 L77 68" stroke="${e}" stroke-width="2.4" fill="none"/>
      <rect x="58" y="67" width="26" height="17" rx="3" fill="${leather}" stroke="${e}" stroke-opacity=".7" stroke-width="1.2"/>
      <path d="M58 73 L84 73" stroke="${e}" stroke-opacity=".45" stroke-width="1.4"/>
      <rect x="69" y="71" width="4" height="4" rx="1" fill="${c.radial('clasp', 'gold')}"/>`;
    return p.bust(c, P, { garment: 'slate', neck: 'jacket', tie: 'red', hair: 'short', color: 'dark', face: p.face.calm() }) + bag;
  },
};
