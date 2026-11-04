const L = require('../src/parts/leaf');
// A sprig of herb: paired leaves up a slender stem, every leaf glossy and none overlapping.
const LEAVES = [
  [[46.5, 64], [20, 52], -0.15], [[49, 60], [74, 44], 0.15],
  [[47.5, 46], [24, 30], -0.15], [[50, 42], [74, 24], 0.15],
  [[49.5, 30], [42, 8], -0.1],
];
const body = LEAVES.map(([b, t, bend]) => L.leafPath(b, t, 0.3, bend));
module.exports = {
  id: 'herb',
  name: 'Herb',
  emoji: '🌿',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['herb', 'basil', 'mint', 'leaf', 'cooking'],
  tone: 'green',
  body,
  shine: [25, 31, -40],
  shineSize: [4.5, 2],
  draw(c) {
    const k = L.kit(c);
    const leaf = c.radial('a', 'green', 0.3, 0.2);
    const veins = LEAVES.map(([b, t, bend]) => L.veinPath(b, t, bend, 0.3)).join(' ');
    return `${k.stem('M44 84 C46 72 47 62 48 52 C49 44 49.5 36 49.5 29', 3.2)}
      ${body.map((d) => `<path d="${d}" fill="${leaf}"/>`).join('')}
      <path d="${veins}" stroke="${k.light}" stroke-opacity=".7" stroke-width="1.1" fill="none" stroke-linecap="round"/>`;
  },
};
