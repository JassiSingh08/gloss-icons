const s = require('../src/parts/skin');
// A nose turned three-quarters: the bridge runs down the left to a rounded tip, the wing of the
// nostril swells out on the right.
const body = 'M44 11 C50 9 58 10 60 13 C60 26 64 38 70 48 C77 52 80 60 77 67 C74 73 67 75 62 73 C58 76 52 77 48 75 C44 78 36 78 31 74 C25 70 24 62 29 56 C34 46 38 34 40 20 C40.5 15 41.5 12 44 11 Z';
module.exports = {
  id: 'nose',
  name: 'Nose',
  emoji: '👃',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['nose', 'smell', 'sniff', 'nosy', 'face'],
  tone: 'amber',
  body,
  shine: [37, 60, -60],
  shineSize: [5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${s.fill(c)}"/>
      <path d="M41 70.5 C44 68 49 68.5 51 71 C49 73 44 73.5 41 70.5 Z" fill="#6B3A00" opacity=".55"/>
      <path d="M59 70 C61.5 67.5 66 67.5 68.5 69.5 C66.5 71.5 62 72 59 70 Z" fill="#6B3A00" opacity=".45"/>
      ${s.crease('M61 50 C55 52 54 60 58 66', 1.6)}
      ${s.crease('M44 20 C44 32 42 44 37 54', 1.2)}`;
  },
};
