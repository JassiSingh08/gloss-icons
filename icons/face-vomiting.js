const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

const SPEW = 'M39 63.5 Q48 60.5 57 63.5 C57.5 70 59 75.5 63 80 Q48 83.5 33 80 C37 75.5 38.5 70 39 63.5 Z';
module.exports = {
  ...f.spec(),
  id: 'face-vomiting',
  name: 'Face Vomiting',
  emoji: '🤮',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['vomit', 'sick', 'throw up', 'gross', 'hangover'],
  draw(c) {
    const spew = c.linear('spew', 'lime', [0, 0, 0.3, 1], 0, 2);
    const green = c.radial('cheek', 'green', 0.5, 0.5);
    return f.head(c)
      + `<ellipse cx="29" cy="60" rx="7" ry="5" fill="${green}" opacity=".45"/><ellipse cx="67" cy="60" rx="7" ry="5" fill="${green}" opacity=".45"/>`
      + b.worried({ y: 35, slant: 5 }) + f.eyes.squint({ y: 46 })
      + `<ellipse cx="48" cy="63.5" rx="10.5" ry="4.5" fill="${f.MOUTH}"/>
      <path d="${SPEW}" fill="${spew}"/>
      <ellipse cx="48" cy="83" rx="22" ry="3.6" fill="${spew}"/>
      <path d="M44 66 Q43 73 40 78" stroke="#fff" stroke-opacity=".55" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="28" cy="77" r="2" fill="${spew}"/><circle cx="69.5" cy="76" r="2.4" fill="${spew}"/>`;
  },
};
