const m = require('../src/parts/metal');
const body = 'M12 44 L84 44 Q87 44 86.5 47.5 C84.5 64 77 74 62 76 L34 76 C19 74 11.5 64 9.5 47.5 Q9 44 12 44 Z';
module.exports = {
  id: 'bathtub',
  name: 'Bathtub',
  emoji: '🛁',
  group: 'Objects',
  subgroup: 'household',
  tags: ['bath', 'bathtub', 'relax', 'soak', 'self care'],
  tone: 'white',
  body,
  shine: [20, 51, -15],
  shineSize: [6, 2.2],
  draw(c) {
    const tub = c.radial('a', 'white', 0.3, 0.2);
    const foot = c.radial('f', 'gold', 0.3, 0.3);
    const foam = c.radial('o', 'white', 0.35, 0.3);
    const bub = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${foam}" stroke="#8C83AD" stroke-opacity=".55" stroke-width="1"/>`;
    return `${m.tube(c, 'M18 44 L18 26 Q18 18 26 18 Q32 18 32 25', { width: 5, palette: 'silver', name: 't' })}
      <circle cx="32" cy="27.5" r="2.6" fill="${c.ramp('silver')[2]}"/>
      ${bub(30, 40, 6)}${bub(40, 36, 7.5)}${bub(52, 38, 6.5)}${bub(62, 35, 5)}${bub(70, 40, 5.5)}${bub(48, 30, 4)}${bub(78, 32, 2.6)}${bub(62, 26, 2.2)}
      <path d="M26 74 L22 84 L30 84 L33 75 Z M70 74 L74 84 L66 84 L63 75 Z" fill="${foot}"/>
      <path d="${body}" fill="${tub}"/>
      <path d="M9.5 48 L86.5 48" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M11 45.6 L85 45.6" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>`;
  },
};
