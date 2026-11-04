const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Shoulder to shoulder, both smiling, a heart between them above.
const A = p.pose({ cx: 30, cy: 45, r: 16, sw: 21, sy: 66, base: 84, hair: 'bob' });
const B = p.pose({ cx: 66, cy: 45, r: 16, sw: 21, sy: 66, base: 84, hair: 'short' });
const smile = (dx) => `<g transform="translate(${dx} 0)">${f.brows.raised({ y: 37, sw: 4 })}${f.eyes.smile({ y: 50, sw: 4.4 })}${f.mouth.smile({ y: 67, sw: 4.4 })}</g>`;
module.exports = {
  id: 'couple-with-heart',
  name: 'Couple With Heart',
  emoji: '💑',
  group: 'People & Body',
  subgroup: 'family',
  tags: ['couple', 'love', 'heart', 'romance', 'anniversary'],
  tone: 'red',
  shine: [21, 37, -45], shineSize: [4, 1.8],
  ...F.build((c) => {
    const heart = `<path d="${f.HEART}" fill="${c.radial('heart', 'red', 0.35, 0.3)}" stroke="#3D0003" stroke-opacity=".5" stroke-width=".7" transform="translate(48 21) scale(1.7)"/>
      <ellipse cx="44" cy="17" rx="2.6" ry="1.4" fill="#fff" opacity=".7" transform="rotate(-35 44 17)"/>`;
    return {
      art: F.bust(c, B, { garment: 'navy', neck: 'crew', hair: 'short', color: 'brown', face: smile(-4), name: 'b' })
        + F.bust(c, A, { garment: 'red', neck: 'v', hair: 'bob', color: 'dark', face: smile(4), name: 'a' })
        + heart,
    };
  }),
};
