const h = require('../src/parts/heart');
// The heart split along a zigzag, each half tipped outwards about its foot.
const CRACK = 'L43 37 L51 46 L44 55 L51 64.5 L46.5 73';
const left = h.xform(`M48 80 C22 62 12 47 15 33 C18 20 35 15 48 28 ${CRACK} Z`, { rot: -9, ox: 46, oy: 80, x: 42.5, y: 80 });
const right = h.xform(`M48 28 C61 15 78 20 81 33 C84 47 74 62 48 80 L46.5 73 L51 64.5 L44 55 L51 46 L43 37 Z`, { rot: 9, ox: 50, oy: 80, x: 54, y: 80 });
const L = { rot: -9, ox: 46, oy: 80, x: 42.5, y: 80 };
module.exports = {
  id: 'broken-heart',
  name: 'Broken Heart',
  emoji: '💔',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['heartbreak', 'sad', 'breakup', 'hurt', 'broken'],
  tone: 'pink',
  body: [left, right],
  shine: h.shine(L),
  draw(c) {
    return `<path d="${left}" fill="${h.paint(c, 'a', 'pink')}"/>
      <path d="${right}" fill="${h.paint(c, 'b', 'pink')}"/>`;
  },
};
