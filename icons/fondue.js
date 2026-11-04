// A round caquelon on a little stand over a flame, a fork dipping bread into the cheese.
const d = require('../src/parts/dish');
const body = `M17 42 ${d.topHalf(48, 42, 31, 8)} C82 60 70 72 48 72 C26 72 14 60 17 42 Z`;
module.exports = {
  id: 'fondue',
  name: 'Fondue',
  emoji: '🫕',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['fondue', 'cheese', 'swiss', 'dinner', 'melted'],
  tone: 'red',
  body,
  shine: [23, 52, -65],
  draw(c) {
    const pot = c.radial('a', 'red', 0.3, 0.2);
    const rim = c.linear('rim', 'red', [0, 0, 1, 0], 0, 2);
    const cheese = c.radial('cheese', 'yellow', 0.4, 0.4);
    const bread = c.linear('bread', 'cream', [0, 0, 1, 1], 0, 2);
    const flame = c.radial('flame', 'flame', 0.5, 0.75);
    return `<path d="M30 68 L24 84 M66 68 L72 84 M24 84 L72 84" stroke="#141420" stroke-width="3.4" stroke-linecap="round" fill="none"/>
      <path d="M44 84 C42 79 46 75 48 72 C50 75 54 79 52 84 Z" fill="${flame}"/>
      <path d="${body}" fill="${pot}"/>
      <path d="${d.ellipse(48, 42, 31, 8)}" fill="${rim}"/>
      <path d="${d.ellipse(48, 42.6, 27.5, 6)}" fill="${cheese}"/>
      <path d="M30 41 C38 39 50 39 58 40" stroke="#FFF7A8" stroke-width="1.4" stroke-linecap="round" fill="none"/>
      <path d="M58 41 L80 12" stroke="#3A3E52" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M58 41 L80 12" stroke="#D9DCE8" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M71 23.5 L82 9" stroke="#3A3E52" stroke-width="5.6" stroke-linecap="round"/>
      <path d="M71 23.5 L82 9" stroke="#2FB85A" stroke-width="3.6" stroke-linecap="round"/>
      <g transform="translate(57 37) rotate(-14)"><rect x="-6" y="-6" width="12" height="11" rx="2.5" fill="${bread}" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1.1"/><path d="M-6 -1 C-3 2 0 -1 2 3 C3 5 6 3 6 0 L6 5 L-6 5 Z" fill="${cheese}"/></g>
      <path d="M53 47 C53 51 55 53 56 50 Z" fill="#FFD82E"/>`;
  },
};
