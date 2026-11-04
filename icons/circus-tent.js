const B = require('../src/parts/building');

const roofPath = 'M46 17 Q48 15 50 17 L84 44 Q86 47 83 48 L13 48 Q10 47 12 44 Z';
const body = 'M46 17 Q48 15 50 17 L84 44 Q86 47 83 48 L78 48 L78 80 Q78 84 74 84 L22 84 Q18 84 18 80 L18 48 L13 48 Q10 47 12 44 Z';
module.exports = {
  id: 'circus-tent',
  name: 'Circus Tent',
  emoji: '🎪',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['circus', 'big top', 'show', 'carnival', 'performance'],
  tone: 'red',
  body,
  shine: [30, 32, -38],
  shineSize: [6, 2.2],
  draw(c) {
    const red = c.linear('a', 'red', [0, 0, 1, 1], 0, 2);
    const cream = c.linear('cream', 'cream', [0, 0, 1, 1], 0, 2);
    const gold = c.linear('gold', 'gold', [0, 0, 0, 1], 0, 2);
    const inside = c.radial('in', 'purple', 0.5, 0.2);
    c.def(`<clipPath id="${c.id('roof')}"><path d="${roofPath}"/></clipPath>`);
    let wedges = '';
    for (let i = 0; i < 9; i += 2) wedges += `M48 16 L${B.n(8 + i * 9)} 48 L${B.n(8 + (i + 1) * 9)} 48 Z `;
    let stripes = '';
    for (let x = 22; x < 78; x += 10) stripes += `M${x} 48 L${x + 5} 48 L${x + 5} 84 L${x} 84 Z `;
    let scallop = 'M12 47.5 ';
    for (let x = 12; x < 84; x += 8) scallop += `L${x + 8} 47.5 `;
    scallop += 'L84 50 ';
    for (let x = 84; x > 12; x -= 8) scallop += `Q${x - 4} 56 ${x - 8} 50 `;
    scallop += 'Z';
    return `<path d="M48 16 L48 7" stroke="#6E3A14" stroke-width="1.6"/>
      <path d="M48 7.5 L57 10 L48 12.5 Z" fill="${c.linear('flag', 'teal', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${body}" fill="${red}"/>
      <path d="${stripes}" fill="${cream}"/>
      <g clip-path="url(#${c.id('roof')})"><path d="${roofPath}" fill="${red}"/><path d="${wedges}" fill="${cream}"/></g>
      <path d="M40 84 L48 60 L56 84 Z" fill="${inside}"/>
      <path d="M38 84 Q42 70 48 58 Q44 72 46 84 Z M58 84 Q54 70 48 58 Q52 72 50 84 Z" fill="${red}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <path d="${scallop}" fill="${gold}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1"/>
      <circle cx="48" cy="17" r="2.2" fill="${gold}"/>`;
  },
};
