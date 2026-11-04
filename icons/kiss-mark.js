const h = require('../src/parts/heart');
// A lipstick print, not a mouth: upper and lower lip pressed apart by a gap, with the fine creases
// a print leaves, laid down at a tilt.
const T = { rot: -12, ox: 48, oy: 54, x: 48, y: 54 };
const upper = h.xform('M14 50 C20 40 28 32 37 33 C42 33.5 45 36 48 38.5 C51 36 54 33.5 59 33 C68 32 76 40 82 50 C72 48 62 49 48 51 C34 49 24 48 14 50 Z', T);
const lower = h.xform('M16 54.5 C25 53.5 36 55.5 48 56.5 C60 55.5 71 53.5 80 54.5 C74 68 62 77 48 77 C34 77 22 68 16 54.5 Z', T);
const creases = h.xform('M27 41 L29 46.5 M35 37 L36 46 M42 38 L42.5 46.5 M54 38 L53.5 46.5 M61 37 L60 46 M69 41 L67 46.5 M28 60 L30 66 M37 60 L38 71 M48 60.5 L48 73 M59 60 L58 71 M68 60 L66 66', T);
module.exports = {
  id: 'kiss-mark',
  name: 'Kiss Mark',
  emoji: '💋',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['kiss', 'lipstick', 'love', 'flirt', 'smooch'],
  tone: 'pink',
  body: [upper, lower],
  shine: h.at([28, 41], T).concat(-45),
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${upper}" fill="${c.radial('a', 'pink', 0.35, 0.2)}"/>
      <path d="${lower}" fill="${c.radial('b', 'pink', 0.4, 0.15)}"/>
      <path d="${creases}" stroke="#4A0016" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round" fill="none"/>`;
  },
};
