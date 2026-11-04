const n = (v) => +v.toFixed(2);
// A four-point star with deeply curved sides.
const twinkle = (x, y, s, k = 0.16) => `M${n(x)} ${n(y - s)} C${n(x + s * k)} ${n(y - s * k)} ${n(x + s * k)} ${n(y - s * k)} ${n(x + s)} ${n(y)} C${n(x + s * k)} ${n(y + s * k)} ${n(x + s * k)} ${n(y + s * k)} ${n(x)} ${n(y + s)} C${n(x - s * k)} ${n(y + s * k)} ${n(x - s * k)} ${n(y + s * k)} ${n(x - s)} ${n(y)} C${n(x - s * k)} ${n(y - s * k)} ${n(x - s * k)} ${n(y - s * k)} ${n(x)} ${n(y - s)} Z`;
const body = twinkle(40, 52, 30);

module.exports = {
  id: 'sparkles',
  name: 'Sparkles',
  emoji: '✨',
  group: 'Activities',
  subgroup: 'event',
  tags: ['sparkle', 'magic', 'shiny', 'new', 'glitter', 'clean'],
  tone: 'gold',
  body,
  shine: [36, 40, -45],
  shineSize: [3.5, 1.6],
  draw(c) {
    const gold = c.radial('a', 'gold', 0.4, 0.35);
    const small = c.radial('s', 'gold', 0.4, 0.35);
    const edge = `stroke="${c.ramp('gold')[3]}" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"`;
    return `<path d="${twinkle(71, 26, 14)}" fill="${small}" ${edge}/>
      <path d="${twinkle(72, 70, 10)}" fill="${small}" ${edge}/>
      <path d="${body}" fill="${gold}"/>
      <path d="M40 22 C41.5 44 41.5 44 70 52" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.2"/>
      <circle cx="69" cy="23.5" r="1.8" fill="#fff" opacity=".85"/>`;
  },
};
