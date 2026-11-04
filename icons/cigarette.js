const m = require('../src/parts/metal');
const A = [14, 70];
const B = [80, 46];
const body = m.bar(A, B, 12, 2);
module.exports = {
  id: 'cigarette',
  name: 'Cigarette',
  emoji: '🚬',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['cigarette', 'smoking', 'smoke', 'habit', 'break'],
  tone: 'white',
  body,
  shine: [36, 58, -20],
  shineSize: [6, 1.6],
  draw(c) {
    const at = (t) => [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t];
    const paper = m.cyl(c, 'a', 'white', A, B, 12);
    const filter = m.cyl(c, 'f', 'amber', A, B, 12);
    const ash = m.cyl(c, 's', 'grey', A, B, 12);
    const ember = c.radial('e', 'ember', 0.5, 0.5);
    const tip = at(1);
    return `<path d="${body}" fill="${paper}"/>
      <path d="${m.bar(A, at(0.3), 12, 2)}" fill="${filter}"/>
      ${[0.08, 0.15, 0.22].map((t) => { const p = at(t); return `<circle cx="${p[0].toFixed(1)}" cy="${(p[1] - 1.5).toFixed(1)}" r=".9" fill="#B85F00"/><circle cx="${(p[0] + 2).toFixed(1)}" cy="${(p[1] + 2.4).toFixed(1)}" r=".8" fill="#B85F00"/>`; }).join('')}
      <path d="${m.bar(at(0.295), at(0.31), 12.2, 0)}" fill="#C98500"/>
      <path d="${m.bar(at(0.9), B, 12.2, 1.6)}" fill="${ash}"/>
      <path d="${m.bar(at(0.885), at(0.92), 12.4, 1)}" fill="${ember}"/>
      <ellipse cx="${tip[0] - 0.5}" cy="${tip[1]}" rx="2.2" ry="5.8" transform="rotate(-20 ${tip[0] - 0.5} ${tip[1]})" fill="#2E2E3A" opacity=".55"/>
      <path d="M78 38 C72 30 84 24 78 16 C74 11 80 7 82 5" stroke="#D8D2EE" stroke-opacity=".55" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M84 36 C82 31 88 28 86 23" stroke="#D8D2EE" stroke-opacity=".35" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  },
};
