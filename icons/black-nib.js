const p = require('../src/parts/paper');
const AT = [15, 81];
const DEG = -45;
const P = (d) => p.place(d, AT, DEG, 1.18);
const body = P('M0 0 C8 -4 18 -13 30 -15 L35 -15 C37 -17.5 40 -17.5 42 -15 L60 -15 Q65 -15 65 -10 L65 10 Q65 15 60 15 L42 15 C40 17.5 37 17.5 35 15 L30 15 C18 13 8 4 0 0 Z');
module.exports = {
  id: 'black-nib',
  name: 'Black Nib',
  emoji: '✒️',
  group: 'Objects',
  subgroup: 'writing',
  tags: ['nib', 'ink', 'calligraphy', 'write', 'signature'],
  tone: 'black',
  body,
  shine: [...p.pt(32 * 1.18, -9 * 1.18, AT, DEG), -45],
  shineSize: [6, 2],
  draw(c) {
    const k = c.ramp('black');
    const hole = p.pt(27 * 1.18, 0, AT, DEG);
    return `<path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M42 -15 L60 -15 Q65 -15 65 -10 L65 10 Q65 15 60 15 L42 15 Z')}" fill="${c.linear('grip', 'black', [0, 1, 1, 0], 1, 3)}"/>
      ${p.line(P('M48 -14 L48 14 M54 -14 L54 14'), k[0], 1.2, 0.4)}
      ${p.line(P('M3 0 L24 0'), k[3], 1.8)}
      ${p.line(P('M8 -2.6 C16 -6 24 -10.5 33 -11.5'), k[0], 1.6, 0.7)}
      <circle cx="${hole[0]}" cy="${hole[1]}" r="3.2" fill="${k[3]}"/>
      <circle cx="${hole[0] - 0.8}" cy="${hole[1] - 0.8}" r="1" fill="#fff" opacity=".5"/>`;
  },
};
