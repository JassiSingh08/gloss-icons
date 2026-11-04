// Symmetric: the right half is written once and mirrored, so the silhouette is one closed
// path with no seams (centre petal, curled side petals, band and feet all in one outline).
const f = (v) => +v.toFixed(2);
const TOP = [48, 9];
// Segments of the right half, top to bottom: ['C', c1, c2, end] or ['L', end].
const RIGHT = [
  ['C', [53, 15], [59.5, 25], [59.5, 35]],
  ['C', [59.5, 44], [56, 50], [54, 54.5]],
  ['C', [57, 45], [64, 36], [72, 35]],
  ['C', [80, 34], [86, 42], [80.5, 53]],
  ['C', [78, 49], [74, 50], [71, 55]],
  ['L', [71, 62]],
  ['L', [65, 62]],
  ['C', [71, 65], [76, 71], [73.5, 77.5]],
  ['C', [71, 83], [63, 82], [61, 76]],
  ['C', [59.5, 71], [56.5, 68.5], [53, 68.5]],
  ['L', [53, 79]],
  ['C', [53, 82.5], [51, 84], [48, 84]],
];

function outline() {
  const P = (p) => `${f(p[0])} ${f(p[1])}`;
  const M = (p) => [96 - p[0], p[1]];
  let d = `M${P(TOP)} `;
  for (const [cmd, ...pts] of RIGHT) d += cmd === 'C' ? `C${P(pts[0])} ${P(pts[1])} ${P(pts[2])} ` : `L${P(pts[0])} `;
  // Walk the mirrored half back up: each segment reversed.
  const ends = [TOP, ...RIGHT.map((s) => s[s.length - 1])];
  for (let i = RIGHT.length - 1; i >= 0; i--) {
    const [cmd, ...pts] = RIGHT[i];
    const start = ends[i];
    d += cmd === 'C' ? `C${P(M(pts[1]))} ${P(M(pts[0]))} ${P(M(start))} ` : `L${P(M(start))} `;
  }
  return d + 'Z';
}

const body = outline();
module.exports = {
  id: 'fleur-de-lis',
  name: 'Fleur-De-Lis',
  emoji: '⚜️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['fleur-de-lis', 'lily', 'royal', 'scouts', 'heraldry'],
  tone: 'gold',
  body,
  shine: [42, 26, -70],
  shineSize: [5, 2],
  draw(c) {
    const band = c.linear('band', 'gold', [0, 0, 0, 1], 1, 3);
    return `<path d="${body}" fill="${c.radial('a', 'gold', 0.38, 0.2)}"/>
      <path d="M48 15 Q50.5 34 48 52" stroke="#fff" stroke-opacity=".45" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <rect x="24" y="55" width="48" height="7" rx="2" fill="${band}"/>
      <path d="M25 55.6 L71 55.6" stroke="#fff" stroke-opacity=".6" stroke-width="1"/>
      <rect x="24" y="55" width="48" height="7" rx="2" fill="none" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
