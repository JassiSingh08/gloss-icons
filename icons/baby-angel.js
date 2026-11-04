const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// A baby in a white gown with small wings, a gold halo floating over the curl.
const P = p.pose({ cy: 44, r: 21, sw: 26, sy: 68, hair: 'tuft' });
const WING = 'M30 66 C16 64 8 52 9 38 C14 44 18 46 22 46 C16 50 18 56 24 58 C20 60 24 64 30 62 Z';
module.exports = {
  id: 'baby-angel',
  name: 'Baby Angel',
  emoji: '👼',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['angel', 'cherub', 'baby', 'halo', 'innocent'],
  tone: 'sky',
  ...p.spec(P, 'sky'),
  ...F.build((c) => {
    const wing = c.radial('wing', 'ivory', 0.4, 0.3);
    const wings = `<path d="${WING}" fill="${wing}" stroke="#6E61A8" stroke-opacity=".7" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="${WING}" transform="translate(96 0) scale(-1 1)" fill="${wing}" stroke="#6E61A8" stroke-opacity=".7" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M14 46 C18 52 22 56 28 58 M82 46 C78 52 74 56 68 58" stroke="#6E61A8" stroke-opacity=".4" stroke-width="1.2" fill="none"/>`;
    const halo = `<ellipse cx="48" cy="12" rx="15" ry="4.6" fill="none" stroke="#5E3A00" stroke-width="5.4"/><ellipse cx="48" cy="12" rx="15" ry="4.6" fill="none" stroke="${c.linear('halo', 'gold', [0, 0, 1, 1], 0, 2)}" stroke-width="3.6"/>`;
    return {
      art: wings + F.bust(c, P, { garment: 'white', neck: 'crew', hair: 'tuft', color: 'blond',
        face: f.eyes.closed({ y: 53 }) + f.mouth.smile({ y: 68, w: 7, lift: 3, tick: false }) + f.extras.blush(c, { y: 62, opacity: 0.55 }) }) + halo,
    };
  }),
};
