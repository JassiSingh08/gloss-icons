const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

const TISSUE = 'M34 56 Q39 50 46.5 52.5 Q54 49 60.5 54 Q66 59.5 62 66 Q57.5 72.5 49 70.5 Q40.5 73.5 35.5 68 Q30.5 62 34 56 Z';
module.exports = {
  ...f.spec(),
  id: 'sneezing-face',
  name: 'Sneezing Face',
  emoji: '🤧',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['sneeze', 'tissue', 'cold', 'allergy', 'flu'],
  draw(c) {
    const tissue = c.linear('tissue', 'white', [0, 0, 0.4, 1], 0, 2);
    return f.head(c) + f.extras.blush(c, { y: 53, dx: 21, opacity: 0.6 }) + b.worried({ y: 33, slant: 5 }) + f.eyes.squint({ y: 43 })
      + `<path d="${TISSUE}" fill="${tissue}" stroke="#6E61A8" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M41 57.5 Q44.5 62 42.5 66.5 M52 56 Q55.5 60 59 60.5" stroke="#BDB2E8" stroke-width="1.3" fill="none" stroke-linecap="round"/>`
      + b.hand(c, { x: 66, y: 72, rot: -62, sc: 0.85 });
  },
};
