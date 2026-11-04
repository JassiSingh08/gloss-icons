const g = require('../src/parts/garment');

const body = 'M21 38 Q21 16 48 16 Q75 16 75 38 L77 78 Q77 84 71 84 L25 84 Q19 84 19 78 Z';

module.exports = {
  id: 'backpack',
  name: 'Backpack',
  emoji: '🎒',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['backpack', 'school', 'travel', 'bag', 'hiking'],
  tone: 'red',
  body,
  shine: [29, 26, -40],
  draw(c) {
    const nylon = c.radial('a', 'red', 0.3, 0.2);
    const pocket = c.radial('pocket', 'red', 0.3, 0.15);
    const strap = c.ramp('red');
    const zip = c.linear('zip', 'gold', [0, 0, 0, 1], 0, 2);
    return g.tube(c, 'M21 34 Q14 44 15 78', { width: 4.5, palette: 'black', name: 'sl', box: [12, 34, 22, 78] })
      + g.tube(c, 'M75 34 Q82 44 81 78', { width: 4.5, palette: 'black', name: 'sr', box: [74, 34, 84, 78] })
      + g.tube(c, 'M40 18 Q40 9 48 9 Q56 9 56 18', { width: 3.4, palette: 'black', name: 'loop', box: [40, 9, 56, 18] })
      + `<path d="${body}" fill="${nylon}"/>
      <path d="M22 40 Q48 32 74 40" fill="none" stroke="${strap[3]}" stroke-opacity=".6" stroke-width="1.6"/>
      ${g.stitch('M22.2 43 Q48 35 73.8 43', strap[0], 0.5)}
      <path d="M28 58 Q28 53 33 53 L63 53 Q68 53 68 58 L68 75 Q68 80 63 80 L33 80 Q28 80 28 75 Z" fill="${pocket}" stroke="${strap[3]}" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M29 58.5 Q48 56 67 58.5" fill="none" stroke="${strap[3]}" stroke-opacity=".7" stroke-width="1.5"/>
      <path d="M57 58 L58 66" stroke="${zip}" stroke-width="2.4" stroke-linecap="round"/>
      <rect x="56" y="64" width="4.2" height="5.5" rx="1.4" fill="${zip}"/>
      <path d="M44 38 L45 46" stroke="${zip}" stroke-width="2.2" stroke-linecap="round"/>
      ${g.stitch('M31 77 L65 77', strap[0], 0.4)}`;
  },
};
