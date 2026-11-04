const h = require('../src/parts/heart');
const O = { s: 0.8, x: 45, y: 55 };
const body = h.place(O);
// Four-point sparkle with pinched sides.
const spark = (x, y, r, k = 0.16) =>
  `M${x} ${y - r} Q${x + r * k} ${y - r * k} ${x + r} ${y} Q${x + r * k} ${y + r * k} ${x} ${y + r} Q${x - r * k} ${y + r * k} ${x - r} ${y} Q${x - r * k} ${y - r * k} ${x} ${y - r} Z`;
module.exports = {
  id: 'sparkling-heart',
  name: 'Sparkling Heart',
  emoji: '💖',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['sparkle', 'love', 'excited', 'shiny', 'adore'],
  tone: 'pink',
  body,
  shine: h.shine(O),
  draw(c) {
    const gold = c.radial('spark', 'gold', 0.4, 0.3);
    const edge = 'stroke="#5E3A00" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"';
    return `<path d="${body}" fill="${h.paint(c, 'a', 'pink')}"/>
      <path d="${spark(74, 24, 12)}" fill="${gold}" ${edge}/>
      <path d="${spark(19, 23, 7)}" fill="${gold}" ${edge}/>
      <path d="${spark(80, 62, 5.5)}" fill="${gold}" ${edge}/>
      <path d="${spark(60, 44, 5.5, 0.12)}" fill="#fff" opacity=".9"/>`;
  },
};
