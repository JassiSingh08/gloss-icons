const L = require('../src/parts/leaf');
// A pressed ornamental rosette: a scalloped gold-orange rim, a red middle ring and a gold boss.
const CX = 48;
const CY = 47;
const ring = (n, R, r, off = 0) => [...Array(n)].map((_, k) => {
  const t = ((k + off) * 2 * Math.PI) / n;
  return [CX + R * Math.sin(t), CY - R * Math.cos(t), r];
});
const body = L.blob([...ring(12, 28, 9), [CX, CY, 28]], [CX, CY]);
const mid = L.blob([...ring(8, 18, 7.5, 0.5), [CX, CY, 18]], [CX, CY]);
module.exports = {
  id: 'rosette',
  name: 'Rosette',
  emoji: '🏵️',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['rosette', 'flower', 'ornament', 'award', 'decoration'],
  tone: 'orange',
  body,
  shine: [26, 31, -45],
  shineSize: [5.5, 2.4],
  draw(c) {
    const outer = c.radial('a', 'orange', 0.32, 0.25);
    const inner = c.radial('mid', 'ember', 0.35, 0.3);
    const boss = c.radial('boss', 'gold', 0.35, 0.3);
    let ribs = '';
    for (let k = 0; k < 12; k++) {
      const t = ((k + 0.5) * Math.PI) / 6;
      ribs += `M${L.n(CX + 25 * Math.sin(t))} ${L.n(CY - 25 * Math.cos(t))} L${L.n(CX + 33 * Math.sin(t))} ${L.n(CY - 33 * Math.cos(t))} `;
    }
    const dots = ring(10, 8, 0).map(([x, y]) => `<circle cx="${L.n(x)}" cy="${L.n(y)}" r="1.2"/>`).join('');
    return `<path d="${body}" fill="${outer}"/>
      <path d="${ribs}" stroke="#8A2A00" stroke-opacity=".45" stroke-width="1.6" stroke-linecap="round"/>
      <path d="${mid}" fill="${inner}" stroke="#3D0700" stroke-opacity=".5" stroke-width="1.2"/>
      <circle cx="${CX}" cy="${CY}" r="11.5" fill="${boss}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.2"/>
      <g fill="#C98500">${dots}</g>
      ${L.glint(CX - 4, CY - 5, 3, 1.5)}`;
  },
};
