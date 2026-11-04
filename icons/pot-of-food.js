// An enamel pot of stew with side handles and steam; deeper than the paella pan, no stand like fondue.
const d = require('../src/parts/dish');
const body = `M16 40 ${d.topHalf(48, 40, 32, 9)} L80 72 C80 80 74 84 66 84 L30 84 C22 84 16 80 16 72 Z`;
module.exports = {
  id: 'pot-of-food',
  name: 'Pot of Food',
  emoji: '🍲',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['stew', 'soup', 'pot', 'dinner', 'hot'],
  tone: 'teal',
  body,
  shine: [22, 52, -80],
  shineSize: [6, 2.6],
  draw(c) {
    const pot = c.linear('a', 'teal', [0, 0, 1, 0], 0, 3);
    const rim = c.linear('rim', 'teal', [0, 0, 1, 0], 0, 2);
    const stew = c.radial('stew', 'brown', 0.5, 0.4);
    const carrot = c.radial('carrot', 'orange', 0.35, 0.3);
    const handle = (x, s) => `<path d="M${x} 47 L${x + s * 7} 47 Q${x + s * 9} 47 ${x + s * 9} 50 L${x + s * 9} 52 Q${x + s * 9} 55 ${x + s * 7} 55 L${x} 55" stroke="#003A33" stroke-opacity=".55" stroke-width="5.6" fill="none" stroke-linejoin="round"/>
      <path d="M${x} 47 L${x + s * 7} 47 Q${x + s * 9} 47 ${x + s * 9} 50 L${x + s * 9} 52 Q${x + s * 9} 55 ${x + s * 7} 55 L${x} 55" stroke="#14C2A3" stroke-width="3.6" fill="none" stroke-linejoin="round"/>`;
    return `${handle(16, -1)}${handle(80, 1)}
      <path d="${body}" fill="${pot}"/>
      <path d="${d.ellipse(48, 40, 32, 9)}" fill="${rim}"/>
      <path d="${d.ellipse(48, 40.6, 28.5, 7)}" fill="${stew}"/>
      <ellipse cx="38" cy="40" rx="4" ry="2.2" fill="${carrot}"/><ellipse cx="56" cy="42" rx="3.6" ry="2" fill="${carrot}"/>
      <rect x="45" y="36.5" width="5.5" height="3.6" rx="1.2" fill="#FFF4D6"/><rect x="28" y="40.5" width="4.6" height="3" rx="1" fill="#FFF4D6"/>
      <circle cx="64" cy="39" r="1.8" fill="#2FB85A"/><circle cx="47" cy="43.5" r="1.6" fill="#2FB85A"/><circle cx="33" cy="37.5" r="1.4" fill="#2FB85A"/>
      <path d="M16 72 C16 80 22 84 30 84 L66 84 C74 84 80 80 80 72" stroke="#003A33" stroke-opacity=".3" stroke-width="2" fill="none"/>
      ${d.steam([[36, 29, 15], [48, 27, 17], [60, 29, 15]])}`;
  },
};
