const f = require('../src/parts/face');

const HAT = 'M53 27.5 L75 4.5 L72.5 36 Q63 29 53 27.5 Z';
const HORN = 'M41 65.5 L20 70 Q12 71.5 8 79 Q17 79.5 22 76.5 L42 70.5 Z';
module.exports = {
  ...f.spec(),
  id: 'partying-face',
  name: 'Partying Face',
  emoji: '🥳',
  group: 'Smileys & Emotion',
  subgroup: 'face-hat',
  tags: ['party', 'birthday', 'celebrate', 'woohoo', 'hooray'],
  draw(c) {
    const hat = c.linear('hat', 'magenta', [0, 0, 1, 1], 0, 2);
    const stripe = c.linear('stripe', 'gold', [0, 0, 1, 1], 0, 2);
    const horn = c.linear('horn', 'teal', [0, 0, 0, 1], 0, 2);
    const pom = c.radial('pom', 'gold', 0.35, 0.3);
    c.def(`<clipPath id="${c.id('cone')}"><path d="${HAT}"/></clipPath>`);
    const bits = [[20, 30, 30, 'teal'], [80, 47, -20, 'gold'], [14, 54, 60, 'magenta'], [84, 66, 15, 'teal']]
      .map(([x, y, r, p], i) => `<rect x="${x - 3}" y="${y - 1.3}" width="6" height="2.6" rx="1" fill="${c.ramp(p)[1]}" transform="rotate(${r} ${x} ${y})"/>`).join('');
    return bits + f.head(c) + f.extras.blush(c, { opacity: 0.55 })
      + `<path d="${HAT}" fill="${hat}"/>
      <g clip-path="url(#${c.id('cone')})"><path d="M50 22 L80 14 L80 19 L50 27 Z M50 10 L80 2 L80 7 L50 15 Z" fill="${stripe}"/></g>
      <path d="${HAT}" fill="none" stroke="#3D0033" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>
      <circle cx="75" cy="5.5" r="4.2" fill="${pom}"/>`
      + f.brows.raised({ y: 34 }) + f.eyes.smile({ y: 46 })
      + `<path d="${HORN}" fill="${horn}" stroke="#003A33" stroke-opacity=".6" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M34 67.3 L35.2 72.3 M27 68.8 L28.4 74.3 M20 70.5 L21.5 76.5" stroke="#FFD82E" stroke-width="2.4" stroke-linecap="round"/>`
      + f.stroke('M40 66.5 Q44 63.5 49 65', 3.4) + f.stroke('M41 70 Q45 72 49 69', 3.4);
  },
};
