const m = require('../src/parts/metal');
const G = m.frame({ at: [48, 47], deg: -45, s: 1 });
const A = m.chainLink(G, { x: -14 });
const B = m.chainLink(G, { x: 14 });
module.exports = {
  id: 'link',
  name: 'Link',
  emoji: '🔗',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['link', 'chain', 'connect', 'url', 'together'],
  tone: 'silver',
  body: A.d,
  shine: [22, 55, -45],
  shineSize: [5, 1.8],
  draw(c) {
    // A passes over B at its upper crossing and under it at the lower one.
    c.def(`<clipPath id="${c.id('x')}"><path d="${G.d('M-2 -13 L14 -13 L14 0 L-2 0 Z')}"/></clipPath>`);
    return `<path d="${A.d}" fill="${c.ramp('silver')[1]}"/>
      ${m.tube(c, A.mid, { width: A.width, palette: 'silver', name: 'a' })}
      ${m.tube(c, B.mid, { width: B.width, palette: 'silver', name: 'b' })}
      <g clip-path="url(#${c.id('x')})">${m.tube(c, A.mid, { width: A.width, palette: 'silver', name: 'a2' })}</g>`;
  },
};
