const p = require('../src/parts/paper');
const body = 'M14 26 Q14 22 18 22 L37 22 Q40 22 42 24.5 L45 28.5 L78 28.5 Q82 28.5 82 32.5 L82 78 Q82 82 78 82 L18 82 Q14 82 14 78 Z';
module.exports = {
  id: 'file-folder',
  name: 'File Folder',
  emoji: '📁',
  group: 'Objects',
  subgroup: 'office',
  tags: ['folder', 'files', 'documents', 'organize', 'directory'],
  tone: 'blue',
  body,
  shine: [21, 41, -25],
  draw(c) {
    const b = c.ramp('blue');
    return `<path d="${body}" fill="${c.linear('back', 'blue', [0, 0, 1, 1], 1, 3)}"/>
      <path d="M18 31 L76 31 L76 38 L18 38 Z" fill="${c.ramp('white')[1]}"/>
      <path d="M14 39 Q14 35 18 35 L78 35 Q82 35 82 39 L82 78 Q82 82 78 82 L18 82 Q14 82 14 78 Z" fill="${c.linear('a', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M15 35.8 L81 35.8', b[0], 1.2, 0.7)}`;
  },
};
