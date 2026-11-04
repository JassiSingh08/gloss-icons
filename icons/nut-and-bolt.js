const m = require('../src/parts/metal');
const F = m.frame({ at: [48, 47], deg: 40, s: 1.12 });
const d = 'M-13 -36 Q-15 -36 -15 -34 L-15 -24 Q-15 -22 -13 -22 L-6.5 -22 L-6.5 32 Q-6.5 36 -3 36 L3 36 Q6.5 36 6.5 32 L6.5 -22 L13 -22 Q15 -22 15 -24 L15 -34 Q15 -36 13 -36 Z';
module.exports = {
  id: 'nut-and-bolt',
  name: 'Nut And Bolt',
  emoji: '🔩',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['nut', 'bolt', 'hardware', 'build', 'fix'],
  tone: 'silver',
  body: F.d(d),
  shine: [56, 18, 40],
  shineSize: [4, 1.8],
  draw(c) {
    const shaft = m.cyl(c, 'a', 'steel', F.p([0, -22]), F.p([0, 36]), 13 * F.s);
    const head = m.cyl(c, 'h', 'steel', F.p([0, -36]), F.p([0, -22]), 30 * F.s);
    const nut = m.cyl(c, 'n', 'steel', F.p([0, 2]), F.p([0, 16]), 28 * F.s);
    const threads = Array.from({ length: 14 }, (_, i) => `M-6.5 ${-18 + i * 3.8} L6.5 ${-16 + i * 3.8}`).join(' ');
    return `<path d="${F.d(d)}" fill="${shaft}"/>
      <path d="${F.d(threads)}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="${1.3 * F.s}"/>
      <path d="${F.d('M-15 -34 Q-15 -36 -13 -36 L13 -36 Q15 -36 15 -34 L15 -24 Q15 -22 13 -22 L-13 -22 Q-15 -22 -15 -24 Z')}" fill="${head}"/>
      <path d="${F.d('M-5 -36 L-5 -22 M5 -36 L5 -22')}" stroke="#3A3E52" stroke-opacity=".4" stroke-width="1.2"/>
      ${m.part(F.d('M-14 2 L14 2 L14 16 L-14 16 Z'), nut, 'steel')}
      <path d="${F.d('M-4.7 2 L-4.7 16 M4.7 2 L4.7 16')}" stroke="#3A3E52" stroke-opacity=".4" stroke-width="1.2"/>
      <path d="${F.d('M-13 4 L-6 4')}" stroke="#fff" stroke-opacity=".8" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
