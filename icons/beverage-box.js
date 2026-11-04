const g = require('../src/parts/glass');
const body = 'M22 29 Q22 27.6 23.4 27.2 L50.6 20.4 Q52 20 53.4 20.5 L72.6 27.3 Q74 27.8 74 29.4 L74 75 Q74 76.4 72.6 76.9 L45.4 83.6 Q44 84 42.6 83.5 L23.4 76.8 Q22 76.3 22 75 Z';
module.exports = {
  id: 'beverage-box',
  name: 'Beverage Box',
  emoji: '🧃',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['juice', 'juice box', 'straw', 'lunchbox', 'kids'],
  tone: 'green',
  body,
  shine: [26, 36, -70],
  shineSize: [5, 2],
  draw(c) {
    const top = c.linear('top', 'green', [0, 0, 1, 1], 0, 1);
    const left = c.linear('left', 'green', [0, 0, 1, 1], 1, 2);
    const right = c.linear('right', 'green', [0, 0, 1, 1], 2, 3);
    const fruit = c.radial('fruit', 'orange', 0.35, 0.3);
    const straw = c.linear('straw', 'white', [0, 0, 1, 0], 0, 2);
    return `<path d="M58 25 L61 9 L69 6" fill="none" stroke="#8C83AD" stroke-opacity=".6" stroke-width="5.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58 25 L61 9 L69 6" fill="none" stroke="${straw}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${body}" fill="${left}"/>
      <path d="M22 29 L52 21 L74 28.5 L44 36.5 Z" fill="${top}"/>
      <path d="M44 36.5 L74 28.5 L74 75 Q74 76.4 72.6 76.9 L45.4 83.6 Q44 84 44 83 Z" fill="${right}"/>
      <path d="M22 29 L44 36.5 L74 28.5" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>
      <ellipse cx="57.5" cy="26" rx="2.6" ry="1.4" fill="#053A1A" opacity=".6"/>
      <g transform="translate(33 58) skewY(19)">
        <circle cx="0" cy="0" r="8" fill="${fruit}" ${g.edge('#6B0F00', 1, 0.5)}/>
        <path d="M0 -8 C2 -12 6 -13 8 -11 C6 -9 3 -8 0 -8 Z" fill="#A6F07A"/>
        <ellipse cx="-3" cy="-3" rx="2" ry="1.2" fill="#fff" opacity=".7" transform="rotate(-35 -3 -3)"/>
      </g>`;
  },
};
