const v = require('../src/parts/vehicle');
const body = 'M33 41 L63 41 Q71 41 72 49 L73.5 66 Q74 76 64 76 L32 76 Q22 76 22.5 66 L24 49 Q25 41 33 41 Z';
module.exports = {
  id: 'mountain-cableway',
  name: 'Mountain Cableway',
  emoji: '🚠',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['gondola', 'ski lift', 'cable car', 'alps', 'mountains'],
  tone: 'gold',
  body,
  shine: [29, 46, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'gold', [0, 0, 0.6, 1], 0, 2);
    const rock = c.linear('rock', 'slate', [0, 0, 1, 1], 0, 2);
    const grip = c.linear('grip', 'grey', [0, 0, 1, 0], 1, 3);
    const y = (x) => 12 + (x - 4) * 0.2;
    return `<path d="M8 84 Q10 66 20 46 L30 58 L50 30 L72 60 L80 52 Q87 64 88 84 Z" fill="${rock}" opacity=".85"/>
      <path d="M45 37 L50 30 L55 37 L52 35.5 L50 38 L48 35.5 Z M17.5 49 L20 46 L23 50 Z" fill="#F7F5FF"/>
      <path d="M4 ${y(4)} L92 ${y(92)}" stroke="#2E2E3A" stroke-width="1.8"/>
      <path d="M48 ${y(48) + 2} L48 41" stroke="#3A3E52" stroke-width="3"/>
      <path d="${v.rr(42, y(48) - 3, 12, 6, 2.5)}" fill="${grip}" stroke="#2E2E3A" stroke-opacity=".6" stroke-width="1" transform="rotate(${Math.atan(0.2) * 57.3} 48 ${y(48)})"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M29 47 L67 47 L68 61 L28 61 Z" fill="${v.glass(c)}"/>
      <path d="M41 47 L40.8 61 M55 47 L55.2 61" stroke="#6B4A00" stroke-opacity=".6" stroke-width="2"/>
      <path d="M23.5 66 L73 66" stroke="#6B4A00" stroke-opacity=".35" stroke-width="1.3"/>`;
  },
};
