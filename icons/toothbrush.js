const m = require('../src/parts/metal');
const F = m.frame({ at: [48, 50], deg: -38, s: 1.04 });
const handle = 'M-44 2 Q-44 -4 -38 -4 L-6 -3 C2 -3 8 -4.5 14 -4.5 L42 -4.5 Q46 -4.5 46 0 L46 3 Q46 7 42 7 L14 7 C8 7 2 5.5 -6 5.5 L-38 6.5 Q-44 6.5 -44 2 Z';
module.exports = {
  id: 'toothbrush',
  name: 'Toothbrush',
  emoji: '🪥',
  group: 'Objects',
  subgroup: 'household',
  tags: ['toothbrush', 'teeth', 'brush', 'morning', 'hygiene'],
  tone: 'blue',
  body: F.d(handle),
  shine: [21, 68, -38],
  shineSize: [5, 1.6],
  draw(c) {
    const plastic = m.band(c, 'a', 'blue', F.p([0, -5]), F.p([0, 7]));
    const tufts = [];
    for (let i = 0; i < 6; i++) {
      const x = 17 + i * 4.6;
      tufts.push(m.part(F.d(m.round([[x, -17], [x + 3.6, -17], [x + 3.6, -4], [x, -4]], 1.2)), i % 2 ? `url(#${c.id('w')})` : `url(#${c.id('t')})`, 'white'));
    }
    c.linear('w', 'white', [0, 0, 0, 1], 0, 2);
    c.linear('t', 'teal', [0, 0, 0, 1], 0, 1);
    return `${tufts.join('')}
      <path d="${F.d(handle)}" fill="${plastic}"/>
      <path d="${F.d('M-40 -1 L-8 -0.4')}" stroke="#fff" stroke-opacity=".55" stroke-width="1.5" stroke-linecap="round"/>
      <path d="${F.d(m.round([[-30, -1.6], [-16, -1.4], [-16, 3.6], [-30, 3.8]], 2.4))}" fill="#8CD8FF" opacity=".55"/>`;
  },
};
