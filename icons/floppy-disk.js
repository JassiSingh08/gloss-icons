const d = require('../src/parts/device');

const body = 'M18 13 L72 13 L83 24 L83 79 Q83 83 79 83 L17 83 Q13 83 13 79 L13 17 Q13 13 18 13 Z';

module.exports = {
  id: 'floppy-disk',
  name: 'Floppy Disk',
  emoji: '💾',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['save', 'floppy', 'disk', 'retro', 'storage'],
  tone: 'blue',
  body,
  shine: [17, 22, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.linear('a', 'blue', [0, 0, 1, 1], 0, 2);
    const metal = c.linear('metal', 'silver', [0, 0, 1, 0], 0, 2);
    const label = c.linear('label', 'white', [0, 0, 0, 1], 0, 2);
    return `<path d="${body}" fill="${shell}"/>
      <path d="M28 13 L66 13 L66 35 Q66 37 64 37 L30 37 Q28 37 28 35 Z" fill="${metal}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1"/>
      <rect x="51" y="17" width="9" height="16" rx="1.5" fill="#001E4D" opacity=".8"/>
      <path d="${d.rr(21, 46, 54, 37, 3)}" fill="${label}"/>
      <path d="M21 52 L75 52" stroke="#0C8CF0" stroke-width="2.4" opacity=".7"/>
      <path d="M28 61 L68 61 M28 68 L68 68 M28 75 L56 75" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>
      <rect x="16.5" y="74" width="3" height="4" rx=".8" fill="#001E4D" opacity=".7"/>`;
  },
};
