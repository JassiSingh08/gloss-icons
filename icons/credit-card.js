const p = require('../src/parts/paper');
const T = (d) => p.turn(d, -8, 48, 50);
const body = T(p.rr(10, 25, 76, 50, 6));
module.exports = {
  id: 'credit-card',
  name: 'Credit Card',
  emoji: '💳',
  group: 'Objects',
  subgroup: 'money',
  tags: ['card', 'pay', 'credit', 'shopping', 'bank'],
  tone: 'navy',
  body,
  shine: [18, 33, -30],
  shineSize: [6, 2.4],
  draw(c) {
    const nv = c.ramp('navy');
    const g = c.ramp('gold');
    let digits = '';
    for (let k = 0; k < 4; k++) digits += `M${18 + k * 16} 61 L${29 + k * 16} 61 `;
    return `<path d="${body}" fill="${c.linear('a', 'navy', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${T('M10 52 C30 44 58 64 86 46 L86 69 Q86 75 80 75 L16 75 Q10 75 10 69 Z')}" fill="${nv[3]}" opacity=".22"/>
      <path d="${T(p.rr(18, 36, 15, 12, 2.4))}" fill="${c.linear('chip', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="${g[3]}" stroke-opacity=".6" stroke-width="1"/>
      ${p.line(T('M18 42 L33 42 M25.5 36 L25.5 48'), g[3], 0.9, 0.55)}
      ${p.line(T('M71 37 C73 39.5 73 43.5 71 46 M75 35 C78 39 78 44 75 48'), '#fff', 1.6, 0.7)}
      ${p.line(T(digits), '#fff', 2.8, 0.85)}
      ${p.line(T('M18 68 L40 68'), nv[0], 2, 0.7)}`;
  },
};
