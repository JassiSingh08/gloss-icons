const k = require('../src/parts/critter');
// A long blue whale cruising left: grooved pale throat, small flipper, broad flukes.
const body = 'M8 54 C10 42 22 36 38 36 C56 36 68 42 78 50 L86 40 C88 38 92 39 91 42 L88 52 L92 62 C93 65 89 66 87 64 L78 58 C68 68 50 74 32 74 C18 74 8 66 8 54 Z';
module.exports = {
  id: 'whale',
  name: 'Whale',
  emoji: '🐋',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['whale', 'ocean', 'sea', 'giant', 'blue whale'],
  tone: 'navy',
  body,
  shine: [24, 42, -18],
  shineSize: [6, 2.6],
  draw(c) {
    const ink = '#080C3D';
    return `<path d="${body}" fill="${c.radial('a', 'navy', 0.3, 0.25)}"/>
      <path d="M9 59 C14 68 22 73 32 73 C46 73 60 69 70 63 C54 65 26 64 9 59 Z" fill="${c.ramp('sky')[0]}" opacity=".7"/>
      ${k.line('M16 63.5 L54 65.5 M22 67.5 L46 68.8', '#3D4FD6', 1.1, 0.7)}
      ${k.part(c, 'M34 68 C40 70 46 75 47 82 C41 81 36 76 34 68 Z', c.radial('fin', 'navy', 0.5, 0.3), 'navy')}
      ${k.legs('M10 57 C16 59.5 24 59.5 30 58', ink, 1.8)}
      ${k.eye(25, 52, 2.6, ink)}
      ${[[44, 45], [54, 46], [63, 50], [48, 52], [70, 54]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.3" fill="#C9ECFF" opacity=".55"/>`).join('')}`;
  },
};
