const d = require('../src/parts/device');

const ANGLE = -5;
const AT = [48, 48];
const t = (p) => d.turn(p, ANGLE, AT);
const sheet = d.rr(-32, -36, 64, 73, 5);
const body = t(sheet);

module.exports = {
  id: 'musical-score',
  name: 'Musical Score',
  emoji: '🎼',
  group: 'Objects',
  subgroup: 'music',
  tags: ['sheet music', 'score', 'music', 'compose', 'notes'],
  tone: 'cream',
  body,
  shine: [...d.pt(-27, -27, ANGLE, AT), -55],
  shineSize: [5, 2.2],
  draw(c) {
    const paper = c.linear('a', 'cream', [0, 0, 0.4, 1], 0, 1);
    const ink = '#2A0E5C';
    const clef = c.linear('clef', 'purple', [0, 0, 1, 1], 1, 3);
    const staff = [-15, -8, -1, 6, 13].map((y) => `M-25 ${y} L26 ${y}`).join(' ');
    const note = (x, y, up) => `<ellipse cx="${x}" cy="${y}" rx="4.4" ry="3.3" transform="rotate(-22 ${x} ${y})" fill="${ink}"/><path d="M${x + 3.7} ${y - 1} L${x + 3.7} ${y - up}" stroke="${ink}" stroke-width="1.8" stroke-linecap="round"/>`;
    return `<path d="${body}" fill="${paper}"/>
      <g transform="${d.tf(ANGLE, AT)}">
        <path d="${staff} M26 -15 L26 13" stroke="${ink}" stroke-opacity=".55" stroke-width="1.4"/>
        <path d="M-18.5 25 C-16 28 -11.5 26 -12 21 L-16 -25 C-16.5 -30 -12 -32 -10.5 -28 C-8.5 -22 -14 -16 -19.5 -10 C-25 -4 -25 4 -20 8 C-15 12 -7 9 -7 3 C-7 -3 -13 -5 -16.5 -2 C-19.5 1 -18 5 -15 5" fill="none" stroke="${clef}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="-19" cy="23.5" r="2.8" fill="${clef}"/>
        ${note(1, 2.5, 19)}${note(14, -5, 19)}
        <path d="M-25 26 L26 26 M-25 30.5 L10 30.5" stroke="#E0B472" stroke-width="1.4" stroke-linecap="round"/>
      </g>`;
  },
};
