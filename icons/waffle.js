// A square waffle, tipped a little, with its thickness showing under the front edges.
const d = require('../src/parts/dish');
const ANGLE = -10;
const AT = [47, 47];
const face = d.turnPts(d.roundRectPts(62, 62, 9), ANGLE, AT);
const under = face.map(([x, y]) => [x + 2, y + 5]);
const body = d.hull([...face, ...under]);
module.exports = {
  id: 'waffle',
  name: 'Waffle',
  emoji: '🧇',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['waffle', 'breakfast', 'brunch', 'belgian', 'sweet'],
  tone: 'gold',
  body,
  shine: [22, 26, -50],
  shineSize: [5, 2.4],
  draw(c) {
    const top = c.radial('a', 'gold', 0.3, 0.2);
    const well = c.linear('well', 'gold', [0, 0, 1, 1], 2, 1);
    const butter = c.linear('butter', 'yellow', [0, 0, 1, 1], 0, 1);
    let wells = '';
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const x = -26.4 + i * 14.2;
        const y = -26.4 + j * 14.2;
        wells += `<rect x="${x}" y="${y}" width="10.6" height="10.6" rx="2.2" fill="${well}"/>
          <path d="M${x + 1} ${y + 10.6} L${x + 9.6} ${y + 10.6} Q${x + 10.6} ${y + 10.6} ${x + 10.6} ${y + 9.6} L${x + 10.6} ${y + 1}" stroke="#FFF3A6" stroke-opacity=".55" stroke-width="1.1" fill="none"/>`;
      }
    }
    return `<path d="${body}" fill="#A86A00"/>
      <path d="${d.poly(face)}" fill="${top}"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">${wells}
        <path d="M-9 -4 L3 -11 L10 -3 L10 2 L-2 9 L-9 1 Z" fill="${butter}" ${d.edge('#6B4A00', 1, 0.5)}/>
        <path d="M-9 -4 L3 -11 L10 -3 L-2 4 Z" fill="#FFF7A8"/>
      </g>`;
  },
};
