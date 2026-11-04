const B = require('../src/parts/building');

const body = 'M16 84 Q12 84 12 80 L12 47 L27 35 L27 47 L42 35 L42 47 L57 35 L57 47 L63 47 L63 23 Q63 21 65 21 L72 21 Q74 21 74 23 L74 47 L81 47 Q84 47 84 50 L84 80 Q84 84 80 84 Z';
module.exports = {
  id: 'factory',
  name: 'Factory',
  emoji: '🏭',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['industry', 'manufacturing', 'plant', 'smoke', 'production'],
  tone: 'slate',
  body,
  shine: [18, 52, -35],
  shineSize: [5, 2.4],
  draw(c) {
    const wall = c.linear('a', 'slate', [0, 0, 1, 1], 0, 2);
    const roof = c.linear('roof', 'slate', [0, 0, 1, 1], 1, 3);
    const brick = c.linear('brick', 'ember', [0, 0, 1, 0], 1, 2);
    const smoke = c.radial('smoke', 'grey', 0.3, 0.3);
    const tooth = (x) => `<path d="M${x} 47 L${x + 15} 35 L${x + 15} 47 Z" fill="${roof}"/><path d="M${x + 11} 38.2 L${x + 15} 35 L${x + 15} 47 L${x + 11} 47 Z" fill="${B.glass(c)}"/>`;
    return `<path d="M64 20 C59 18 60 11 66 11.5 C67 7.5 73 6.5 76 9.5 C79 6 86 8 85.5 12.5 C88.5 16 84 20 80 18.5 C77 21 70 22 64 20 Z" fill="${smoke}" stroke="#2E2E3A" stroke-opacity=".45" stroke-width="1.1"/>
      <path d="${body}" fill="${wall}"/>
      ${tooth(12)}${tooth(27)}${tooth(42)}
      <path d="M63 23 Q63 21 65 21 L72 21 Q74 21 74 23 L74 47 L63 47 Z" fill="${brick}"/>
      <path d="M63 27 L74 27 M63 33 L74 33" stroke="#FFF9EC" stroke-width="2.4"/>
      ${B.eave(12, 47, 72, 3, '#1E2A3D', 0.3)}
      ${B.win(c, 16, 55, 10, 9)}${B.win(c, 30, 55, 10, 9)}${B.win(c, 44, 55, 10, 9)}
      <path d="M60 84 L60 63 Q60 61 62 61 L78 61 Q80 61 80 63 L80 84 Z" fill="${c.linear('door', 'silver', [0, 0, 0, 1], 1, 2)}" stroke="#1E2A3D" stroke-opacity=".55" stroke-width="1.1"/>
      <path d="M60 66 L80 66 M60 71 L80 71 M60 76 L80 76 M60 81 L80 81" stroke="#3A3E52" stroke-opacity=".4" stroke-width="1.1"/>
      <path d="M16 72 L54 72" stroke="#1E2A3D" stroke-opacity=".25" stroke-width="1.2"/>`;
  },
};
