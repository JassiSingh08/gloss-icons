const s = require('../src/parts/skin');
// Upper arm along the bottom with a rounded shoulder on the left, elbow at the lower right,
// forearm up to a fist; the biceps bulges over the top of the upper arm.
const body = 'M22 83 C14 83 10 76 11.5 68 C13 60 20 54 28 48 C35 43 44 40 51 41 C56 42 60 46 61.5 51 L62.5 41 C57 38.5 53 33 53 26.5 C53 17.5 60 11 69 11 C78.5 11 85.5 18 85 27 C84.8 32.5 82.5 36.5 79.5 39.5 L82 65 C83 76 77 83 67 83 Z';
module.exports = {
  id: 'flexed-biceps',
  name: 'Flexed Biceps',
  emoji: '💪',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['strong', 'muscle', 'flex', 'gym', 'power'],
  tone: 'amber',
  body,
  shine: [25, 54, -40],
  shineSize: [6.5, 2.8],
  draw(c) {
    return `<path d="${body}" fill="${s.fill(c)}"/>
      ${s.crease('M54.5 20.5 L62.5 21 M53.5 26.5 L62 27 M55 32.5 L62.5 33', 1.4)}
      ${s.crease('M62.5 20 C68.5 21.5 72.5 25.5 73.5 31', 1.5)}
      ${s.crease('M24 70 C34 63.5 47 60.5 61 62', 1.5)}
      ${s.crease('M62 52 C66 56 67 60 66 64', 1.3)}`;
  },
};
