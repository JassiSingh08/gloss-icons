const p = require('../src/parts/paper');
let zig = '';
for (let i = 0; i < 8; i++) zig += ` L${70 - i * 5.5 - 2.75} 80 L${70 - (i + 1) * 5.5} 84`;
const body = `M30 9 L66 9 Q70 9 70 13 L70 84${zig} L26 13 Q26 9 30 9 Z`;
module.exports = {
  id: 'receipt',
  name: 'Receipt',
  emoji: '🧾',
  group: 'Objects',
  subgroup: 'money',
  tags: ['receipt', 'bill', 'purchase', 'expense', 'shopping'],
  tone: 'white',
  body,
  shine: [30, 16, -60],
  shineSize: [4.5, 2],
  draw(c) {
    const w = c.ramp('white');
    const ink = w[3];
    let rows = '';
    for (const y of [32, 39, 46, 53]) rows += `M32 ${y} L48 ${y} M57 ${y} L64 ${y} `;
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M38 18 L58 18', '#2E2E3D', 3.4, 0.75)}
      ${p.line('M42 24 L54 24', ink, 1.6, 0.6)}
      ${p.line(rows, ink, 2, 0.55)}
      <path d="M32 60 L64 60" stroke="${ink}" stroke-opacity=".6" stroke-width="1.3" stroke-dasharray="2 2"/>
      ${p.line('M32 68 L44 68 M53 68 L64 68', '#2E2E3D', 3.2, 0.8)}`;
  },
};
