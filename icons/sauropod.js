const k = require('../src/parts/critter');
// A long-necked sauropod in profile facing left, legs part of the silhouette; the far legs sit behind.
const body = 'M16 20 C16 15 20 12 25 12 C30 12 33 15 33 20 C33 28 36 38 44 44 C52 42 62 42 70 46 C78 50 84 56 92 60 C86 62 80 62 74 64 C73 66 72 68 71 70 L71 84 L62 84 L61 72 C56 73 52 73 48 72 L48 84 L39 84 L39 68 C36 64 34 58 32 52 C29 44 25 34 23 26 C20 25 16 24 16 20 Z';
module.exports = {
  id: 'sauropod',
  name: 'Sauropod',
  emoji: '🦕',
  group: 'Animals & Nature',
  subgroup: 'animal-reptile',
  tags: ['dinosaur', 'brontosaurus', 'diplodocus', 'long neck', 'prehistoric'],
  tone: 'lime',
  body,
  shine: [21, 16, -40],
  shineSize: [4, 1.8],
  draw(c) {
    const far = c.linear('far', 'lime', [0, 0, 0, 1], 2, 3);
    return `<path d="M52 68 L52 84 L59 84 L59 68 Z M74 62 L76 84 L82 84 L80 60 Z" fill="${far}"/>
      <path d="${body}" fill="${c.radial('a', 'lime', 0.4, 0.3)}"/>
      ${[[52, 50, 3], [62, 49, 2.6], [70, 53, 2.2], [57, 56, 2]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#4E8E00" opacity=".55"/>`).join('')}
      ${k.line('M40 78 L40 84 M43 79 L43 84 M63 78 L63 84 M66 79 L66 84', '#203D00', 1.2, 0.5)}
      ${k.eye(25, 17, 2.2, '#203D00')}
      ${k.line('M17 21.5 C20 22.5 23 22 25 21', '#203D00', 1.3, 0.8)}`;
  },
};
