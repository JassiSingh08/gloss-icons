const ball = require('../src/parts/ball');
const star = require('../src/parts/star');

const T = { deg: 38, ox: 48, oy: 52, x: 44, y: 56 };
const body = ball.turn('M38 22 L58 22 Q60 22 60 24 L60 82 Q60 84 58 84 L38 84 Q36 84 36 82 L36 24 Q36 22 38 22 Z', T);

module.exports = {
  id: 'firecracker',
  name: 'Firecracker',
  emoji: '🧨',
  group: 'Activities',
  subgroup: 'event',
  tags: ['firecracker', 'dynamite', 'explosive', 'bang', 'lunar new year'],
  tone: 'red',
  body,
  shine: [...ball.turnPt([40, 34], T), -52],
  shineSize: [6, 2],
  draw(c) {
    const tube = c.linear('a', 'red', [0, 0, 1, 1], 0, 2);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const band = (y) => ball.turn(`M36 ${y} L60 ${y} L60 ${y + 5} L36 ${y + 5} Z`, T);
    const [fx, fy] = ball.turnPt([48, 22], T);
    return `<path d="M${fx} ${fy} C${fx + 4} ${fy - 8} ${fx + 12} ${fy - 6} ${fx + 14} ${fy - 14}" fill="none" stroke="#6E6E80" stroke-width="2.2" stroke-linecap="round"/>
      <path d="${body}" fill="${tube}"/>
      <path d="${band(27)} ${band(74)}" fill="${gold}"/>
      <path d="${ball.turn('M41 40 L55 40 M41 46 L55 46 M41 52 L55 52 M41 58 L55 58 M41 64 L55 64', T)}" stroke="#3D0003" stroke-opacity=".25" stroke-width="1.2"/>
      <ellipse cx="${fx}" cy="${fy}" rx="10" ry="3.4" transform="rotate(38 ${fx} ${fy})" fill="${c.linear('cap', 'red', [0, 0, 1, 0], 1, 3)}"/>
      <g transform="translate(${fx + 14} ${fy - 14})">
        <path d="M0 -10 L2.6 -3 L10 -3.6 L4 1.4 L7 8.4 L0 4 L-7 8.4 L-4 1.4 L-10 -3.6 L-2.6 -3 Z" fill="${c.radial('spark', 'flame', 0.5, 0.5)}" stroke="#FF8C00" stroke-width="1" stroke-linejoin="round"/>
      </g>
      ${star.sparkle(fx + 26, fy - 6, 3.6, '#FFF3A6')}${star.sparkle(fx + 6, fy - 24, 3, '#fff')}`;
  },
};
