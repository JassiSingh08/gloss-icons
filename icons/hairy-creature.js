const F = require('../src/parts/figure');

// A shaggy forest creature: one mound of fur, a bare face peering out, long arms, big feet.
const n = F.n;
function shag(cx, cy, rx, ry, k = 30, depth = 3.2) {
  const pts = Array.from({ length: k * 2 }, (_, i) => {
    const t = (i / (k * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 ? 1 : 1 + depth / Math.min(rx, ry);
    return `${n(cx + Math.cos(t) * rx * r)} ${n(cy + Math.sin(t) * ry * r)}`;
  });
  return `M${pts.join(' L')} Z`;
}
module.exports = {
  id: 'hairy-creature',
  name: 'Hairy Creature',
  emoji: '🫈',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['bigfoot', 'sasquatch', 'yeti', 'cryptid', 'furry'],
  tone: 'brown',
  shine: [32, 22, -40], shineSize: [5, 2.2],
  ...F.build((c) => {
    const fur = F.cloth(c, 'brown');
    const br = c.ramp('brown');
    const face = c.radial('face', 'sand', 0.35, 0.3);
    const ink = '#331805';
    const arm = (pts) => `<path d="${F.limbPath(pts, 11, 9)}" fill="${fur}" stroke="${br[3]}" stroke-opacity=".6" stroke-width="1.2"/>`;
    const foot = (x) => `<ellipse cx="${x}" cy="80" rx="9" ry="4.5" fill="${c.linear('foot', 'brown', [0, 0, 0, 1], 1, 3)}" stroke="${br[3]}" stroke-width="1.2"/>`;
    return {
      art: foot(36) + foot(60)
        + `<path d="${shag(48, 46, 25, 32)}" fill="${fur}" stroke="${br[3]}" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>`
        + arm([[28, 42], [20, 56], [22, 72]]) + arm([[68, 42], [76, 56], [74, 72]])
        + F.hand(c, 22, 74, { dir: 95, paint: face, edge: br[3] }) + F.hand(c, 74, 74, { dir: 85, paint: face, edge: br[3] })
        + `<path d="M34 30 C34 22 62 22 62 30 C64 40 58 48 48 48 C38 48 32 40 34 30 Z" fill="${face}" stroke="${br[3]}" stroke-opacity=".6" stroke-width="1.2"/>
          <path d="M37 30 L45 32 M59 30 L51 32" stroke="${ink}" stroke-width="2.6" stroke-linecap="round"/>
          <circle cx="42" cy="35" r="2.3" fill="${ink}"/><circle cx="54" cy="35" r="2.3" fill="${ink}"/>
          <path d="M44 42 Q48 44.5 52 42" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <path d="M40 58 L42 64 M48 56 L48 63 M56 58 L54 64 M36 66 L39 72 M60 66 L57 72" stroke="${br[3]}" stroke-opacity=".4" stroke-width="1.6" stroke-linecap="round"/>`,
    };
  }),
};
