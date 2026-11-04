const h = require('../src/parts/heart');
const O = { s: 0.8, x: 48, y: 57 };
const body = h.place(O);
const FIRE = 'M18 66 C11 52 15 39 23 30 C23 37 26 41 30 42 C28 30 33 19 41 10 C42 19 45 25 50 27 C50 19 55 13 62 8 C59 18 62 26 67 29 C68 25 70 22 74 19 C81 31 85 48 78 66 Z';
const CORE = 'M27 52 C25 45 27 39 31 35 C32 40 35 43 38 43 C37 35 40 27 45 21 C46 28 50 32 54 33 C55 27 58 22 62 19 C62 27 65 32 68 35 C71 40 72 46 70 52 Z';
module.exports = {
  id: 'heart-on-fire',
  name: 'Heart On Fire',
  emoji: '❤️‍🔥',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['passion', 'burning', 'desire', 'lust', 'hot', 'love'],
  tone: 'pink',
  body,
  shine: h.shine(O),
  draw(c) {
    return `<path d="${FIRE}" fill="${c.radial('fire', 'orange', 0.5, 0.85)}" stroke="#6B0F00" stroke-opacity=".45" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="${CORE}" fill="${c.radial('core', 'flame', 0.5, 0.9)}"/>
      <path d="${body}" fill="${h.paint(c, 'a', 'pink')}"/>`;
  },
};
