const p = require('../src/parts/paper');
const body = 'M14 46 L22 38 L84 38 L84 76 L76 84 L14 84 Z';
module.exports = {
  id: 'card-file-box',
  name: 'Card File Box',
  emoji: '🗃️',
  group: 'Objects',
  subgroup: 'office',
  tags: ['file box', 'cards', 'archive', 'records', 'storage'],
  tone: 'brown',
  body,
  shine: [20, 52, -20],
  shineSize: [6, 2.2],
  draw(c) {
    const b = c.ramp('brown');
    const w = c.ramp('white');
    const card = (x, y, i, tab) => `<path d="M${x} ${y + 30} L${x} ${y + 3} Q${x} ${y} ${x + 3} ${y} L${tab} ${y} L${tab + 2} ${y - 4} L${tab + 12} ${y - 4} L${tab + 14} ${y} L${x + 52} ${y} Q${x + 55} ${y} ${x + 55} ${y + 3} L${x + 55} ${y + 30} Z" fill="${c.linear(`k${i}`, 'white', [0, 0, 0, 1], i ? 0 : 1, 2)}" stroke="${w[3]}" stroke-opacity=".6" stroke-width="1"/>`;
    return `<path d="${body}" fill="${b[3]}"/>
      ${card(24, 22, 0, 58)}${card(21, 27, 1, 40)}${card(18, 32, 2, 24)}
      <path d="M14 46 L22 38 L22 46 Z" fill="${b[2]}"/>
      <path d="M76 46 L84 38 L84 76 L76 84 Z" fill="${c.linear('side', 'brown', [0, 0, 1, 0], 2, 3)}"/>
      <path d="M14 46 L76 46 L76 84 L14 84 Z" fill="${c.linear('a', 'brown', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M14.6 46.6 L75.6 46.6', b[0], 1.2, 0.6)}
      <path d="${p.rr(34, 56, 22, 12, 2)}" fill="${c.linear('plate', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>
      <path d="${p.rr(37, 59, 16, 6, 1)}" fill="#fff" opacity=".85"/>`;
  },
};
