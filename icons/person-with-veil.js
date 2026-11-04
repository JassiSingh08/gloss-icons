const p = require('../src/parts/person');

const P = p.pose({ cy: 39, hair: 'bob' });
module.exports = {
  id: 'person-with-veil',
  name: 'Person With Veil',
  emoji: '👰',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['bride', 'wedding', 'veil', 'marriage', 'ceremony'],
  ...p.spec(P, 'ivory'),
  draw(c) {
    const tulle = c.linear('tulle', 'ivory', [0, 0, 1, 1], 0, 2);
    const iv = c.ramp('ivory');
    const back = P.at(`<path d="M22 24 C8 44 4 78 -2 104 Q48 112 98 104 C92 78 88 44 74 24 Z" fill="${tulle}" opacity=".9" stroke="${iv[3]}" stroke-opacity=".5" stroke-width="1.8"/>`);
    const flower = (x, y) => `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="0" cy="-3" rx="2.4" ry="3.2" fill="#fff" stroke="${iv[3]}" stroke-opacity=".5" stroke-width=".8" transform="rotate(${a})"/>`).join('')}<circle r="1.8" fill="#FFC21A"/></g>`;
    const front = P.at(`<path d="M16 64 C10 32 28 14 48 14 C68 14 86 32 80 64 C76 46 68 32 48 30 C28 32 20 46 16 64 Z" fill="#fff" opacity=".45"/>
      ${flower(26, 30)}${flower(37, 23)}${flower(48, 21)}${flower(59, 23)}${flower(70, 30)}`);
    const lace = `<path d="M36 61 Q48 74 60 61" stroke="${iv[2]}" stroke-width="1.6" fill="none" stroke-dasharray="2 2"/>`;
    return back + p.bust(c, P, { garment: 'ivory', neck: 'v', hair: 'bob', color: 'brown', under: lace, face: p.face.calm(), over: front });
  },
};
