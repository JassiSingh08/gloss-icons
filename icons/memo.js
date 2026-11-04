const p = require('../src/parts/paper');
const body = 'M20 10 L64 10 Q68 10 68 14 L68 80 Q68 84 64 84 L20 84 Q16 84 16 80 L16 14 Q16 10 20 10 Z';
module.exports = {
  id: 'memo',
  name: 'Memo',
  emoji: '📝',
  group: 'Objects',
  subgroup: 'writing',
  tags: ['note', 'write', 'memo', 'list', 'notes'],
  tone: 'white',
  body,
  shine: [22, 17, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const w = c.ramp('white');
    const pen = p.pencil(c, [44, 74], -52, 52, 0.95);
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M16.6 22 L67.4 22', '#E3120B', 1.2, 0.45)}
      ${p.line('M24 30 L60 30 M24 38 L60 38 M24 46 L54 46 M24 54 L46 54 M24 62 L40 62', w[3], 2.2, 0.5)}
      <path d="M34 82 C38 76 42 78 44 74" stroke="#2E2E3A" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".6"/>
      ${pen.draw}`;
  },
};
