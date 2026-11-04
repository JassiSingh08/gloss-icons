const L = require('../src/parts/leaf');
// Two green leaves tumbling on a gust, drawn as sweeping lines behind them.
const A = [[18, 66], [56, 44]];
const B = [[48, 30], [84, 14]];
const body = [L.leafPath(A[0], A[1], 0.3, 0.35), L.leafPath(B[0], B[1], 0.3, -0.3)];
module.exports = {
  id: 'leaf-fluttering-in-wind',
  name: 'Leaf Fluttering in Wind',
  emoji: '🍃',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['wind', 'leaf', 'breeze', 'blow', 'nature'],
  tone: 'green',
  body,
  shine: [28, 54, -30],
  shineSize: [5, 2.2],
  draw(c) {
    const k = L.kit(c);
    const leaf = c.radial('a', 'green', 0.3, 0.2);
    return `<g stroke="#C9ECFF" stroke-linecap="round" fill="none">
        <path d="M10 76 C34 76 56 68 74 54 C80 49 84 44 86 40" stroke-opacity=".7" stroke-width="2.6"/>
        <path d="M22 84 C42 84 60 79 76 68" stroke-opacity=".45" stroke-width="2"/>
        <path d="M14 46 C24 40 32 32 38 22" stroke-opacity=".45" stroke-width="2"/>
      </g>
      ${body.map((d) => `<path d="${d}" fill="${leaf}"/>`).join('')}
      <path d="${L.veinPath(A[0], A[1], 0.35, 0.3)} ${L.veinPath(B[0], B[1], -0.3, 0.3)}" stroke="${k.light}" stroke-opacity=".7" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      ${k.stem('M18 66 L13 69', 2.2)}${k.stem('M48 30 L43 32', 2.2)}`;
  },
};
