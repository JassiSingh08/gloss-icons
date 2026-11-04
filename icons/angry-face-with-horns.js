const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

const ink = b.INKS.purple;
module.exports = {
  ...f.spec('purple'),
  id: 'angry-face-with-horns',
  name: 'Angry Face With Horns',
  emoji: '👿',
  group: 'Smileys & Emotion',
  subgroup: 'face-negative',
  tags: ['imp', 'demon', 'angry', 'evil', 'devil'],
  draw(c) {
    const horn = c.radial('horn', 'ember', 0.3, 0.2);
    return `<path d="M26 33 C17 26 15 15 20 8 C23 18 31 23 39 25 Z" fill="${horn}"/>
      <path d="M70 33 C79 26 81 15 76 8 C73 18 65 23 57 25 Z" fill="${horn}"/>`
      + f.head(c, 'purple') + f.brows.angry({ ink, y: 38, slant: 6, sw: 4 }) + f.eyes.lidded({ ink, y: 48, tilt: 5 })
      + b.openFrown(c, { y: 69, w: 11, h: 8, teeth: true, tongue: false });
  },
};
