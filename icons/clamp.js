const m = require('../src/parts/metal');
const body = 'M21 14 L64 14 Q71 14 71 21 L71 25 Q71 31 65 31 L35 31 Q30 31 30 36 L30 61 Q30 66 35 66 L65 66 Q71 66 71 72 L71 77 Q71 84 64 84 L21 84 Q13 84 13 76 L13 22 Q13 14 21 14 Z';
module.exports = {
  id: 'clamp',
  name: 'Clamp',
  emoji: '🗜️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['clamp', 'vise', 'compress', 'squeeze', 'pressure'],
  tone: 'blue',
  body,
  shine: [22, 22, -40],
  shineSize: [5.5, 2.4],
  draw(c) {
    const paint = c.radial('a', 'blue', 0.3, 0.2);
    const rod = m.cyl(c, 'r', 'steel', [57, 8], [57, 56], 7);
    const bar = m.band(c, 't', 'steel', [57, 5], [57, 11]);
    const pad = m.band(c, 'p', 'steel', [57, 54], [57, 61]);
    const threads = Array.from({ length: 6 }, (_, i) => `M53.5 ${34 + i * 3.5} L60.5 ${35.5 + i * 3.5}`).join(' ');
    return `${m.part('M53.5 8 L60.5 8 L60.5 55 L53.5 55 Z', rod, 'steel')}
      <path d="${threads}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.2"/>
      ${m.part(m.round([[42, 4.5], [72, 4.5], [72, 11], [42, 11]], 3.2), bar, 'steel')}
      <path d="M45 6.6 L69 6.6" stroke="#fff" stroke-opacity=".8" stroke-width="1.1" stroke-linecap="round"/>
      ${m.part(m.round([[47, 55], [67, 55], [69, 61], [45, 61]], 1.5), pad, 'steel')}
      <path d="${body}" fill="${paint}"/>
      <path d="M17 26 Q17 18 25 18 L62 18" stroke="#fff" stroke-opacity=".45" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M30 36 L30 61" stroke="#001E4D" stroke-opacity=".35" stroke-width="1.4"/>`;
  },
};
