// A slice of narutomaki: a thick white disc with a ridged edge and the pink spiral on its face.
const d = require('../src/parts/dish');
const CX = 48;
const CY = 45;
const RX = 34;
const RY = 25;
const T = 9;
const rim = (dy) => Array.from({ length: 64 }, (_, i) => {
  const a = (i / 64) * Math.PI * 2;
  const b = 1 + 0.035 * Math.cos(a * 16);
  return [CX + Math.cos(a) * RX * b, CY + dy + Math.sin(a) * RY * b];
});
const top = rim(0);
// upper half from the top face, lower half from the face moved down by the slice's thickness
const body = d.poly([...rim(T).filter(([, y], i) => i <= 32), ...top.filter((p, i) => i > 32)]);
const spiral = () => {
  let s = '';
  for (let i = 0; i <= 90; i++) {
    const a = (i / 90) * Math.PI * 4.2;
    const r = 2 + (i / 90) * 21;
    s += `${i ? 'L' : 'M'}${(CX + Math.cos(a) * r).toFixed(2)} ${(CY + Math.sin(a) * r * (RY / RX)).toFixed(2)} `;
  }
  return s;
};
module.exports = {
  id: 'fish-cake-with-swirl',
  name: 'Fish Cake with Swirl',
  emoji: '🍥',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['narutomaki', 'fish cake', 'ramen', 'japanese', 'swirl'],
  tone: 'pink',
  body,
  shine: [24, 36, -40],
  draw(c) {
    const face = c.radial('face', 'white', 0.35, 0.25);
    const side = c.linear('side', 'white', [0, 0, 1, 0], 1, 3);
    let ridges = '';
    for (let i = 1; i < 32; i += 2) {
      const [x, y] = top[i];
      ridges += `M${x.toFixed(2)} ${y.toFixed(2)} l0 ${T}`;
    }
    return `<path d="${body}" fill="${side}"/>
      <path d="${ridges}" stroke="#BDB2E8" stroke-opacity=".7" stroke-width="1.2"/>
      <path d="${d.poly(top)}" fill="${face}"/>
      <path d="${spiral()}" stroke="#F0124F" stroke-opacity=".25" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="${spiral()}" stroke="#FF6A92" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
  },
};
