const F = require('../src/parts/figure');

// Long hair, a scaled top, and a teal fish tail curling round to a fin.
module.exports = {
  id: 'merperson',
  name: 'Merperson',
  emoji: '🧜',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['mermaid', 'merman', 'sea', 'tail', 'ocean'],
  tone: 'teal',
  ...F.shineOf(36, 21, 13),
  ...F.build((c) => {
    const scale = c.ramp('teal');
    const tailD = F.limbPath([[38, 54], [40, 66], [50, 76], [64, 74], [72, 62]], 19, 6);
    const fin = 'M72 62 C70 52 72 44 80 38 C82 46 82 52 78 58 C84 54 90 56 92 60 C86 62 80 64 74 66 Z';
    const scales = [[34, 62], [42, 64], [38, 70], [46, 72], [54, 74], [50, 68]].map(([x, y]) => `<path d="M${x - 3.5} ${y} Q${x} ${y + 4} ${x + 3.5} ${y}" stroke="${scale[3]}" stroke-opacity=".45" stroke-width="1.3" fill="none"/>`).join('');
    return {
      art: `<path d="${fin}" fill="${F.cloth(c, 'teal')}" stroke="${scale[3]}" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="${tailD}" fill="${F.cloth(c, 'teal')}" stroke="${scale[3]}" stroke-opacity=".6" stroke-width="1.2"/>${scales}`
        + F.person(c, {
          head: [36, 21], r: 13, hair: 'long', color: 'auburn', face: F.face.happy({ dx: 2 }),
          torso: [[37, 43], [37, 52]], tw: [9.5, 8.5], top: 'purple', sleeve: 'bare',
          armB: [[30, 40], [22, 48], [20, 58]], handB: { dir: 100 },
          armF: [[44, 40], [52, 46], [58, 42]], handF: { dir: -20 },
        }),
      extra: '<circle cx="66" cy="24" r="3" fill="none" stroke="#9BF5E6" stroke-width="1.4"/><circle cx="72" cy="16" r="2" fill="none" stroke="#9BF5E6" stroke-width="1.2"/>',
    };
  }),
};
