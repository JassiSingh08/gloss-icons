const g = require('../src/parts/garment');

const body = 'M33 13 L40.5 13 Q43.5 29 48 35 Q52.5 29 55.5 13 L63 13 Q66 26 74.5 33 Q78.5 35.5 78.5 40 L78.5 80 Q78.5 83 75.5 83 L20.5 83 Q17.5 83 17.5 80 L17.5 40 Q17.5 35.5 21.5 33 Q30 26 33 13 Z';

module.exports = {
  id: 'safety-vest',
  name: 'Safety Vest',
  emoji: '🦺',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['vest', 'safety', 'hi vis', 'construction', 'worker'],
  tone: 'orange',
  body,
  shine: [24, 39, -50],
  shineSize: [5, 2],
  draw(c) {
    const cloth = c.radial('a', 'orange', 0.3, 0.2);
    const band = c.linear('band', 'silver', [0, 0, 0, 1], 0, 2);
    const strap = c.linear('strap', 'lime', [0, 0, 1, 0], 0, 1);
    const o = c.ramp('orange');
    const s = c.ramp('silver');
    return `<path d="${body}" fill="${cloth}"/>
      <path d="M34.5 15 L39 15 L38 52 L33.5 52 Z M61.5 15 L57 15 L58 52 L62.5 52 Z" fill="${strap}" opacity=".95"/>
      <path d="M17.5 52 L78.5 52 L78.5 59 L17.5 59 Z M17.5 68 L78.5 68 L78.5 75 L17.5 75 Z" fill="${band}" stroke="${s[3]}" stroke-opacity=".4" stroke-width="1"/>
      <path d="M18 53.6 L78 53.6 M18 69.6 L78 69.6" stroke="#fff" stroke-opacity=".8" stroke-width="1.1"/>
      ${g.fold('M48 35 L48 82.5', o[3], 0.6, 1.6)}
      ${g.stitch('M50 37 L50 82', o[3], 0.4)}`;
  },
};
