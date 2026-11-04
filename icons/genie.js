const f = require('../src/parts/face');
const F = require('../src/parts/figure');

// Arms folded, a topknot and gold cuffs; below the waist the body is a swirl of smoke.
module.exports = {
  id: 'genie',
  name: 'Genie',
  emoji: '🧞',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['genie', 'djinn', 'wish', 'lamp', 'magic'],
  tone: 'sky',
  ...F.shineOf(48, 25, 13.5),
  ...F.build((c) => {
    const smoke = c.radial('smoke', 'sky', 0.3, 0.2);
    const sr = c.ramp('sky');
    const tail = F.limbPath([[48, 60], [38, 70], [46, 78], [62, 79], [76, 71]], 26, 5);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const knot = `<path d="M38 26 C35 14 42 4 52 6 C62 8 63 20 58 26 Z" fill="${p_hair(c)}" stroke="#05050A" stroke-width="2"/><path d="M36 25 L60 25" stroke="${gold}" stroke-width="6" stroke-linecap="round"/>`;
    const cuff = (x, y, r) => `<rect x="${x - 3}" y="${y - 4.5}" width="6" height="9" rx="2" transform="rotate(${r} ${x} ${y})" fill="${gold}" stroke="#5E3A00" stroke-width="1"/>`;
    return {
      art: `<path d="${tail}" fill="${smoke}" stroke="${sr[3]}" stroke-opacity=".5" stroke-width="1.2"/>
        <path d="M42 64 C44 70 50 72 58 72 M56 76 C62 76 68 74 70 70" stroke="#fff" stroke-opacity=".5" stroke-width="1.8" fill="none" stroke-linecap="round"/>`
        + F.person(c, {
          head: [48, 25], r: 13.5, hat: knot, face: f.brows.one({ y: 39, sw: 4.2 }) + f.eyes.lidded({ y: 50 }) + f.mouth.smile({ y: 67, sw: 4.4 }),
          torso: [[48, 49], [48, 59]], tw: [12.5, 10], top: 'purple', sleeve: 'bare', aw: 8.6,
          armB: [[37, 47], [33, 55], [60, 53]], handB: false,
          armF: [[59, 47], [63, 61], [41, 61]], handF: { dir: 185, thumb: 1 },
          over: cuff(44, 61, 90),
        })
        + `<circle cx="61.5" cy="37" r="2.4" fill="${gold}" stroke="#5E3A00" stroke-width=".8"/>`,
    };
  }),
};
function p_hair(c) {
  return require('../src/parts/person').hairPaint(c, 'dark', 'knot').fill;
}
