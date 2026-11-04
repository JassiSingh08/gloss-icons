const g = require('../src/parts/glass');
const body = `M22 38 ${g.topHalf(48, 38, 26, 6.5)} L68.5 78 Q68 84 62 84 L34 84 Q28 84 27.5 78 Z`;
module.exports = {
  id: 'teacup-without-handle',
  name: 'Teacup Without Handle',
  emoji: '🍵',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['tea', 'green tea', 'matcha', 'cup', 'calm'],
  tone: 'sand',
  body,
  shine: [26, 50, -80],
  shineSize: [6, 2.2],
  draw(c) {
    const cup = c.linear('a', 'sand', [0, 0, 1, 0], 0, 2);
    const glaze = c.linear('glaze', 'teal', [0, 0, 1, 0], 1, 3);
    const tea = c.radial('tea', 'olive', 0.4, 0.3);
    return `<path d="${body}" fill="${cup}"/>
      <path d="M22 38 L74 38 L73 48 C70 51 66 47 62 50 C58 53 55 48 50 51 C45 54 42 49 37 51 C32 53 29 49 25 51 L23 48 Z" fill="${glaze}"/>
      <path d="${g.ellipse(48, 38, 26, 6.5)}" fill="${c.radial('rim', 'sand', 0.5, 0.2)}"/>
      <path d="${g.ellipse(48, 38.8, 23.4, 5.2)}" fill="${tea}"/>
      <path d="M33 37.5 C38 36 46 35.6 53 36" fill="none" stroke="#E3EFA0" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M30 70 C32 76 36 79 42 80" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" stroke-linecap="round"/>
      ${g.steam([[38, 31, 14], [48, 29, 17], [58, 31, 13]])}`;
  },
};
