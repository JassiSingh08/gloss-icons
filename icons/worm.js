const k = require('../src/parts/critter');
// An earthworm stretched along the ground and lifting its head: ringed pink tube with a darker saddle.
const segs = [[[14, 76], [22, 58], [38, 54], [46, 66]], [[46, 66], [54, 78], [72, 82], [77, 64]], [[77, 64], [80, 52], [76, 42], [68, 36]]];
const W = (t) => 9 + 4 * Math.sin(Math.PI * Math.min(1, t * 1.2));
const body = k.tube(segs, W);
module.exports = {
  id: 'worm',
  name: 'Worm',
  emoji: '🪱',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['worm', 'earthworm', 'soil', 'garden', 'wriggle'],
  tone: 'pink',
  body,
  shine: [28, 59, -30],
  shineSize: [4.5, 2],
  draw(c) {
    const pts = k.sample(segs);
    const at = (t) => pts[Math.round(t * (pts.length - 1))];
    const [sx, sy] = at(0.72);
    return `<path d="${body}" fill="${c.radial('a', 'pink', 0.35, 0.25)}"/>
      <circle cx="${k.n(sx)}" cy="${k.n(sy)}" r="7" fill="#9E0030" opacity=".35"/>
      ${k.line(k.rings(segs, W, 14, 0.06, 0.94), '#9E0030', 1.3, 0.45)}`;
  },
};
