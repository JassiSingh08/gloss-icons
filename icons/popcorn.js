// A striped bucket overflowing with popped kernels.
const body = 'M17 41 L79 41 L70.5 81 Q70 84 67 84 L29 84 Q26 84 25.5 81 Z';
module.exports = {
  id: 'popcorn',
  name: 'Popcorn',
  emoji: '🍿',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['popcorn', 'movie', 'cinema', 'snack', 'night in'],
  tone: 'red',
  body,
  shine: [24, 52, -78],
  shineSize: [6, 2.4],
  draw(c) {
    const paper = c.linear('paper', 'white', [0, 0, 1, 0], 0, 2);
    const stripe = c.linear('a', 'red', [0, 0, 1, 0], 0, 2);
    const corn = c.radial('corn', 'cream', 0.4, 0.3);
    const s = (x0, x1) => `<path d="M${x0} 41 L${x1} 41 L${48 + (x1 - 48) * 0.7} 84 L${48 + (x0 - 48) * 0.7} 84 Z" fill="${stripe}"/>`;
    const kernel = (x, y) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#FFC21A" opacity=".75"/>`;
    return `<path d="M17 42 C11 35 17 26 25 28 C23 19 33 14 39 20 C41 11 53 10 56 18 C60 11 71 14 70 22 C78 20 84 29 79 36 C83 39 81 43 79 43 Z" fill="${corn}" stroke="#8A5A1E" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="M25 28 C28 31 30 34 30 38 M39 20 C42 23 43 28 42 32 M56 18 C55 23 55 27 57 31 M70 22 C67 26 66 30 66 34 M33 33 C36 35 38 38 38 41" stroke="#C9A06A" stroke-opacity=".7" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      ${kernel(30, 26)}${kernel(48, 17)}${kernel(64, 22)}${kernel(46, 32)}${kernel(73, 33)}${kernel(22, 37)}
      <path d="${body}" fill="${paper}"/>
      ${s(17, 26)}${s(35.5, 44)}${s(52, 60.5)}${s(70, 79)}
      <path d="M16 39 L80 39 L79.4 44 L16.6 44 Z" fill="${stripe}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <path d="M18 40.4 L78 40.4" stroke="#FF7A62" stroke-width="1.2"/>`;
  },
};
