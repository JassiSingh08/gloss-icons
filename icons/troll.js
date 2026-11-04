const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// A big stony head, wild hair, a heavy brow, a lumpy nose and two tusks over the lip.
const INK = '#1E2A3D';
const P = p.pose({ cy: 41, r: 24, sw: 38, sy: 66 });
const HAIR = 'M20 40 C14 30 20 20 26 22 C26 12 36 8 40 14 C44 4 56 6 56 14 C62 8 72 12 70 22 C78 20 82 30 76 40 C70 32 62 28 48 28 C34 28 26 32 20 40 Z';
module.exports = {
  id: 'troll',
  name: 'Troll',
  emoji: '🧌',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['troll', 'monster', 'fantasy', 'bridge', 'ogre'],
  tone: 'brown',
  ...p.spec(P, 'brown'),
  ...F.build((c) => {
    const { fill, edge } = p.hairPaint(c, 'auburn', 'th');
    const tusk = c.radial('tusk', 'cream', 0.3, 0.2);
    const rope = '<path d="M14 72 Q48 80 82 72" stroke="#331805" stroke-width="3" fill="none"/><path d="M30 66 L34 72 M60 66 L56 74" stroke="#331805" stroke-opacity=".5" stroke-width="1.6"/>';
    return {
      art: F.bust(c, P, { garment: 'brown', neck: 'none', skin: 'slate', under: rope })
        + P.at(`<path d="${HAIR}" fill="${fill}" stroke="${edge}" stroke-opacity=".6" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M26 44 Q38 38 46 46 M70 44 Q58 38 50 46" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/>
          <circle cx="37" cy="50" r="3.2" fill="${INK}"/><circle cx="59" cy="50" r="3.2" fill="${INK}"/>
          <ellipse cx="48" cy="60" rx="8" ry="6.5" fill="${c.radial('nose', 'slate', 0.35, 0.3)}" stroke="${INK}" stroke-opacity=".5" stroke-width="1.4"/>
          <path d="M32 72 Q48 79 64 72" stroke="${INK}" stroke-width="3.8" fill="none" stroke-linecap="round"/>
          <path d="M35 73 L33 63 L39 72.5 Z M61 73 L63 63 L57 72.5 Z" fill="${tusk}" stroke="#8A5A1E" stroke-width="1" stroke-linejoin="round"/>`),
    };
  }),
};
