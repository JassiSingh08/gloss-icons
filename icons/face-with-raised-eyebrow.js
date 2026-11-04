const f = require('../src/parts/face');

// Left eye narrowed under a low brow, right eye wide under a high one.
module.exports = {
  ...f.spec(),
  id: 'face-with-raised-eyebrow',
  name: 'Face With Raised Eyebrow',
  emoji: '🤨',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['skeptical', 'suspicious', 'doubt', 'really', 'hmm'],
  draw(c) {
    const ink = f.INK;
    return f.head(c)
      + f.stroke('M30.5 39.5 L43 41', 3.6, ink)
      + f.stroke('M52.5 35 Q59 25.5 66 32', 3.4, ink)
      + `<path d="M33 45 L41 45.6 Q40.5 50.5 37 50.5 Q33.5 50.5 33 45 Z" fill="${ink}"/>
      <ellipse cx="59" cy="45" rx="3.7" ry="5.4" fill="${ink}"/>${f.glint(57.8, 43)}${f.glint(35.6, 47, 0.8)}`
      + f.mouth.flat({ y: 66, w: 8, tilt: -3.5 });
  },
};
