const g = require('../src/parts/garment');

module.exports = {
  id: 'speaker-high-volume',
  name: 'Speaker High Volume',
  emoji: '🔊',
  group: 'Objects',
  subgroup: 'sound',
  tags: ['speaker', 'loud', 'volume', 'sound', 'audio'],
  tone: 'slate',
  body: g.SPEAKER,
  shine: [16, 39, -10],
  shineSize: [3.6, 1.4],
  draw(c) {
    return g.speaker(c)
      + g.waves(c, 3);
  },
};
