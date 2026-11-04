const p = require('../src/parts/person');

const P = p.pose({ cy: 39, hair: 'long' });
module.exports = {
  id: 'princess',
  name: 'Princess',
  emoji: '👸',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['princess', 'royal', 'queen', 'fairy tale', 'tiara'],
  ...p.spec(P, 'pink'),
  draw(c) {
    const g = c.ramp('gold');
    const metal = c.linear('tiara', 'gold', [0, 0, 1, 1], 0, 2);
    const tiara = P.at(`<path d="M26 27 Q48 18 70 27 L66 20 L57 18 L48 4 L39 18 L30 20 Z" fill="${metal}" stroke="${g[3]}" stroke-opacity=".7" stroke-width="1.6" stroke-linejoin="round"/>
      <ellipse cx="48" cy="16" rx="3.4" ry="4.4" fill="${c.radial('gem', 'pink', 0.35, 0.3)}"/>
      <circle cx="35" cy="21" r="2.2" fill="${c.radial('gem2', 'sky', 0.35, 0.3)}"/><circle cx="61" cy="21" r="2.2" fill="${c.radial('gem2', 'sky', 0.35, 0.3)}"/>`);
    const necklace = `<path d="M37 61 Q48 72 59 61" stroke="#FFF3A6" stroke-width="1.6" fill="none"/><circle cx="48" cy="67.5" r="2.4" fill="${c.radial('pearl', 'white', 0.35, 0.3)}"/>`;
    return p.bust(c, P, { garment: 'pink', neck: 'v', hair: 'long', color: 'brown', under: necklace, face: p.face.calm(), over: tiara });
  },
};
