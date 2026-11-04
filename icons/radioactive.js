const s = require('../src/parts/sign');

module.exports = {
  id: 'radioactive',
  name: 'Radioactive',
  emoji: '☢️',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['radioactive', 'radiation', 'nuclear', 'hazard', 'danger'],
  tone: 'yellow',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    const blade = (deg) => {
      const p = (r, a) => `${s.n(48 + r * Math.cos(s.rad(a)))} ${s.n(50 + r * Math.sin(s.rad(a)))}`;
      return `M${p(7, deg - 30)} L${p(21.5, deg - 30)} A21.5 21.5 0 0 1 ${p(21.5, deg + 30)} L${p(7, deg + 30)} A7 7 0 0 0 ${p(7, deg - 30)} Z`;
    };
    const d = [210, 330, 90].map(blade).join(' ');
    const mark = (k) => `<path d="${d}" fill="${k}" stroke="${k}" stroke-width="1" stroke-linejoin="round"/><circle cx="48" cy="50" r="4.4" fill="${k}"/>`;
    return s.disc(c, 'yellow') + s.inkEmboss(mark, '#2E1A00');
  },
};
