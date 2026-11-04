const m = require('../src/parts/metal');
const F = m.frame({ at: [49, 41], deg: -18, s: 0.98 });
const xi = (y) => -7 + (6.5 * (y + 38)) / 56;
const hole = (y1, y2) => `M${xi(y1).toFixed(2)} ${y1} L${xi(y2).toFixed(2)} ${y2} L${(-xi(y2)).toFixed(2)} ${y2} L${(-xi(y1)).toFixed(2)} ${y1} Z`;
const frameD = `M-13 -38 L-5.5 18 L-3.4 18 L-3.4 42 L3.4 42 L3.4 18 L5.5 18 L13 -38 Z ${hole(-36, -11)} ${hole(-5, 10)}`;
module.exports = {
  id: 'crutch',
  name: 'Crutch',
  emoji: '🩼',
  group: 'Objects',
  subgroup: 'medical',
  tags: ['crutch', 'injury', 'recovery', 'mobility', 'support'],
  tone: 'silver',
  body: F.d(frameD),
  shine: [33, 17, -80],
  shineSize: [4, 1.4],
  draw(c) {
    const metal = m.band(c, 'a', 'steel', F.p([-14, 0]), F.p([14, 0]));
    const rubber = c.radial('r', 'black', 0.3, 0.25);
    const grip = m.cyl(c, 'g', 'black', F.p([-10, -8]), F.p([10, -8]), 6 * F.s);
    return `<path d="${F.d(frameD)}" fill="${metal}"/>
      ${m.part(F.d(m.round([[-17, -46], [17, -46], [17, -37], [-17, -37]], 4.5)), rubber, 'black')}
      ${m.part(F.d(m.round([[-11, -12], [11, -12], [11, -5], [-11, -5]], 3.5)), grip, 'black')}
      ${m.part(F.d(m.round([[-5, 40], [5, 40], [5.6, 49], [-5.6, 49]], 2.2)), rubber, 'black')}
      <path d="${F.d('M-12 -42.5 L10 -42.5')}" stroke="#fff" stroke-opacity=".4" stroke-width="1.2" stroke-linecap="round"/>
      <path d="${F.d('M-1.2 22 L-1.2 38')}" stroke="#fff" stroke-opacity=".7" stroke-width="1" stroke-linecap="round"/>`;
  },
};
