const g = require('../src/parts/garment');

// A flip-flop seen from above, drawn upright and turned 22 degrees about the centre.
const ROT = (22 * Math.PI) / 180;
const turn = (x, y) => {
  const dx = x - 48, dy = y - 48;
  return `${(48 + dx * Math.cos(ROT) - dy * Math.sin(ROT)).toFixed(2)} ${(48 + dx * Math.sin(ROT) + dy * Math.cos(ROT)).toFixed(2)}`;
};
const path = (pts, ox = 0, oy = 0) => pts.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => turn(+x + ox, +y + oy));
const SOLE = 'M48 11 C61 11 65 22 64 34 C63 44 58.5 50 58.5 58 C58.5 70 60.5 85 48 85 C35.5 85 37.5 70 37.5 58 C37.5 50 33 44 32 34 C31 22 35 11 48 11 Z';
const body = path(SOLE);

module.exports = {
  id: 'thong-sandal',
  name: 'Thong Sandal',
  emoji: '🩴',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['flip flop', 'sandal', 'beach', 'summer', 'pool'],
  tone: 'lime',
  body,
  shine: [41, 22, 20],
  shineSize: [5, 2],
  draw(c) {
    const foam = c.radial('a', 'lime', 0.3, 0.2);
    const edge = c.ramp('lime');
    const strap = path('M46.5 25 Q38 34 37.5 53 M46.5 25 Q57 34 58.5 53');
    return `<path d="${path(SOLE, 1.5, 3.5)}" fill="${edge[2]}"/>
      <path d="${body}" fill="${foam}"/>
      <path d="${path('M48 16 C57 16 60 24 59 34 C58 43 54 50 54 58 C54 68 55.5 79 48 79 C40.5 79 42 68 42 58 C42 50 38 43 37 34 C36 24 39 16 48 16 Z')}" fill="${edge[1]}" opacity=".5"/>`
      + g.tube(c, strap, { width: 4.4, palette: 'blue', name: 'strap', box: [30, 20, 70, 60] })
      + `<circle cx="${turn(46.5, 25).split(' ')[0]}" cy="${turn(46.5, 25).split(' ')[1]}" r="3" fill="${c.radial('post', 'blue', 0.35, 0.3)}" stroke="#001E4D" stroke-opacity=".6" stroke-width="1"/>`;
  },
};
