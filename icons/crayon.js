const p = require('../src/parts/paper');
const AT = [14, 82];
const DEG = -45;
const S = 1.1;
const P = (d) => p.place(d, AT, DEG, S);
const body = P('M0 0 Q0 -2 2 -3 L14 -8.6 L80 -8.6 Q84 -8.6 84 -4.6 L84 4.6 Q84 8.6 80 8.6 L14 8.6 L2 3 Q0 2 0 0 Z');
module.exports = {
  id: 'crayon',
  name: 'Crayon',
  emoji: '🖍️',
  group: 'Objects',
  subgroup: 'writing',
  tags: ['crayon', 'draw', 'color', 'kids', 'art'],
  tone: 'red',
  body,
  shine: [...p.pt(52 * S, -4 * S, AT, DEG), -45],
  shineSize: [6, 1.6],
  draw(c) {
    const r = c.ramp('red');
    const wrap = c.linear('wrap', 'red', [0, 0, 1, 1], 1, 3);
    return `<path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M20 -8.6 L74 -8.6 L74 8.6 L20 8.6 Z')}" fill="${wrap}"/>
      <path d="${P('M26 -8.6 L30 -8.6 L30 8.6 L26 8.6 Z M64 -8.6 L68 -8.6 L68 8.6 L64 8.6 Z')}" fill="${r[3]}" opacity=".7"/>
      <path d="${P('M36 -5 L58 -5 L58 5 L36 5 Z')}" fill="#fff" opacity=".85"/>
      ${p.line(P('M40 -1.4 L54 -1.4 M40 1.8 L50 1.8'), r[2], 1.2, 0.8)}
      ${p.line(P('M14 -8.6 L14 8.6 M20 -8.6 L20 8.6 M74 -8.6 L74 8.6'), r[3], 1, 0.55)}`;
  },
};
