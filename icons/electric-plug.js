const d = require('../src/parts/device');

// Drawn upright around the middle of the plug's face, then tipped so the pins point up-right.
const ANGLE = 35;
const AT = [50, 45];
const S = 1.25;
const head = 'M-12 -15 L12 -15 Q15 -15 15 -12 L15 2 Q15 11 8 15 L5 17 L5 24 L-5 24 L-5 17 L-8 15 Q-15 11 -15 2 L-15 -12 Q-15 -15 -12 -15 Z';

module.exports = {
  id: 'electric-plug',
  name: 'Electric Plug',
  emoji: '🔌',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['plug', 'power', 'electricity', 'charge', 'socket'],
  tone: 'white',
  body: d.turn(head, ANGLE, AT, S),
  shine: [...d.pt(-10, -7, ANGLE, AT, S), ANGLE - 90],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.linear('a', 'white', [0, 0, 1, 0.4], 0, 2);
    const pin = c.linear('pin', 'silver', [0, 0, 1, 0], 0, 2);
    const cable = d.turn('M0 24 L0 30', ANGLE, AT, S);
    const [ex, ey] = d.pt(0, 30, ANGLE, AT, S);
    const rest = `M${ex} ${ey} C${ex - 1} ${ey + 7} ${ex + 6} ${ey + 9} ${ex + 22} ${ey + 8.5}`;
    const prong = (x) => `<path d="M${x - 2} -15 L${x - 2} -30 Q${x - 2} -32 ${x} -32 Q${x + 2} -32 ${x + 2} -30 L${x + 2} -15 Z" fill="${pin}" stroke="#3A3E52" stroke-opacity=".6" stroke-width=".8"/><circle cx="${x}" cy="-26" r="1" fill="#3A3E52"/>`;
    return `<path d="${cable} ${rest.replace('M', 'L')}" fill="none" stroke="#1E2A3D" stroke-width="7.4" stroke-linecap="round"/>
      <path d="${cable} ${rest.replace('M', 'L')}" fill="none" stroke="#4D5F7A" stroke-width="5" stroke-linecap="round"/>
      <path d="${cable} ${rest.replace('M', 'L')}" fill="none" stroke="#DCE6F2" stroke-opacity=".35" stroke-width="1.4" stroke-linecap="round" transform="translate(-1 -1)"/>
      <g transform="${d.tf(ANGLE, AT, S)}">${prong(-6)}${prong(6)}</g>
      <path d="${d.turn(head, ANGLE, AT, S)}" fill="${shell}"/>
      <path d="${d.turn('M-15 1 L15 1', ANGLE, AT, S)}" stroke="#8C83AD" stroke-opacity=".45" stroke-width="1.2"/>
      <path d="${d.turn('M-5 17 L5 17 M-5 20.5 L5 20.5', ANGLE, AT, S)}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>`;
  },
};
