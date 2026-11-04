const p = require('../src/parts/person');

const P = p.pose({ cy: 46, r: 21, sy: 66, crown: p.royal.crown });
module.exports = {
  id: 'prince',
  name: 'Prince',
  emoji: '🤴',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['prince', 'royal', 'king', 'fairy tale', 'crown'],
  tone: 'navy',
  body: P.body,
  shine: [...P.pt(30, 22), -60],
  shineSize: [3.5, 1.6],
  draw(c) {
    const gold = c.linear('braid', 'gold', [0, 0, 1, 1], 0, 2);
    const y = P.cy + P.r;
    const tunic = `<path d="M22 66 L66 84 L54 84 L19 70 Z" fill="${c.linear('sash', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M38 ${y - 4} Q48 ${y + 3} 58 ${y - 4} L58 ${y} Q48 ${y + 7} 38 ${y} Z" fill="${gold}"/>
      <path d="M17 66 C20 62 25 61 29 62 L28 67 L17 70 Z M79 66 C76 62 71 61 67 62 L68 67 L79 70 Z" fill="${gold}"/>
      <path d="M18 70.5 L28 68 M78 70.5 L68 68" stroke="#FFC21A" stroke-width="1.4" stroke-dasharray="1.5 1.5"/>
      <circle cx="48" cy="${y + 9}" r="1.6" fill="${gold}"/><circle cx="48" cy="${y + 15}" r="1.6" fill="${gold}"/>`;
    return p.bust(c, P, { garment: 'navy', neck: 'none', hair: 'short', color: 'brown', under: tunic, face: p.face.calm(), over: P.at(p.royal.art(c, { jewel: 'blue' })) });
  },
};
