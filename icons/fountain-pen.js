const p = require('../src/parts/paper');
const AT = [14, 82];
const DEG = -45;
const S = 1.1;
const P = (d) => p.place(d, AT, DEG, S);
const body = P('M0 0 C5 -1.6 12 -5 20 -5.6 L34 -5.6 L36 -8 L78 -8 Q84 -8 84 -2 L84 2 Q84 8 78 8 L36 8 L34 5.6 L20 5.6 C12 5 5 1.6 0 0 Z');
module.exports = {
  id: 'fountain-pen',
  name: 'Fountain Pen',
  emoji: '🖋️',
  group: 'Objects',
  subgroup: 'writing',
  tags: ['pen', 'ink', 'write', 'signature', 'classic'],
  tone: 'black',
  body,
  shine: [...p.pt(58 * S, -4 * S, AT, DEG), -45],
  shineSize: [6, 1.6],
  draw(c) {
    const k = c.ramp('black');
    const g = c.ramp('gold');
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    return `<path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M0 0 C5 -1.6 12 -5 20 -5.6 L22 -5.6 L22 5.6 L20 5.6 C12 5 5 1.6 0 0 Z')}" fill="${gold}"/>
      ${p.line(P('M2 0 L14 0'), g[3], 1.2, 0.8)}
      <circle cx="${p.pt(15 * S, 0, AT, DEG)[0]}" cy="${p.pt(15 * S, 0, AT, DEG)[1]}" r="1.4" fill="${g[3]}"/>
      <path d="${P('M34 -8 L39 -8 L39 8 L34 8 Z M74 -8 L77 -8 L77 8 L74 8 Z')}" fill="${gold}"/>
      <path d="${P('M44 -8 L44 -11 Q44 -12.5 46 -12.5 L68 -12.5 Q70 -12.5 70 -11 L70 -8 Z')}" fill="${gold}" stroke="${g[3]}" stroke-opacity=".6" stroke-width="1"/>
      ${p.line(P('M40 -4.6 L72 -4.6'), k[0], 1.4, 0.5)}`;
  },
};
