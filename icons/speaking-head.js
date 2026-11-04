const F = require('../src/parts/figure');

// A head in profile, silhouette like person (👤), talking: sound rings out from the mouth.
const HEAD = 'M20 84 L22 70 C12 64 8 52 8 40 C8 22 22 10 38 10 C52 10 61 19 62 31 L63 37 L69 46 Q70 49 66 50 L64 50 L65 54 L63 56 L64 60 C64 66 58 67 52 66 L50 66 L48 84 Z';
const ring = (r) => {
  const a = (35 * Math.PI) / 180;
  const p = (s) => `${F.n(64 + r * Math.cos(a))} ${F.n(52 + s * r * Math.sin(a))}`;
  return `M${p(-1)} A${r} ${r} 0 0 1 ${p(1)}`;
};
module.exports = {
  id: 'speaking-head',
  name: 'Speaking Head',
  emoji: '🗣️',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['speak', 'talk', 'voice', 'announce', 'say'],
  tone: 'blue',
  shine: [24, 22, -40], shineSize: [6, 2.6],
  ...F.build((c) => ({
    art: `<path d="${HEAD}" fill="${c.radial('a', 'blue', 0.3, 0.2)}"/>
      <path d="${ring(11)} ${ring(18.5)} ${ring(26)}" stroke="#001E4D" stroke-width="5.6" fill="none" stroke-linecap="round"/>
      <path d="${ring(11)} ${ring(18.5)} ${ring(26)}" stroke="${c.linear('w', 'blue', [0, 0, 1, 1], 0, 2)}" stroke-width="3.8" fill="none" stroke-linecap="round"/>`,
  })),
};
