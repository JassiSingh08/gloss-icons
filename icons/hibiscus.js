const L = require('../src/parts/leaf');
// Five broad ruffled petals around a dark eye, with the long stamen column reaching out.
const CX = 45;
const CY = 48;
const P = [...Array(5)].map((_, k) => {
  const t = ((k * 72 - 20) * Math.PI) / 180;
  return [CX + 17 * Math.sin(t), CY - 17 * Math.cos(t), 18];
});
const body = L.blob([...P, [CX, CY, 16]], [CX, CY]);
module.exports = {
  id: 'hibiscus',
  name: 'Hibiscus',
  emoji: '🌺',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['hibiscus', 'tropical', 'flower', 'hawaii', 'aloha'],
  tone: 'pink',
  body,
  shine: [24, 36, -50],
  shineSize: [5.5, 2.4],
  draw(c) {
    const k = L.kit(c);
    c.def(`<radialGradient id="${c.id('eye')}" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#5A0018"/><stop offset=".6" stop-color="#A00A38" stop-opacity=".85"/><stop offset="1" stop-color="#F0124F" stop-opacity="0"/></radialGradient>`);
    let seams = '';
    let ruffles = '';
    for (let i = 0; i < 5; i++) {
      const t = ((i * 72 + 16) * Math.PI) / 180;
      seams += `M${CX} ${CY} L${L.n(CX + 27 * Math.sin(t))} ${L.n(CY - 27 * Math.cos(t))} `;
      const u = ((i * 72 - 20) * Math.PI) / 180;
      const x = CX + 27 * Math.sin(u);
      const y = CY - 27 * Math.cos(u);
      ruffles += `M${L.n(x - 5 * Math.cos(u))} ${L.n(y - 5 * Math.sin(u))} Q${L.n(x)} ${L.n(y)} ${L.n(x + 5 * Math.cos(u))} ${L.n(y + 5 * Math.sin(u))} `;
    }
    return `${k.paint(L.shapedLeaf([60, 70], [86, 80], { w: 0.3, bend: 0.1, teeth: 6, depth: 0.15 }))}
      ${k.paint(L.shapedLeaf([30, 70], [12, 84], { w: 0.3, bend: -0.1, teeth: 5, depth: 0.15 }))}
      <path d="${body}" fill="${c.radial('a', 'pink', 0.32, 0.25)}"/>
      <path d="${seams}" stroke="#4A0016" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round"/>
      <path d="${ruffles}" stroke="#FF8FA9" stroke-opacity=".55" stroke-width="1.4" stroke-linecap="round" fill="none"/>
      <circle cx="${CX}" cy="${CY}" r="13" fill="url(#${c.id('eye')})"/>
      <path d="M${CX} ${CY} C52 40 60 30 70 20" stroke="#4A0016" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M${CX} ${CY} C52 40 60 30 70 20" stroke="#FFB0C4" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <g fill="#FFD82E" stroke="#6B4A00" stroke-opacity=".5" stroke-width=".6"><circle cx="63" cy="25" r="2"/><circle cx="66.5" cy="28.5" r="2"/><circle cx="61" cy="30" r="1.8"/><circle cx="67" cy="23" r="1.8"/></g>
      <g fill="#C2002E"><circle cx="71" cy="17.5" r="1.8"/><circle cx="73.5" cy="20" r="1.8"/><circle cx="68.5" cy="17.5" r="1.6"/></g>`;
  },
};
