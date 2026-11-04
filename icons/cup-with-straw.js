const g = require('../src/parts/glass');
const body = 'M20 34 Q20 30.5 24 30 C32 27 64 27 72 30 Q76 30.5 76 34 L76 36 Q76 38 74 38 L68 82 Q67.7 84 65.5 84 L30.5 84 Q28.3 84 28 82 L22 38 Q20 38 20 36 Z';
module.exports = {
  id: 'cup-with-straw',
  name: 'Cup With Straw',
  emoji: '🥤',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['soda', 'takeaway', 'straw', 'soft drink', 'cup'],
  tone: 'red',
  body,
  shine: [27, 46, -82],
  shineSize: [6, 2],
  draw(c) {
    const cup = c.linear('a', 'red', [0, 0, 1, 0], 0, 2);
    const lid = c.linear('lid', 'white', [0, 0, 1, 0], 0, 2);
    const straw = c.linear('straw', 'white', [0, 0, 1, 0], 0, 2);
    return `<path d="M50 30 L57 9 L68 6" fill="none" stroke="#8C83AD" stroke-opacity=".6" stroke-width="6.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 30 L57 9 L68 6" fill="none" stroke="${straw}" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M53.2 20.5 L55.4 14 M60 7.8 L64 6.8" stroke="#F0124F" stroke-width="4.6"/>
      <path d="${body}" fill="${cup}"/>
      <path d="M23.8 52 L72.2 52 L70.4 66 L25.6 66 Z" fill="#fff" opacity=".92"/>
      <path d="M33 59 C38 55 42 63 48 59 C54 55 58 63 63 59" fill="none" stroke="#E3120B" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M20 34 Q20 30.5 24 30 C32 27 64 27 72 30 Q76 30.5 76 34 L76 36 Q76 38 74 38 L22 38 Q20 38 20 36 Z" fill="${lid}"/>
      <path d="M24 33 C32 30.5 46 30 56 30.3" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
