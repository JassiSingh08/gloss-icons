const d = require('../src/parts/device');

const ANGLE = 45;
const AT = [48, 48];
const S = 0.95;
const tube = d.rr(-7.5, -50, 15, 100, 7.5);
const body = d.turn(tube, ANGLE, AT, S);

module.exports = {
  id: 'flute',
  name: 'Flute',
  emoji: '🪈',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['flute', 'bamboo', 'woodwind', 'folk', 'melody'],
  tone: 'sand',
  body,
  shine: [...d.pt(-4, -34, ANGLE, AT, S), ANGLE - 90],
  shineSize: [6, 1.6],
  draw(c) {
    const wood = c.linear('a', 'sand', [0, 0, 1, 0], 0, 3);
    const hole = (y) => `<ellipse cx="0" cy="${y}" rx="3" ry="2.4" fill="#3D2810"/>`;
    const tie = (y) => `<rect x="-7.5" y="${y}" width="15" height="3.2" fill="#C9363F"/><path d="M-7.5 ${y + 1.2} L7.5 ${y + 1.2}" stroke="#FF8A8A" stroke-width=".8" opacity=".7"/>`;
    return `<g transform="${d.tf(ANGLE, AT, S)}">
        <path d="${tube}" fill="${wood}"/>
        <path d="M-7.5 -12 Q0 -10 7.5 -12 M-7.5 22 Q0 24 7.5 22" fill="none" stroke="#5C4420" stroke-opacity=".5" stroke-width="1.2"/>
        ${tie(-44)}${tie(-30)}${tie(40)}
        <ellipse cx="0" cy="-37" rx="3" ry="2.4" fill="#3D2810"/>
        ${hole(-4)}${hole(4)}${hole(12)}${hole(28)}${hole(34)}
      </g>`;
  },
};
