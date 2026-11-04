const v = require('../src/parts/vehicle');
const hull = 'M12 58 L84 58 Q82 66 75 72 L22 72 Q15 66 12 58 Z';
const main = 'M48 13 L48 53 L19 53 Q34 36 48 13 Z';
const jib = 'M53 20 L53 53 L78 53 Q70 36 53 20 Z';
module.exports = {
  id: 'sailboat',
  name: 'Sailboat',
  emoji: '⛵',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['sailing', 'yacht', 'regatta', 'sea', 'holiday'],
  tone: 'white',
  body: [hull, main, jib],
  shine: [40, 30, -55],
  shineSize: [5, 2],
  draw(c) {
    const sail = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const hullFill = c.linear('hull', 'navy', [0, 0, 0, 1], 1, 3);
    return `<path d="M50.5 9 L50.5 58" stroke="#3A3E52" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M50.5 9 L58 12 L50.5 15 Z" fill="#E3120B"/>
      <path d="${main}" fill="${sail}"/>
      <path d="${jib}" fill="${sail}"/>
      <path d="M23 49 L48 49 L48 44 L27 44 Z" fill="#E3120B" opacity=".9"/>
      <path d="${hull}" fill="${hullFill}"/>
      <path d="M13 60.5 L83.5 60.5" stroke="#F7F5FF" stroke-width="2"/>
      ${v.water(c, 72)}`;
  },
};
