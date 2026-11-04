const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Slicked-back hair with a widow's peak, a tall black collar lined in red, fangs in a sly smile.
const HAIR = 'M17 56 C12 30 28 14 48 14 C68 14 84 30 79 56 C77 44 72 38 66 36 C60 36 54 38 48 46 C42 38 36 36 30 36 C24 38 19 44 17 56 Z';
const P = p.pose({ crown: 'M17 56 C12 30 28 14 48 14 C68 14 84 30 79 56' });
const COLLAR = 'M8 84 L4 30 C14 34 22 44 28 60 L68 60 C74 44 82 34 92 30 L88 84 Z';
module.exports = {
  id: 'vampire',
  name: 'Vampire',
  emoji: '🧛',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['vampire', 'dracula', 'fangs', 'halloween', 'undead'],
  tone: 'black',
  ...p.spec(P, 'black'),
  ...F.build((c) => {
    const cape = c.linear('cape', 'black', [0, 0, 1, 1], 0, 2);
    const lining = c.radial('lining', 'red', 0.4, 0.2);
    const { fill, edge } = p.hairPaint(c, 'black', 'vh');
    const fangs = '<path d="M41 69.5 L43 75 L45 70.5 Z M51 70.5 L53 75 L55 69.5 Z" fill="#FFF8EC" stroke="#3D1A00" stroke-width=".9" stroke-linejoin="round"/>';
    return {
      art: `<path d="${COLLAR}" fill="${cape}" stroke="#05050A" stroke-width="1.3" stroke-linejoin="round"/>
        <path d="M10 38 C18 42 24 50 28 60 L22 60 C18 52 14 46 10 44 Z M86 38 C78 42 72 50 68 60 L74 60 C78 52 82 46 86 44 Z" fill="${lining}"/>`
        + F.bust(c, P, { garment: 'black', neck: 'none', under: `<path d="M38 60 L48 74 L58 60 Z" fill="#F7F5FF"/><path d="M44 63 L52 63 L48 68 Z" fill="#E3120B"/>` })
        + P.at(`<path d="${HAIR}" fill="${fill}" stroke="${edge}" stroke-opacity=".6" stroke-width="1.8" stroke-linejoin="round"/>
          ${f.brows.angry({ y: 42, sw: 3.8, slant: 4 })}${f.eyes.lidded({ y: 51 })}
          <path d="M37 68 Q48 73 60 65" stroke="${f.INK}" stroke-width="3.4" fill="none" stroke-linecap="round"/>${fangs}`),
    };
  }),
};
