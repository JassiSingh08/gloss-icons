const d = require('../src/parts/device');

const body = d.rr(14, 13, 68, 70, 6);

module.exports = {
  id: 'computer-disk',
  name: 'Computer Disk',
  emoji: '💽',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['minidisc', 'disk', 'storage', 'data', 'music'],
  tone: 'navy',
  body,
  shine: [18, 24, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.linear('case', 'navy', [0, 0, 1, 1], 0, 2);
    const label = c.linear('label', 'cream', [0, 0, 0, 1], 0, 1);
    const shutter = c.linear('shut', 'silver', [0, 0, 1, 0], 0, 2);
    const disc = d.disc(c, { cx: 48, cy: 58, r: 19 });
    return `<path d="${body}" fill="${shell}"/>
      <path d="${d.rr(20, 18, 56, 15, 3)}" fill="${label}"/>
      <path d="M26 24 L56 24 M26 28.5 L46 28.5" stroke="#E0B472" stroke-width="2" stroke-linecap="round"/>
      <circle cx="48" cy="58" r="21" fill="#080C3D" opacity=".8"/>
      ${disc.art}
      <path d="M62 44 L76 44 Q78 44 78 46 L78 77 L62 77 Z" fill="${shutter}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1"/>
      <rect x="66" y="56" width="8" height="10" rx="1.5" fill="#3A3E52" opacity=".55"/>`;
  },
};
