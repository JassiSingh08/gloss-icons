const F = require('../src/parts/figure');

// Facing us in a rowing boat, both oars out over the sides and into the water.
const HULL = 'M7 57 Q48 66 89 57 L81 75 Q48 84 15 75 Z';
module.exports = {
  id: 'person-rowing-boat',
  name: 'Person Rowing Boat',
  emoji: '🚣',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['rowing', 'boat', 'row', 'lake', 'oars'],
  tone: 'red',
  ...F.shineOf(48, 26, 12),
  ...F.build((c) => {
    const hull = c.linear('hull', 'red', [0, 0, 0, 1], 0, 3);
    const wood = c.linear('wood', 'brown', [0, 0, 1, 1], 0, 2);
    const blade = (x, y, rot) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="3.2" transform="rotate(${rot} ${x} ${y})" fill="${wood}" stroke="#331805" stroke-width="1.2"/>`;
    return {
      art: F.person(c, {
        head: [48, 26], r: 12, hair: 'short', color: 'auburn', face: F.face.focus(),
        torso: [[48, 47], [48, 58]], tw: [10, 8.5], top: 'teal', bottom: 'navy',
        armB: [[40, 44], [34, 52], [36, 58]], handB: false,
        armF: [[56, 44], [62, 52], [60, 58]], handF: false,
      }) + `<path d="${HULL}" fill="${hull}"/>
        <path d="M11 60 Q48 69 85 60" stroke="#FFF7A8" stroke-opacity=".7" stroke-width="2.6" fill="none" stroke-linecap="round"/>`
        + F.rod('M37 59 L12 77', 2.6, '#E8B98A', '#331805') + F.rod('M59 59 L84 77', 2.6, '#E8B98A', '#331805')
        + blade(11, 78, 35) + blade(85, 78, -35)
        + F.hand(c, 36, 57, { dir: 140 }) + F.hand(c, 60, 57, { dir: 40 }),
      extra: `<path d="M4 82 Q9 79 14 82 T24 82 M72 82 Q77 79 82 82 T92 82" stroke="#5BC2FF" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    };
  }),
};
