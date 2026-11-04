const F = require('../src/parts/figure');

// A racehorse at full gallop with a jockey crouched high over its neck.
module.exports = {
  id: 'horse-racing',
  name: 'Horse Racing',
  emoji: '🏇',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['horse', 'racing', 'jockey', 'derby', 'gallop'],
  tone: 'brown',
  shine: [28, 44, -30], shineSize: [6, 2.6],
  ...F.build((c) => {
    const coat = F.cloth(c, 'brown');
    const br = c.ramp('brown');
    const mane = '#331805';
    const leg = (pts) => F.limb(c, pts, 7.4, 'brown', 5) + `<circle cx="${pts.at(-1)[0]}" cy="${pts.at(-1)[1]}" r="2.6" fill="#141420"/>`;
    const horse = F.soft(F.limbPath([[28, 52], [60, 50]], 21, 19), coat, br[3])
      + F.soft(F.limbPath([[58, 48], [70, 31]], 13, 9), coat, br[3])
      + F.soft(F.limbPath([[69, 29], [81, 37]], 10, 7.5), coat, br[3])
      + `<path d="M66 24 L68 17 L71 25 Z" fill="${br[2]}" stroke="${br[3]}" stroke-width="1" stroke-linejoin="round"/>
        <path d="M56 42 C60 36 63 30 67 25" stroke="${mane}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <circle cx="74" cy="31" r="1.5" fill="#141420"/>`;
    const legsBack = leg([[62, 56], [70, 62], [77, 58]]) + leg([[30, 56], [22, 63], [12, 62]]);
    const legsFront = leg([[58, 58], [64, 68], [70, 74]]) + leg([[34, 58], [32, 70], [25, 77]]);
    const tail = F.limb(c, [[19, 48], [12, 52], [8, 60]], 5, 'black', 3);
    const cloth = `<path d="M30 45 L44 45 L42 58 L32 58 Z" fill="#F7F5FF" stroke="#8C83AD" stroke-width="1"/><path d="M36 49 L38 48 L38 55" stroke="#3D4FD6" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    const silks = `<path d="M17 50 C14 26 30 12 48 12 C66 12 82 26 79 48 Z" fill="${c.radial('silk', 'pink', 0.3, 0.2)}" stroke="#4A0016" stroke-width="2.6"/>
      <path d="M48 12 L48 48" stroke="#FFF7A8" stroke-width="7"/><path d="M60 46 C70 44 84 44 90 48 L76 52 Z" fill="#9E0030"/>`;
    const jockey = F.person(c, {
      head: [52, 20], r: 9.5, hat: silks, face: F.face.focus({ dx: 6 }),
      torso: [[46, 32], [37, 40]], tw: [7.5, 7], top: 'pink', bottom: 'white', shoes: 'black', aw: 6.2, lw: 7,
      armF: [[48, 32], [55, 38], [60, 38]], handF: { dir: 10 },
      legF: [[37, 41], [47, 44], [43, 50]], footF: [48, 52],
    });
    return {
      art: tail + legsBack + horse + legsFront + cloth + jockey
        + `<path d="M64 39 L79 37" stroke="#331805" stroke-width="1.4" stroke-linecap="round"/>`,
    };
  }),
};
