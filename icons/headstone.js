const body = 'M24 84 L24 38 C24 20 34 11 48 11 C62 11 72 20 72 38 L72 84 Z';
module.exports = {
  id: 'headstone',
  name: 'Headstone',
  emoji: '🪦',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['headstone', 'grave', 'rip', 'memorial', 'halloween'],
  tone: 'grey',
  body,
  shine: [31, 26, -50],
  draw(c) {
    const stone = c.radial('a', 'grey', 0.3, 0.2);
    const grass = c.linear('g', 'green', [0, 0, 0, 1], 0, 2);
    const ink = '#2E2E3A';
    const carve = (d) => `<path d="${d}" stroke="#fff" stroke-opacity=".45" stroke-width="2.6" stroke-linecap="round" fill="none" transform="translate(.7 .9)"/><path d="${d}" stroke="${ink}" stroke-opacity=".55" stroke-width="2.6" stroke-linecap="round" fill="none"/>`;
    return `<path d="${body}" fill="${stone}"/>
      <path d="M28.5 84 L28.5 39 C28.5 24 37 15.5 48 15.5 C59 15.5 67.5 24 67.5 39 L67.5 84" stroke="#2E2E3A" stroke-opacity=".25" stroke-width="1.3" fill="none"/>
      ${carve('M36 36 L60 36 M39 46 L57 46 M41 56 L55 56')}
      <path d="M16 84 C18 79 20 77 23 76 C24 79 25 80 27 78 C29 75 32 76 33 79 C36 77 40 78 41 81 C46 77 52 78 55 81 C58 77 62 77 64 79 C66 76 70 75 72 78 C75 76 78 78 80 84 Z" fill="${grass}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.1"/>`;
  },
};
