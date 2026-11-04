const p = require('../src/parts/person');
const f = require('../src/parts/face');

const P = p.pose({ cy: 33, r: 22, sy: 56, hair: 'short' });
module.exports = {
  id: 'technologist',
  name: 'Technologist',
  emoji: '🧑‍💻',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['coder', 'developer', 'laptop', 'programmer', 'tech'],
  ...p.spec(P, 'sky'),
  draw(c) {
    const lid = c.linear('lid', 'silver', [0, 0, 1, 1], 0, 2);
    const laptop = `<path d="M20 84 L22 62 Q22.4 59 25.5 59 L70.5 59 Q73.6 59 74 62 L76 84 Z" fill="${lid}" stroke="#3A3E52" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M24 63 L72 63" stroke="#fff" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="48" cy="72" r="4" fill="${c.radial('logo', 'sky', 0.4, 0.35)}"/>`;
    const hood = `<path d="M30 52 Q48 64 66 52" stroke="#0A3A6B" stroke-opacity=".5" stroke-width="2.4" fill="none"/>`;
    return p.bust(c, P, { garment: 'sky', neck: 'none', hair: 'short', color: 'black', under: hood, face: f.brows.flat({ y: 41 }) + f.eyes.oval({ y: 52, ry: 4 }) + f.mouth.smile({ y: 69, w: 8, lift: 2 }), over: glassesLite() }) + laptop;
    function glassesLite() {
      return P.at(`<g fill="none" stroke="${f.INK}" stroke-width="2.6"><rect x="27" y="45" width="17" height="13" rx="4"/><rect x="52" y="45" width="17" height="13" rx="4"/><path d="M44 50 Q48 48 52 50"/></g>`);
    }
  },
};
