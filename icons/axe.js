const m = require('../src/parts/metal');
const F = m.frame({ at: [51, 46], deg: -32, s: 1.1 });
const head = 'M-3.6 -28 L-12 -30.5 C-16 -35 -21 -38.5 -25 -37 C-29 -28 -29 -17 -25 -8 C-21 -6.5 -16 -9 -12 -13.5 L-3.6 -16 L3.6 -18 L8 -19 Q10 -19.5 10 -21.5 L10 -27 Q10 -29 8 -29.5 L3.6 -30.5 Z';
const d = 'M-3.6 -28 L-12 -30.5 C-16 -35 -21 -38.5 -25 -37 C-29 -28 -29 -17 -25 -8 C-21 -6.5 -16 -9 -12 -13.5 L-3.6 -16 L-3.6 38 Q-3.6 42 0 42 Q3.6 42 3.6 38 L3.6 -18 L8 -19 Q10 -19.5 10 -21.5 L10 -27 Q10 -29 8 -29.5 L3.6 -30.5 L3.6 -31 Q3.6 -35 0 -35 Q-3.6 -35 -3.6 -31 Z';
module.exports = {
  id: 'axe',
  name: 'Axe',
  emoji: '🪓',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['axe', 'chop', 'wood', 'hatchet', 'camping'],
  tone: 'silver',
  body: F.d(d),
  shine: [26, 29, -70],
  shineSize: [6, 2.4],
  draw(c) {
    const steel = m.band(c, 'h', 'steel', F.p([-27, -22]), F.p([10, -22]));
    return `${m.handle(c, F, 'w', -35, 42)}
      <path d="${F.d('M0 -28 L0 36')}" stroke="#FFE2C4" stroke-opacity=".35" stroke-width="1.1" transform="translate(-1 -1)"/>
      <path d="${F.d(head)}" fill="${steel}"/>
      <path d="${F.d('M-23 -34.5 C-26 -27 -26 -18 -23 -10.5 C-21 -10 -19.5 -11 -18.5 -12 C-21 -19 -21 -27 -18.5 -33 C-19.5 -34.5 -21 -35 -23 -34.5 Z')}" fill="#fff" opacity=".35"/>
      <path d="${F.d('M-3.6 -28 L-3.6 -16 M3.6 -30.5 L3.6 -18')}" stroke="#3A3E52" stroke-opacity=".45" stroke-width="1.1"/>`;
  },
};
