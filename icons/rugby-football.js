const { turn: xform, turnPt: at } = require('../src/parts/ball');

const T = { deg: -30, s: 1.1, x: 48, y: 52, ox: 48, oy: 50 };
const body = xform('M13 50 C18 31 33 26 48 26 C63 26 78 31 83 50 C78 69 63 74 48 74 C33 74 18 69 13 50 Z', T);

module.exports = {
  id: 'rugby-football',
  name: 'Rugby Football',
  emoji: '🏉',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['rugby', 'ball', 'try', 'scrum', 'sport'],
  tone: 'white',
  body,
  shine: [...at([38, 32], T), -42],
  draw(c) {
    c.def(`<clipPath id="${c.id('ball')}"><path d="${body}"/></clipPath>`);
    const band = (x, w) => xform(`M${x} 20 C${x + 5} 38 ${x + 5} 62 ${x} 80 L${x + w} 80 C${x + w + 5} 62 ${x + w + 5} 38 ${x + w} 20 Z`, T);
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.35, 0.25)}"/>
      <g clip-path="url(#${c.id('ball')})">
        <path d="${band(27, 5)} ${band(64, 5)}" fill="${c.linear('band', 'red', [0, 0, 1, 1], 1, 2)}"/>
        <path d="${xform('M13 50 C30 43 66 43 83 50', T)}" fill="none" stroke="#8C83AD" stroke-width="1.3"/>
        <path d="${xform('M13 50 C30 58 66 58 83 50', T)}" fill="none" stroke="#8C83AD" stroke-opacity=".7" stroke-width="1.1"/>
      </g>`;
  },
};
