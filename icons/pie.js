const g = require('../src/parts/glass');
const body = 'M12 52 C12 42.06 28.12 34 48 34 C67.88 34 84 42.06 84 52 L78.5 72 C78.5 78.63 64.84 84 48 84 C31.16 84 17.5 78.63 17.5 72 Z';
module.exports = {
  id: 'pie',
  name: 'Pie',
  emoji: '🥧',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['pie', 'tart', 'baking', 'dessert', 'thanksgiving'],
  tone: 'amber',
  body,
  shine: [21, 45, -30],
  shineSize: [5, 2.2],
  draw(c) {
    const tin = c.linear('tin', 'silver', [0, 0, 1, 0], 0, 3);
    const crust = c.radial('a', 'amber', 0.35, 0.2);
    const fill = c.radial('fill', 'red', 0.4, 0.3);
    const strip = c.linear('strip', 'amber', [0, 0, 1, 1], 0, 1);
    c.def(`<clipPath id="${c.id('in')}"><path d="${g.ellipse(48, 51, 28.5, 13.5)}"/></clipPath>`);
    const a = c.ramp('amber');
    const vs = [33, 48, 63].map((x) => `<path d="M${x - 3} 30 L${x + 3} 30 L${x + 3} 72 L${x - 3} 72 Z"/>`).join('');
    const hs = [43, 51.5, 60].map((y) => `<path d="M10 ${y - 2.6} L86 ${y - 2.6} L86 ${y + 2.6} L10 ${y + 2.6} Z"/>`).join('');
    return `<path d="${body}" fill="${tin}"/>
      <path d="M17.5 72 C17.5 78.6 31 84 48 84 C65 84 78.5 78.6 78.5 72" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.2"/>
      <path d="${g.ellipse(48, 52, 36, 18)}" fill="${crust}"/>
      <path d="${g.ellipse(48, 51, 28.5, 13.5)}" fill="${fill}"/>
      <g clip-path="url(#${c.id('in')})" fill="${strip}" stroke="${a[2]}" stroke-opacity=".7" stroke-width="1">${hs}${vs}</g>
      <path d="${g.ellipse(48, 51.6, 32.5, 16)}" fill="none" stroke="${a[2]}" stroke-opacity=".7" stroke-width="1.4" stroke-dasharray="1.6 4.2"/>
      <path d="M20 46 C24 41 32 37.5 40 36.4" fill="none" stroke="#FFF7DA" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
