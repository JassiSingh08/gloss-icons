const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'woozy-face',
  name: 'Woozy Face',
  emoji: '🥴',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['woozy', 'drunk', 'tipsy', 'dizzy', 'intoxicated'],
  draw(c) {
    const ink = f.INK;
    return f.head(c) + f.extras.blush(c, { opacity: 0.7, y: 57 })
      + f.stroke('M31 37 Q36 33.5 42 35.5') + f.stroke('M55 41 Q60 39.5 65 41.5')
      + `<ellipse cx="37" cy="45" rx="4" ry="5.6" fill="${ink}"/>${f.glint(35.7, 42.9, 1.15)}`
      + f.stroke('M54 47.5 Q59.5 51 65 47.5', 3.4)
      + f.stroke('M37 67 Q41.5 62.5 46 66 Q50.5 69.5 55 65 Q58 62 61 63.5', 3.4);
  },
};
