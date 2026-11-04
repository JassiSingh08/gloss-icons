const k = require('../src/parts/critter');
// Body is the egg and the chick's head as one silhouette; the shell's broken rim is drawn over it.
const shell = 'M19 56 L24 49 L29 55 L33 47.5 L38 53 L43 46 L48 52 L53 46 L58 53 L63 47.5 L67 55 L72 49 L77 56 C77 74 65 84 48 84 C31 84 19 74 19 56 Z';
const body = 'M19 56 L24 49 L29 55 L33 47.7 A19 19 0 1 1 63 47.7 L67 55 L72 49 L77 56 C77 74 65 84 48 84 C31 84 19 74 19 56 Z';
module.exports = {
  id: 'hatching-chick',
  name: 'Hatching Chick',
  emoji: '🐣',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['chick', 'egg', 'hatch', 'baby', 'easter', 'new'],
  tone: 'cream',
  body,
  shine: [38, 25, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    const ink = '#3D1A00';
    return `<circle cx="48" cy="36" r="19" fill="${c.radial('chick', 'yellow', 0.35, 0.25)}"/>
      ${k.part(c, 'M36 22 C37 16 41 13 45 15 L44 19 L48 17 L49 21 L53 18 C56 19 59 21 60 24 C52 20 43 19 36 22 Z', c.radial('cap', 'cream', 0.3, 0.2), 'cream')}
      ${k.eye(41, 34, 2.8, ink)}${k.eye(55, 34, 2.8, ink)}
      ${k.part(c, 'M43.5 40 L48 37.5 L52.5 40 L48 44.5 Z', c.radial('beak', 'orange', 0.4, 0.3), 'orange')}
      <path d="${shell}" fill="${c.radial('a', 'cream', 0.35, 0.2)}"/>
      ${k.line('M19 56 L24 49 L29 55 L33 47.5 L38 53 L43 46 L48 52 L53 46 L58 53 L63 47.5 L67 55 L72 49 L77 56', '#8A5A1E', 1.2, 0.6)}
      ${k.line('M54 66 L58 70 L56 75', '#8A5A1E', 1.2, 0.45)}`;
  },
};
