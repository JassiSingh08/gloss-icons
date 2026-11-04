const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'star-and-crescent',
  name: 'Star And Crescent',
  emoji: '☪️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['crescent', 'star', 'islam', 'muslim', 'religion'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const star = require('../src/parts/star');
    c.def(`<mask id="${c.id('m')}" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96"><circle cx="45" cy="50" r="23" fill="#fff"/><circle cx="52.5" cy="46.5" r="18.5" fill="#000"/></mask>`);
    const art = (k) => `<rect x="20" y="25" width="50" height="50" fill="${k}" mask="url(#${c.id('m')})"/>
      <path d="${star.path(60.5, 49, 9.5, -18)}" fill="${k}"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
