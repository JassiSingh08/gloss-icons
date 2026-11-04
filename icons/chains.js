const m = require('../src/parts/metal');
// Links alternate face on and edge on; the edge-on ones show as bars crossing the face-on ends.
const G = m.frame({ at: [48, 46], deg: 45, s: 1 });
const L = { len: 6.5, r: 7.4, w: 6.6 };
const faces = [-30, 10].map((x) => m.chainLink(G, { ...L, x }));
const edges = [-10, 30];
module.exports = {
  id: 'chains',
  name: 'Chains',
  emoji: '⛓️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['chains', 'chain', 'locked', 'heavy', 'bound'],
  tone: 'silver',
  body: faces[0].d,
  shine: [19, 21, 45],
  shineSize: [4, 1.6],
  draw(c) {
    const R = L.r + L.w / 2;
    const bar = (x, k) => {
      const d = G.d(`M${x - L.len - R + 2.8} 0 L${x + L.len + R - 2.8} 0`);
      return `${m.tube(c, d, { width: 6.8, palette: 'silver', name: `e${k}` })}
        <path d="${G.d(`M${x - L.len} 0 L${x + L.len} 0`)}" stroke="#3A3E52" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round"/>`;
    };
    return `<path d="${faces[0].d}" fill="${c.ramp('silver')[1]}"/>
      ${faces.map((f, k) => m.tube(c, f.mid, { width: f.width, palette: 'silver', name: `f${k}` })).join('')}
      ${edges.map((x, k) => bar(x, k)).join('')}`;
  },
};
