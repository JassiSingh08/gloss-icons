const body = 'M22 58 L29.75 58 A23 23 0 1 1 66.25 58 L74 58 Q78 58 79 62 L84 77 Q85 82 80 82 L16 82 Q11 82 12 77 L17 62 Q18 58 22 58 Z';
const front = 'M17 62 Q18 58 22 58 L27 58 Q48 74 69 58 L74 58 Q78 58 79 62 L84 77 Q85 82 80 82 L16 82 Q11 82 12 77 Z';

module.exports = {
  id: 'trackball',
  name: 'Trackball',
  emoji: '🖲️',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['trackball', 'pointer', 'computer', 'arcade', 'roll'],
  tone: 'slate',
  body,
  shine: [35, 31, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const ball = c.radial('ball', 'blue', 0.32, 0.25);
    const base = c.linear('a', 'slate', [0, 0, 1, 1], 0, 2);
    const btn = c.linear('btn', 'slate', [0, 0, 0, 1], 1, 2);
    return `<path d="${body}" fill="${base}"/>
      <ellipse cx="48" cy="59" rx="25" ry="6" fill="#1E2A3D" opacity=".75"/>
      <circle cx="48" cy="44" r="23" fill="${ball}"/>
      <path d="${front}" fill="${base}"/>
      <path d="M27 58 Q48 74 69 58" fill="none" stroke="#DCE6F2" stroke-opacity=".6" stroke-width="1.3"/>
      <path d="M17 70 L28 70 L27 76 L15.5 76 Z M79 70 L68 70 L69 76 L80.5 76 Z" fill="${btn}" stroke="#1E2A3D" stroke-opacity=".55" stroke-width="1"/>`;
  },
};
