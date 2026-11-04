const g = require('../src/parts/glass');
const body = 'M12 81 L26 52 Q29 47 32 51 L35 55 L46 26 Q50 18 54 26 L84 81 Q84.5 84 81.5 84 L14.5 84 Q11.5 84 12 81 Z';
module.exports = {
  id: 'mountain',
  name: 'Mountain',
  emoji: '⛰️',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['mountain', 'hiking', 'peak', 'outdoors', 'nature'],
  tone: 'brown',
  body,
  shine: [43, 35, -65],
  shineSize: [5, 1.8],
  draw(c) {
    const rock = c.radial('a', 'brown', 0.35, 0.15);
    const grass = c.linear('grass', 'green', [0, 0, 1, 0], 1, 2);
    const b = c.ramp('brown');
    return `<path d="${body}" fill="${rock}"/>
      <path d="M50 20 Q52 21 54 26 L84 81 Q84.5 84 81.5 84 L70 84 C66 64 56 42 50 20 Z" fill="${b[2]}" opacity=".55"/>
      <path d="M46 26 Q50 18 54 26 L56.5 31 L53 29.5 L50.5 33 L47.5 30 L44 33.5 Z" fill="#F7F5FF"/>
      <g fill="none" stroke="${b[2]}" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round"><path d="M41 45 L37 52 M58 46 L62 53 M45 56 L42 62"/></g>
      <path d="M12 81 L17 71 C24 65 30 70 36 66 C42 62 48 68 55 64 C62 60 68 66 76 63 C79 66 81 72 84 81 Q84.5 84 81.5 84 L14.5 84 Q11.5 84 12 81 Z" fill="${grass}"/>
      <path d="M19 70 C24 66.5 29 70 34 67" fill="none" stroke="#A6F07A" stroke-opacity=".8" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
