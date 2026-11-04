const g = require('../src/parts/garment');

const body = 'M48 18 L86 35.5 L70 43 L69 63 Q48 73 27 63 L26 43 L10 35.5 Z';

module.exports = {
  id: 'graduation-cap',
  name: 'Graduation Cap',
  emoji: '🎓',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['graduation', 'school', 'degree', 'student', 'college'],
  tone: 'navy',
  body,
  shine: [30, 31, -24],
  shineSize: [6, 2.2],
  draw(c) {
    const board = c.linear('a', 'navy', [0, 0, 1, 1], 0, 2);
    const cap = c.radial('cap', 'navy', 0.3, 0.1);
    const n = c.ramp('navy');
    const tassel = c.linear('tassel', 'gold', [0, 0, 1, 0], 0, 2);
    return `<path d="M26 43 L48 53 L70 43 L69 63 Q48 73 27 63 Z" fill="${cap}"/>
      <path d="M26 43 L48 53 L70 43" fill="none" stroke="${n[3]}" stroke-opacity=".6" stroke-width="1.6"/>
      <path d="M48 18 L86 35.5 L48 53 L10 35.5 Z" fill="${board}"/>
      <path d="M10 35.5 L48 53 L86 35.5" fill="none" stroke="${n[0]}" stroke-opacity=".5" stroke-width="1.1"/>
      ${g.tube(c, 'M48 35 Q66 36 76 40 L76 58', { width: 2.2, palette: 'gold', name: 'cord' })}
      <path d="M73.5 57 L78.5 57 L81 72 Q76 74.5 71 72 Z" fill="${tassel}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>
      <path d="M74.5 61 L74 71 M76 61 L76 72 M77.5 61 L78 71" stroke="#C98500" stroke-width=".9"/>
      <ellipse cx="48" cy="35" rx="4" ry="2.2" fill="${tassel}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
