// Laid out straight (bow at the origin, shaft along +x) and turned onto the diagonal, like key.js.
const m = require('../src/parts/metal');
const F = m.frame({ at: [26, 64], deg: -40, s: 1.15 });
const R = 13;
const h = 3.4;
// The bow is a four-lobed ring; the shaft leaves from the hollow between two lobes.
const lobe = (t) => R - 1.8 + 3.6 * Math.pow(Math.abs(Math.sin(2 * t)), 0.7);
const e = (Math.asin(h / (R - 1.8)) * 180) / Math.PI;
const arc = (r, from, to, k) => Array.from({ length: k + 1 }, (_, i) => {
  const t = ((from + ((to - from) * i) / k) * Math.PI) / 180;
  const rr = typeof r === 'function' ? r(t) : r;
  return [rr * Math.cos(t), rr * Math.sin(t)];
});
const outer = [[lobe((e * Math.PI) / 180) * Math.cos((e * Math.PI) / 180), -h], [16, -h], [16, -5.6], [20.5, -5.6], [20.5, -h], [55, -h], [58, 0], [58, 15], [52.5, 15], [52.5, 10.5], [49, 10.5], [49, 15], [45, 15], [45, h], [20.5, h], [20.5, 5.6], [16, 5.6], [16, h], ...arc(lobe, e, 360 - e, 96)];
// The hole runs the other way round so it cuts through the clip as well.
const hole = arc(6.2, 360, 0, 48);
const poly = (pts) => 'M' + pts.map((p) => F.p(p).map((v) => v.toFixed(2)).join(' ')).join(' L') + ' Z';
const body = `${poly(outer)} ${poly(hole)}`;
module.exports = {
  id: 'old-key',
  name: 'Old Key',
  emoji: '🗝️',
  group: 'Objects',
  subgroup: 'lock',
  tags: ['old key', 'antique', 'secret', 'vintage', 'clue'],
  tone: 'sand',
  body,
  shine: [20, 56, -60],
  shineSize: [5, 2.4],
  draw(c) {
    const iron = c.radial('a', 'sand', 0.3, 0.22);
    const ring = (r) => poly(arc(r, 0, 360, 48));
    return `<path d="${body}" fill="${iron}"/>
      <path d="${ring(9.6)}" fill="none" stroke="#5C4420" stroke-opacity=".45" stroke-width="1.2"/>
      <path d="${F.d('M-8.5 -6 A10.5 10.5 0 0 1 -2 -10.3')}" stroke="#fff" stroke-opacity=".7" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="${F.d('M16 -4.8 L16 4.8 M20.5 -4.8 L20.5 4.8')}" stroke="#5C4420" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="${F.d('M22 -1.2 L54 -1.2')}" stroke="#fff" stroke-opacity=".55" stroke-width="1.1" stroke-linecap="round"/>`;
  },
};
