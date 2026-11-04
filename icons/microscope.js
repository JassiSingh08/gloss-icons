const m = require('../src/parts/metal');
const body = 'M57 78 L57 54 C57 43 53 36 46 30.5 L53 21 C64 29 70 40 70 54 L70 78 Z';
const T = m.frame({ at: [41, 38], deg: -24, s: 1 });
module.exports = {
  id: 'microscope',
  name: 'Microscope',
  emoji: '🔬',
  group: 'Objects',
  subgroup: 'science',
  tags: ['microscope', 'science', 'lab', 'research', 'zoom'],
  tone: 'slate',
  body,
  shine: [61, 33, 55],
  shineSize: [4.5, 1.8],
  draw(c) {
    const arm = c.radial('a', 'slate', 0.3, 0.2);
    const base = c.linear('b', 'black', [0, 0, 0, 1], 0, 2);
    const tube = m.cyl(c, 't', 'steel', T.p([0, -26]), T.p([0, 20]), 12);
    const eye = m.cyl(c, 'e', 'black', T.p([0, -30]), T.p([0, -22]), 9);
    const lens = m.cyl(c, 'l', 'steel', T.p([0, 18]), T.p([0, 26]), 7);
    const knob = c.radial('k', 'silver', 0.3, 0.3);
    return `${m.part(m.round([[16, 76], [80, 76], [82, 84], [14, 84]], 3), base, 'black')}
      <path d="M17 77.5 L79 77.5" stroke="#fff" stroke-opacity=".3" stroke-width="1.1"/>
      <path d="${body}" fill="${arm}"/>
      ${m.part(m.round([[24, 58], [60, 58], [60, 64], [24, 64]], 1.8), base, 'black')}
      ${m.part(T.d(m.round([[-3.5, 16], [3.5, 16], [2.8, 27], [-2.8, 27]], 1)), lens, 'steel')}
      ${m.part(T.d(m.round([[-6, -24], [6, -24], [6, 18], [-6, 18]], 1.5)), tube, 'steel')}
      ${m.part(T.d(m.round([[-4.5, -32], [4.5, -32], [4.5, -23], [-4.5, -23]], 1.5)), eye, 'black')}
      <path d="${T.d('M-6 -10 L6 -10 M-6 6 L6 6')}" stroke="#3A3E52" stroke-opacity=".4" stroke-width="1.2"/>
      <circle cx="66" cy="52" r="6" fill="${knob}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.2"/>
      <circle cx="66" cy="52" r="2" fill="#3A3E52" opacity=".55"/>`;
  },
};
