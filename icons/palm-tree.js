const L = require('../src/parts/leaf');
// A lone tall palm: a leaning ringed trunk and a crown of feathered fronds. No island or sea, so
// it never reads as the desert-island icon.
const C = [55, 24];
const FRONDS = [
  [[12, 54], -0.3], [[12, 22], 0.2], [[36, 6], 0.18], [[74, 6], -0.18], [[88, 26], -0.22], [[84, 58], 0.3],
];
const fronds = FRONDS.map(([tip, bend]) => {
  const d = Math.hypot(tip[0] - C[0], tip[1] - C[1]);
  const base = [C[0] + ((tip[0] - C[0]) / d) * 3, C[1] + ((tip[1] - C[1]) / d) * 3];
  return L.shapedLeaf(base, tip, { w: 0.2, bend, teeth: 9, depth: 0.42 });
});
module.exports = {
  id: 'palm-tree',
  name: 'Palm Tree',
  emoji: '🌴',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['palm', 'tropical', 'beach', 'summer', 'holiday'],
  tone: 'green',
  body: fronds,
  shine: [30, 18, -20],
  shineSize: [5, 1.8],
  draw(c) {
    const leaf = c.radial('a', 'green', 0.35, 0.2);
    const wood = c.linear('wood', 'brown', [0, 0, 1, 0], 0, 2);
    const nut = c.radial('nut', 'brown', 0.3, 0.25);
    const b = c.ramp('brown');
    const g = c.ramp('green');
    const ribs = FRONDS.map(([tip, bend]) => {
      const mx = (C[0] + tip[0]) / 2 - (tip[1] - C[1]) * bend * -0.5;
      const my = (C[1] + tip[1]) / 2 + (tip[0] - C[0]) * bend * -0.5;
      return `M${C[0]} ${C[1]} Q${L.n(mx)} ${L.n(my)} ${tip[0]} ${tip[1]}`;
    }).join(' ');
    return `<path d="M51 26 C49 42 44 60 34 84.5 L45 84.5 C53 62 57 44 58.5 26 Z" fill="${wood}" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <g fill="none" stroke="${b[2]}" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round">
        <path d="M51 36 Q54 37.5 57.5 36"/><path d="M49.5 46 Q53 47.5 56.5 46"/><path d="M47 56 Q50.5 57.5 54 56"/><path d="M43.5 66 Q47 67.5 51 66"/><path d="M39.5 76 Q43 77.5 47.5 76"/>
      </g>
      ${fronds.map((d) => `<path d="${d}" fill="${leaf}"/>`).join('')}
      <path d="${ribs}" stroke="${g[3]}" stroke-opacity=".5" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <circle cx="51" cy="29" r="4.2" fill="${nut}"/><circle cx="59" cy="29.5" r="4.2" fill="${nut}"/><circle cx="55" cy="33.5" r="4.2" fill="${nut}"/>
      <g fill="#fff" opacity=".7"><ellipse cx="49.6" cy="27.6" rx="1.4" ry=".8"/><ellipse cx="57.6" cy="28.1" rx="1.4" ry=".8"/><ellipse cx="53.6" cy="32.1" rx="1.4" ry=".8"/></g>`;
  },
};
