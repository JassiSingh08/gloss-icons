const d = require('../src/parts/device');

const body = `${d.rr(12, 14, 72, 69, 5)} ${d.rr(19, 21, 58, 55, 2, true)}`;
// Five beads a rod, split between the two ends, so each row reads as a different count.
const ROWS = [['red', 2], ['gold', 4], ['green', 1], ['blue', 3], ['purple', 5]];

module.exports = {
  id: 'abacus',
  name: 'Abacus',
  emoji: '🧮',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['abacus', 'counting', 'maths', 'calculate', 'beads'],
  tone: 'brown',
  body,
  shine: [15.5, 26, -80],
  shineSize: [5, 1.8],
  draw(c) {
    const wood = c.linear('a', 'brown', [0, 0, 1, 1], 0, 2);
    let rods = '';
    let beads = '';
    ROWS.forEach(([pal, left], r) => {
      const y = 26.5 + r * 11;
      const g = c.radial(`bead${r}`, pal, 0.35, 0.25);
      rods += `M19 ${y} L77 ${y} `;
      for (let k = 0; k < 5; k++) {
        const x = k < left ? 23.5 + k * 8.4 : 72.5 - (4 - k) * 8.4;
        beads += `<ellipse cx="${d.n(x)}" cy="${y}" rx="4.3" ry="4.7" fill="${g}"/><ellipse cx="${d.n(x - 1.4)}" cy="${y - 2}" rx="1.4" ry=".9" fill="#fff" opacity=".7"/>`;
      }
    });
    return `<path d="${d.rr(19, 21, 58, 55, 2)}" fill="#331805" opacity=".35"/>
      <path d="${rods}" stroke="#8E93AD" stroke-width="1.6"/>
      ${beads}
      <path d="${body}" fill="${wood}"/>`;
  },
};
