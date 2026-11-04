const h = require('../src/parts/heart');
// The heavy heart as the bar of an exclamation mark, a round dot below.
const O = { s: 0.82, x: 48, y: 38 };
const dot = 'M48 66.5 A8 8 0 1 1 47.99 66.5 Z';
const body = [h.place(O), dot];
module.exports = {
  id: 'heart-exclamation',
  name: 'Heart Exclamation',
  emoji: '❣️',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['love', 'exclamation', 'heart', 'emphasis', 'adore'],
  tone: 'pink',
  body,
  shine: h.shine(O),
  draw(c) {
    return `<path d="${body[0]}" fill="${h.paint(c, 'a', 'pink')}"/>
      <path d="${dot}" fill="${h.paint(c, 'd', 'pink')}"/>
      <ellipse cx="44.6" cy="71" rx="3" ry="1.5" fill="#fff" opacity=".85" transform="rotate(-40 44.6 71)"/>`;
  },
};
