const p = require('../src/parts/person');
const f = require('../src/parts/face');

const P = p.pose({ cx: 50, hair: 'spiky' });
module.exports = {
  id: 'singer',
  name: 'Singer',
  emoji: '🧑‍🎤',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['singer', 'rock star', 'microphone', 'music', 'perform'],
  ...p.spec(P, 'magenta'),
  draw(c) {
    const ball = c.radial('ball', 'silver', 0.35, 0.3);
    const mic = `<g transform="translate(29 62) rotate(-28)">
        <path d="M-3 2 L3 2 L2.2 20 L-2.2 20 Z" fill="${c.linear('handle', 'black', [0, 0, 1, 0], 0, 2)}" stroke="#05050A" stroke-width="1"/>
        <circle cx="0" cy="-4" r="6.5" fill="${ball}" stroke="#3A3E52" stroke-width="1.3"/>
        <path d="M-5 -6 L5 -6 M-6 -3 L6 -3 M-4 0 L4 0 M-2 -10 L-2 1.5 M2 -10 L2 1.5" stroke="#3A3E52" stroke-opacity=".45" stroke-width=".9"/>
        <ellipse cx="-2.4" cy="-7" rx="2" ry="1.2" fill="#fff" opacity=".8"/>
      </g>`;
    const star = (x, y, r) => `<path d="M${x} ${y - r} L${x + r * 0.3} ${y - r * 0.3} L${x + r} ${y} L${x + r * 0.3} ${y + r * 0.3} L${x} ${y + r} L${x - r * 0.3} ${y + r * 0.3} L${x - r} ${y} L${x - r * 0.3} ${y - r * 0.3} Z" fill="${c.radial('star', 'gold', 0.4, 0.3)}"/>`;
    return star(80, 22, 6) + star(16, 30, 4) + p.bust(c, P, { garment: 'magenta', neck: 'v', hair: 'spiky', color: 'black', face: f.brows.raised({ y: 38 }) + f.eyes.closed({ y: 50 }) + f.mouth.o({ y: 69, rx: 4.5, ry: 5.5 }) })
      + p.sleeve(c, P, [[20, 63], [17, 79], [29.5, 77]], 10) + mic + p.hand(c, 26, 70, { rot: -28, pose: 'fist', s: 1.05 });
  },
};
