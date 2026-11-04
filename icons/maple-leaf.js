const L = require('../src/parts/leaf');
// Five toothed lobes around a short stalk, in autumn red fading to orange.
const CX = 48;
const CY = 52;
const LOBES = [[-90, 44, 30], [-28, 40, 28], [26, 28, 22], [154, 28, 22], [208, 40, 28]];
const SINUS = [[-59, 15], [-1, 15], [90, 10], [181, 15], [239, 15]];
function outline() {
  const p = (a, r) => L.pt(CX + r * Math.cos((a * Math.PI) / 180), CY + r * Math.sin((a * Math.PI) / 180));
  const pts = [];
  LOBES.forEach(([a, R, h], i) => {
    pts.push(p(a - 0.62 * h, 0.66 * R), p(a - 0.5 * h, 0.8 * R), p(a - 0.22 * h, 0.66 * R), p(a, R), p(a + 0.22 * h, 0.66 * R), p(a + 0.5 * h, 0.8 * R), p(a + 0.62 * h, 0.66 * R));
    pts.push(p(SINUS[i][0], SINUS[i][1]));
  });
  return `M${pts.join(' L')} Z`;
}
const body = outline();
module.exports = {
  id: 'maple-leaf',
  name: 'Maple Leaf',
  emoji: '🍁',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['maple', 'autumn', 'fall', 'canada', 'leaf'],
  tone: 'ember',
  body,
  shine: [32, 34, -40],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.25" r="0.95"><stop offset="0" stop-color="#FFC27A"/><stop offset="0.35" stop-color="#F2561E"/><stop offset="0.75" stop-color="#B01E0A"/><stop offset="1" stop-color="#4A0A02"/></radialGradient>`);
    const veins = LOBES.map(([a, R]) => `M${CX} ${CY + 6} L${L.n(CX + R * 0.86 * Math.cos((a * Math.PI) / 180))} ${L.n(CY + R * 0.86 * Math.sin((a * Math.PI) / 180))}`).join(' ');
    return `<path d="M48 60 C48 68 46 77 43 84.5" stroke="#4A0A02" stroke-width="4.6" fill="none" stroke-linecap="round"/>
      <path d="M48 60 C48 68 46 77 43 84.5" stroke="#B83A10" stroke-width="2.8" fill="none" stroke-linecap="round"/>
      <path d="${body}" fill="url(#${c.id('a')})" stroke="url(#${c.id('a')})" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="${veins}" stroke="#7A1406" stroke-opacity=".55" stroke-width="1.4" stroke-linecap="round" fill="none"/>
      <path d="${veins}" stroke="#FFC27A" stroke-opacity=".25" stroke-width="1" stroke-linecap="round" fill="none" transform="translate(-.8 -.8)"/>`;
  },
};
