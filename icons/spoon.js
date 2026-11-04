const g = require('../src/parts/glass');
const ANGLE = -38;
const AT = [65, 82];
const spoon = 'M-2.4 -43 C-8.5 -44 -12.5 -50 -12.5 -58 C-12.5 -67.5 -7 -75 0 -75 C7 -75 12.5 -67.5 12.5 -58 C12.5 -50 8.5 -44 2.4 -43 L4.8 -4 Q4.8 1 0 1 Q-4.8 1 -4.8 -4 Z';
module.exports = {
  id: 'spoon',
  name: 'Spoon',
  emoji: '🥄',
  group: 'Food & Drink',
  subgroup: 'dishware',
  tags: ['spoon', 'cutlery', 'soup', 'stir', 'eat'],
  tone: 'silver',
  body: g.place(spoon, ANGLE, AT),
  shine: [...g.placePt(-7, -64, ANGLE, AT), ANGLE - 60],
  shineSize: [5, 2.2],
  draw(c) {
    const steel = c.linear('a', 'silver', [0, 0, 1, 0], 0, 2);
    const bowl = c.linear('bowl', 'silver', [0, 0, 1, 1], 2, 0);
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="${spoon}" fill="${steel}"/>
        <path d="M0 -46.5 C-6.5 -47 -9.5 -52 -9.5 -58.5 C-9.5 -66 -5.5 -71.5 0 -71.5 C5.5 -71.5 9.5 -66 9.5 -58.5 C9.5 -52 6.5 -47 0 -46.5 Z" fill="${bowl}"/>
        <ellipse cx="3.6" cy="-52" rx="3" ry="4.6" fill="#fff" opacity=".7" transform="rotate(-20 3.6 -52)"/>
        <path d="M-1.8 -38 L-2.6 -6" stroke="#fff" stroke-opacity=".8" stroke-width="1.4" stroke-linecap="round"/>
      </g>`;
  },
};
