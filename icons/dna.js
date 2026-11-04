const m = require('../src/parts/metal');
const F = m.frame({ at: [48, 47], deg: 35, s: 1 });
const strand = (k) => Array.from({ length: 29 }, (_, i) => {
  const y = -38 + (i * 76) / 28;
  return F.p([k * 13 * Math.sin((y / 38) * Math.PI * 1.5), y]);
});
const A = strand(1);
const B = strand(-1);
const line = (pts) => 'M' + pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(' L');
module.exports = {
  id: 'dna',
  name: 'DNA',
  emoji: '🧬',
  group: 'Objects',
  subgroup: 'science',
  tags: ['dna', 'genetics', 'biology', 'helix', 'gene'],
  tone: 'blue',
  body: m.ribbon(A, 7),
  shine: [57, 17, 35],
  shineSize: [3.6, 1.6],
  draw(c) {
    const rungs = [];
    for (let i = 1; i < 28; i += 2) {
      const col = ['#FFC21A', '#14C2A3', '#FF8FA9'][(i >> 1) % 3];
      rungs.push(`<path d="M${A[i][0].toFixed(2)} ${A[i][1].toFixed(2)} L${B[i][0].toFixed(2)} ${B[i][1].toFixed(2)}" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`);
    }
    // Pink passes over blue at the middle crossing only, so the strands weave.
    const mid = F.d('M-20 -8 L20 -8 L20 8 L-20 8 Z');
    c.def(`<clipPath id="${c.id('x')}"><path d="${mid}"/></clipPath>`);
    return `${rungs.join('')}
      ${m.tube(c, line(B), { width: 7, palette: 'pink', name: 'b' })}
      <path d="${m.ribbon(A, 7)}" fill="${c.ramp('blue')[1]}"/>
      ${m.tube(c, line(A), { width: 7, palette: 'blue', name: 'a', outline: false })}
      <g clip-path="url(#${c.id('x')})">${m.tube(c, line(B), { width: 7, palette: 'pink', name: 'b2' })}</g>`;
  },
};
