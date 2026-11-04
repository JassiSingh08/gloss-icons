const p = require('../src/parts/paper');
const body = 'M34 46 L76 46 Q82 46 82 52 L82 72 Q82 78 76 78 L34 78 Q28 78 28 72 L28 66 L14 66 Q11 66 11 63 L11 57 Q11 54 14 54 L28 54 L28 52 Q28 46 34 46 Z';
module.exports = {
  id: 'film-projector',
  name: 'Film Projector',
  emoji: '📽️',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['projector', 'film', 'cinema', 'movie night', 'screening'],
  tone: 'slate',
  body,
  shine: [34, 51, -20],
  shineSize: [5, 2.2],
  draw(c) {
    const sl = c.ramp('slate');
    return `<path d="M36 78 L32 84 M74 78 L78 84" stroke="#1E2A3D" stroke-width="3.4" stroke-linecap="round"/>
      ${p.line('M44 46 L44 34 M68 46 L68 36', '#1E2A3D', 3)}
      ${p.reel(c, 44, 28, 15, 'r1')}${p.reel(c, 69, 32, 11, 'r2')}
      <path d="${body}" fill="${c.linear('a', 'slate', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M14 54 L28 54 L28 66 L14 66 Q11 66 11 63 L11 57 Q11 54 14 54 Z" fill="${c.linear('lens', 'black', [0, 0, 0, 1], 0, 2)}"/>
      <path d="${p.ell(12.5, 60, 3, 6)}" fill="${c.radial('glass', 'yellow', 0.4, 0.3)}"/>
      ${p.line('M20 54.5 L20 65.5 M24 54.5 L24 65.5', '#6E6E85', 1, 0.6)}
      <path d="${p.rr(52, 56, 22, 14, 2)}" fill="${sl[3]}" opacity=".5"/>
      ${p.line('M55 60 L71 60 M55 63 L71 63 M55 66 L71 66', sl[0], 1.1, 0.5)}
      <circle cx="40" cy="63" r="4" fill="${c.radial('knob', 'silver', 0.3, 0.25)}" stroke="#3A3E52" stroke-opacity=".6"/>`;
  },
};
