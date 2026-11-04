const v = require('../src/parts/vehicle');
const body = 'M20 64 L61 64 L56 22 L64 21 L70 68 Q70.6 73 65.5 73 L20 73 Q15.5 73 15.5 68.5 Q15.5 64 20 64 Z';
module.exports = {
  id: 'kick-scooter',
  name: 'Kick Scooter',
  emoji: '🛴',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['scooter', 'kick', 'ride', 'kids', 'commute'],
  tone: 'magenta',
  body,
  shine: [26, 66.5, -3],
  shineSize: [6, 1.6],
  draw(c) {
    const paint = c.linear('a', 'magenta', [0, 0, 1, 1], 0, 2);
    const grip = c.linear('grip', 'black', [0, 0, 0, 1], 0, 2);
    return `<path d="M47 21.5 L73 19.5" stroke="#3A3E52" stroke-width="4" stroke-linecap="round"/>
      <path d="M46 21.6 L52 21.1 M68 19.9 L74 19.4" stroke="${grip}" stroke-width="6" stroke-linecap="round"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M21 67.5 L60 67.5" stroke="#141420" stroke-opacity=".6" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M11 69 L16 69 L19 75" stroke="#3A3E52" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      ${v.wheel(c, 22, 76, 8)}${v.wheel(c, 72, 76, 8)}`;
  },
};
