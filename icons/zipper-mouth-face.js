const f = require('../src/parts/face');

// A metal zip across the mouth with its pull hanging off the right end.
module.exports = {
  ...f.spec(),
  id: 'zipper-mouth-face',
  name: 'Zipper-Mouth Face',
  emoji: '🤐',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['zip it', 'secret', 'silent', 'sealed', 'no comment'],
  draw(c) {
    const [l, m, d, sh] = c.ramp('silver');
    const teeth = Array.from({ length: 9 }, (_, i) => `M${33 + i * 3.4} 62.6 L${33 + i * 3.4} 67.4`).join(' ');
    return f.head(c) + f.brows.flat({ y: 35 }) + f.eyes.oval()
      + `<path d="M31 65 L64 65" stroke="${f.INK}" stroke-width="7.4" stroke-linecap="round"/>
      <path d="M31 65 L64 65" stroke="${c.linear('track', 'silver', [0, 0, 0, 1], 0, 2)}" stroke-width="5" stroke-linecap="round"/>
      <path d="${teeth}" stroke="${d}" stroke-width="1.4"/>
      <path d="M31 65 L64 65" stroke="${sh}" stroke-width="0.9" opacity=".7"/>
      <rect x="62" y="61.5" width="7" height="7" rx="1.8" fill="${c.linear('slider', 'silver', [0, 0, 1, 1], 0, 2)}" stroke="${sh}" stroke-width="1.1"/>
      <path d="M66.5 67 L68.5 77.5" stroke="${sh}" stroke-width="6.6" stroke-linecap="round"/>
      <path d="M66.5 67 L68.5 77.5" stroke="${c.linear('pull', 'silver', [0, 0, 1, 0], 0, 2)}" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M67.4 71 L68.1 74.5" stroke="${sh}" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
