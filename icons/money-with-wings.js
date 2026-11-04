const p = require('../src/parts/paper');
const T = (d) => p.turn(d, -14, 48, 50);
const body = T(p.rr(20, 31, 56, 37, 4));
const wing = 'M2 2 C-2 -10 -12 -22 -30 -26 C-27 -21 -27 -18 -30 -14 C-23 -13 -21 -10 -24 -5 C-17 -5 -15 -2 -17 3 C-10 2 -4 4 2 10 Z';
const quills = 'M-2 1 C-8 -6 -16 -14 -26 -20 M-3 3 C-9 -2 -15 -6 -21 -8 M-4 5 C-8 3 -11 2 -14 1';
module.exports = {
  id: 'money-with-wings',
  name: 'Money With Wings',
  emoji: '💸',
  group: 'Objects',
  subgroup: 'money',
  tags: ['money', 'spend', 'flying', 'expensive', 'bills'],
  tone: 'green',
  body,
  shine: [28, 40, -30],
  shineSize: [5.5, 2.2],
  draw(c) {
    const g = c.ramp('green');
    const feather = c.linear('wing', 'white', [0, 0, 1, 1], 0, 2);
    const w = (at, deg, flip) => {
      const d = p.place(flip ? p.map(wing, (x, y) => [-x, y]) : wing, at, deg, 0.74);
      const q = p.place(flip ? p.map(quills, (x, y) => [-x, y]) : quills, at, deg, 0.74);
      return `<path d="${d}" fill="${feather}" stroke="#6E61A8" stroke-opacity=".7" stroke-width="1.2" stroke-linejoin="round"/>${p.line(q, '#8C83AD', 1.1, 0.7)}`;
    };
    const L = T('M25 42 L25 42');
    const R = T('M71 40 L71 40');
    const lp = L.match(/[\d.]+/g).map(Number);
    const rp = R.match(/[\d.]+/g).map(Number);
    return `${w(lp, 6, false)}${w(rp, -6, true)}
      <path d="${body}" fill="${c.linear('a', 'green', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${T(p.rr(24.5, 35.5, 47, 28, 2))}" fill="none" stroke="${g[3]}" stroke-opacity=".45" stroke-width="1.3"/>
      <path d="${T(p.ell(48, 49.5, 10.5, 10.5))}" fill="${g[0]}" opacity=".55"/>
      <path d="${T(p.symbol('$', [48, 49.5], 1.42))}" stroke="${g[3]}" stroke-width="2.8" ${p.ST}/>`;
  },
};
