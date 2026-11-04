const f = require('../src/parts/face');

// Rattled: zigzag tremor lines either side and a faint second outline jolted off the first.
const zig = (x, s) => `M${x} 37 L${x - s * 4} 43 L${x} 49 L${x - s * 4} 55 L${x} 61 L${x - s * 4} 67`;
module.exports = {
  ...f.spec(),
  id: 'shaking-face',
  name: 'Shaking Face',
  emoji: '🫨',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['shaking', 'shock', 'vibrate', 'rattled', 'earthquake'],
  draw: (c) => f.stroke(zig(13, 1), 2.8, '#FFD82E') + f.stroke(zig(83, -1), 2.8, '#FFD82E')
    + `<path d="${f.BODY}" fill="none" stroke="#FFD82E" stroke-opacity=".55" stroke-width="2" transform="translate(-3 -1.5)"/>`
    + f.head(c) + f.eyes.wide({ r: 5.6, pupil: 2.2 }) + f.mouth.teeth({ y: 66, w: 11, h: 8 }),
};
