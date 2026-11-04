const k = require('../src/parts/critter');
// A coiled snake rearing up, head cocked, tongue out: two coils and the neck form one silhouette.
const body = 'M18 76 C18 70 24 66 28 64 C26 58 34 54 44 53 C42 46 40 38 42 32 C44 24 50 18 58 18 C66 18 73 22 73 28 C73 34 67 38 61 37 C57 37 54 40 54 46 C54 50 56 53 58 54 C68 55 74 59 72 64 C76 66 78 70 78 76 C78 82 64 85 48 85 C32 85 18 82 18 76 Z';
module.exports = {
  id: 'snake',
  name: 'Snake',
  emoji: '🐍',
  group: 'Animals & Nature',
  subgroup: 'animal-reptile',
  tags: ['snake', 'serpent', 'hiss', 'reptile', 'sly'],
  tone: 'lime',
  body,
  shine: [50, 24, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const ink = '#203D00';
    return `${k.legs('M72 30 L80 32 M80 32 L84 30 M80 32 L83.5 35', '#E3120B', 1.8)}
      <path d="${body}" fill="${c.radial('a', 'lime', 0.4, 0.3)}"/>
      <path d="M44 53 C42 46 40 38 42 32 C43 36 45 40 48 44 C48 48 48 51 50 53 Z" fill="${c.ramp('yellow')[0]}" opacity=".6"/>
      ${k.line('M28 64 C38 70 60 70 72 64 M44 53 C50 54 54 54 58 54', ink, 2, 0.55)}
      <path d="${k.ellipse(36, 76, 4, 2.4, -6)} ${k.ellipse(52, 77.5, 4, 2.4, 0)} ${k.ellipse(67, 75, 3.4, 2.2, 10)} ${k.ellipse(40, 60, 3.4, 2, -8)} ${k.ellipse(62, 60, 3.4, 2, 8)} ${k.ellipse(50, 30, 2.6, 2, 0)}" fill="#4E8E00" opacity=".75"/>
      ${k.irisEye(61, 25, 3.3, '#FFD82E', ink, 0.5)}
      ${k.lid(61, 25, 3.3, '#7CC21E', 1)}
      ${k.line('M66 32.5 C69 33 71 32 72.5 30.5', ink, 1.4, 0.8)}
      <circle cx="69.5" cy="24.5" r=".9" fill="${ink}"/>`;
  },
};
