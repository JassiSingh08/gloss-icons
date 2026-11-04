const B = require('../src/parts/building');

const body = 'M24 84 Q20 84 20 80 L20 17 Q20 13 24 13 L72 13 Q76 13 76 17 L76 80 Q76 84 72 84 Z';
module.exports = {
  id: 'hotel',
  name: 'Hotel',
  emoji: '🏨',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['stay', 'holiday', 'travel', 'room', 'check in'],
  tone: 'cream',
  body,
  shine: [27, 26, -25],
  draw(c) {
    const sign = c.linear('sign', 'navy', [0, 0, 1, 1], 0, 2);
    const awning = c.linear('awning', 'red', [0, 0, 0, 1], 0, 2);
    let w = '';
    for (const y of [34, 48]) for (const x of [24.5, 38.5, 52.5, 64]) {
      if (x === 52.5 || x === 38.5) continue;
      w += B.win(c, x, y, 9.5, 9.5);
    }
    for (const x of [24.5, 38.5, 52.5, 64]) w += x === 38.5 || x === 52.5 ? '' : B.win(c, x, 20, 9.5, 9.5);
    return `<path d="${body}" fill="${B.wall(c)}"/>
      <path d="M24 13 L72 13 Q76 13 76 17 L76 18 L20 18 L20 17 Q20 13 24 13 Z" fill="#E0B472"/>
      ${w}
      <rect x="38" y="20" width="20" height="38" rx="4" fill="${sign}" stroke="#080C3D" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="M42.5 27 L42.5 51 M53.5 27 L53.5 51 M42.5 39 L53.5 39" stroke="#FFE35C" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M38 84 L38 70 L58 70 L58 84 Z" fill="${B.glow(c)}" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M48 70 L48 84" stroke="#E0B472" stroke-width="1.8"/>
      <path d="M33 63 L63 63 Q65 63 65.5 65 L66.5 68.5 Q67 70 65 70 L31 70 Q29 70 29.5 68.5 L30.5 65 Q31 63 33 63 Z" fill="${awning}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      ${B.win(c, 24.5, 64, 9.5, 9.5)}${B.win(c, 62, 64, 9.5, 9.5)}`;
  },
};
