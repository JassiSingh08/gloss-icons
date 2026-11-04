const L = require('../src/parts/leaf');
// A tied bundle of golden stalks, each bowing under a drooping head of grain.
const body = 'M35.5 84.5 C39.5 78 43 72 44 66 C40 60 35 53 30.5 46 L31.5 42.5 L35.5 45.5 L38.5 42 L41.5 46 L44.5 42.5 L47.5 46 L50.5 42.5 L53.5 46 L56.5 42 L59.5 45.5 L63.5 42.5 L65.5 46 C61 53 56 60 52 66 C53 72 56.5 78 60.5 84.5 L57.5 83 L54.5 84.8 L51.5 83 L48.5 84.8 L45.5 83 L42.5 84.8 L39.5 83 Z';
const HEADS = [
  [[34, 50], [20, 22], [8, 34]],
  [[43, 52], [36, 14], [24, 13]],
  [[53, 52], [60, 12], [72, 13]],
  [[62, 50], [76, 22], [88, 34]],
];
module.exports = {
  id: 'sheaf-of-rice',
  name: 'Sheaf of Rice',
  emoji: '🌾',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['rice', 'wheat', 'harvest', 'grain', 'farm'],
  tone: 'gold',
  body,
  shine: [38, 52, -55],
  shineSize: [3.5, 1.6],
  draw(c) {
    const gold = c.radial('a', 'gold', 0.35, 0.2);
    const grain = c.radial('grain', 'gold', 0.3, 0.25);
    const g = c.ramp('gold');
    const q = (a, m, b, t) => [(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * m[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * m[1] + t * t * b[1]];
    let stalks = '';
    let grains = '';
    for (const [a, m, b] of HEADS) {
      stalks += `M${a[0]} ${a[1]} Q${m[0]} ${m[1]} ${b[0]} ${b[1]} `;
      for (let i = 0; i < 6; i++) {
        const t = 0.42 + i * 0.105;
        const [x, y] = q(a, m, b, t);
        const [x2, y2] = q(a, m, b, t + 0.01);
        const ang = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI;
        for (const side of [-1, 1]) {
          const ox = L.n(x - Math.sin((ang * Math.PI) / 180) * 3.6 * side);
          const oy = L.n(y + Math.cos((ang * Math.PI) / 180) * 3.6 * side);
          grains += `<ellipse cx="${ox}" cy="${oy}" rx="4.3" ry="2.4" transform="rotate(${L.n(ang + 30 * side)} ${ox} ${oy})"/>`;
        }
      }
    }
    return `<path d="${stalks}" stroke="${g[3]}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="${stalks}" stroke="#E6A814" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <g fill="${grain}" stroke="${g[3]}" stroke-opacity=".5" stroke-width=".9">${grains}</g>
      <path d="${body}" fill="${gold}"/>
      <path d="M41 84 L45.5 64 M48 84 L48 60 M55 84 L50.5 64 M30 47 L45 59 M66 47 L51 59" stroke="${g[2]}" stroke-opacity=".6" stroke-width="1.1" fill="none"/>
      <path d="M42.5 61 C46 63.5 50 63.5 53.5 61 L54.5 67 C50.5 69.5 45.5 69.5 41.5 67 Z" fill="#B0283E" stroke="#4A0016" stroke-opacity=".6" stroke-width="1"/>`;
  },
};
