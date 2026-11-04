const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

const ink = b.INKS.white;
const LIPS = 'M29 61 Q34 59 37 62 Q48 66 59 62 Q62 59 67 61 Q66 77 48 78 Q30 77 29 61 Z';
module.exports = {
  ...f.spec('white'),
  id: 'clown-face',
  name: 'Clown Face',
  emoji: '🤡',
  group: 'Smileys & Emotion',
  subgroup: 'face-costume',
  tags: ['clown', 'circus', 'joker', 'creepy', 'silly'],
  draw(c) {
    const hairL = b.glow(c, 'hairL', 'red', 10, 32, 22);
    const hairR = b.glow(c, 'hairR', 'red', 74, 32, 22);
    const red = c.radial('nose', 'red', 0.35, 0.3);
    const lips = c.radial('lips', 'red', 0.4, 0.2);
    const paint = c.linear('paint', 'blue', [0, 0, 0, 1], 0, 2);
    const diamond = (x) => `M${x} 34 L${x + 4} 44.5 L${x} 55 L${x - 4} 44.5 Z`;
    c.def(`<clipPath id="${c.id('lipclip')}"><path d="${LIPS}"/></clipPath>`);
    return b.puffs(c, [[18, 36, 8], [12, 46, 7.5], [14, 56, 7]], { paint: hairL, edge: '#3D0003', sw: 2 }) + b.puffs(c, [[78, 36, 8], [84, 46, 7.5], [82, 56, 7]], { paint: hairR, edge: '#3D0003', sw: 2 })
      + f.head(c, 'white')
      + `<path d="${diamond(37)} ${diamond(59)}" fill="${paint}" opacity=".9"/>`
      + f.eyes.oval({ ink, y: 45, rx: 3.3, ry: 4.6 })
      + `<path d="${LIPS}" fill="${lips}"/>
      <path d="M36 64.5 Q48 69.5 60 64.5 Q58 73 48 73.5 Q38 73 36 64.5 Z" fill="${f.MOUTH}"/>
      <g clip-path="url(#${c.id('lipclip')})"><path d="M36 64.5 Q48 69.5 60 64.5 L60 67 Q48 71 36 67 Z" fill="${f.TEETH}"/></g>
      <circle cx="48" cy="56" r="6.5" fill="${red}"/>
      <ellipse cx="46" cy="53.6" rx="2.2" ry="1.4" fill="#fff" opacity=".8" transform="rotate(-30 46 53.6)"/>`;
  },
};
