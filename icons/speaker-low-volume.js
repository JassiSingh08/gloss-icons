const g = require('../src/parts/garment');

module.exports = {
  id: 'speaker-low-volume',
  name: 'Speaker Low Volume',
  emoji: '🔈',
  group: 'Objects',
  subgroup: 'sound',
  tags: ['speaker', 'volume', 'quiet', 'sound', 'audio'],
  tone: 'slate',
  body: g.SPEAKER,
  shine: [16, 39, -10],
  shineSize: [3.6, 1.4],
  draw(c) {
    return g.speaker(c)
      + g.waves(c, 1);
  },
};
