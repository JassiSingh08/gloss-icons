const h = require('../src/parts/heart');
const O = { s: 0.76, x: 48, y: 53 };
const body = h.place(O);
module.exports = {
  id: 'beating-heart',
  name: 'Beating Heart',
  emoji: '💓',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['heartbeat', 'pulse', 'love', 'excited', 'thump'],
  tone: 'pink',
  body,
  shine: h.shine(O),
  draw(c) {
    const marks = 'M18 37 Q12.5 47 18 57 M11 40.5 Q7.5 47 11 53.5 M78 37 Q83.5 47 78 57 M85 40.5 Q88.5 47 85 53.5';
    return `<path d="${marks}" stroke="#4A0016" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>
      <path d="${marks}" stroke="#FF3D6B" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      <path d="${body}" fill="${h.paint(c, 'a', 'pink')}"/>`;
  },
};
