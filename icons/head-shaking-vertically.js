const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

// Caught mid-move: the features smear into faint copies and swing lines trail the head.
const echo = (dx, dy) => `<g opacity=".28" transform="translate(${dx} ${dy})">${f.eyes.oval()}${f.mouth.smile()}</g>`;
module.exports = {
  ...f.spec(),
  id: 'head-shaking-vertically',
  name: 'Head Shaking Vertically',
  emoji: '🙂‍↕️',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['yes', 'nod', 'agree', 'nodding', 'ok'],
  draw: (c) => a.extras.shake({ vertical: true, ink: '#FFD82E', opacity: 0.95, spread: 30, gap: 4 }) + f.head(c) + echo(0, -4.5) + echo(0, 4.5) + f.eyes.oval() + f.mouth.smile(),
};
