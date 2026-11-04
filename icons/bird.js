const k = require('../src/parts/critter');
// A bluebird in profile: rust chest, folded navy wing, perched on the ground line.
const body = 'M71 34 C73 24 66 16 58 16 C49 16 44 23 43 30 C34 33 27 42 24 51 L11 62 C10 64 11 66 13 66 L26 65 C30 74 40 78 50 78 C64 78 74 68 74 54 C74 46 72 40 71 34 Z';
module.exports = {
  id: 'bird',
  name: 'Bird',
  emoji: '🐦',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['bird', 'bluebird', 'tweet', 'songbird', 'spring'],
  tone: 'blue',
  body,
  shine: [52, 22, -25],
  draw(c) {
    const ink = '#0A0F2E';
    return `${k.foot(46, 84, 76, 1, ink)}${k.foot(56, 84, 76, 1, ink)}
      <path d="${body}" fill="${c.radial('a', 'blue', 0.4, 0.2)}"/>
      <path d="M72 38 C75 46 76 54 74 61 C72 70 64 76 54 78 C57 70 59 60 61 52 C63 45 66 40 72 38 Z" fill="${c.radial('chest', 'amber', 0.6, 0.2)}"/>
      <path d="M36 46 C46 40 58 44 62 54 C58 64 46 68 29 64 C31 56 33 50 36 46 Z" fill="${c.radial('w', 'navy', 0.4, 0.2)}"/>
      ${k.line('M37 58 L53 56 M35 52 L49 50', '#C9ECFF', 1.4, 0.45)}
      ${k.part(c, 'M70.5 27 L83 31 L71 35.5 Z', c.linear('beak', 'black', [0, 0, 0, 1], 0, 2), 'black')}
      ${k.eye(61, 27, 3.1, ink)}`;
  },
};
