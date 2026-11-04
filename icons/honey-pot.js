const g = require('../src/parts/glass');
const body = 'M26 34 C26 28 36 25 48 25 C60 25 70 28 70 34 C70 36 68 37.5 65 38 L64.5 40 C78 45 82 58 78 70 C75 80 64 84 48 84 C32 84 21 80 18 70 C14 58 18 45 31.5 40 L31 38 C28 37.5 26 36 26 34 Z';
module.exports = {
  id: 'honey-pot',
  name: 'Honey Pot',
  emoji: '🍯',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['honey', 'pot', 'jar', 'sweet', 'bee'],
  tone: 'brown',
  body,
  shine: [24, 52, -55],
  shineSize: [6, 2.6],
  draw(c) {
    const pot = c.radial('a', 'brown', 0.32, 0.25);
    const lid = c.linear('lid', 'brown', [0, 0, 1, 0], 0, 2);
    const honey = c.radial('honey', 'gold', 0.35, 0.2);
    const label = c.linear('label', 'cream', [0, 0, 1, 1], 0, 2);
    const stick = c.linear('stick', 'cream', [0, 0, 1, 0], 1, 3);
    const hex = (x, y, r) => `M${x} ${y - r} L${g.n(x + r * 0.87)} ${y - r / 2} L${g.n(x + r * 0.87)} ${y + r / 2} L${x} ${y + r} L${g.n(x - r * 0.87)} ${y + r / 2} L${g.n(x - r * 0.87)} ${y - r / 2} Z`;
    return `<path d="M57 30 L73 11.5 Q75 9.5 76.8 11.2 Q78.4 13 76.4 15 L60 32 Z" fill="${stick}" ${g.edge('#5C4420', 1.1, 0.55)}/>
      <path d="${body}" fill="${pot}"/>
      <path d="M33 57 Q33 54 36 54 L60 54 Q63 54 63 57 L63 70 Q63 73 60 73 L36 73 Q33 73 33 70 Z" fill="${label}"/>
      <path d="${hex(48, 63.5, 5.4)}" fill="#FFC21A" stroke="#C98500" stroke-width="1.4"/>
      <path d="${g.drips(48, 36, 18.5, 4.6, [4, 9, 2, 13, 0, 6, 10, 3], 2.2)}" fill="${honey}"/>
      <path d="M26 34 C26 28 36 25 48 25 C60 25 70 28 70 34 C70 37 60 38.5 48 38.5 C36 38.5 26 37 26 34 Z" fill="${lid}"/>
      <path d="M30 31 C34 28.5 40 27.5 46 27.4" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.5" stroke-linecap="round"/>`;
  },
};
