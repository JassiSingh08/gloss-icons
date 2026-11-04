const g = require('../src/parts/garment');

const cup = (s) => {
  const x = (v) => (s < 0 ? v : 96 - v);
  return `M${x(17)} 46 Q${x(25)} 30 ${x(40)} 17 Q${x(45)} 32 ${x(44.5)} 46 Q${x(31)} 50 ${x(17)} 46 Z`;
};
const bottom = 'M15 56 Q48 62 81 56 Q74 67 60 75.5 Q54 81.5 48 81.5 Q42 81.5 36 75.5 Q22 67 15 56 Z';
const L = cup(-1);
const R = cup(1);

module.exports = {
  id: 'bikini',
  name: 'Bikini',
  emoji: '👙',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['bikini', 'swim', 'beach', 'summer', 'pool'],
  tone: 'red',
  body: [L, R, bottom],
  shine: [28, 36, -55],
  shineSize: [4.5, 1.8],
  draw(c) {
    const cloth = c.radial('a', 'red', 0.3, 0.2);
    const dots = [[30, 41], [38, 33], [58, 33], [66, 41], [29, 62], [48, 66], [67, 62], [40, 72], [56, 72]];
    c.def(`<clipPath id="${c.id('cl')}"><path d="${L} ${R} ${bottom}"/></clipPath>`);
    const strap = { width: 1.8, palette: 'white' };
    return g.tube(c, 'M40 17 L34 9.5 M56 17 L62 9.5', { ...strap, name: 's1', box: [34, 9, 62, 17] })
      + g.tube(c, 'M17.5 45 L11 41 M78.5 45 L85 41', { ...strap, name: 's2', box: [11, 41, 85, 45] })
      + g.tube(c, 'M15.5 57 L10.5 54 M80.5 57 L85.5 54', { ...strap, name: 's3', box: [10, 54, 86, 57] })
      + `<path d="${L} ${R} ${bottom}" fill="${cloth}"/>
      <g clip-path="url(#${c.id('cl')})" fill="#fff" opacity=".9">${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.3"/>`).join('')}</g>
      ${g.tube(c, 'M44.5 43 L51.5 43', { ...strap, width: 2.2, name: 's4', box: [44, 42, 52, 44] })}`;
  },
};
