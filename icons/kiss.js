const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Two people leaning in, eyes closed, lips meeting; a small heart floats above.
const A = p.pose({ cx: 33, cy: 43, r: 16.5, sw: 22, sy: 64, base: 84, hair: 'long' });
const B = p.pose({ cx: 63, cy: 43, r: 16.5, sw: 22, sy: 64, base: 84, hair: 'short' });
const kissFace = (dx) => `<g transform="translate(${dx} 0)">${f.brows.flat({ y: 40, sw: 4 })}${f.eyes.closed({ y: 50, sw: 4.2 })}</g>`;
module.exports = {
  id: 'kiss',
  name: 'Kiss',
  emoji: '💏',
  group: 'People & Body',
  subgroup: 'family',
  tags: ['kiss', 'couple', 'love', 'romance', 'date'],
  tone: 'pink',
  shine: [24, 34, -45], shineSize: [4, 1.8],
  ...F.build((c) => {
    const heart = `<path d="${f.HEART}" fill="${c.radial('heart', 'red', 0.35, 0.3)}" stroke="#3D0003" stroke-opacity=".5" stroke-width=".8" transform="translate(48 14) scale(1.15)"/>`;
    const lips = `<ellipse cx="48" cy="57" rx="2.6" ry="3.2" fill="#F0124F" stroke="#4A0016" stroke-width="1"/>`;
    return {
      art: F.bust(c, B, { garment: 'blue', hair: 'short', color: 'dark', face: kissFace(8), name: 'b' })
        + F.bust(c, A, { garment: 'pink', neck: 'v', hair: 'long', color: 'auburn', face: kissFace(-8), name: 'a' })
        + lips + heart,
    };
  }),
};
