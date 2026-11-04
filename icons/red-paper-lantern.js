const p = require('../src/parts/paper');
const body = 'M48 22 C72 22 81 34 81 48 C81 62 72 74 48 74 C24 74 15 62 15 48 C15 34 24 22 48 22 Z';
module.exports = {
  id: 'red-paper-lantern',
  name: 'Red Paper Lantern',
  emoji: '🏮',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['lantern', 'festival', 'lunar new year', 'izakaya', 'light'],
  tone: 'red',
  body,
  shine: [26, 35, -45],
  draw(c) {
    const r = c.ramp('red');
    const gold = c.linear('gold', 'gold', [0, 0, 0, 1], 0, 2);
    const g = c.ramp('gold');
    return `<path d="M48 8 L48 18" stroke="#3D0003" stroke-width="2" stroke-linecap="round"/>
      <circle cx="48" cy="9" r="3" fill="none" stroke="${g[2]}" stroke-width="2"/>
      <path d="M44 74 L52 74 L53 84 L43 84 Z" fill="${c.linear('tassel', 'red', [0, 0, 1, 0], 0, 2)}"/>
      ${p.line('M45.5 76 L45 84 M48 76 L48 84 M50.5 76 L51 84', r[3], 0.9, 0.6)}
      <path d="${body}" fill="${c.radial('a', 'red', 0.35, 0.3)}"/>
      ${p.line('M37 23 C26 34 26 62 37 73 M59 23 C70 34 70 62 59 73 M48 22 L48 74 M26 27.5 C17 38 17 58 26 68.5 M70 27.5 C79 38 79 58 70 68.5', r[3], 1.3, 0.45)}
      <path d="${p.rr(32, 16, 32, 8, 2.5)}" fill="${gold}" stroke="${g[3]}" stroke-opacity=".6" stroke-width="1"/>
      <path d="${p.rr(32, 72, 32, 7, 2.5)}" fill="${gold}" stroke="${g[3]}" stroke-opacity=".6" stroke-width="1"/>
      <circle cx="48" cy="48" r="9" fill="${g[0]}" opacity=".9"/>
      <path d="M43 44 L53 44 M48 40 L48 56 M43.5 49 L52.5 49 M44 53.5 L52 53.5" stroke="${r[2]}" stroke-width="1.8" stroke-linecap="round"/>`;
  },
};
