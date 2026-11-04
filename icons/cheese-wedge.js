// A wedge lying flat, point to the left: top face, cut face with holes, and the rind along the back.
const body = 'M13 55 Q11 57 13 59.5 L13 74 Q13 77 16 78 L80 64.5 Q84 63.5 84 60 L84 42 Q84 39 80.5 37.5 L54 26.5 Q51 25.5 48.5 27 Z';
module.exports = {
  id: 'cheese-wedge',
  name: 'Cheese Wedge',
  emoji: '🧀',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['cheese', 'swiss', 'dairy', 'snack', 'wedge'],
  tone: 'yellow',
  body,
  shine: [30, 47, -32],
  draw(c) {
    const top = c.linear('a', 'yellow', [0, 0, 1, 1], 0, 1);
    const front = c.linear('front', 'yellow', [0, 0, 1, 1], 1, 2);
    const rind = c.linear('rind', 'orange', [0, 0, 0, 1], 1, 2);
    const hole = (x, y, rx, ry, a = -12) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#B07A00" transform="rotate(${a} ${x} ${y})"/>
      <ellipse cx="${x}" cy="${y + ry * 0.3}" rx="${rx * 0.8}" ry="${ry * 0.65}" fill="#E8B400" transform="rotate(${a} ${x} ${y})"/>`;
    return `<path d="${body}" fill="${front}"/>
      <path d="M13 55 Q11 57 14 58.5 L80 43.5 Q84 42.5 84 42 Q84 39 80.5 37.5 L54 26.5 Q51 25.5 48.5 27 Z" fill="${top}"/>
      <path d="M48.5 27 Q51 25.5 54 26.5 L80.5 37.5 Q84 39 84 42 L84 47 Q82 43 78 41.5 L52 30.5 Q49.5 29.5 47 31 Z" fill="${rind}"/>
      <path d="M14 58.5 L80 43.5" stroke="#FFF7A8" stroke-opacity=".9" stroke-width="1.4" stroke-linecap="round"/>
      ${hole(26, 65, 4.2, 3.4)}${hole(45, 62, 3, 2.6)}${hole(62, 56, 5, 3.8)}${hole(36, 72, 2.2, 1.8)}${hole(76, 55, 2.2, 2)}
      <ellipse cx="44" cy="42" rx="4" ry="2" fill="#D9A400" transform="rotate(-20 44 42)"/>
      <ellipse cx="62" cy="38" rx="2.6" ry="1.4" fill="#D9A400" transform="rotate(-20 62 38)"/>`;
  },
};
