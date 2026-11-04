const h = require('../src/parts/heart');
// A heart with two larger outlines pulsing out from it.
const O = { s: 0.66, x: 48, y: 54 };
const body = h.place(O);
module.exports = {
  id: 'growing-heart',
  name: 'Growing Heart',
  emoji: '💗',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['growing', 'love', 'excited', 'nervous', 'pulse'],
  tone: 'pink',
  body,
  shine: h.shine(O),
  shineSize: [5.5, 2.6],
  draw(c) {
    const ring = (s, w, o) => `<path d="${h.place({ s, x: 48, y: 51 })}" fill="none" stroke="#FF5C86" stroke-width="${w}" stroke-opacity="${o}" stroke-linejoin="round"/>`;
    return `${ring(1.04, 2.6, 0.35)}${ring(0.86, 3.2, 0.65)}
      <path d="${body}" fill="${h.paint(c, 'a', 'pink')}"/>`;
  },
};
