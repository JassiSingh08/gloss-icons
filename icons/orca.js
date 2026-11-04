const k = require('../src/parts/critter');
// An orca swimming left: black lacquer, tall dorsal fin, white eye patch and belly, grey saddle.
const body = 'M10 60 C12 50 24 44 40 44 C56 44 68 48 78 54 L86 48 C88 46 92 47 91 50 L88 58 L92 66 C93 69 89 70 87 68 L78 62 C68 72 52 76 36 76 C20 76 10 70 10 60 Z';
module.exports = {
  id: 'orca',
  name: 'Orca',
  emoji: '🫍',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['orca', 'killer whale', 'ocean', 'whale', 'apex'],
  tone: 'black',
  body,
  shine: [24, 51, -18],
  shineSize: [6, 2.4],
  draw(c) {
    const fin = c.radial('fin', 'black', 0.3, 0.3);
    const white = c.radial('white', 'white', 0.4, 0.3);
    return `${k.part(c, 'M44 46 C46 36 50 25 56 18 C58 28 58 37 61 46 Z', fin, 'black')}
      <path d="${body}" fill="${c.radial('a', 'black', 0.3, 0.25)}"/>
      <path d="M58 48 C64 47 70 50 72 54 C66 55 60 53 58 48 Z" fill="#B8B8C7" opacity=".55"/>
      <path d="M11 63 C16 71 26 75 38 75 C48 75 56 72 62 67 C50 70 40 66 30 66 C22 66 15 65 11 63 Z" fill="${white}"/>
      <path d="${k.ellipse(31, 53, 6, 2.8, -12)}" fill="${white}"/>
      ${k.part(c, 'M34 68 C40 70 44 76 44 82 C38 80 34 75 34 68 Z', fin, 'black')}
      ${k.legs('M11.5 62 C16 63.5 22 63.6 27 62.6', '#05050A', 1.6)}
      ${k.eye(24, 56, 1.8, '#05050A')}`;
  },
};
