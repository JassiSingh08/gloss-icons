const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'face-screaming-in-fear',
  name: 'Face Screaming In Fear',
  emoji: '😱',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['scream', 'fear', 'horror', 'shock'],
  draw: (c) => f.head(c) + b.fear(c, { to: 54 }) + b.worried({ y: 30, slant: 5 }) + f.eyes.wide({ y: 42, r: 6.6, pupil: 2.2 })
    + `<ellipse cx="48" cy="66" rx="6.5" ry="11" fill="${f.MOUTH}"/><ellipse cx="48" cy="72" rx="4" ry="4" fill="${f.TONGUE}" opacity=".75"/>`
    + b.hand(c, { x: 22.5, y: 70, rot: 12, sc: 0.95, flip: true }) + b.hand(c, { x: 73.5, y: 70, rot: -12, sc: 0.95 }),
};
