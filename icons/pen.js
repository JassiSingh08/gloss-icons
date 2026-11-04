const p = require('../src/parts/paper');
const AT = [15, 81];
const DEG = -45;
const S = 1.1;
const P = (d) => p.place(d, AT, DEG, S);
const body = P('M0 0 L10 -3.4 L14 -6.4 L82 -6.4 Q86 -6.4 86 -2.4 L86 2.4 Q86 6.4 82 6.4 L14 6.4 L10 3.4 Z');
module.exports = {
  id: 'pen',
  name: 'Pen',
  emoji: '🖊️',
  group: 'Objects',
  subgroup: 'writing',
  tags: ['pen', 'ballpoint', 'write', 'sign', 'office'],
  tone: 'blue',
  body,
  shine: [...p.pt(56 * S, -3 * S, AT, DEG), -45],
  shineSize: [6, 1.5],
  draw(c) {
    const b = c.ramp('blue');
    const s = c.ramp('silver');
    const silver = c.linear('s', 'silver', [0, 0, 1, 1], 0, 2);
    let ridges = '';
    for (let x = 17; x < 33; x += 3) ridges += `M${x} -6 L${x} 6 `;
    return `<path d="${body}" fill="${c.linear('a', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M0 0 L10 -3.4 L14 -6.4 L14 6.4 L10 3.4 Z')}" fill="${silver}"/>
      <circle cx="${p.pt(1.4 * S, 0, AT, DEG)[0]}" cy="${p.pt(1.4 * S, 0, AT, DEG)[1]}" r="1.5" fill="#2E2E3A"/>
      <path d="${P('M14 -6.4 L34 -6.4 L34 6.4 L14 6.4 Z')}" fill="${c.linear('grip', 'blue', [0, 0, 1, 1], 2, 3)}"/>
      ${p.line(P(ridges), b[0], 1, 0.35)}
      <path d="${P('M78 -6.4 L82 -6.4 Q86 -6.4 86 -2.4 L86 2.4 Q86 6.4 82 6.4 L78 6.4 Z')}" fill="${silver}"/>
      <path d="${P('M56 -6.4 L56 -9.6 Q56 -11 58 -11 L80 -11 Q82 -11 82 -9 L82 -6.4 Z')}" fill="${silver}" stroke="${s[3]}" stroke-opacity=".6" stroke-width="1"/>
      ${p.line(P('M36 -3.4 L76 -3.4'), '#fff', 1.4, 0.45)}`;
  },
};
