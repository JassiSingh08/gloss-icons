const m = require('../src/parts/metal');
const F = m.frame({ at: [48, 47], deg: -40, s: 1 });
const strip = m.round([[-40, -14], [40, -14], [40, 14], [-40, 14]], 14);
module.exports = {
  id: 'adhesive-bandage',
  name: 'Adhesive Bandage',
  emoji: '🩹',
  group: 'Objects',
  subgroup: 'medical',
  tags: ['bandage', 'plaster', 'heal', 'hurt', 'first aid'],
  tone: 'skin',
  body: F.d(strip),
  shine: [26, 64, -40],
  shineSize: [6, 2.2],
  draw(c) {
    const tape = c.linear('a', 'skin', [0, 0, 1, 1], 0, 2);
    const pad = c.linear('p', 'cream', [0, 0, 1, 1], 0, 2);
    const dot = (x, y) => { const p = F.p([x, y]); return `<circle cx="${p[0].toFixed(2)}" cy="${p[1].toFixed(2)}" r="1.2" fill="#6B3A1C" opacity=".4"/>`; };
    const dots = [];
    for (const x of [-34, -26, 26, 34]) for (const y of [-6, 0, 6]) dots.push(dot(x + (y ? 0 : 4 * Math.sign(x)), y));
    for (const x of [-9, 0, 9]) for (const y of [-6, 6]) dots.push(dot(x, y).replace('#6B3A1C', '#8A5A1E'));
    return `<path d="${F.d(strip)}" fill="${tape}"/>
      ${m.part(F.d(m.round([[-15, -11], [15, -11], [15, 11], [-15, 11]], 2.5)), pad, 'cream')}
      ${dots.join('')}`;
  },
};
