const h = require('../src/parts/heart');
// A tongue poking out from under the upper lip, with the groove down its middle.
const body = 'M16 22 C24 16 36 15 48 17 C60 15 72 16 80 22 C78 25.5 76 27 73 28 C76 36 77 46 74.5 56 C71 72 61 83 48 83 C35 83 25 72 21.5 56 C19 46 20 36 23 28 C20 27 18 25.5 16 22 Z';
const lip = 'M16 22 C24 16 36 15 48 17 C60 15 72 16 80 22 C72 25.5 60 26 48 25.5 C36 26 24 25.5 16 22 Z';
module.exports = {
  id: 'tongue',
  name: 'Tongue',
  emoji: '👅',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['tongue', 'lick', 'taste', 'silly', 'tease'],
  tone: 'pink',
  body,
  shine: [30, 38, -60],
  shineSize: [6, 2.6],
  draw(c) {
    return `<path d="${body}" fill="${h.paint(c, 'a', 'rose', 0.35, 0.3)}"/>
      <path d="M48 31 C46.5 45 48 57 48.5 67" stroke="#7A1640" stroke-opacity=".45" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M22 26.5 C34 32 62 32 74 26.5" stroke="#4A0E14" stroke-opacity=".55" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="${lip}" fill="${c.radial('lip', 'red', 0.4, 0.2)}"/>
      <ellipse cx="62" cy="20" rx="5" ry="1.4" fill="#fff" opacity=".6" transform="rotate(6 62 20)"/>`;
  },
};
