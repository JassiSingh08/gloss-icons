const a = require('../src/parts/animal');
const { LEGS, nails } = require('./elephant');

// Domed head, high shoulders, a back that slopes away, and a long coat.
const OUTLINE = [
  [22, 15.5], [30, 12], [40, 15], [52, 21], [66, 28], [76, 34], [82, 43], [83, 55], [79, 64], [68, 68], [50, 69], [34, 67], [27, 61],
  [22, 53], [17, 51], [14, 57], [13, 65], [11.5, 71], [7.5, 73.5], [4.5, 71], [6.5, 65.5], [7.5, 56], [7.5, 45], [9, 34], [12.5, 24], [17, 18.5],
];
const body = a.spline(OUTLINE);
const HAIR = ['#A8724A', '#6E3A14', '#3E1E08', '#1A0A02'];
module.exports = {
  id: 'mammoth',
  name: 'Mammoth',
  emoji: '🦣',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['mammoth', 'ice age', 'extinct', 'tusks', 'woolly'],
  tone: 'brown',
  body,
  shine: [16, 23, -45],
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#140802';
    // Fringe of long hair over the tops of the legs.
    const fringe = (x0, x1, y, len) => {
      let d = `M${x0} ${y}`;
      for (let x = x0; x < x1; x += 4) d += ` Q${x + 1} ${y + len} ${x + 2} ${y + len + 1.5} Q${x + 3} ${y + len} ${x + 4} ${y}`;
      return `${d} Z`;
    };
    return `${a.legs(c, 'brown', LEGS, { paint: a.legPaint(c, HAIR) })}${nails([39, 43, 72, 76])}
      <path d="${fringe(28, 80, 60, 9)}" fill="#3E1E08"/>
      <path d="${body}" fill="${a.custom(c, 'a', HAIR, 0.25, 0.2)}"/>
      ${a.clip(c, 'shag', body, `<path d="${[[30, 30, 32, 44], [42, 26, 44, 42], [54, 30, 55, 46], [66, 34, 66, 50], [76, 40, 75, 54], [36, 50, 37, 66], [50, 52, 50, 68], [64, 52, 64, 68]].map(([x1, y1, x2, y2]) => a.taper(x1, y1, x2, y2, 1.8, 1)).join(' ')}" fill="#1A0A02" opacity=".3"/>`)}
      <path d="${a.tube([[16, 47], [11, 57], [12, 67], [19, 72], [27, 69], [30, 63]], 2.6, 1.3)}" fill="${c.radial('tusk', 'cream', 0.3, 0.2)}"${a.edge('cream', 0.7)}/>
      ${a.part(c, 'ear', a.spline([[22, 26], [28, 25], [31, 31], [29, 38], [24, 37]]), 'brown', { fill: a.custom(c, 'ear', HAIR, 0.4, 0.3) })}
      ${a.sideEye(17, 31, { r: 2, ink })}`;
  },
};
