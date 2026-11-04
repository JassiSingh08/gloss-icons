const B = require('../src/parts/building');

const body = 'M19 84 Q15 84 15 80 L15 52 L12 52 Q9 50.5 11.5 48 L31.5 31 Q34 29 36.5 31 L42 35.6 L60.5 16.5 Q63 14.5 65.5 16.5 L83 34 Q85 37 82 38 L80 38 L80 80 Q80 84 76 84 Z';
module.exports = {
  id: 'houses',
  name: 'Houses',
  emoji: '🏘️',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['neighbourhood', 'street', 'homes', 'suburb', 'village'],
  tone: 'cream',
  body,
  shine: [26, 42, -42],
  draw(c) {
    const backWall = c.linear('bwall', 'sand', [0, 0, 1, 1], 0, 2);
    const backRoof = c.radial('broof', 'navy', 0.35, 0.2);
    return `<path d="M46 38 L80 38 L80 80 Q80 84 76 84 L46 84 Z" fill="${backWall}"/>
      <path d="M60.5 16.5 Q63 14.5 65.5 16.5 L83 34 Q85 37 82 38 L44 38 Q41 37 43 34 Z" fill="${backRoof}"/>
      ${B.eave(46, 38, 34, 4, '#5C4420')}
      ${B.win(c, 61, 46, 12, 11)}
      ${B.win(c, 61, 63, 12, 11)}
      <path d="M19 84 Q15 84 15 80 L15 52 L53 52 L53 84 Z" fill="${B.wall(c)}"/>
      <path d="M31.5 31 Q34 29 36.5 31 L56.5 48 Q59 50.5 56 52 L12 52 Q9 50.5 11.5 48 Z" fill="${B.roof(c)}"/>
      <path d="M53 52 L53 84" stroke="#5C4420" stroke-opacity=".45" stroke-width="1.2"/>
      ${B.eave(15, 52, 38)}
      ${B.win(c, 19, 58, 12, 11)}
      ${B.door(c, 36, 62, 11, 22)}
      <circle cx="34" cy="42" r="3.2" fill="${B.glow(c)}" stroke="#8A0006" stroke-opacity=".6" stroke-width="1.1"/>`;
  },
};
