// A jagged burst: red points outside, a hot yellow core.
const n = (v) => +v.toFixed(2);
const OUT = [36, 19, 31, 18, 35, 17, 29, 19, 34, 18, 30, 17, 36, 19, 30, 18];
const burst = (radii, k, cx = 48, cy = 50) =>
  `M${radii.map((r, i) => {
    const a = (i * Math.PI * 2) / radii.length - Math.PI / 2 + 0.12;
    return `${n(cx + r * k * Math.cos(a))} ${n(cy + r * k * 0.95 * Math.sin(a))}`;
  }).join(' L')} Z`;
const body = burst(OUT, 1);
module.exports = {
  id: 'collision',
  name: 'Collision',
  emoji: '💥',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['boom', 'bang', 'explosion', 'crash', 'impact'],
  tone: 'ember',
  body,
  shine: [30, 38, -45],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'ember', 0.35, 0.25)}" stroke-linejoin="round"/>
      <path d="${burst(OUT, 0.62, 49, 51)}" fill="${c.radial('core', 'gold', 0.4, 0.35)}" stroke="#C98500" stroke-opacity=".5" stroke-width="1"/>
      <path d="${burst(OUT, 0.3, 49.5, 51.5)}" fill="#FFF7D6" opacity=".9"/>`;
  },
};
