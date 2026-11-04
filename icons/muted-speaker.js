const g = require('../src/parts/garment');

module.exports = {
  id: 'muted-speaker',
  name: 'Muted Speaker',
  emoji: '🔇',
  group: 'Objects',
  subgroup: 'sound',
  tags: ['mute', 'silent', 'quiet', 'sound off', 'speaker'],
  tone: 'slate',
  body: g.SPEAKER,
  shine: [16, 39, -10],
  shineSize: [3.6, 1.4],
  draw(c) {
    return g.speaker(c)
      + g.tube(c, 'M61 37 L83 59 M83 37 L61 59', { width: 5.5, palette: 'red', name: 'x', box: [61, 37, 83, 59] });
  },
};
