const g = require('../src/parts/glass');
// A tapered stick from its thick end p0 to its tip p1, rounded at both ends.
const stick = ([x0, y0], [x1, y1], w0 = 4, w1 = 2) => {
  const L = Math.hypot(x1 - x0, y1 - y0);
  const ang = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI;
  return g.place(`M0 ${-w0} L${L} ${-w1} Q${L + w1 * 1.4} 0 ${L} ${w1} L0 ${w0} Q${-w0 * 0.8} ${w0} ${-w0 * 0.8} 0 Q${-w0 * 0.8} ${-w0} 0 ${-w0} Z`, ang, [x0, y0]);
};
const A = [[72, 11], [14, 73]];
const B = [[84, 19], [24, 81]];
module.exports = {
  id: 'chopsticks',
  name: 'Chopsticks',
  emoji: '🥢',
  group: 'Food & Drink',
  subgroup: 'dishware',
  tags: ['chopsticks', 'sushi', 'noodles', 'asian food', 'eat'],
  tone: 'ember',
  body: [stick(...A), stick(...B)],
  shine: [66, 17, -47],
  shineSize: [5, 1.4],
  draw(c) {
    const lac = c.linear('a', 'ember', [0, 0, 1, 1], 0, 2);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const band = ([x0, y0], [x1, y1]) => {
      const t0 = 0.14;
      const t1 = 0.2;
      return `<path d="M${g.n(x0 + (x1 - x0) * t0)} ${g.n(y0 + (y1 - y0) * t0)} L${g.n(x0 + (x1 - x0) * t1)} ${g.n(y0 + (y1 - y0) * t1)}" stroke="${gold}" stroke-width="6.4"/>`;
    };
    const line = ([x0, y0], [x1, y1]) => `<path d="M${g.n(x0 + (x1 - x0) * 0.25 - 1.6)} ${g.n(y0 + (y1 - y0) * 0.25 - 1.4)} L${g.n(x0 + (x1 - x0) * 0.8 - 0.8)} ${g.n(y0 + (y1 - y0) * 0.8 - 0.7)}" stroke="#FF9A7A" stroke-opacity=".7" stroke-width="1.1" stroke-linecap="round"/>`;
    c.def(`<clipPath id="${c.id('s')}"><path d="${stick(...A)} ${stick(...B)}"/></clipPath>`);
    return `<path d="${stick(...A)} ${stick(...B)}" fill="${lac}"/>
      <g clip-path="url(#${c.id('s')})">${band(...A)}${band(...B)}</g>
      ${line(...A)}${line(...B)}`;
  },
};
