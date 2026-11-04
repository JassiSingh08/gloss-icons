const F = require('../src/parts/figure');

// Fat tyres down a rocky slope, rider standing on the pedals.
const HELMET = `<path d="M16 50 C14 26 30 12 50 12 C68 12 82 24 80 46 L70 44 C66 34 58 30 48 30 C36 30 26 36 22 50 Z" fill="url(#H)" stroke="#6B0F00" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M66 22 C76 20 86 24 92 30 L80 34 Z" fill="#141420" stroke="#05050A" stroke-width="1.6" stroke-linejoin="round"/>`;
module.exports = {
  id: 'person-mountain-biking',
  name: 'Person Mountain Biking',
  emoji: '🚵',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['mountain bike', 'mtb', 'trail', 'cycling', 'downhill'],
  tone: 'brown',
  ...F.shineOf(68.5, 22.5, 10),
  ...F.build((c) => {
    const b = F.bike(c, { palette: 'lime', mtb: true });
    const dirt = c.linear('dirt', 'brown', [0, 0, 1, 1], 0, 2);
    const rider = F.limb(c, [[42, 40], [50, 52], [42, 72]], 8, 'olive') + F.shoe(c, [42, 72], [47, 74])
      + b.art + F.person(c, {
        head: [62, 19], r: 11, hat: HELMET.replace('url(#H)', c.radial('helm', 'orange', 0.3, 0.2)), face: F.face.grin(c, { dx: 5 }),
        torso: [[55, 30], [44, 39]], tw: [8.5, 8], top: 'orange', bottom: 'olive', shoes: 'black',
        armB: [[55, 29], [62, 35], [66, 42]], handB: { dir: 70 },
        legF: [[44, 40], [56, 48], [52, 64]], footF: [57, 66],
        armF: [[53, 30], [60, 36], [64, 43]], handF: { dir: 70 },
      });
    return {
      art: `<path d="M6 88 L6 73 Q48 79 90 87.5 L90 88 Z" fill="${dirt}"/>
        <g transform="translate(48 84) scale(.9) translate(-48 -84) translate(0 -6) rotate(10 48 70)">${rider}</g>
        <ellipse cx="14" cy="76" rx="5" ry="3.4" fill="${c.radial('rock', 'grey', 0.3, 0.2)}" stroke="#2E2E3D" stroke-width="1"/>`,
      extra: `<path d="M84 66 C88 62 90 62 90 66 M86 74 C88 72 91 72 91 74" stroke="#E8B98A" stroke-opacity=".8" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    };
  }),
};
