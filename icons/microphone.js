const d = require('../src/parts/device');

const ANGLE = 35;
const AT = [45, 52];
const S = 1.1;
const mic = 'M-8.5 -16.44 L-5.5 32 Q-5.5 36 0 36 Q5.5 36 5.5 32 L8.5 -16.44 A16 16 0 1 0 -8.5 -16.44 Z';
const body = d.turn(mic, ANGLE, AT, S);

module.exports = {
  id: 'microphone',
  name: 'Microphone',
  emoji: '🎤',
  group: 'Objects',
  subgroup: 'music',
  tags: ['karaoke', 'sing', 'mic', 'performance', 'speech'],
  tone: 'silver',
  body,
  shine: [...d.pt(-10, -38, ANGLE, AT, S), ANGLE - 45],
  shineSize: [5, 2.4],
  draw(c) {
    const handle = c.linear('h', 'navy', [0, 0, 1, 0], 0, 3);
    const head = c.radial('a', 'silver', 0.3, 0.25);
    const ring = c.linear('ring', 'gold', [0, 0, 1, 0], 0, 2);
    c.def(`<clipPath id="${c.id('head')}"><circle cx="0" cy="-30" r="16"/></clipPath>`);
    let mesh = '';
    for (let k = -32; k <= 32; k += 5) mesh += `M${k} -50 L${k + 20} -10 M${k} -10 L${k + 20} -50 `;
    return `<g transform="${d.tf(ANGLE, AT, S)}">
        <path d="${mic}" fill="${handle}"/>
        <circle cx="0" cy="-30" r="16" fill="${head}"/>
        <g clip-path="url(#${c.id('head')})"><path d="${mesh}" transform="translate(-10 0)" stroke="#3A3E52" stroke-opacity=".3" stroke-width="1"/></g>
        <path d="M-9 -16 L9 -16 L8.4 -10 L-8.4 -10 Z" fill="${ring}" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".8"/>
        <rect x="-2" y="6" width="4" height="8" rx="2" fill="#12002E" opacity=".5"/>
      </g>`;
  },
};
