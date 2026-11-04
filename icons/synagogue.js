const B = require('../src/parts/building');

const body = 'M18 84 Q14 84 14 80 L14 38 A8 8 0 0 1 30 38 A18 18 0 0 1 66 38 A8 8 0 0 1 82 38 L82 80 Q82 84 78 84 Z';
module.exports = {
  id: 'synagogue',
  name: 'Synagogue',
  emoji: '🕍',
  group: 'Travel & Places',
  subgroup: 'place-religious',
  tags: ['jewish', 'judaism', 'shul', 'worship', 'star of david'],
  tone: 'sand',
  body,
  shine: [21, 35, -45],
  shineSize: [4.5, 2],
  draw(c) {
    const wall = c.linear('a', 'cream', [0, 0, 1, 1], 0, 2);
    const dome = c.radial('dome', 'blue', 0.32, 0.25);
    const ink = '#0049A8';
    const s = 6.6, cx = 48, cy = 40;
    const tri = (dir) => `M${cx} ${B.n(cy - dir * s)} L${B.n(cx + s * 0.866)} ${B.n(cy + dir * s * 0.5)} L${B.n(cx - s * 0.866)} ${B.n(cy + dir * s * 0.5)} Z`;
    return `<path d="${body}" fill="${wall}"/>
      <path d="M14 38 A8 8 0 0 1 30 38 Z M66 38 A8 8 0 0 1 82 38 Z" fill="${dome}"/>
      <path d="M30 38 A18 18 0 0 1 66 38" fill="none" stroke="#C9A06A" stroke-width="2.4"/>
      ${B.eave(14, 38, 16, 3)}${B.eave(66, 38, 16, 3)}
      <path d="M30 38 L30 84 M66 38 L66 84" stroke="#8A5A1E" stroke-opacity=".35" stroke-width="1.2"/>
      <circle cx="${cx}" cy="${cy}" r="10" fill="${B.glow(c)}" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1.3"/>
      <path d="${tri(1)} ${tri(-1)}" fill="none" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/>
      ${B.win(c, 18, 46, 8, 14, { arch: true })}${B.win(c, 70, 46, 8, 14, { arch: true })}
      ${B.win(c, 18, 66, 8, 12, { arch: true })}${B.win(c, 70, 66, 8, 12, { arch: true })}
      ${B.door(c, 39, 60, 18, 24)}
      <path d="M48 61 L48 84" stroke="#331805" stroke-opacity=".45" stroke-width="1.1"/>`;
  },
};
