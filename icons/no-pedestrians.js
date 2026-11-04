const s = require('../src/parts/sign');

module.exports = {
  id: 'no-pedestrians',
  name: 'No Pedestrians',
  emoji: '🚷',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['no pedestrians', 'no walking', 'forbidden', 'road'],
  tone: 'red',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    const fig = (k) => `<circle cx="50.5" cy="29" r="4.8" fill="${k}"/>
      <path d="M49.5 37.5 L46.5 53 L40.5 69 M46.5 53 L54 60.5 L55.5 70.5 M49 40.5 L42 48.5 M49 40.5 L56.5 47" stroke="${k}" ${s.ST(4.8)}/>`;
    return s.noSign(c, fig);
  },
};
