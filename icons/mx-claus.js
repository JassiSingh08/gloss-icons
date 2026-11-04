const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// The Santa hat and fur-trimmed red coat, silver bob, no beard.
const HAT = (c) => `<path d="M16 38 C16 16 32 4 50 4 C66 4 80 12 86 24 C90 32 90 42 88 50 L82 50 C82 42 80 36 76 34 Z" fill="${c.radial('hat', 'red', 0.3, 0.2)}" stroke="#3D0003" stroke-opacity=".7" stroke-width="2" stroke-linejoin="round"/>
  <path d="M30 14 Q40 8 50 8" stroke="#fff" stroke-opacity=".45" stroke-width="3.4" fill="none" stroke-linecap="round"/>
  <path d="M12 38 C12 30 84 30 84 38 L84 42 C84 50 12 50 12 42 Z" fill="${c.radial('fur', 'white', 0.3, 0.2)}" stroke="#8C83AD" stroke-width="2"/>
  <circle cx="87" cy="55" r="7.5" fill="${c.radial('pom', 'white', 0.3, 0.2)}" stroke="#8C83AD" stroke-width="2"/>`;
const P = p.pose();
module.exports = {
  id: 'mx-claus',
  name: 'Mx Claus',
  emoji: '🧑‍🎄',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['claus', 'christmas', 'holiday', 'festive', 'santa'],
  tone: 'red',
  shine: [29, 18, -30], shineSize: [4.5, 2],
  ...F.build((c) => {
    const fur = c.radial('trim', 'white', 0.3, 0.2);
    const trim = `<path d="M28 63 C36 57 60 57 68 63 L68 70 C60 65 36 65 28 70 Z" fill="${fur}" stroke="#8C83AD" stroke-width="1.2"/>
      <path d="M44 66 L52 66 L52 84 L44 84 Z" fill="${fur}" stroke="#8C83AD" stroke-width="1.2"/>`;
    const face = f.brows.flat({ y: 50, sw: 4 }) + f.eyes.oval({ y: 57, rx: 3.6, ry: 5 }) + f.mouth.smile({ y: 72, sw: 4 }) + f.extras.blush(c, { y: 66, opacity: 0.45 });
    return {
      art: F.bust(c, P, { garment: 'red', neck: 'none', hair: 'bob', color: 'grey', under: trim }) + P.at(face + HAT(c)),
    };
  }),
};
