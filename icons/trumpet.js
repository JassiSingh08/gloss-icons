const d = require('../src/parts/device');

// Drawn level, mouthpiece left, then tipped so the bell points up-right.
const ANGLE = -33;
const AT = [47, 52];
const S = 0.86;
const pipe = 'M-41 -2.6 L16 -2.6 C29 -3.5 37 -8 43 -15 Q45 -16.5 45 -14 L45 14 Q45 16.5 43 15 C37 8 29 3.5 16 2.6 L-41 2.6 L-44 4.6 Q-46.5 4.6 -46.5 2 L-46.5 -2 Q-46.5 -4.6 -44 -4.6 Z';
const body = d.turn(pipe, ANGLE, AT, S);

module.exports = {
  id: 'trumpet',
  name: 'Trumpet',
  emoji: '🎺',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['trumpet', 'brass', 'jazz', 'fanfare', 'music'],
  tone: 'gold',
  body,
  shine: [...d.pt(36, -7, ANGLE, AT, S), ANGLE - 50],
  shineSize: [3.5, 1.6],
  draw(c) {
    const brass = c.linear('a', 'gold', [0, 0, 0, 1], 0, 2);
    const tube = c.linear('tube', 'gold', [0, 0, 0, 1], 0, 3);
    const valve = c.linear('valve', 'gold', [0, 0, 1, 0], 0, 2);
    const pearl = c.radial('pearl', 'cream', 0.35, 0.3);
    const bell = c.radial('bell', 'gold', 0.7, 0.5);
    const loop = 'M-24 0 C-33 0 -33 12 -24 12 L12 12 C21 12 21 0 12 0';
    let valves = '';
    for (const x of [-12, -3, 6]) {
      valves += `<rect x="${x - 3.2}" y="-9" width="6.4" height="24" rx="1.6" fill="${valve}" stroke="#5E3A00" stroke-opacity=".6" stroke-width=".9"/>
        <rect x="${x - 4}" y="-12" width="8" height="3.4" rx="1" fill="${brass}" stroke="#5E3A00" stroke-opacity=".6" stroke-width=".9"/>
        <rect x="${x - 1}" y="-17" width="2" height="5" fill="#C98500"/>
        <ellipse cx="${x}" cy="-17.5" rx="3.6" ry="1.8" fill="${pearl}" stroke="#C98500" stroke-width=".8"/>`;
    }
    return `<g transform="${d.tf(ANGLE, AT, S)}">
        <path d="${loop}" fill="none" stroke="#5E3A00" stroke-width="6.6"/>
        <path d="${loop}" fill="none" stroke="${tube}" stroke-width="4.6"/>
      </g>
      <path d="${body}" fill="${brass}"/>
      <g transform="${d.tf(ANGLE, AT, S)}">
        <ellipse cx="44" cy="0" rx="3.6" ry="14.6" fill="${bell}" stroke="#FFF3A6" stroke-width="1.4"/>
        ${valves}
      </g>`;
  },
};
