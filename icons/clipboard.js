const p = require('../src/parts/paper');
const body = p.rr(16, 15, 64, 70, 7);
module.exports = {
  id: 'clipboard',
  name: 'Clipboard',
  emoji: '📋',
  group: 'Objects',
  subgroup: 'office',
  tags: ['clipboard', 'checklist', 'tasks', 'notes', 'paste'],
  tone: 'brown',
  body,
  shine: [22, 22, -40],
  draw(c) {
    const w = c.ramp('white');
    const s = c.ramp('silver');
    const g = c.ramp('green');
    const box = (y, done) => `<path d="${p.rr(29, y - 4, 8, 8, 1.6)}" fill="#fff" stroke="${w[3]}" stroke-width="1.3"/>
      ${done ? `<path d="M30.5 ${y} L33 ${y + 2.6} L38.5 ${y - 4}" stroke="${g[2]}" stroke-width="2.4" ${p.ST}/>` : ''}
      ${p.line(`M42 ${y} L66 ${y}`, w[3], 2, 0.55)}`;
    return `<path d="${body}" fill="${c.linear('a', 'brown', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${p.rr(23, 24, 50, 55, 2.5)}" fill="${c.linear('paper', 'white', [0, 0, 1, 1], 0, 2)}"/>
      ${box(38, true)}${box(51, true)}${box(64, false)}
      <path d="M36 23 L36 15 Q36 10 41 10 L55 10 Q60 10 60 15 L60 23 Q60 27 56 27 L40 27 Q36 27 36 23 Z" fill="${c.linear('clamp', 'silver', [0, 0, 1, 1], 0, 2)}" stroke="${s[3]}" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${p.rr(43, 13, 10, 4.5, 2.2)}" fill="${c.ramp('brown')[3]}"/>
      ${p.line('M38 24.6 L58 24.6', '#fff', 1.2, 0.6)}`;
  },
};
