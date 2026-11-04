const k = require('../src/parts/critter');
// A microbe: a lumpy cell ringed with knobbed feelers, a dark nucleus and a few floating bits inside.
const CX = 48, CY = 50;
const rad = (t) => 25 + 2.6 * Math.sin(5 * t + 0.6) + 1.4 * Math.sin(3 * t);
const body = (() => {
  let d = '';
  for (let i = 0; i <= 72; i++) {
    const t = (i / 72) * Math.PI * 2;
    d += `${i ? 'L' : 'M'}${k.n(CX + rad(t) * Math.cos(t))} ${k.n(CY + rad(t) * Math.sin(t))} `;
  }
  return `${d}Z`;
})();
module.exports = {
  id: 'microbe',
  name: 'Microbe',
  emoji: '🦠',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['microbe', 'germ', 'virus', 'bacteria', 'science'],
  tone: 'lime',
  body,
  shine: [36, 36, -40],
  draw(c) {
    const knob = c.radial('knob', 'lime', 0.3, 0.25);
    const stalks = Array.from({ length: 9 }, (_, i) => {
      const t = (i / 9) * Math.PI * 2 + 0.3;
      const r = rad(t), x = CX + (r + 8) * Math.cos(t), y = CY + (r + 8) * Math.sin(t);
      return { line: `M${k.n(CX + (r - 2) * Math.cos(t))} ${k.n(CY + (r - 2) * Math.sin(t))} L${k.n(x)} ${k.n(y)}`, x: k.n(x), y: k.n(y) };
    });
    return `${k.legs(stalks.map((s) => s.line).join(' '), '#203D00', 3)}
      ${stalks.map((s) => k.part(c, k.circle(s.x, s.y, 3.6), knob, 'lime')).join('')}
      <path d="${body}" fill="${c.radial('a', 'lime', 0.35, 0.25)}"/>
      <path d="${k.ellipse(52, 54, 9, 7.5, -20)}" fill="${c.radial('nuc', 'olive', 0.35, 0.3)}" opacity=".85"/>
      ${[[36, 58, 3], [60, 40, 2.4], [42, 68, 2], [64, 60, 2.6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#4E8E00" opacity=".55"/>`).join('')}`;
  },
};
