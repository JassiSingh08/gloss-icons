const p = require('../src/parts/paper');
const AT = [16, 82];
const DEG = -45;
const S = 1.3;
const P = (d) => p.place(d, AT, DEG, S);
const body = P('M31 -15 L35 -15 Q37 -15 37 -13 L37 -6 L49 -6 L49 -10 Q49 -12 51 -12 L58 -12 Q62 -12 62 -8 L62 8 Q62 12 58 12 L51 12 Q49 12 49 10 L49 6 L37 6 L37 13 Q37 15 35 15 L31 15 Q29 15 29 13 L29 -13 Q29 -15 31 -15 Z');
module.exports = {
  id: 'pushpin',
  name: 'Pushpin',
  emoji: '📌',
  group: 'Objects',
  subgroup: 'office',
  tags: ['pin', 'pinned', 'board', 'remember', 'save'],
  tone: 'red',
  body,
  shine: [...p.pt(54 * S, -6 * S, AT, DEG), -45],
  shineSize: [4.5, 2],
  draw(c) {
    const r = c.ramp('red');
    return `${p.tube(c, P('M1 0 L29 0'), { width: 3.4, palette: 'silver', name: 'n' })}
      <path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M37 -6 L49 -6 L49 6 L37 6 Z')}" fill="${r[2]}"/>
      ${p.line(P('M38 -3.6 L48 -3.6'), r[0], 1.4, 0.6)}
      ${p.line(P('M30.6 -11 L30.6 11'), '#fff', 1.4, 0.55)}`;
  },
};
