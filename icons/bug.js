const k = require('../src/parts/critter');
// A caterpillar inching left with its head reared: ringed green body, yellow spots, stubby feet.
const segs = [[[78, 74], [64, 76], [48, 76], [40, 66]], [[40, 66], [34, 58], [30, 44], [22, 38]]];
const W = (t) => 20 - t * 3;
const body = k.tube(segs, W);
module.exports = {
  id: 'bug',
  name: 'Bug',
  emoji: '🐛',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['caterpillar', 'bug', 'worm', 'insect', 'crawl'],
  tone: 'green',
  body,
  shine: [26, 34, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const ink = '#053A1A';
    return `${k.legs('M70 83 L70 86.5 M61 83.5 L61 87 M52 82.5 L52 86 M44 79 L42 82.5', ink, 3)}
      ${k.legs('M20 30 C18 24 14 21 10 21 M25 29 C26 23 29 19 33 18', ink, 2.2)}
      <path d="${body}" fill="${c.radial('a', 'green', 0.3, 0.2)}"/>
      ${k.line(k.rings(segs, W, 6, 0.12, 0.72), ink, 1.6, 0.45)}
      ${[[71, 68], [60, 69], [49, 68], [41, 59], [37, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2" fill="#FFD82E"/>`).join('')}
      ${k.eye(19, 37, 2.6, ink)}
      ${k.legs('M15 44 Q18 46 21.5 44.5', ink, 1.8)}`;
  },
};
