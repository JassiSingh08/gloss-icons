const v = require('../src/parts/vehicle');
const g = require('../src/parts/glyph');
const body = 'M14 67 L13 55 Q13 50 18 49.5 L36 47.5 Q39 40 47 39.5 L52 39.5 Q57 39.5 60 45 L83 54 Q88 56 87 61 L85.5 65 Q85 67 82 67 Z';
module.exports = {
  id: 'racing-car',
  name: 'Racing Car',
  emoji: '🏎️',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['race', 'formula one', 'speed', 'motorsport', 'fast'],
  tone: 'blue',
  body,
  shine: [19, 52, -8],
  shineSize: [5, 1.8],
  draw(c) {
    const paint = c.linear('a', 'blue', [0, 0, 0.3, 1], 0, 2);
    const wing = c.linear('wing', 'black', [0, 0, 0, 1], 0, 2);
    const helmet = c.radial('helmet', 'gold', 0.35, 0.3);
    return `<path d="M17 50 L17 36" stroke="#3A3E52" stroke-width="4"/>
      <path d="${v.rr(7, 30, 21, 7.5, 2)}" fill="${wing}" stroke="#05050A" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="49" cy="40" r="6.4" fill="${helmet}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>
      <path d="M50 38.5 L55.4 38.5 Q55 41.5 53 42 L50 42 Z" fill="#141420"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M38 50 L82 55 L83 58 L36 54 Z" fill="#F7F5FF" opacity=".9"/>
      <circle cx="28" cy="58" r="5.6" fill="#F7F5FF"/>
      ${g.draw('7', { x: 28, y: 58, size: 7, color: '#0049A8' })}
      <path d="M79 66 L91 66 Q92 66 91.5 67.5 L91 69 L78 69 Z" fill="${wing}"/>
      ${v.wheel(c, 25, 72.5, 11.5)}${v.wheel(c, 71, 72.5, 11.5)}`;
  },
};
