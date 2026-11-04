const d = require('../src/parts/device');

const ANGLE = -16;
const AT = [48, 50];
const S = 1.15;
const shell = 'M0 -29 C14 -29 20 -17 20 -1 C20 18 12 29 0 29 C-12 29 -20 18 -20 -1 C-20 -17 -14 -29 0 -29 Z';

module.exports = {
  id: 'computer-mouse',
  name: 'Computer Mouse',
  emoji: '🖱️',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['mouse', 'click', 'computer', 'cursor', 'scroll', 'wireless'],
  tone: 'white',
  body: d.turn(shell, ANGLE, AT, S),
  shine: [...d.pt(-14, -14, ANGLE, AT, S), ANGLE - 60],
  shineSize: [5.5, 2.4],
  draw(c) {
    const fill = c.radial('a', 'white', 0.3, 0.2);
    const wheel = c.linear('wheel', 'slate', [0, 0, 1, 0], 1, 3);
    return `<path d="${d.turn(shell, ANGLE, AT, S)}" fill="${fill}"/>
      <g transform="${d.tf(ANGLE, AT, S)}">
        <path d="M0 -29 L0 -6 M-19.5 -5 Q0 -1 19.5 -5" fill="none" stroke="#8C83AD" stroke-opacity=".7" stroke-width="1.3"/>
        <rect x="-2.8" y="-23" width="5.6" height="12" rx="2.8" fill="${wheel}"/>
        <path d="M-1.6 -20 L1.6 -20 M-1.6 -17 L1.6 -17 M-1.6 -14 L1.6 -14" stroke="#1E2A3D" stroke-opacity=".6" stroke-width=".8"/>
      </g>`;
  },
};
