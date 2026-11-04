const L = require('../src/parts/leaf');
// Sixteen pointed golden petals round a big seed-studded brown face, on a stem with two leaves.
const CX = 48;
const CY = 39;
function petals(n = 16, R = 31, r = 18) {
  const h = Math.PI / n;
  const p = (a, d) => L.pt(CX + d * Math.sin(a), CY - d * Math.cos(a));
  let d = `M${p(-h, r)}`;
  for (let i = 0; i < n; i++) {
    const a = (i * 2 * Math.PI) / n;
    d += ` C${p(a - h * 0.95, r + 8)} ${p(a - h * 0.45, R - 1)} ${p(a, R)} C${p(a + h * 0.45, R - 1)} ${p(a + h * 0.95, r + 8)} ${p(a + h, r)}`;
  }
  return `${d} Z`;
}
const body = petals();
module.exports = {
  id: 'sunflower',
  name: 'Sunflower',
  emoji: '🌻',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['sunflower', 'summer', 'flower', 'sunny', 'yellow'],
  tone: 'gold',
  body,
  shine: [26, 25, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const k = L.kit(c);
    const disc = c.radial('disc', 'brown', 0.35, 0.3);
    let ribs = '';
    for (let i = 0; i < 16; i++) {
      const a = (i * Math.PI) / 8;
      ribs += `M${L.n(CX + 19 * Math.sin(a))} ${L.n(CY - 19 * Math.cos(a))} L${L.n(CX + 27 * Math.sin(a))} ${L.n(CY - 27 * Math.cos(a))} `;
    }
    let seeds = '';
    for (const [n, r] of [[6, 4.5], [12, 9], [16, 13]]) {
      for (let i = 0; i < n; i++) {
        const a = ((i + (r === 9 ? 0.5 : 0)) * 2 * Math.PI) / n;
        seeds += `<circle cx="${L.n(CX + r * Math.sin(a))}" cy="${L.n(CY - r * Math.cos(a))}" r="1.15"/>`;
      }
    }
    return `${k.stem('M48 58 C48 66 47 76 46 84', 4)}
      ${k.leaf([47, 76], [22, 64], 0.32, -0.2)}${k.leaf([47.5, 72], [74, 62], 0.32, 0.2)}
      <path d="${body}" fill="${c.radial('a', 'gold', 0.32, 0.25)}"/>
      <path d="${ribs}" stroke="#C98500" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="${CX}" cy="${CY}" r="17" fill="${disc}" stroke="#331805" stroke-opacity=".6" stroke-width="1.3"/>
      <g fill="#331805" opacity=".55">${seeds}</g>
      ${L.glint(CX - 7, CY - 8, 3.4, 1.6)}`;
  },
};
