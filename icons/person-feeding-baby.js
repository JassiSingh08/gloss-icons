const f = require('../src/parts/face');
const p = require('../src/parts/person');

// Cradle and bottle: the baby lies across the chest, head in the crook of the arm on the viewer's
// left, that forearm running under the bundle to a hand at its far end; the other arm comes up
// from the elbow with the bottle, teat at the baby's mouth.
const P = p.pose({ cx: 50, cy: 33, r: 21, sw: 33, sy: 59, hair: 'short' });
const HEAD = [28, 69];
const SB = 1.2;
const MOUTH = [HEAD[0], HEAD[1] + 4 * SB];
// The bottle is drawn teat-up in its own space; turn it so the teat points down-left at the mouth.
const ROT = -112;
const rad = (ROT * Math.PI) / 180;
const at = (u, v) => [MOUTH[0] + 2.5 + (u * Math.cos(rad) - v * Math.sin(rad)) - (-19.5 * -Math.sin(rad)), MOUTH[1] - 1 + (u * Math.sin(rad) + v * Math.cos(rad)) - (-19.5 * Math.cos(rad))];
const C = at(0, 0).map((v) => +v.toFixed(2));
const GRIP = at(0, 5).map((v) => +v.toFixed(2));
module.exports = {
  id: 'person-feeding-baby',
  name: 'Person Feeding Baby',
  emoji: '🧑‍🍼',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['feeding', 'bottle', 'baby', 'parent', 'milk'],
  ...p.spec(P, 'green'),
  draw(c) {
    const glass = c.linear('bottle', 'white', [0, 0, 1, 0], 0, 2);
    const milk = c.linear('milk', 'cream', [0, 0, 1, 0], 0, 1);
    const teat = c.radial('teat', 'sand', 0.4, 0.3);
    const bottle = `<g transform="translate(${C[0]} ${C[1]}) rotate(${ROT})">
        <rect x="-5" y="-9" width="10" height="20" rx="3.5" fill="${glass}" stroke="#6E61A8" stroke-width="1.1"/>
        <rect x="-5" y="-1" width="10" height="12" rx="3.5" fill="${milk}"/>
        <path d="M-5 -5 L-2 -5 M-5 -1 L-2 -1 M-5 3 L-2 3" stroke="#6E61A8" stroke-width="1"/>
        <rect x="-6" y="-13" width="12" height="4.5" rx="1.5" fill="${c.linear('ring', 'sky', [0, 0, 1, 0], 1, 2)}" stroke="#0A3A6B" stroke-opacity=".5" stroke-width=".8"/>
        <path d="M-3.2 -13 C-3.2 -16 -1.6 -19.5 0 -19.5 C1.6 -19.5 3.2 -16 3.2 -13 Z" fill="${teat}" stroke="#5C4420" stroke-opacity=".5" stroke-width=".8"/>
      </g>`;
    const bust = p.bust(c, P, {
      garment: 'green',
      neck: 'crew',
      hair: 'short',
      color: 'brown',
      face: f.brows.flat({ y: 42 }) + f.eyes.closed({ y: 52 }) + f.mouth.smile({ y: 68, w: 8, lift: 2 }),
    });
    const cradle = p.sleeve(c, P, [[19, 61], [19, 76], [26, 82], [52, 83]], 10) + `<g clip-path="url(#${c.id('above')})">${p.hand(c, 61, 82, { rot: 28, pose: 'flat', s: 0.85 })}</g>`;
    const holding = p.sleeve(c, P, [[78, 61], [80, 76], [74, 80], [GRIP[0] + 5, GRIP[1] + 4]], 9.5);
    return bust + cradle + p.baby(c, HEAD[0], HEAD[1], { rot: 18, s: SB, wrap: 'sky' })
      + holding + bottle + p.hand(c, GRIP[0] + 1, GRIP[1] + 1, { rot: ROT + 180, pose: 'fist', s: 0.85 });
  },
};
