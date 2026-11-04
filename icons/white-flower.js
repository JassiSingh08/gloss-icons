const L = require('../src/parts/leaf');
// The "well done" flower: eight round white petals ringed inside in red, like a teacher's stamp.
const CX = 48;
const CY = 47;
const P = [...Array(8)].map((_, k) => {
  const t = (k * Math.PI) / 4;
  return [CX + 24 * Math.sin(t), CY - 24 * Math.cos(t), 12.5];
});
const body = L.blob([...P, [CX, CY, 24]], [CX, CY]);
module.exports = {
  id: 'white-flower',
  name: 'White Flower',
  emoji: '💮',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['well done', 'stamp', 'flower', 'good job', 'white'],
  tone: 'white',
  body,
  shine: [27, 29, -45],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const red = '#E3123B';
    let seams = '';
    for (let k = 0; k < 8; k++) {
      const t = ((k + 0.5) * Math.PI) / 4;
      seams += `M${L.n(CX + 13 * Math.sin(t))} ${L.n(CY - 13 * Math.cos(t))} L${L.n(CX + 27 * Math.sin(t))} ${L.n(CY - 27 * Math.cos(t))} `;
    }
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.32, 0.25)}"/>
      <path d="${body}" fill="none" stroke="${red}" stroke-width="5" clip-path="url(#${c.id('in')})" stroke-opacity=".85"/>
      <path d="${seams}" stroke="${red}" stroke-opacity=".75" stroke-width="2" stroke-linecap="round"/>
      <circle cx="${CX}" cy="${CY}" r="11" fill="none" stroke="${red}" stroke-width="2.4"/>
      <circle cx="${CX}" cy="${CY}" r="5" fill="${red}" opacity=".85"/>`;
  },
};
