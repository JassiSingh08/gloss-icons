const g = require('../src/parts/garment');

const body = 'M10 80 Q10 74.5 18 73.5 Q34 71.5 46 66 Q60 58 72 48 Q78 43.5 84 46 Q87.5 48 86 52.5 L80.5 58 L80 84 L69.5 84 L68 64 Q58 70 50 76.5 Q40 83.5 26 84 L16 84 Q10 84 10 80 Z';

module.exports = {
  id: 'womans-sandal',
  name: 'Woman’s Sandal',
  emoji: '👡',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['sandal', 'heels', 'summer', 'shoe', 'strappy'],
  tone: 'brown',
  body,
  shine: [20, 76, -8],
  shineSize: [5, 1.6],
  draw(c) {
    const cork = c.radial('a', 'brown', 0.3, 0.2);
    const bed = c.linear('bed', 'cream', [0, 0, 1, 1], 0, 2);
    const b = c.ramp('brown');
    const strap = { width: 4.2, palette: 'pink' };
    return g.tube(c, 'M70 50 Q72 30 80 28 Q86 30 82 47', { ...strap, width: 3.4, name: 'ankle', box: [70, 28, 86, 50] })
      + `<path d="${body}" fill="${cork}"/>
      <path d="M11 78 Q11 75.5 18 74.8 Q34 73 46.5 67.5 Q60 59.5 72.5 49.5 Q78 45.5 83 47.5 Q85.5 49 84.5 51 Q76 52 62 62 Q46 74 30 78 Q20 79.5 11 78 Z" fill="${bed}"/>
      <path d="M68 64 L69.5 84 M80 58 L80 84" stroke="${b[3]}" stroke-opacity=".3" stroke-width="1"/>`
      + g.tube(c, 'M19 74 Q24 61 32 64.5 Q36 67 37 70', { ...strap, name: 's1', box: [19, 60, 37, 74] })
      + g.tube(c, 'M33 70 Q42 55 51 59 Q54 61 54 64', { ...strap, name: 's2', box: [33, 55, 54, 70] })
      + `<circle cx="80.5" cy="40" r="2.2" fill="${c.linear('buckle', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".8"/>`;
  },
};
