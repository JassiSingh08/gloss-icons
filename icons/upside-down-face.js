const f = require('../src/parts/face');

// The light stays top-left; only the features turn over.
module.exports = {
  ...f.spec(),
  id: 'upside-down-face',
  name: 'Upside-Down Face',
  emoji: '🙃',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['upside down', 'silly', 'sarcasm', 'irony', 'fine'],
  draw: (c) => f.head(c) + `<g transform="rotate(180 ${f.CX} ${f.CY})">${f.eyes.oval()}${f.mouth.smile()}</g>`,
};
