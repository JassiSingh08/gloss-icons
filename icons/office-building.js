const B = require('../src/parts/building');

const body = 'M22 15 Q22 11 26 11 L62 11 L75 16 L75 80 Q75 84 71 84 L26 84 Q22 84 22 80 Z';
module.exports = {
  id: 'office-building',
  name: 'Office Building',
  emoji: '🏢',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['office', 'work', 'business', 'tower', 'city'],
  tone: 'silver',
  body,
  shine: [30, 22, -30],
  draw(c) {
    const front = c.linear('a', 'silver', [0, 0, 1, 1], 0, 2);
    const side = c.linear('side', 'slate', [0, 0, 1, 0], 2, 3);
    let w = '';
    for (let r = 0; r < 6; r++) for (let k = 0; k < 3; k++) {
      if (r === 5 && k === 1) continue;
      w += B.win(c, 26.5 + k * 12, 19 + r * 9.6, 9, 6.6, { lit: false, cross: false, frame: '#3A3E52', r: 1.2 });
    }
    return `<path d="${body}" fill="${front}"/>
      <path d="M62 11 L75 16 L75 80 Q75 84 71 84 L62 84 Z" fill="${side}"/>
      <path d="M65 22 L72 24.5 L72 30 L65 27.5 Z M65 37 L72 39.5 L72 45 L65 42.5 Z M65 52 L72 54.5 L72 60 L65 57.5 Z M65 67 L72 69.5 L72 75 L65 72.5 Z" fill="#7FCBFF" opacity=".55"/>
      <path d="M22 15 Q22 11 26 11 L62 11 L62 15 L22 15 Z" fill="#8E93AD" opacity=".5"/>
      ${w}
      <path d="M37 84 L37 72 L48 72 L48 84 Z" fill="${B.glass(c)}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M42.5 72 L42.5 84" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M34 70.5 L51 70.5" stroke="#3A3E52" stroke-opacity=".7" stroke-width="2.2" stroke-linecap="round"/>`;
  },
};
