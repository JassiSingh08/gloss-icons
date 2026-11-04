const d = require('../src/parts/device');

const ANGLE = 40;
const AT = [42, 54];
const S = 0.98;
const body = d.turn(d.ell(0, 16, 21), ANGLE, AT, S);

module.exports = {
  id: 'banjo',
  name: 'Banjo',
  emoji: '🪕',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['banjo', 'folk', 'country', 'bluegrass', 'strings'],
  tone: 'silver',
  body,
  shine: [...d.pt(-13, 0, ANGLE, AT, S), ANGLE - 45],
  shineSize: [5, 2],
  draw(c) {
    const rim = c.radial('a', 'silver', 0.3, 0.2);
    const skin = c.radial('skin', 'cream', 0.35, 0.3);
    const neck = c.linear('neck', 'brown', [0, 0, 1, 0], 0, 2);
    const peg = c.radial('peg', 'silver', 0.35, 0.3);
    let hooks = '';
    for (let a = 0; a < 360; a += 30) {
      const [x, y] = d.pt(0, -19, a, [0, 16]);
      hooks += `<circle cx="${x}" cy="${y}" r="1.1"/>`;
    }
    let frets = '';
    for (let y = -10; y > -45; y -= 4.6) frets += `M-3.4 ${y} L3.4 ${y} `;
    let pegs = '';
    for (const y of [-50, -55.5]) pegs += `<circle cx="-7.5" cy="${y}" r="2.1" fill="${peg}"/><circle cx="7.5" cy="${y}" r="2.1" fill="${peg}"/>`;
    return `<g transform="${d.tf(ANGLE, AT, S)}">
        <path d="M-4 -4 L-4 -46 L4 -46 L4 -4 Z" fill="${neck}" stroke="#331805" stroke-opacity=".6" stroke-width="1.2"/>
        <path d="M-3 -4 L-3 -46 L3 -46 L3 -4 Z" fill="#331805" opacity=".7"/>
        <path d="${frets}" stroke="#D9DCE8" stroke-width=".9"/>
        <circle cx="5.5" cy="-24" r="1.8" fill="${peg}"/>
        ${pegs}
        <path d="M-4.5 -45 L-6.5 -57 Q-6.5 -60 -3.5 -60 L3.5 -60 Q6.5 -60 6.5 -57 L4.5 -45 Z" fill="${neck}" stroke="#331805" stroke-opacity=".6" stroke-width="1.2"/>
      </g>
      <path d="${body}" fill="${rim}"/>
      <g transform="${d.tf(ANGLE, AT, S)}">
        <circle cx="0" cy="16" r="16.5" fill="${skin}" stroke="#8E93AD" stroke-width="1"/>
        <g fill="#3A3E52">${hooks}</g>
        <path d="M-4 -4 L-4 2 L4 2 L4 -4" fill="#331805" opacity=".7"/>
        <path d="M-5 24 L5 24 L3 34 L-3 34 Z" fill="#8E93AD" stroke="#3A3E52" stroke-opacity=".6" stroke-width=".8"/>
        <rect x="-6" y="20" width="12" height="2.6" rx="1" fill="#6E3A14"/>
        <path d="M-2 25 L-2 -59 M-0.7 25 L-0.7 -59 M0.7 25 L0.7 -59 M2 25 L2 -59" stroke="#F4F5FA" stroke-opacity=".85" stroke-width=".45"/>
      </g>`;
  },
};
