const g = require('../src/parts/glass');
const body = `${g.ellipse(48, 57, 35, 26)} ${g.ellipse(48, 52, 10.5, 6.2, true)}`;
module.exports = {
  id: 'doughnut',
  name: 'Doughnut',
  emoji: '🍩',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['doughnut', 'donut', 'sprinkles', 'sweet', 'snack'],
  tone: 'amber',
  body,
  shine: [26, 44, -35],
  draw(c) {
    const dough = c.radial('a', 'amber', 0.4, 0.15);
    const icing = c.radial('icing', 'pink', 0.35, 0.2);
    const icingD = 'M16.5 54 C16.5 40 31 33 48 33 C65 33 79.5 40 79.5 54 C79.5 58 77 60 75 61 C72.5 62 73 66.5 69.5 66.5 C66 66.5 66.5 63 63 64 C60 65 60.5 71.5 56.5 71.5 C52.5 71.5 53 66 48 66 C43 66 43.5 70.5 39.5 70.5 C35.5 70.5 36 65 32 64 C29 63 28.5 67.5 25 66.5 C22 65.5 23 61.5 21 60.5 C18 59 16.5 57 16.5 54 Z';
    const sp = [[28, 47, 30, '#FFF3A6'], [36, 41, -40, '#8CD8FF'], [47, 39, 10, '#fff'], [58, 41, 60, '#A6F07A'], [67, 45, -20, '#C58BFF'], [72, 54, 45, '#FFF3A6'], [64, 61, -60, '#8CD8FF'], [55, 63, 20, '#fff'], [40, 63, -25, '#A6F07A'], [30, 58, 70, '#C58BFF'], [24, 53, -10, '#fff'], [52, 36, -70, '#FFF3A6'], [62, 52, 15, '#fff'], [34, 52, 50, '#FFF3A6']];
    const sprinkles = sp.map(([x, y, a, col]) => {
      const r = (a * Math.PI) / 180;
      const dx = g.n(Math.cos(r) * 1.8);
      const dy = g.n(Math.sin(r) * 1.8);
      return `<path d="M${x - dx} ${y - dy} L${x + dx} ${y + dy}" stroke="${col}"/>`;
    }).join('');
    return `<path d="${body}" fill="${dough}"/>
      <path d="${icingD} ${g.ellipse(48, 52, 13.5, 8.2, true)}" fill="${icing}"/>
      <path d="M37.5 52 C37.5 48.6 42.2 45.8 48 45.8 C53.8 45.8 58.5 48.6 58.5 52 C55 49.6 41 49.6 37.5 52 Z" fill="#B85F00"/>
      <g stroke-width="2.2" stroke-linecap="round">${sprinkles}</g>
      <path d="M24 44 C28 39 34 36.5 40 35.5" fill="none" stroke="#FFD0DC" stroke-opacity=".8" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
