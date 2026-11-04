const m = require('../src/parts/metal');
// Hoop seen at an angle, with the netting hanging below as a see-through bag.
const H = { cx: 60, cy: 30, rx: 22, ry: 11 };
const L = H.cx - H.rx;
const R = H.cx + H.rx;
const body = `M${L} ${H.cy} A${H.rx} ${H.ry} 0 0 1 ${R} ${H.cy} C${R + 1} 56 ${R - 6} 82 ${H.cx + 3} 82 C${H.cx - 10} 82 ${L + 1} 56 ${L} ${H.cy} Z`;
module.exports = {
  id: 'net-with-handle',
  name: 'Net With Handle',
  emoji: '🪍',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['net', 'catch', 'butterfly', 'fishing', 'capture'],
  tone: 'white',
  body,
  shine: [44, 27, -35],
  shineSize: [5, 1.8],
  draw(c) {
    c.def(`<clipPath id="${c.id('n')}"><path d="${body}"/></clipPath>`);
    let mesh = '';
    for (let k = -60; k < 60; k += 6) mesh += `M${L + k} 18 L${L + k + 50} 86 M${R - k} 18 L${R - k - 50} 86 `;
    const back = `M${L} ${H.cy} A${H.rx} ${H.ry} 0 0 1 ${R} ${H.cy}`;
    const front = `M${R} ${H.cy} A${H.rx} ${H.ry} 0 0 1 ${L} ${H.cy}`;
    return `${m.part(m.bar([16, 83], [L + 1, H.cy + 3], 8), m.cyl(c, 'h', 'wood', [16, 83], [L, H.cy], 8), 'wood')}
      ${m.tube(c, back, { width: 4.4, palette: 'grey', name: 'b' })}
      <path d="${body}" fill="${c.radial('a', 'white', 0.3, 0.2)}" opacity=".22"/>
      <g clip-path="url(#${c.id('n')})"><path d="${mesh}" stroke="#F7F5FF" stroke-opacity=".75" stroke-width="1.1"/></g>
      ${m.tube(c, front, { width: 4.6, palette: 'silver', name: 'f' })}`;
  },
};
