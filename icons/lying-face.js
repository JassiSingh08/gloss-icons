const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

// The nose has grown out past the cheek; it gets the head's ink edge where it leaves the body.
const nose = 'M49 53.5 C60 52 73 50.5 83 50.3 A3.6 3.6 0 0 1 83.2 57.5 C73 57.6 60 58.5 49 59.5 A3 3 0 0 1 49 53.5 Z';
module.exports = {
  ...f.spec(),
  id: 'lying-face',
  name: 'Lying Face',
  emoji: '🤥',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['liar', 'lie', 'pinocchio', 'fib', 'dishonest'],
  draw(c) {
    const sh = c.ramp('yellow')[3];
    return f.head(c) + a.brows.sad({ y: 35, slant: 3 }) + `<g transform="translate(-2 0)">${f.eyes.oval({ y: 44 })}</g>`
      + f.mouth.wavy({ y: 69, w: 8 })
      + `<path d="${nose}" fill="${c.linear('nose', 'yellow', [0, 0, 0, 1], 0, 2)}" stroke="${sh}" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M58 54.2 C66 53.2 74 52.4 81 52.2" stroke="#fff" stroke-opacity=".7" stroke-width="1.3" fill="none" stroke-linecap="round"/>`;
  },
};
