// The sausage pokes out at both ends of the bun; mustard zigzags along it.
const d = require('../src/parts/dish');
const ANGLE = -22;
const AT = [48, 52];
const front = 'M-36 -2 C-36 -7 -33 -9 -29 -7.5 C-15 -2.5 15 -2.5 29 -7.5 C33 -9 36 -7 36 -2 C36 10 22 17 0 17 C-22 17 -36 10 -36 -2 Z';
module.exports = {
  id: 'hot-dog',
  name: 'Hot Dog',
  emoji: '🌭',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['hot dog', 'sausage', 'fast food', 'mustard', 'bbq'],
  tone: 'amber',
  body: d.place(front, ANGLE, AT),
  shine: [...d.placePt(-28, 2, ANGLE, AT), ANGLE - 60],
  shineSize: [5.5, 2.6],
  draw(c) {
    const bun = c.radial('a', 'amber', 0.35, 0.2);
    const backBun = c.linear('back', 'amber', [0, 0, 0, 1], 0, 1);
    const sausage = c.linear('sausage', 'ember', [0, 0, 0, 1], 0, 2);
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="M-34 -6 C-35 -15 -31 -20 -25 -18 C-10 -15 10 -15 25 -18 C31 -20 35 -15 34 -6 Z" fill="${backBun}" ${d.edge('#5E2E00')}/>
        <path d="M-41 -9 C-41 -14.5 -38 -16 -34 -16 L34 -16 C38 -16 41 -14.5 41 -9 C41 -3.5 38 -2 34 -2 L-34 -2 C-38 -2 -41 -3.5 -41 -9 Z" fill="${sausage}" ${d.edge('#3D0700')}/>
        <path d="M-32 -13 L32 -13" stroke="#FF9A7A" stroke-opacity=".7" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M-27 -8 L-22 -13 L-17 -8 L-12 -13 L-7 -8 L-2 -13 L3 -8 L8 -13 L13 -8 L18 -13 L23 -8 L28 -13" stroke="#FFD82E" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
      <path d="${d.place(front, ANGLE, AT)}" fill="${bun}"/>
      <path d="${d.place('M-29 -5 C-15 0 15 0 29 -5', ANGLE, AT)}" stroke="#FFE9A0" stroke-opacity=".7" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
