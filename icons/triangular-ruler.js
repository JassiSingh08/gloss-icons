const p = require('../src/parts/paper');
const outer = 'M18 12 Q14 12 14 16 L14 80 Q14 84 18 84 L82 84 Q86 84 83 81 L21 13.5 Q20 12 18 12 Z';
const hole = 'M25 44 L25 73 L52 73 Z';
module.exports = {
  id: 'triangular-ruler',
  name: 'Triangular Ruler',
  emoji: '📐',
  group: 'Objects',
  subgroup: 'office',
  tags: ['set square', 'geometry', 'angle', 'drafting', 'measure'],
  tone: 'sky',
  body: `${outer} M25 44 L52 73 L25 73 Z`,
  shine: [18.5, 26, -88],
  shineSize: [6, 1.8],
  draw(c) {
    const s = c.ramp('sky');
    let ticks = '';
    for (let i = 0; i < 12; i++) ticks += `M14 ${78 - i * 5.3} L${i % 2 ? 18 : 21} ${78 - i * 5.3} M${20 + i * 5.3} 84 L${20 + i * 5.3} ${i % 2 ? 80 : 77} `;
    return `<path d="${outer} M25 44 L52 73 L25 73 Z" fill="${c.linear('a', 'sky', [0, 0, 1, 1], 0, 2)}" fill-rule="evenodd"/>
      <path d="${hole}" fill="none" stroke="${s[3]}" stroke-opacity=".55" stroke-width="1.3" stroke-linejoin="round"/>
      ${p.line(ticks, s[3], 1.3, 0.7)}`;
  },
};
