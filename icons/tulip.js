const L = require('../src/parts/leaf');
// A closed cup of three pointed petals on a straight stem, with two long strap leaves.
const body = 'M27 21 C25 36 28 52 36 58 C40 61 44 62 48 62 C52 62 56 61 60 58 C68 52 71 36 69 21 C64 25.5 60 28.5 57 30.5 C56 23 52.5 16 48 11 C43.5 16 40 23 39 30.5 C36 28.5 32 25.5 27 21 Z';
const front = 'M39 30.5 C40 23 43.5 16 48 11 C52.5 16 56 23 57 30.5 C58 42 55 54 48 62 C41 54 38 42 39 30.5 Z';
module.exports = {
  id: 'tulip',
  name: 'Tulip',
  emoji: '🌷',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['tulip', 'spring', 'flower', 'holland', 'pink'],
  tone: 'pink',
  body,
  shine: [32, 33, -75],
  shineSize: [6, 2.4],
  draw(c) {
    const k = L.kit(c);
    const petal = c.radial('a', 'pink', 0.3, 0.2);
    const mid = c.radial('mid', 'pink', 0.4, 0.15);
    return `${k.stem('M48 60 C48 68 48 76 48 84', 4)}
      ${k.paint('M47 84.5 C38 76 28 62 24 44 C34 52 42 62 48 76 Z')}
      ${k.paint('M49 84.5 C58 78 68 68 74 54 C64 58 56 66 50 76 Z')}
      <path d="M46 82 C40 72 33 61 28 52 M50 82 C56 76 63 68 70 59" stroke="${k.light}" stroke-opacity=".6" stroke-width="1.1" fill="none" stroke-linecap="round"/>
      <path d="${body}" fill="${petal}"/>
      <path d="${front}" fill="${mid}" stroke="#4A0016" stroke-opacity=".4" stroke-width="1.2"/>
      <path d="M44 22 C42 32 42 44 46 54" stroke="#FFD0DC" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round" fill="none"/>`;
  },
};
