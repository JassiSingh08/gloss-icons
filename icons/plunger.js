const m = require('../src/parts/metal');
const body = 'M22 80 C22 64 33 55 48 55 C63 55 74 64 74 80 Q74 84 70 84 L26 84 Q22 84 22 80 Z';
module.exports = {
  id: 'plunger',
  name: 'Plunger',
  emoji: '🪠',
  group: 'Objects',
  subgroup: 'household',
  tags: ['plunger', 'plumber', 'unblock', 'bathroom', 'fix'],
  tone: 'red',
  body,
  shine: [33, 64, -35],
  shineSize: [6, 2.4],
  draw(c) {
    const rubber = c.radial('a', 'red', 0.35, 0.25);
    const stick = m.cyl(c, 'h', 'wood', [56, 10], [49, 58], 8);
    return `${m.part(m.bar([56.5, 10], [48.5, 60], 8), stick, 'wood')}
      <path d="M55 15 L49.5 52" stroke="#FFE2C4" stroke-opacity=".45" stroke-width="1.3" stroke-linecap="round" transform="translate(-1.6 0)"/>
      <path d="${body}" fill="${rubber}"/>
      <path d="M41 56.5 Q48 53 55 56.5 L54 60 Q48 57.5 42 60 Z" fill="#8A0006" opacity=".5"/>
      <path d="M22.5 77.5 L73.5 77.5" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.4"/>`;
  },
};
