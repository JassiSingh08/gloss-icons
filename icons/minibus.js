const v = require('../src/parts/vehicle');
const body = 'M16 74 Q12 74 12 70 L12 31 Q12 24 19 24 L61 24 Q67 24 70.5 29 L79.5 44 Q84 46 84 52 L84 70 Q84 74 80 74 Z';
module.exports = {
  id: 'minibus',
  name: 'Minibus',
  emoji: '🚐',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['van', 'camper', 'shuttle', 'road trip', 'group'],
  tone: 'teal',
  body,
  shine: [18, 30, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.radial('a', 'teal', 0.3, 0.2);
    const r = c.ramp('teal');
    return `<path d="${body}" fill="${paint}"/>
      <path d="M12.5 50 L84 50 L84 55 L12.5 55 Z" fill="#F7F5FF" opacity=".9"/>
      ${v.win(c, 17, 30, 13, 15)}${v.win(c, 33, 30, 13, 15)}${v.win(c, 49, 30, 11, 15)}
      <path d="M63.5 30 L67 30 Q69 30 70.5 32.5 L77.5 45 L63.5 45 Z" fill="${v.glass(c)}"/>
      <path d="M47.5 46 L47.5 70 M62 46 L62 70" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1.3"/>
      <rect x="53" y="59" width="5" height="2" rx="1" fill="${r[3]}" opacity=".5"/>
      <path d="M83.8 56 L80 56 Q78.5 56 78.5 57.5 L78.5 60 Q78.5 61.5 80 61.5 L83.8 61.5 Z" fill="#FFF7A8"/>
      <path d="M12.3 57 L14.5 57 Q16 57 16 58.5 L16 61 Q16 62.5 14.5 62.5 L12.3 62.5 Z" fill="#FF3B30"/>
      <path d="M13 67 L83 67" stroke="${r[3]}" stroke-opacity=".35" stroke-width="1.3"/>
      ${v.wheel(c, 28, 74.5)}${v.wheel(c, 68, 74.5)}`;
  },
};
