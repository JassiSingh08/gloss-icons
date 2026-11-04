const m = require('../src/parts/metal');
const G = m.frame({ at: [48, 48], deg: -35, s: 1.1 });
const L = { len: 7.5, r: 7, w: 6 };
const left = m.chainLink(G, { ...L, x: -27 });
const right = m.chainLink(G, { ...L, x: 27 });
// Half links, snapped open towards the break in the middle.
const half = (x, dir) => G.d(`M${x + dir * 3} ${-L.r} L${x - dir * 7} ${-L.r} A${L.r} ${L.r} 0 0 ${dir > 0 ? 0 : 1} ${x - dir * 7} ${L.r} L${x + dir * 3} ${L.r}`);
module.exports = {
  id: 'broken-chain',
  name: 'Broken Chain',
  emoji: '⛓️‍💥',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['broken chain', 'freedom', 'break free', 'escape', 'release'],
  tone: 'silver',
  body: left.d,
  shine: [15, 60, -35],
  shineSize: [4, 1.6],
  draw(c) {
    const spark = c.radial('s', 'flame', 0.5, 0.5);
    let star = '';
    for (let i = 0; i < 16; i++) {
      const t = (i * Math.PI) / 8 + 0.2;
      const r = i % 2 ? 5 : i % 4 ? 11 : 15;
      star += `${i ? 'L' : 'M'}${(48 + r * Math.sin(t)).toFixed(2)} ${(48 - r * Math.cos(t)).toFixed(2)} `;
    }
    return `<path d="${star}Z" fill="${spark}" stroke="#E02A00" stroke-opacity=".45" stroke-width="1" stroke-linejoin="round"/>
      <path d="${left.d}" fill="${c.ramp('silver')[1]}"/>
      ${m.tube(c, left.mid, { width: left.width, palette: 'silver', name: 'l' })}
      ${m.tube(c, right.mid, { width: right.width, palette: 'silver', name: 'r' })}
      ${m.tube(c, half(-12, 1), { width: 5.6, palette: 'silver', name: 'hl', cap: 'butt' })}
      ${m.tube(c, half(12, -1), { width: 5.6, palette: 'silver', name: 'hr', cap: 'butt' })}
      <circle cx="30" cy="30" r="1.6" fill="#FFE35C"/><circle cx="66" cy="68" r="1.4" fill="#FFE35C"/><circle cx="62" cy="26" r="1.2" fill="#fff"/>`;
  },
};
