const p = require('../src/parts/paper');
const AT = [52, 50];
const DEG = -38;
const P = (d) => p.place(d, AT, DEG);
const body = P('M-34 -6 L-22 -18 Q-20 -20 -17 -20 L30 -20 Q36 -20 36 -14 L36 14 Q36 20 30 20 L-17 20 Q-20 20 -22 18 L-34 6 Q-37 0 -34 -6 Z');
const hole = p.pt(-24, 0, AT, DEG);
module.exports = {
  id: 'label',
  name: 'Label',
  emoji: '🏷️',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['tag', 'price', 'label', 'sale', 'name tag'],
  tone: 'amber',
  body: `${body} ${p.ell(hole[0], hole[1], 4, 4, true)}`,
  shine: [28, 52, -38],
  shineSize: [6, 2.4],
  draw(c) {
    const a = c.ramp('amber');
    return `<path d="M${hole[0]} ${hole[1]} C${hole[0] - 6} ${hole[1] + 10} ${hole[0] - 2} ${hole[1] + 20} ${hole[0] - 10} ${hole[1] + 26}" stroke="#6E3A14" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="${body} ${p.ell(hole[0], hole[1], 4, 4, true)}" fill="${c.linear('a', 'amber', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M-28 -4 L-19 -13 L28 -13 Q30 -13 30 -11 L30 11 Q30 13 28 13 L-19 13 L-28 4')}" fill="none" stroke="${a[3]}" stroke-opacity=".4" stroke-width="1.3" stroke-dasharray="2.6 2.2"/>
      ${p.line(P('M-8 -5 L22 -5 M-8 4 L14 4'), a[3], 2.8, 0.55)}
      <circle cx="${hole[0]}" cy="${hole[1]}" r="5.6" fill="none" stroke="${c.ramp('silver')[1]}" stroke-width="2.2"/>`;
  },
};
