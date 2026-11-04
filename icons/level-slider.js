const d = require('../src/parts/device');

const body = d.rr(14, 12, 68, 72, 8);
const FADERS = [[30, 60, 'red'], [48, 32, 'gold'], [66, 47, 'teal']];

module.exports = {
  id: 'level-slider',
  name: 'Level Slider',
  emoji: '🎚️',
  group: 'Objects',
  subgroup: 'music',
  tags: ['mixer', 'fader', 'volume', 'audio', 'studio'],
  tone: 'slate',
  body,
  shine: [19, 21, -50],
  shineSize: [5, 2.2],
  draw(c) {
    const panel = c.linear('a', 'slate', [0, 0, 1, 1], 0, 2);
    let ticks = '';
    let parts = '';
    FADERS.forEach(([x, y, pal], k) => {
      for (let ty = 22; ty <= 74; ty += 6.5) ticks += `M${x - 10} ${ty} L${x - 7} ${ty} `;
      const cap = c.linear(`f${k}`, pal, [0, 0, 0, 1], 0, 2);
      parts += `<rect x="${x - 2.4}" y="19" width="4.8" height="58" rx="2.4" fill="#1E2A3D" opacity=".85"/>
        <rect x="${x - 7.5}" y="${y - 5.5}" width="15" height="11" rx="2.6" fill="${cap}" stroke="${c.ramp(pal)[3]}" stroke-opacity=".6" stroke-width="1"/>
        <path d="M${x - 5.5} ${y} L${x + 5.5} ${y}" stroke="#fff" stroke-opacity=".85" stroke-width="1.4"/>
        <path d="M${x - 5} ${y - 3.6} L${x + 5} ${y - 3.6}" stroke="#fff" stroke-opacity=".45" stroke-width="1.2" stroke-linecap="round"/>`;
    });
    return `<path d="${body}" fill="${panel}"/>
      <path d="${ticks}" stroke="#1E2A3D" stroke-opacity=".45" stroke-width="1.2"/>
      ${parts}`;
  },
};
