const m = require('../src/parts/metal');
const A = [25, 14];
const B = [73, 80];
module.exports = {
  id: 'white-cane',
  name: 'White Cane',
  emoji: '🦯',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['white cane', 'blind', 'accessibility', 'mobility', 'guide'],
  tone: 'white',
  body: m.bar(A, B, 10.5),
  shine: [34, 31, 54],
  shineSize: [5, 1.8],
  draw(c) {
    const at = (t) => [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t];
    const white = m.cyl(c, 'a', 'white', A, B, 10.5);
    const red = m.cyl(c, 'r', 'red', A, B, 10.6);
    const grip = m.cyl(c, 'g', 'black', A, B, 13);
    const tipP = at(1.01);
    return `<path d="${m.bar(A, B, 10.5)}" fill="${white}"/>
      <path d="${m.bar(at(0.68), at(0.86), 10.6, 0.5)}" fill="${red}"/>
      ${m.part(m.bar(at(-0.04), at(0.26), 13, 6.5), grip, 'black')}
      <path d="M${(A[0] - 3.6).toFixed(1)} ${(A[1] + 3).toFixed(1)} L${(at(0.2)[0] - 3.4).toFixed(1)} ${(at(0.2)[1] + 2.2).toFixed(1)}" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="${tipP[0].toFixed(1)}" cy="${tipP[1].toFixed(1)}" r="6" fill="${c.radial('t', 'black', 0.35, 0.3)}"/>`;
  },
};
