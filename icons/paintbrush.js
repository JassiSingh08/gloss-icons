const p = require('../src/parts/paper');
const AT = [13, 83];
const DEG = -45;
const S = 1.08;
const P = (d) => p.place(d, AT, DEG, S);
const body = P('M0 0 C2 -6 10 -9.5 18 -9 L26 -8 L40 -8 C52 -6 76 -5 82 -5 Q88 -5 88 0 Q88 5 82 5 C76 5 52 6 40 8 L26 8 L18 9 C10 9.5 2 6 0 0 Z');
module.exports = {
  id: 'paintbrush',
  name: 'Paintbrush',
  emoji: '🖌️',
  group: 'Objects',
  subgroup: 'writing',
  tags: ['paint', 'brush', 'art', 'create', 'design'],
  tone: 'blue',
  body,
  shine: [...p.pt(58 * S, -2.6 * S, AT, DEG), -45],
  shineSize: [6, 1.5],
  draw(c) {
    const s = c.ramp('silver');
    const r = c.ramp('red');
    return `<path d="${body}" fill="${c.linear('a', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M0 0 C2 -6 10 -9.5 18 -9 L27 -8 L27 8 L18 9 C10 9.5 2 6 0 0 Z')}" fill="${c.linear('hair', 'sand', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M0 0 C2 -6 8 -9 14 -9 C11 -4 11 4 14 9 C8 9 2 6 0 0 Z')}" fill="${c.linear('paint', 'red', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line(P('M15 -5 L25 -5.4 M14 0 L25 0 M15 5 L25 5.4'), c.ramp('sand')[3], 1, 0.5)}
      <path d="${P('M26 -8.4 L42 -8.4 L42 8.4 L26 8.4 Z')}" fill="${c.linear('fer', 'silver', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line(P('M30 -8.4 L30 8.4 M38 -8.4 L38 8.4'), s[3], 1.2, 0.5)}`;
  },
};
