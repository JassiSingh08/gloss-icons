const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

const ink = b.INKS.red;
// Four grawlix drawn as strokes: a hash, a bang, a bolt and a star.
const SYMBOLS = 'M32.5 63 L31.5 71 M36 63 L35 71 M30.5 65.5 L37.5 65.5 M30 68.8 L37 68.8'
  + ' M43 62.5 L43 68 M43 71 L43 71.1'
  + ' M52.5 62 L49 67 L53 67 L49.5 72'
  + ' M61 62.5 L61 71 M57.3 64.6 L64.7 68.9 M57.3 68.9 L64.7 64.6';
module.exports = {
  ...f.spec('red'),
  id: 'face-with-symbols-on-mouth',
  name: 'Face With Symbols On Mouth',
  emoji: '🤬',
  group: 'Smileys & Emotion',
  subgroup: 'face-negative',
  tags: ['swearing', 'cursing', 'censored', 'furious', 'rage'],
  draw: (c) => f.head(c, 'red') + f.brows.angry({ ink, y: 36, slant: 6 }) + f.eyes.oval({ ink, y: 46, ry: 4.6 })
    + `<rect x="26" y="58.5" width="44" height="16.5" rx="6" fill="${ink}"/>
      <path d="${SYMBOLS}" stroke="#FFF7A8" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};
