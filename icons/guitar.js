const d = require('../src/parts/device');

// Drawn upright around the bridge end of the neck, then tipped so the head points up-right.
const ANGLE = 42;
const AT = [43, 54];
const S = 0.9;
const shell = 'M0 -21 C8.5 -21 14 -15 14 -7 C14 -1 11.5 3 11.5 7 C11.5 10 19 12 19 22 C19 34 10.5 41 0 41 C-10.5 41 -19 34 -19 22 C-19 12 -11.5 10 -11.5 7 C-11.5 3 -14 -1 -14 -7 C-14 -15 -8.5 -21 0 -21 Z';
const body = d.turn(shell, ANGLE, AT, S);

module.exports = {
  id: 'guitar',
  name: 'Guitar',
  emoji: '🎸',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['guitar', 'music', 'acoustic', 'band', 'strum'],
  tone: 'orange',
  body,
  shine: [...d.pt(-9, -12, ANGLE, AT, S), ANGLE - 75],
  shineSize: [4.5, 2],
  draw(c) {
    const wood = c.radial('a', 'orange', 0.5, 0.55);
    const neck = c.linear('neck', 'brown', [0, 0, 1, 0], 1, 3);
    const head = c.linear('head', 'brown', [0, 0, 1, 0], 0, 2);
    const peg = c.radial('peg', 'silver', 0.35, 0.3);
    let pegs = '';
    for (const y of [-48.5, -53, -57.5]) pegs += `<circle cx="-7.5" cy="${y}" r="2.2" fill="${peg}"/><circle cx="7.5" cy="${y}" r="2.2" fill="${peg}"/>`;
    let frets = '';
    for (let y = -24; y > -44; y -= 4.2) frets += `M-3.6 ${d.n(y)} L3.6 ${d.n(y)} `;
    return `<g transform="${d.tf(ANGLE, AT, S)}">
        <path d="M-4 -19 L-4 -45 L4 -45 L4 -19 Z" fill="${neck}" stroke="#331805" stroke-opacity=".6" stroke-width="1.2"/>
        <path d="${frets}" stroke="#D9DCE8" stroke-width="1"/>
        ${pegs}
        <path d="M-4.5 -44 L-6.5 -58 Q-6.5 -61 -4 -61 L4 -61 Q6.5 -61 6.5 -58 L4.5 -44 Z" fill="${head}" stroke="#331805" stroke-opacity=".6" stroke-width="1.2"/>
      </g>
      <path d="${body}" fill="${wood}"/>
      <g transform="${d.tf(ANGLE, AT, S)}">
        <circle cx="0" cy="0" r="9" fill="none" stroke="#6B0F00" stroke-opacity=".55" stroke-width="2"/>
        <circle cx="0" cy="0" r="6.5" fill="#2A0A00"/>
        <path d="M-4 -19 L-4 -2 M4 -19 L4 -2" stroke="#331805" stroke-width="1.2"/>
        <path d="M-4 -21 L4 -21 L4 -6.5 L-4 -6.5 Z" fill="${neck}"/>
        <rect x="-8" y="25" width="16" height="4.5" rx="2" fill="#331805"/>
        <path d="M-2.4 27 L-2.4 -60 M-0.8 27 L-0.8 -60 M0.8 27 L0.8 -60 M2.4 27 L2.4 -60" stroke="#FFF3A6" stroke-opacity=".75" stroke-width=".55"/>
      </g>`;
  },
};
