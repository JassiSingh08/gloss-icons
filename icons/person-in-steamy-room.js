const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// A towel wrapped up into a turban, another round the shoulders, eyes shut in the steam.
const P = p.pose({ cy: 42, r: 22, sw: 33, sy: 66, crown: 'M16 52 C10 22 30 4 50 6 C72 8 86 26 80 52' });
const TOWEL = 'M16 52 C10 22 30 4 50 6 C72 8 86 26 80 52 C74 40 62 34 48 34 C34 34 22 40 16 52 Z';
module.exports = {
  id: 'person-in-steamy-room',
  name: 'Person In Steamy Room',
  emoji: '🧖',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['sauna', 'steam room', 'spa', 'relax', 'towel'],
  tone: 'pink',
  ...p.spec(P, 'pink'),
  ...F.build((c) => {
    const towel = c.radial('towel', 'pink', 0.3, 0.2);
    const pk = c.ramp('pink');
    return {
      art: F.bust(c, P, { garment: 'pink', neck: 'none',
        face: f.brows.flat({ y: 42, sw: 3.6 }) + f.eyes.closed({ y: 52 }) + f.mouth.smile({ y: 69, w: 9, lift: 3 }) + f.extras.blush(c, { y: 62, opacity: 0.55 }) })
        + P.at(`<path d="${TOWEL}" fill="${towel}" stroke="${pk[3]}" stroke-opacity=".6" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M22 40 C36 22 60 18 78 34 M30 22 C44 14 60 14 70 20" stroke="${pk[3]}" stroke-opacity=".35" stroke-width="2" fill="none" stroke-linecap="round"/>`)
        + `<path d="M24 66 C34 72 62 72 72 66 C70 74 60 78 48 78 C36 78 26 74 24 66 Z" fill="#fff" fill-opacity=".35"/>`,
      extra: '<path d="M10 66 C6 60 14 56 10 50 C6 44 14 40 10 34 M86 62 C82 56 90 52 86 46 C82 40 90 36 86 30" stroke="#fff" stroke-opacity=".55" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
    };
  }),
};
