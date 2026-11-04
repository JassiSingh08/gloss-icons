const B = require('../src/parts/building');

const body = 'M18 84 Q14 84 14 80 L14 26 Q14 22 18 22 L32 22 L32 15 Q32 12 35 12 L61 12 Q64 12 64 15 L64 22 L78 22 Q82 22 82 26 L82 80 Q82 84 78 84 Z';
module.exports = {
  id: 'department-store',
  name: 'Department Store',
  emoji: '🏬',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['shopping', 'mall', 'retail', 'sale', 'shop'],
  tone: 'cream',
  body,
  shine: [20, 31, -25],
  draw(c) {
    const sign = c.linear('sign', 'magenta', [0, 0, 1, 1], 0, 2);
    const band = (y) => `<path d="${B.rr(18, y, 60, 10, 1.5)}" fill="${B.glass(c)}" stroke="#5A6B8C" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M30 ${y} L30 ${y + 10} M42 ${y} L42 ${y + 10} M54 ${y} L54 ${y + 10} M66 ${y} L66 ${y + 10}" stroke="#F4F0FF" stroke-width="1.6"/>`;
    let stripes = '';
    for (let i = 0; i < 6; i++) stripes += `<path d="M${16 + i * 11} 56 L${27 + i * 11} 56 L${27 + i * 11} 61 Q${21.5 + i * 11} 64.5 ${16 + i * 11} 61 Z" fill="${i % 2 ? '#FFF9EC' : c.ramp('red')[1]}"/>`;
    return `<path d="${body}" fill="${B.wall(c)}"/>
      <path d="M35 12 L61 12 Q64 12 64 15 L64 22 L32 22 L32 15 Q32 12 35 12 Z" fill="${sign}"/>
      <path d="M43.5 16 L52.5 16 L53.5 21 L42.5 21 Z" fill="#fff"/>
      <path d="M45.5 16.5 Q45.5 13.5 48 13.5 Q50.5 13.5 50.5 16.5" fill="none" stroke="#fff" stroke-width="1.3"/>
      ${B.eave(14, 22, 68, 3)}
      ${band(27)}${band(41)}
      ${stripes}
      <path d="M16 56 L82 56" stroke="#8A0006" stroke-opacity=".5" stroke-width="1"/>
      <path d="${B.rr(18, 66, 20, 14, 1.5)} ${B.rr(58, 66, 20, 14, 1.5)}" fill="${B.glow(c)}" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M41 84 L41 66 L55 66 L55 84 Z" fill="${B.glass(c)}" stroke="#5A6B8C" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M48 66 L48 84" stroke="#F4F0FF" stroke-width="1.4"/>`;
  },
};
