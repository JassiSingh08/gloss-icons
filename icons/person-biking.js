const F = require('../src/parts/figure');

// Road bike, rider down on the bars, one pedal at the top of the stroke.
const HELMET = `<path d="M16 50 C14 26 30 12 50 12 C68 12 82 24 80 46 L70 44 C66 34 58 30 48 30 C36 30 26 36 22 50 Z" fill="url(#H)" stroke="#003A33" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M34 16 L38 28 M50 13 L50 28 M64 16 L60 29" stroke="#003A33" stroke-opacity=".6" stroke-width="2.4" stroke-linecap="round"/>`;
module.exports = {
  id: 'person-biking',
  name: 'Person Biking',
  emoji: '🚴',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['cycling', 'bike', 'bicycle', 'cyclist', 'ride'],
  tone: 'red',
  ...F.shineOf(62, 22, 11),
  ...F.build((c) => {
    const b = F.bike(c, { palette: 'red' });
    return {
      art: F.limb(c, [[41, 44], [50, 56], [42, 74]], 8, 'navy') + F.shoe(c, [42, 74], [47, 76])
        + b.art + F.person(c, {
          head: [62, 22], r: 11, hat: HELMET.replace('url(#H)', c.radial('helm', 'teal', 0.3, 0.2)), face: F.face.focus({ dx: 5 }),
          torso: [[55, 32], [43, 42]], tw: [8.5, 8], top: 'teal', bottom: 'navy', shoes: 'black',
          armB: [[55, 31], [61, 37], [65, 42]], handB: { dir: 70 },
          legF: [[43, 43], [56, 50], [51, 65]], footF: [56, 67],
          armF: [[53, 32], [60, 38], [63, 43]], handF: { dir: 70 },
        }),
    };
  }),
};
