const p = require('../src/parts/paper');
const card = (x, y, tx) => `M${x} ${y + 8} Q${x} ${y + 4} ${x + 4} ${y + 4} L${tx} ${y + 4} L${tx + 3} ${y} L${tx + 16} ${y} L${tx + 19} ${y + 4} L${x + 56} ${y + 4} Q${x + 60} ${y + 4} ${x + 60} ${y + 8} L${x + 60} ${y + 44} L${x} ${y + 44} Z`;
const body = 'M16 50 Q16 46 20 46 L80 46 Q84 46 84 50 L84 80 Q84 84 80 84 L16 84 Q12 84 12 80 L12 50 Q12 46 16 46 Z';
module.exports = {
  id: 'card-index-dividers',
  name: 'Card Index Dividers',
  emoji: '🗂️',
  group: 'Objects',
  subgroup: 'office',
  tags: ['dividers', 'organize', 'index', 'files', 'sort'],
  tone: 'slate',
  body,
  shine: [19, 52, -20],
  shineSize: [6, 2.2],
  draw(c) {
    const pick = [['red', 20, 12, 58], ['gold', 24, 22, 40], ['green', 28, 32, 22]];
    const cards = pick.map(([pal, x, y, tx], i) => `<path d="${card(x - 4, y, tx)}" fill="${c.linear(`c${i}`, pal, [0, 0, 1, 1], 0, 2)}" stroke="${c.ramp(pal)[3]}" stroke-opacity=".6" stroke-width="1.1"/>
      ${p.line(`M${tx + 6} ${y + 2.6} L${tx + 13} ${y + 2.6}`, '#fff', 1.4, 0.6)}`).join('');
    return `${cards}
      <path d="${body}" fill="${c.linear('a', 'slate', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M13 52 L83 52', '#fff', 1.2, 0.45)}
      <path d="${p.rr(38, 60, 20, 9, 3)}" fill="${c.ramp('slate')[3]}" opacity=".55"/>`;
  },
};
