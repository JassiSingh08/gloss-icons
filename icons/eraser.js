const p = require('../src/parts/paper');
const T = (d) => p.turn(d, -12, 48, 56);
const body = T('M14 50 Q14 46 17 43 L26 33 Q28 31 31 31 L82 31 Q85 31 85 34 L85 62 Q85 64 84 65 L76 75 Q75 76 72 76 L18 76 Q14 76 14 72 Z');
module.exports = {
  id: 'eraser',
  name: 'Eraser',
  emoji: '🪌',
  group: 'Objects',
  subgroup: 'writing',
  tags: ['eraser', 'rubber', 'undo', 'mistake', 'school'],
  tone: 'pink',
  body,
  shine: [...p.turn('20 52', -12, 48, 56).split(' ').map(Number), -30],
  shineSize: [5, 2.2],
  draw(c) {
    const b = c.ramp('blue');
    return `<path d="${body}" fill="${c.ramp('pink')[2]}"/>
      <path d="${T('M16 46 L28 31 L85 31 L73 46 Z')}" fill="${c.linear('top', 'pink', [0, 0, 1, 1], 0, 1)}"/>
      <path d="${T('M14 50 Q14 46 18 46 L73 46 L73 76 L18 76 Q14 76 14 72 Z')}" fill="${c.linear('a', 'pink', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${T('M73 46 L85 31 L85 62 L73 76 Z')}" fill="${c.linear('side', 'pink', [0, 0, 1, 1], 2, 3)}"/>
      <path d="${T('M44 46 L56 31 L85 31 L73 46 Z')}" fill="${c.linear('stop', 'blue', [0, 0, 1, 1], 0, 1)}"/>
      <path d="${T('M44 46 L73 46 L73 76 L44 76 Z')}" fill="${c.linear('sfront', 'blue', [0, 0, 1, 1], 1, 2)}"/>
      <path d="${T('M73 46 L85 31 L85 62 L73 76 Z')}" fill="${b[3]}"/>
      <path d="${T('M44 57 L73 57 L73 65 L44 65 Z')}" fill="#fff" opacity=".85"/>
      ${p.line(T('M44 46 L56 31 M44 46 L44 76'), b[3], 1.2, 0.5)}`;
  },
};
