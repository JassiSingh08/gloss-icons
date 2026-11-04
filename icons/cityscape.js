const B = require('../src/parts/building');

const body = 'M16 84 Q14 84 14 82 L14 42 Q14 40 16 40 L26 40 L26 24 Q26 22 28 22 L40 22 L40 14 Q40 12 42 12 L50 12 Q52 12 52 14 L52 30 L64 30 Q66 30 66 32 L66 46 L80 46 Q82 46 82 48 L82 82 Q82 84 80 84 Z';
module.exports = {
  id: 'cityscape',
  name: 'Cityscape',
  emoji: '🏙️',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['city', 'skyline', 'downtown', 'urban', 'skyscrapers'],
  tone: 'slate',
  body,
  shine: [20, 46, -20],
  shineSize: [5, 2.4],
  draw(c) {
    const glassA = c.linear('ga', 'sky', [0, 0, 1, 1], 0, 2);
    const glassB = c.linear('gb', 'blue', [0, 0, 1, 1], 0, 2);
    const stone = c.linear('st', 'cream', [0, 0, 1, 1], 0, 2);
    const slate = c.linear('sl', 'slate', [0, 0, 1, 1], 0, 2);
    const grid = (x, y0, y1, w, cols, col, op = 0.55) => {
      let d = '';
      const g = (w - cols * 3) / (cols + 1);
      for (let y = y0; y < y1 - 3; y += 6) for (let k = 0; k < cols; k++) d += `M${B.n(x + g + k * (3 + g))} ${y} h3 v3.4 h-3 Z `;
      return `<path d="${d}" fill="${col}" opacity="${op}"/>`;
    };
    return `<path d="M46 12 L46 5" stroke="#4D5F7A" stroke-width="1.6"/><circle cx="46" cy="5" r="1.4" fill="#FF5C5C"/>
      <path d="${body}" fill="${slate}"/>
      <path d="M16 84 Q14 84 14 82 L14 42 Q14 40 16 40 L26 40 L26 84 Z" fill="${stone}"/>
      ${grid(14, 45, 84, 12, 2, '#8A5A1E', 0.5)}
      <path d="M26 24 Q26 22 28 22 L40 22 L40 84 L26 84 Z" fill="${glassA}"/>
      <path d="M29 22 L29 84 M33 22 L33 84 M37 22 L37 84" stroke="#fff" stroke-opacity=".4" stroke-width="1"/>
      <path d="M40 14 Q40 12 42 12 L50 12 Q52 12 52 14 L52 84 L40 84 Z" fill="${glassB}"/>
      <path d="M40 22 L52 22 M40 32 L52 32 M40 42 L52 42 M40 52 L52 52 M40 62 L52 62 M40 72 L52 72" stroke="#C9ECFF" stroke-opacity=".55" stroke-width="1.2"/>
      ${grid(52, 35, 84, 14, 2, '#C9ECFF', 0.7)}
      <path d="M66 46 L80 46 Q82 46 82 48 L82 82 Q82 84 80 84 L66 84 Z" fill="${stone}"/>
      ${grid(66, 51, 84, 16, 2, '#8A5A1E', 0.5)}
      <path d="M26 22 L26 84 M40 12 L40 84 M52 30 L52 84 M66 46 L66 84" stroke="#1E2A3D" stroke-opacity=".35" stroke-width="1"/>`;
  },
};
