// Eight points around (48, 48); each point is split along its ridge into a lit and a shaded
// facet, which gives the star its bevel.
const CX = 48;
const CY = 48;
const RO = 36;
const RI = 17;
const f = (v) => +v.toFixed(2);
const pt = (r, deg) => [f(CX + r * Math.sin((deg * Math.PI) / 180)), f(CY - r * Math.cos((deg * Math.PI) / 180))];

const outer = [];
for (let k = 0; k < 16; k++) outer.push(pt(k % 2 ? RI : RO, k * 22.5));
const body = `M${outer.map((p) => p.join(' ')).join(' L')} Z`;

module.exports = {
  id: 'eight-pointed-star',
  name: 'Eight-Pointed Star',
  emoji: '✴️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['star', 'eight', 'compass', 'bright'],
  tone: 'orange',
  body,
  shine: [36, 31, -45],
  shineSize: [5, 2.2],
  draw(c) {
    let facets = '';
    for (let k = 0; k < 16; k += 2) {
      const tip = outer[k];
      const a = outer[(k + 15) % 16];
      const b = outer[k + 1];
      // Facets facing the light (upper left) brighten, the others darken.
      const deg = k * 22.5;
      const lit = (side) => Math.cos(((deg + side * 45 - 315) * Math.PI) / 180);
      const shade = (l) => (l > 0 ? `fill="#fff" opacity="${f(0.35 * l)}"` : `fill="#6B0F00" opacity="${f(-0.4 * l)}"`);
      facets += `<path d="M${CX} ${CY} L${a.join(' ')} L${tip.join(' ')} Z" ${shade(lit(-1))}/>`;
      facets += `<path d="M${CX} ${CY} L${tip.join(' ')} L${b.join(' ')} Z" ${shade(lit(1))}/>`;
    }
    return `<path d="${body}" fill="${c.radial('a', 'orange', 0.35, 0.3)}" stroke-linejoin="round"/>${facets}`;
  },
};
