const B = require('../src/parts/building');

const body = 'M17 84 Q13 84 13 80 L13 41 L11.5 41 Q9.5 40.5 10.5 38.5 L16 32.5 Q17 31.5 18.5 31.5 L38 31.5 L38 24 L36.5 24 Q34.5 23.5 35.5 21.5 L46 10.5 Q48 8.5 50 10.5 L60.5 21.5 Q61.5 23.5 59.5 24 L58 24 L58 31.5 L77.5 31.5 Q79 31.5 80 32.5 L85.5 38.5 Q86.5 40.5 84.5 41 L83 41 L83 80 Q83 84 79 84 Z';
module.exports = {
  id: 'school',
  name: 'School',
  emoji: '🏫',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['education', 'class', 'learn', 'teacher', 'student'],
  tone: 'cream',
  body,
  shine: [41, 17, -45],
  shineSize: [5, 2],
  draw(c) {
    const face = c.radial('clock', 'white', 0.35, 0.3);
    const ink = '#3D1A00';
    let w = '';
    for (const x of [17, 27, 61, 71]) for (const y of [47, 64]) w += B.win(c, x, y, 8, 11);
    return `<path d="${body}" fill="${B.wall(c)}"/>
      <path d="M38 24 L58 24 L58 84 L38 84 Z" fill="#FFF9EC" opacity=".55"/>
      <path d="M16 32.5 Q17 31.5 18.5 31.5 L77.5 31.5 Q79 31.5 80 32.5 L85.5 38.5 Q86.5 40.5 84.5 41 L11.5 41 Q9.5 40.5 10.5 38.5 Z" fill="${B.roof(c)}"/>
      <path d="M46 10.5 Q48 8.5 50 10.5 L60.5 21.5 Q61.5 23.5 59.5 24 L36.5 24 Q34.5 23.5 35.5 21.5 Z" fill="${B.roof(c)}"/>
      ${B.eave(38, 24, 20, 3)}${B.eave(13, 41, 25)}${B.eave(58, 41, 25)}
      <path d="M38 28 L38 84 M58 28 L58 84" stroke="#8A5A1E" stroke-opacity=".35" stroke-width="1.2"/>
      <circle cx="48" cy="37" r="7" fill="${face}" stroke="#8A5A1E" stroke-opacity=".7" stroke-width="1.4"/>
      <path d="M48 37 L48 32.5 M48 37 L51.5 38.5" stroke="${ink}" stroke-width="1.8" stroke-linecap="round"/>
      ${w}
      ${B.win(c, 42, 49, 12, 9)}
      ${B.door(c, 42, 63, 12, 21)}
      <path d="M48 64 L48 84" stroke="#331805" stroke-opacity=".45" stroke-width="1"/>`;
  },
};
