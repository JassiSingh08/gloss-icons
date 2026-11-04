const { turn: xform, turnPt: at } = require('../src/parts/ball');

const T = { deg: -38, s: 1.02, x: 50, y: 48, ox: 48, oy: 48 };
const skirt = 'M38 66 L22 18 Q48 11 74 18 L58 66 Z';
const body = xform('M38 66 L22 18 Q48 11 74 18 L58 66 L59 72 C59 80 54 85 48 85 C42 85 37 80 37 72 Z', T);

module.exports = {
  id: 'badminton',
  name: 'Badminton',
  emoji: '🏸',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['badminton', 'shuttlecock', 'birdie', 'racket', 'sport'],
  tone: 'white',
  body,
  shine: [...at([30, 24], T), 32],
  shineSize: [6, 2.2],
  draw(c) {
    const feather = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const cork = c.radial('cork', 'cream', 0.35, 0.2);
    const ribs = xform('M40 64 L28 19 M45 64 L39 16 M51 64 L57 16 M56 64 L68 19 M48 64 L48 15', T);
    return `<path d="${body}" fill="${feather}"/>
      <path d="${xform('M58 66 L74 18 Q78 20 76 24 L60 66 Z', T)}" fill="#8C83AD" opacity=".35"/>
      <path d="${ribs}" stroke="#8C83AD" stroke-opacity=".55" stroke-width="1.1"/>
      <path d="${xform('M30.5 43 Q48 39 65.5 43 L64.3 47 Q48 43 31.7 47 Z', T)}" fill="${c.ramp('red')[1]}"/>
      <path d="${xform('M37 68 L59 68 L59 72 C59 80 54 85 48 85 C42 85 37 80 37 72 Z', T)}" fill="${cork}"/>
      <path d="${xform('M37 66 L59 66 L59 70.5 L37 70.5 Z', T)}" fill="${c.linear('band', 'red', [0, 0, 0, 1], 1, 2)}"/>`;
  },
};
