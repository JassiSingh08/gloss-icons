const g = require('../src/parts/glass');
const body = 'M29 34 C29 30.7 37.5 28 48 28 C58.5 28 67 30.7 67 34 C69 50 75 62 77 72 C77 75.9 64 79 48 79 C32 79 19 75.9 19 72 C21 62 27 50 29 34 Z';
module.exports = {
  id: 'custard',
  name: 'Custard',
  emoji: '🍮',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['custard', 'flan', 'pudding', 'caramel', 'dessert'],
  tone: 'yellow',
  body,
  shine: [28, 50, -70],
  shineSize: [5.5, 2.2],
  draw(c) {
    const flan = c.radial('a', 'yellow', 0.3, 0.2);
    const caramel = c.radial('caramel', 'brown', 0.4, 0.15);
    const plate = c.radial('plate', 'white', 0.4, 0.2);
    return `<path d="${g.ellipse(48, 77.5, 38, 7)}" fill="${plate}" ${g.edge('#8C83AD', 1.2, 0.6)}/>
      <path d="${g.ellipse(48, 77.5, 31, 4.6)}" fill="#B06A32" opacity=".55"/>
      <path d="${body}" fill="${flan}"/>
      <path d="${g.drips(48, 34, 19, 6, [6, 0, 11, 3, 15, 0, 8, 4], 2.2)}" fill="${caramel}"/>
      <path d="M36 31.5 C40 30.4 45 30 50 30.2" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.5" stroke-linecap="round"/>`;
  },
};
