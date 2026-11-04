const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

// Caught mid-move: the features smear into faint copies and swing lines trail the head.
const echo = (dx, dy) => `<g opacity=".28" transform="translate(${dx} ${dy})">${f.eyes.oval()}${f.mouth.smile()}</g>`;
module.exports = {
  ...f.spec(),
  id: 'head-shaking-horizontally',
  name: 'Head Shaking Horizontally',
  emoji: '🙂‍↔️',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['no', 'shake', 'disagree', 'refuse', 'nope'],
  draw: (c) => a.extras.shake({ vertical: false, ink: '#FFD82E', opacity: 0.95, spread: 34 }) + f.head(c) + echo(-5, 0) + echo(5, 0) + f.eyes.oval() + f.mouth.smile(),
};
