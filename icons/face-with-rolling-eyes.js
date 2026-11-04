const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'face-with-rolling-eyes',
  name: 'Face With Rolling Eyes',
  emoji: '🙄',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['eye roll', 'whatever', 'annoyed', 'sarcasm', 'ugh'],
  draw: (c) => f.head(c) + f.eyes.wide({ y: 44, r: 6.4, pupil: 3, look: [1.2, -3.2] }) + f.mouth.flat({ y: 66, w: 8, tilt: 3 }),
};
