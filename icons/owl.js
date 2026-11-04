const k = require('../src/parts/critter');
// Front on, ear tufts part of the silhouette; big amber eyes under a slanted, unimpressed brow.
const body = 'M22 20 L33 27 C37 25.5 42 25 48 25 C54 25 59 25.5 63 27 L74 20 C74.5 27 73.5 33 72 38 C76 46 78 56 76 66 C74 78 62 84 48 84 C34 84 22 78 20 66 C18 56 20 46 24 38 C22.5 33 21.5 27 22 20 Z';
module.exports = {
  id: 'owl',
  name: 'Owl',
  emoji: '🦉',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['owl', 'wise', 'night', 'bird', 'hoot'],
  tone: 'brown',
  body,
  shine: [30, 37, -50],
  shineSize: [6, 2.8],
  draw(c) {
    const disc = c.radial('disc', 'sand', 0.4, 0.2);
    const ink = '#241003';
    const chev = (x, y) => `M${x - 3.5} ${y} L${x} ${y + 2.6} L${x + 3.5} ${y}`;
    return `<path d="${body}" fill="${c.radial('a', 'brown', 0.35, 0.25)}"/>
      <path d="M48 58 C40 58 33 62 31 68 C33 78 40 82 48 82 C56 82 63 78 65 68 C63 62 56 58 48 58 Z" fill="${c.radial('belly', 'cream', 0.4, 0.2)}"/>
      ${k.line([chev(42, 66), chev(54, 66), chev(48, 72), chev(40, 75), chev(56, 75)].join(' '), '#6E3A14', 1.6, 0.7)}
      <path d="M48 36 C42 30 26 30 26 43 C26 53 36 57 44 54 C46 53 47 52 48 52 C49 52 50 53 52 54 C60 57 70 53 70 43 C70 30 54 30 48 36 Z" fill="${disc}"/>
      ${k.irisEye(37.5, 43, 7, '#FFB627', ink, 0.55)}${k.irisEye(58.5, 43, 7, '#FFB627', ink, 0.55)}
      ${k.lid(37.5, 43, 7, '#B06A32', 1.2)}${k.lid(58.5, 43, 7, '#B06A32', -1.2)}
      ${k.line('M29 36.5 L46 41.5 M67 36.5 L50 41.5', ink, 2.6, 0.9)}
      ${k.part(c, 'M45 47 L51 47 L48 55 Z', c.radial('beak', 'gold', 0.3, 0.2), 'gold')}
      ${k.legs('M40 82 L38 86 M42 82 L42 86.5 M44 82 L46 86 M52 82 L50 86 M54 82 L54 86.5 M56 82 L58 86', '#5E3A00', 2.4)}`;
  },
};
