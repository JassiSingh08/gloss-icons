const d = require('../src/parts/device');

// Drawn level with the bell to the right, the slide running underneath, then tipped up-right.
const ANGLE = -30;
const AT = [45, 50];
const S = 0.88;
const pipe = 'M-30 -2.4 L14 -2.4 C27 -3.4 35 -8 41 -14 Q43 -15.5 43 -13 L43 13 Q43 15.5 41 14 C35 8 27 3.4 14 2.4 L-30 2.4 Z';
const body = d.turn(pipe, ANGLE, AT, S);

module.exports = {
  id: 'trombone',
  name: 'Trombone',
  emoji: '🪊',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['trombone', 'brass', 'slide', 'jazz', 'band'],
  tone: 'gold',
  body,
  shine: [...d.pt(34, -6, ANGLE, AT, S), ANGLE - 50],
  shineSize: [3.5, 1.6],
  draw(c) {
    const brass = c.linear('a', 'gold', [0, 0, 0, 1], 0, 2);
    const tube = c.linear('tube', 'gold', [0, 0, 0, 1], 0, 3);
    const bell = c.radial('bell', 'gold', 0.7, 0.5);
    const slide = 'M-26 0 C-36 0 -36 11 -26 11 L44 11 C49 11 49 20 44 20 L-12 20';
    return `<g transform="${d.tf(ANGLE, AT, S)}">
        <path d="${slide}" fill="none" stroke="#5E3A00" stroke-width="5.6" stroke-linecap="round"/>
        <path d="${slide}" fill="none" stroke="${tube}" stroke-width="3.8" stroke-linecap="round"/>
        <path d="M-12 20 L-18 20" stroke="#1A0E05" stroke-width="3.6" stroke-linecap="round"/>
        <path d="M2 2 L2 11 M30 11 L30 20 M-8 11 L-8 20" stroke="#C98500" stroke-width="2.4"/>
      </g>
      <path d="${body}" fill="${brass}"/>
      <g transform="${d.tf(ANGLE, AT, S)}">
        <ellipse cx="42" cy="0" rx="3.4" ry="13.6" fill="${bell}" stroke="#FFF3A6" stroke-width="1.4"/>
      </g>`;
  },
};
