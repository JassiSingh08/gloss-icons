const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Red hat flopping to one side over a fur band, a full white beard, a red coat with fur trim.
const HAT = (c) => `<path d="M16 38 C16 16 32 4 50 4 C66 4 80 12 86 24 C90 32 90 42 88 50 L82 50 C82 42 80 36 76 34 Z" fill="${c.radial('hat', 'red', 0.3, 0.2)}" stroke="#3D0003" stroke-opacity=".7" stroke-width="2" stroke-linejoin="round"/>
  <path d="M30 14 Q40 8 50 8" stroke="#fff" stroke-opacity=".45" stroke-width="3.4" fill="none" stroke-linecap="round"/>
  <path d="M12 38 C12 30 84 30 84 38 L84 42 C84 50 12 50 12 42 Z" fill="${c.radial('fur', 'white', 0.3, 0.2)}" stroke="#8C83AD" stroke-width="2"/>
  <circle cx="87" cy="55" r="7.5" fill="${c.radial('pom', 'white', 0.3, 0.2)}" stroke="#8C83AD" stroke-width="2"/>`;
const P = p.pose();
module.exports = {
  id: 'santa-claus',
  name: 'Santa Claus',
  emoji: '🎅',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['santa', 'christmas', 'father christmas', 'holiday', 'gifts'],
  tone: 'red',
  shine: [29, 18, -30], shineSize: [4.5, 2],
  ...F.build((c) => {
    const fur = c.radial('trim', 'white', 0.3, 0.2);
    const trim = `<path d="M30 63 C36 58 60 58 66 63 L66 70 C60 66 36 66 30 70 Z" fill="${fur}" stroke="#8C83AD" stroke-width="1.2"/>
      <path d="M44 66 L52 66 L52 84 L44 84 Z" fill="${fur}" stroke="#8C83AD" stroke-width="1.2"/>`;
    const face = f.brows.raised({ y: 50, sw: 4 }) + f.eyes.smile({ y: 56, sw: 4 }) + `<ellipse cx="48" cy="63" rx="5" ry="4" fill="${c.radial('nose', 'pink', 0.35, 0.3)}"/>`;
    return {
      art: F.bust(c, P, { garment: 'red', neck: 'none', beard: 'grey', face: '', under: trim })
        + P.at(face + HAT(c)),
    };
  }),
};
