const p = require('../src/parts/paper');
const body = 'M16 26 Q16 22 20 22 L37 22 Q40 22 42 24.5 L45 28.5 L74 28.5 Q78 28.5 78 32.5 L78 44 L81 44 Q86 44 85 48.5 L79 79 Q78.4 82 75 82 L18 82 Q14 82 14 78 L14 48 Q14 44 16 44 Z';
module.exports = {
  id: 'open-file-folder',
  name: 'Open File Folder',
  emoji: '📂',
  group: 'Objects',
  subgroup: 'office',
  tags: ['folder', 'open', 'files', 'documents', 'browse'],
  tone: 'blue',
  body,
  shine: [23, 50, -20],
  shineSize: [6, 2.2],
  draw(c) {
    const b = c.ramp('blue');
    const w = c.ramp('white');
    return `<path d="${body}" fill="${c.linear('back', 'blue', [0, 0, 1, 1], 1, 3)}"/>
      <path d="M24 46 L28 18 L68 22 L66 46 Z" fill="${c.linear('p1', 'white', [0, 0, 0, 1], 1, 2)}"/>
      <path d="M24 46 L22 26 L64 26 L66 46 Z" fill="${c.linear('p2', 'white', [0, 0, 0, 1], 0, 1)}" stroke="${w[3]}" stroke-opacity=".5" stroke-width="1"/>
      ${p.line('M28 33 L58 33 M28 39 L52 39', w[3], 1.8, 0.5)}
      <path d="M20 44 L81 44 Q86 44 85 48.5 L79 79 Q78.4 82 75 82 L18 82 Q14 82 14 78 L14 50 Q14 44 20 44 Z" fill="${c.linear('a', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M18 44.8 L82 44.8', b[0], 1.2, 0.7)}`;
  },
};
