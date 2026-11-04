const g = require('../src/parts/garment');

const body = 'M21 44 Q21 39.5 25.5 39.5 L70.5 39.5 Q75 39.5 75 44 L82 78 Q82.8 83.5 77 83.5 L19 83.5 Q13.2 83.5 14 78 Z';

module.exports = {
  id: 'handbag',
  name: 'Handbag',
  emoji: '👜',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['handbag', 'bag', 'fashion', 'shopping', 'tote'],
  tone: 'ember',
  body,
  shine: [25, 47, -30],
  draw(c) {
    const leather = c.radial('a', 'ember', 0.3, 0.2);
    const flap = c.linear('flap', 'ember', [0, 0, 1, 1], 0, 2);
    const clasp = c.linear('clasp', 'gold', [0, 0, 0, 1], 0, 2);
    const e = c.ramp('ember');
    return g.tube(c, 'M31 41 Q31 15 48 15 Q65 15 65 41', { width: 5, palette: 'ember', name: 'handle', box: [31, 15, 65, 41] })
      + `<circle cx="31" cy="41" r="2.6" fill="${clasp}"/><circle cx="65" cy="41" r="2.6" fill="${clasp}"/>
      <path d="${body}" fill="${leather}"/>
      <path d="M20.5 41 Q21 39.5 25.5 39.5 L70.5 39.5 Q75 39.5 75.5 41 L77 52 Q48 64 19 52 Z" fill="${flap}"/>
      <path d="M19 52 Q48 64 77 52" fill="none" stroke="${e[3]}" stroke-opacity=".55" stroke-width="1.4"/>
      ${g.stitch('M21.5 49.5 Q48 60.5 74.5 49.5', e[0], 0.55)}
      ${g.stitch('M17.5 79.5 L78.5 79.5', e[0], 0.4)}
      <rect x="43" y="54" width="10" height="9" rx="2.2" fill="${clasp}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1"/>
      <rect x="46.4" y="57.5" width="3.2" height="3" rx="1" fill="#5E3A00" opacity=".5"/>`;
  },
};
