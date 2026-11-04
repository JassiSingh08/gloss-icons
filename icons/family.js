const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Two grown-ups and a child in front of them, all smiling.
const A = p.pose({ cx: 27, cy: 33, r: 15, sw: 20, sy: 54, base: 84, hair: 'long' });
const B = p.pose({ cx: 69, cy: 33, r: 15, sw: 20, sy: 54, base: 84, hair: 'short' });
const K = p.pose({ cx: 48, cy: 52, r: 13.5, sw: 17, sy: 70, base: 84, hair: 'curly' });
const face = (dx = 0) => `<g transform="translate(${dx} 0)">${f.brows.flat({ y: 39, sw: 4 })}${f.eyes.oval({ y: 49, rx: 3.8, ry: 5.2 })}${f.mouth.smile({ y: 67, sw: 4.2 })}</g>`;
module.exports = {
  id: 'family',
  name: 'Family',
  emoji: '👪',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['family', 'parents', 'child', 'home', 'household'],
  tone: 'teal',
  shine: [20, 24, -45], shineSize: [3.6, 1.6],
  ...F.build((c) => ({
    art: F.bust(c, A, { garment: 'pink', neck: 'v', hair: 'long', color: 'auburn', face: face(2), name: 'a' })
      + F.bust(c, B, { garment: 'blue', hair: 'short', color: 'dark', face: face(-2), name: 'b' })
      + F.bust(c, K, { garment: 'teal', hair: 'curly', color: 'brown', name: 'k',
        face: f.brows.raised({ y: 37, sw: 4 }) + f.eyes.smile({ y: 50, sw: 4.4 }) + f.mouth.smile({ y: 67, sw: 4.2 }) + f.extras.blush(c, { y: 59, opacity: 0.4 }) }),
  })),
};
