const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'yawning-face',
  name: 'Yawning Face',
  emoji: '🥱',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['yawn', 'tired', 'sleepy', 'bored', 'night'],
  draw: (c) => f.head(c) + f.stroke('M31 37 Q37 34.5 43 37', 3) + f.stroke('M53 37 Q59 34.5 65 37', 3)
    + f.eyes.closed({ y: 46, h: 2.6 })
    + `<ellipse cx="47" cy="66" rx="9" ry="10.5" fill="${f.MOUTH}"/><ellipse cx="47" cy="72" rx="6" ry="4" fill="${f.TONGUE}" opacity=".8"/>`
    + f.extras.drop(c, 28.5, 52, { scale: 0.6, rot: 30 })
    + b.hand(c, { x: 61, y: 73, rot: -48, sc: 0.85, thumb: false }),
};
