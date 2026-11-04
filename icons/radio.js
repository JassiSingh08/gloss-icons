const d = require('../src/parts/device');

const body = d.rr(12, 33, 72, 50, 8);

module.exports = {
  id: 'radio',
  name: 'Radio',
  emoji: '📻',
  group: 'Objects',
  subgroup: 'music',
  tags: ['radio', 'retro', 'music', 'broadcast', 'station'],
  tone: 'teal',
  body,
  shine: [17, 42, -50],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.linear('a', 'teal', [0, 0, 1, 1], 0, 2);
    const grille = c.radial('gr', 'cream', 0.35, 0.3);
    const win = c.linear('win', 'cream', [0, 0, 0, 1], 0, 1);
    const knob = c.radial('knob', 'silver', 0.35, 0.3);
    let holes = '';
    for (let r = 0; r < 5; r++) for (let k = 0; k < 5; k++) {
      const x = 23.5 + k * 5.2;
      const y = 47.5 + r * 5.2;
      if (Math.hypot(x - 34, y - 58) < 11) holes += `<circle cx="${d.n(x)}" cy="${d.n(y)}" r="1.5"/>`;
    }
    let ticks = '';
    for (let x = 58; x <= 75; x += 3.4) ticks += `M${d.n(x)} 46 L${d.n(x)} ${x % 2 < 1 ? 50 : 48.5} `;
    return `<path d="M27 33 L29 22 Q30 18 34 18 L62 18 Q66 18 67 22 L69 33" fill="none" stroke="#003A33" stroke-width="4.2" stroke-linecap="round"/>
      <path d="M72 33 L83 11" stroke="#8E93AD" stroke-width="2" stroke-linecap="round"/>
      <circle cx="83" cy="11" r="2.2" fill="${knob}"/>
      <path d="${body}" fill="${shell}"/>
      <circle cx="34" cy="58" r="15" fill="${grille}" stroke="#003A33" stroke-opacity=".5" stroke-width="1.2"/>
      <g fill="#00796B" opacity=".75">${holes}</g>
      <path d="${d.rr(54, 42, 25, 14, 3)}" fill="${win}" stroke="#003A33" stroke-opacity=".5" stroke-width="1"/>
      <path d="${ticks}" stroke="#8A5A1E" stroke-width="1"/>
      <path d="M66 43.5 L64.5 54.5" stroke="#E3120B" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="60" cy="69" r="5" fill="${knob}"/>
      <circle cx="73" cy="69" r="5" fill="${knob}"/>
      <path d="M60 64.8 L60 67.5 M73 64.8 L74.2 67.5" stroke="#3A3E52" stroke-width="1.3" stroke-linecap="round"/>`;
  },
};
