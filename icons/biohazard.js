const s = require('../src/parts/sign');

module.exports = {
  id: 'biohazard',
  name: 'Biohazard',
  emoji: '☣️',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['biohazard', 'biological', 'hazard', 'virus', 'danger'],
  tone: 'orange',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    const at = (r, a) => [48 + r * Math.cos(s.rad(a)), 50 + r * Math.sin(s.rad(a))];
    const A = [-90, 30, 150];
    const circ = (r, d, fill) => A.map((a) => { const [x, y] = at(d, a); return `<circle cx="${s.n(x)}" cy="${s.n(y)}" r="${r}" fill="${fill}"/>`; }).join('');
    const gaps = [-30, 90, 210].map((a) => { const [x, y] = at(9, a); return `M48 50 L${s.n(x)} ${s.n(y)}`; }).join(' ');
    const ring = A.map((a) => { const [x0, y0] = at(13.4, a - 17); const [x1, y1] = at(13.4, a + 17); return `M${s.n(x0)} ${s.n(y0)} A13.4 13.4 0 0 1 ${s.n(x1)} ${s.n(y1)}`; }).join(' ');
    c.def(`<mask id="${c.id('m')}" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96">${circ(10.2, 10.6, '#fff')}${circ(7.6, 14.6, '#000')}
      <path d="${ring}" fill="none" stroke="#fff" stroke-width="2.6"/>
      <circle cx="48" cy="50" r="3.2" fill="#000"/><path d="${gaps}" stroke="#000" stroke-width="1.5"/></mask>`);
    const mark = (k) => `<rect x="20" y="22" width="56" height="56" fill="${k}" mask="url(#${c.id('m')})"/>`;
    return s.disc(c, 'orange') + s.inkEmboss(mark, '#2E1000');
  },
};
