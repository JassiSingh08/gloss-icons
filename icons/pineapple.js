const L = require('../src/parts/leaf');
// Golden oval in a diamond rind, crowned with a spray of spiky leaves.
const body = 'M48 34 C62 34 72 46 72 60 C72 74 62 84 48 84 C34 84 24 74 24 60 C24 46 34 34 48 34 Z';
module.exports = {
  id: 'pineapple',
  name: 'Pineapple',
  emoji: '🍍',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['pineapple', 'tropical', 'fruit', 'pina colada', 'summer'],
  tone: 'gold',
  body,
  shine: [32, 46, -50],
  shineSize: [6, 2.8],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.28" r="0.95"><stop offset="0" stop-color="#FFF3A0"/><stop offset="0.38" stop-color="#FFBA2A"/><stop offset="0.76" stop-color="#C8700A"/><stop offset="1" stop-color="#5E2E00"/></radialGradient>`);
    c.def(`<clipPath id="${c.id('p')}"><path d="${body}"/></clipPath>`);
    const k = L.kit(c);
    let lines = '';
    for (let i = -5; i <= 5; i++) {
      lines += `M${24 + i * 9} 30 L${72 + i * 9} 90 M${72 - i * 9} 30 L${24 - i * 9} 90 `;
    }
    let dots = '';
    for (let i = -4; i <= 4; i++) for (let j = 0; j < 8; j++) {
      const x = 48 + i * 7.2 + (j % 2 ? 3.6 : 0);
      const y = 37 + j * 6.5;
      dots += `<path d="M${x - 1.3} ${y + 1} L${x} ${y - 1.2} L${x + 1.3} ${y + 1}"/>`;
    }
    const crown = [
      [48, 37, 48, 6, 0.13], [46, 38, 30, 12, 0.13], [50, 38, 66, 12, 0.13], [45, 39, 22, 26, 0.12], [51, 39, 74, 26, 0.12], [47, 38, 40, 9, 0.12], [49, 38, 57, 9, 0.12],
    ].map(([bx, by, tx, ty, w]) => k.leaf([bx, by], [tx, ty], w, 0, { vein: false })).join('');
    return `${crown}
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <g clip-path="url(#${c.id('p')})">
        <path d="${lines}" stroke="#8A4A00" stroke-opacity=".5" stroke-width="1.4" fill="none"/>
        <g stroke="#FFF3A0" stroke-opacity=".6" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round">${dots}</g>
      </g>`;
  },
};
