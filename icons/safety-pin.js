const m = require('../src/parts/metal');
const F = m.frame({ at: [46, 50], deg: -40, s: 1.12 });
const head = 'M20 -11 L36 -11 Q43 -11 43 -4 L43 3 Q43 10 35 10 L24 10 Q20 10 20 6 Z';
module.exports = {
  id: 'safety-pin',
  name: 'Safety Pin',
  emoji: '🧷',
  group: 'Objects',
  subgroup: 'household',
  tags: ['safety pin', 'pin', 'fasten', 'diaper', 'punk'],
  tone: 'silver',
  body: F.d(head),
  shine: [64, 25, -40],
  shineSize: [3.6, 1.4],
  draw(c) {
    const cap = m.band(c, 'a', 'steel', F.p([32, -12]), F.p([32, 11]));
    return `${m.tube(c, F.d('M30 -5.5 L-30 -5.5 A7.5 7.5 0 1 0 -30 7 L-26 7'), { width: 5, palette: 'silver', name: 'w' })}
      ${m.tube(c, F.d('M-26 7 L30 3'), { width: 4.4, palette: 'silver', name: 'p' })}
      <path d="${F.d(head)}" fill="${cap}"/>
      <path d="${F.d('M25 -7 L37 -7')}" stroke="#fff" stroke-opacity=".8" stroke-width="1.3" stroke-linecap="round"/>
      <path d="${F.d('M26 4.5 L37 4.5')}" stroke="#3A3E52" stroke-opacity=".45" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
