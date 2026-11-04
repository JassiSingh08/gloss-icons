const B = require('../src/parts/building');

const body = 'M24 84 Q20 84 20 80 L20 31 Q20 27 24 27 L72 27 Q76 27 76 31 L76 80 Q76 84 72 84 Z';
const heart = 'M48 28.5 C42 24 32 20 32 13 C32 8.5 36 6.5 39.5 7 C43.5 7.5 46.5 10.5 48 13 C49.5 10.5 52.5 7.5 56.5 7 C60 6.5 64 8.5 64 13 C64 20 54 24 48 28.5 Z';
module.exports = {
  id: 'love-hotel',
  name: 'Love Hotel',
  emoji: '🏩',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['romance', 'love', 'getaway', 'date night', 'couple'],
  tone: 'pink',
  body,
  shine: [27, 37, -25],
  draw(c) {
    const wall = B.grad(c, 'pwall', ['#FFE9F1', '#FFC4D8', '#E889AB'], [0, 0, 1, 1]);
    const h = c.radial('heart', 'red', 0.35, 0.25);
    let w = '';
    for (const y of [35, 50]) for (const x of [25, 38, 51, 64]) w += B.win(c, x, y, 7.5, 9, { arch: true, cross: false, frame: '#9E0030' });
    return `<path d="${heart}" fill="${h}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.2"/>
      <ellipse cx="38" cy="11.5" rx="3" ry="1.6" fill="#fff" opacity=".7" transform="rotate(-30 38 11.5)"/>
      <path d="M45 28 L45 30 M51 28 L51 30" stroke="#9E0030" stroke-width="2"/>
      <path d="${body}" fill="${wall}"/>
      <path d="M24 27 L72 27 Q76 27 76 31 L76 32 L20 32 L20 31 Q20 27 24 27 Z" fill="${c.linear('trim', 'pink', [0, 0, 0, 1], 1, 2)}"/>
      ${w}
      ${B.door(c, 40, 66, 16, 18, { fill: c.radial('door', 'pink', 0.3, 0.2) })}
      <path d="M48 67 L48 84" stroke="#4A0016" stroke-opacity=".4" stroke-width="1"/>
      ${B.win(c, 25, 67, 9, 9)}${B.win(c, 62, 67, 9, 9)}`;
  },
};
