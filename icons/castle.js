const B = require('../src/parts/building');

const body = 'M18 84 Q14 84 14 80 L14 38 L12.5 38 Q10.5 37.5 11.5 35.5 L20 14 Q22 11 24 14 L32.5 35.5 Q33.5 37.5 31.5 38 L30 38 L30 46 L33 46 L33 39 L39 39 L39 46 L45 46 L45 39 L51 39 L51 46 L57 46 L57 39 L63 39 L63 46 L66 46 L66 38 L64.5 38 Q62.5 37.5 63.5 35.5 L72 14 Q74 11 76 14 L84.5 35.5 Q85.5 37.5 83.5 38 L82 38 L82 80 Q82 84 78 84 Z';
const cone = (x) => `M${x - 2} 14 Q${x} 11 ${x + 2} 14 L${x + 10.5} 35.5 Q${x + 11.5} 37.5 ${x + 9.5} 38 L${x - 9.5} 38 Q${x - 11.5} 37.5 ${x - 10.5} 35.5 Z`;
module.exports = {
  id: 'castle',
  name: 'Castle',
  emoji: '🏰',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['fairy tale', 'kingdom', 'medieval', 'princess', 'fortress'],
  tone: 'grey',
  body,
  shine: [16, 30, -65],
  shineSize: [5, 2],
  draw(c) {
    const stone = B.stone(c);
    const flag = c.linear('flag', 'gold', [0, 0, 1, 1], 0, 2);
    const ink = '#2E2E3A';
    return `<path d="M22 12 L22 4.5" stroke="#5E554A" stroke-width="1.4"/><path d="M22 5 L29 7 L22 9.5 Z" fill="${flag}"/>
      <path d="M74 12 L74 4.5" stroke="#5E554A" stroke-width="1.4"/><path d="M74 5 L81 7 L74 9.5 Z" fill="${flag}"/>
      <path d="${body}" fill="${stone}"/>
      <path d="M30 46 L66 46 L66 84 L30 84 Z" fill="#A69C8F" opacity=".25"/>
      <path d="${cone(22)} ${cone(74)}" fill="${B.roof(c)}"/>
      ${B.eave(14, 38, 16, 3, '#5E554A', 0.4)}${B.eave(66, 38, 16, 3, '#5E554A', 0.4)}
      <path d="M30 40 L30 84 M66 40 L66 84" stroke="#5E554A" stroke-opacity=".45" stroke-width="1.2"/>
      <path d="M14 58 L30 58 M66 58 L82 58 M30 56 L66 56 M18 70 L26 70 M70 70 L78 70" stroke="#A69C8F" stroke-width="1.2"/>
      ${B.win(c, 18.5, 43, 7, 11, { arch: true, cross: false })}${B.win(c, 70.5, 43, 7, 11, { arch: true, cross: false })}
      <path d="M38 84 L38 70 Q38 61 48 61 Q58 61 58 70 L58 84 Z" fill="${c.radial('gate', 'brown', 0.3, 0.2)}" stroke="#331805" stroke-opacity=".55" stroke-width="1.1"/>
      <path d="M43 62.5 L43 84 M48 61 L48 84 M53 62.5 L53 84 M38.5 69 L57.5 69 M38 76 L58 76" stroke="${ink}" stroke-opacity=".6" stroke-width="1.3"/>`;
  },
};
