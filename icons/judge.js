const p = require('../src/parts/person');
const f = require('../src/parts/face');

const P = p.pose({ cx: 45, hair: 'crop' });
module.exports = {
  id: 'judge',
  name: 'Judge',
  emoji: '🧑‍⚖️',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['judge', 'law', 'court', 'justice', 'gavel'],
  ...p.spec(P, 'black'),
  draw(c) {
    const wood = c.linear('wood', 'brown', [0, 0, 0, 1], 0, 2);
    const b = c.ramp('brown')[3];
    const jabot = `<path d="M40 60 L56 60 L53 72 L48 69 L43 72 Z" fill="${c.linear('jabot', 'white', [0, 0, 0, 1], 0, 2)}" stroke="#8C83AD" stroke-width="1" stroke-linejoin="round"/><path d="M48 61 L48 69" stroke="#8C83AD" stroke-width="1"/>`;
    const gavel = `<g transform="translate(75 44) rotate(28)">
        <rect x="-1.8" y="2" width="3.6" height="24" rx="1.6" fill="${wood}" stroke="${b}" stroke-opacity=".6" stroke-width="1"/>
        <rect x="-11" y="-5" width="22" height="10" rx="3" fill="${wood}" stroke="${b}" stroke-opacity=".7" stroke-width="1.2"/>
        <path d="M-6 -5 L-6 5 M6 -5 L6 5" stroke="#E8B98A" stroke-opacity=".8" stroke-width="1.6"/>
      </g>`;
    return p.bust(c, P, { garment: 'black', neck: 'none', hair: 'crop', color: 'grey', under: jabot, face: f.brows.flat({ y: 40, sw: 3.8 }) + f.eyes.lidded({ y: 50 }) + f.mouth.flat({ y: 69, w: 8 }) })
      + p.sleeve(c, P, [[76, 63], [81, 78], [63.5, 68]], 10) + gavel + p.hand(c, 67, 61, { rot: 28, pose: 'fist', s: 1.05 });
  },
};
