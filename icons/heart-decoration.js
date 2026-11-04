const h = require('../src/parts/heart');
const body = 'M29 15 L67 15 Q81 15 81 29 L81 70 Q81 84 67 84 L29 84 Q15 84 15 70 L15 29 Q15 15 29 15 Z';
const heart = h.place({ s: 0.64, x: 48, y: 50 });
module.exports = {
  id: 'heart-decoration',
  name: 'Heart Decoration',
  emoji: '💟',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['love', 'purple', 'badge', 'tile', 'heart'],
  tone: 'purple',
  body,
  shine: [26, 23, -40],
  shineSize: [6, 2.6],
  draw(c) {
    return `<path d="${body}" fill="${c.linear('a', 'purple', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${heart}" fill="#1A0040" opacity=".35" transform="translate(1.2 2)"/>
      <path d="${heart}" fill="${h.paint(c, 'h', 'white')}"/>`;
  },
};
