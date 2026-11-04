const p = require('../src/parts/person');
const f = require('../src/parts/face');

const P = p.pose({ cy: 46, r: 21, sy: 66, crown: p.royal.crown });
module.exports = {
  id: 'person-with-crown',
  name: 'Person With Crown',
  emoji: '🫅',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['monarch', 'royalty', 'ruler', 'crown', 'sovereign'],
  tone: 'purple',
  body: P.body,
  shine: [...P.pt(30, 22), -60],
  shineSize: [3.5, 1.6],
  draw(c) {
    const ermine = c.linear('ermine', 'white', [0, 0, 0, 1], 0, 2);
    const y = P.cy + P.r;
    const collar = `<path d="M18 68 C24 62 32 ${y - 4} 38 ${y - 4} L48 ${y + 10} L58 ${y - 4} C64 ${y - 4} 72 62 78 68 C79 72 76 76 70 74 L60 70 L48 ${y + 16} L36 70 L26 74 C20 76 17 72 18 68 Z" fill="${ermine}" stroke="#8C83AD" stroke-opacity=".7" stroke-width="1.2"/>
      ${[[24, 70], [31, 66], [64, 66], [71, 70], [42, 72], [54, 72]].map(([x, yy]) => `<path d="M${x} ${yy - 1.6} L${x + 1.2} ${yy + 1.4} L${x - 1.2} ${yy + 1.4} Z" fill="#141420"/>`).join('')}`;
    return p.bust(c, P, { garment: 'purple', neck: 'none', hair: 'crop', color: 'dark', under: collar, face: f.brows.flat({ y: 41 }) + f.eyes.lidded({ y: 50 }) + f.mouth.smile({ y: 68, w: 9, lift: 2 }), over: P.at(p.royal.art(c)) });
  },
};
