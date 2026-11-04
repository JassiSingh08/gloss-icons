const k = require('../src/parts/critter');
// A single raised wing: covert scallops along the leading edge, long flight feathers fanning down-left.
const body = 'M18 40 C24 26 44 16 84 14 C84 22 80 28 74 32 C78 34 78 40 72 44 C76 48 74 54 66 56 C68 62 64 66 56 66 C58 72 52 78 44 76 C44 82 36 86 30 82 C22 76 16 58 18 40 Z';
module.exports = {
  id: 'wing',
  name: 'Wing',
  emoji: '🪽',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['wing', 'angel', 'fly', 'feather', 'freedom'],
  tone: 'ivory',
  body,
  shine: [30, 32, -35],
  draw(c) {
    const edge = '#6E61A8';
    return `<path d="${body}" fill="${c.radial('a', 'ivory', 0.3, 0.2)}"/>
      ${k.line('M30 44 L74 32 M32 50 L72 44 M34 56 L66 56 M34 62 L56 66 M34 68 L44 76', edge, 1.3, 0.55)}
      <path d="M18 40 C24 26 44 16 84 14 C78 20 70 24 60 26 C62 30 58 34 52 33 C52 38 46 40 42 38 C40 43 34 44 31 41 C28 46 22 46 18 40 Z" fill="${c.radial('cov', 'white', 0.3, 0.2)}" stroke="${edge}" stroke-opacity=".5" stroke-width="1.1"/>`;
  },
};
