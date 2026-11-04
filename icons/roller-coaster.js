const B = require('../src/parts/building');

const pts = [
  ...B.bez([11, 74], [20, 70], [22, 24], [33, 23], 14),
  ...B.bez([33, 23], [45, 22], [49, 76], [62, 76], 14).slice(1),
  ...B.bez([62, 76], [73, 76], [74, 46], [85, 45], 12).slice(1),
];
const body = B.ribbon(pts, 7);
const at = (x) => pts.reduce((best, p, i) => (Math.abs(p[0] - x) < Math.abs(pts[best][0] - x) ? i : best), 0);
module.exports = {
  id: 'roller-coaster',
  name: 'Roller Coaster',
  emoji: '🎢',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['theme park', 'ride', 'thrill', 'funfair', 'adrenaline'],
  tone: 'red',
  body,
  shine: [23, 38, -72],
  shineSize: [5, 1.6],
  draw(c) {
    const rail = c.linear('a', 'red', [0, 0, 1, 1], 0, 2);
    const car = c.linear('car', 'gold', [0, 0, 0, 1], 0, 2);
    const head = c.radial('head', 'skin', 0.35, 0.3);
    let posts = '';
    for (const x of [18, 25, 33, 42, 70, 78]) posts += `M${x} 84 L${x} ${B.n(pts[at(x)][1] + 3)} `;
    let ties = '';
    for (let i = 1; i < pts.length - 1; i += 2) {
      const [a, b] = [pts[i - 1], pts[i + 1]];
      const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
      const [x, y] = pts[i];
      ties += `M${B.n(x - (dy / l) * 2.2)} ${B.n(y + (dx / l) * 2.2)} L${B.n(x + (dy / l) * 2.2)} ${B.n(y - (dx / l) * 2.2)} `;
    }
    const k = at(31);
    const [px, py] = pts[k];
    const ang = (Math.atan2(pts[k + 1][1] - pts[k - 1][1], pts[k + 1][0] - pts[k - 1][0]) * 180) / Math.PI;
    return `<path d="${posts} M18 60 L25 48 M25 60 L33 50 M33 60 L42 50 M70 70 L78 62" stroke="#6E7390" stroke-width="2.2"/>
      <path d="${body}" fill="${rail}"/>
      <path d="${ties}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.3"/>
      <g transform="translate(${B.n(px)} ${B.n(py)}) rotate(${B.n(ang)})">
        <circle cx="-3" cy="-10.5" r="2.6" fill="${head}"/><circle cx="4" cy="-10.5" r="2.6" fill="${head}"/>
        <path d="M-9 -3.5 L-8 -9 Q-7.5 -10 -6 -9.5 L9 -8 Q11 -7.8 11 -6 L11 -3.5 Z" fill="${car}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>
        <circle cx="-5" cy="-3" r="1.6" fill="#3A3E52"/><circle cx="7" cy="-3" r="1.6" fill="#3A3E52"/>
      </g>`;
  },
};
