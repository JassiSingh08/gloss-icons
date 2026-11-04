const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

// Nodding off: eyes shut and a bubble swelling at the nose.
module.exports = {
  ...f.spec(),
  id: 'sleepy-face',
  name: 'Sleepy Face',
  emoji: '😪',
  group: 'Smileys & Emotion',
  subgroup: 'face-sleepy',
  tags: ['sleepy', 'tired', 'drowsy', 'nodding off', 'bubble'],
  draw(c) {
    const bubble = c.radial('bubble', 'white', 0.35, 0.3);
    return f.head(c) + a.brows.sad({ y: 37, slant: 3, sw: 3 }) + f.eyes.closed({ y: 47 }) + f.mouth.flat({ y: 69, w: 6.5 })
      + `<circle cx="61" cy="61.5" r="7.5" fill="${bubble}" opacity=".55"/>
      <circle cx="61" cy="61.5" r="7.5" fill="none" stroke="#1F7FD1" stroke-opacity=".7" stroke-width="1.2"/>
      <ellipse cx="58.3" cy="58.5" rx="2.4" ry="1.4" fill="#fff" opacity=".9" transform="rotate(-35 58.3 58.5)"/>`;
  },
};
