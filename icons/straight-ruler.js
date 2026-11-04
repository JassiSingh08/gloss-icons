const p = require('../src/parts/paper');
const AT = [48, 48];
const DEG = -45;
const P = (d) => p.place(d, AT, DEG);
const body = P(p.rr(-46, -12, 92, 24, 3));
module.exports = {
  id: 'straight-ruler',
  name: 'Straight Ruler',
  emoji: '📏',
  group: 'Objects',
  subgroup: 'office',
  tags: ['ruler', 'measure', 'length', 'straight', 'school'],
  tone: 'yellow',
  body,
  shine: [...p.pt(-30, -6, AT, DEG), -45],
  shineSize: [6, 2],
  draw(c) {
    const y = c.ramp('yellow');
    let ticks = '';
    for (let i = 0; i <= 16; i++) {
      const x = -40 + i * 5;
      ticks += `M${x} 12 L${x} ${i % 4 === 0 ? 2 : i % 2 === 0 ? 5 : 7.5} `;
    }
    return `<path d="${body}" fill="${c.linear('a', 'yellow', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M-46 -12 L46 -12 L46 -8 L-46 -8 Z')}" fill="#fff" opacity=".35"/>
      ${p.line(P(ticks), y[3], 1.4, 0.75)}
      ${[-40, -20, 0, 20, 40].map((x) => { const q = p.pt(x, -3.6, AT, DEG); return `<circle cx="${q[0]}" cy="${q[1]}" r="1.4" fill="${y[3]}" opacity=".6"/>`; }).join('')}`;
  },
};
