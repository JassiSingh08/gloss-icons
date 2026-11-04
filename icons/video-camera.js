const p = require('../src/parts/paper');
const body = 'M38 38 L74 38 Q82 38 82 46 L82 70 Q82 78 74 78 L38 78 Q32 78 32 72 L32 66 L22 66 L22 70 Q22 72 20 72 L14 72 Q12 72 12 70 L12 46 Q12 44 14 44 L20 44 Q22 44 22 46 L22 50 L32 50 L32 44 Q32 38 38 38 Z';
module.exports = {
  id: 'video-camera',
  name: 'Video Camera',
  emoji: '📹',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['video', 'camcorder', 'record', 'film', 'vlog'],
  tone: 'black',
  body,
  shine: [38, 43, -20],
  shineSize: [5.5, 2.2],
  draw(c) {
    const k = c.ramp('black');
    return `<path d="M44 38 L44 28 Q44 23 49 23 L70 23 Q75 23 75 28 L75 38 L70 38 L70 29 Q70 28 69 28 L50 28 Q49 28 49 29 L49 38 Z" fill="${c.linear('handle', 'black', [0, 0, 0, 1], 0, 2)}" stroke="#05050A" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M22 50 L32 50 L32 66 L22 66 Z" fill="${k[3]}" opacity=".6"/>
      <path d="M14 44 L20 44 Q22 44 22 46 L22 70 Q22 72 20 72 L14 72 Q12 72 12 70 L12 46 Q12 44 14 44 Z" fill="${c.linear('ring', 'black', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M18 44.6 L18 71.4', c.ramp('silver')[1], 2, 0.8)}
      <path d="${p.ell(15.6, 58, 4.6, 12.6)}" fill="#05050A"/>
      <path d="${p.ell(15.6, 58, 3.4, 10)}" fill="${c.radial('glass', 'purple', 0.35, 0.3)}"/>
      <ellipse cx="14.6" cy="53" rx="1.2" ry="3" fill="#fff" opacity=".8"/>
      <path d="${p.rr(46, 48, 28, 20, 3)}" fill="${c.linear('scr', 'navy', [0, 0, 1, 1], 1, 3)}" stroke="${k[0]}" stroke-opacity=".4"/>
      <path d="M49 52 L58 52" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"/>
      <circle cx="39" cy="45" r="2.6" fill="#E3120B"/>
      <circle cx="38.3" cy="44.3" r=".9" fill="#fff" opacity=".7"/>`;
  },
};
