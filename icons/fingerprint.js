const F = require('../src/parts/figure');

// Ridges of a fingertip: a whorl at the core, loops widening out, each broken somewhere.
const n = F.n;
function arc(cx, cy, rx, ry, a0, a1) {
  const p = (a) => `${n(cx + rx * Math.cos(a))} ${n(cy + ry * Math.sin(a))}`;
  const big = Math.abs(a1 - a0) > Math.PI ? 1 : 0;
  return `M${p(a0)} A${rx} ${ry} 0 ${big} 1 ${p(a1)}`;
}
const D = Math.PI / 180;
const RIDGES = [
  arc(48, 46, 3, 4.5, -90 * D, 200 * D),
  arc(48, 47, 8, 10, -150 * D, 160 * D),
  arc(48, 48, 13, 15.5, 200 * D, 500 * D),
  arc(48, 49, 18, 21, 170 * D, 470 * D),
  arc(48, 50, 23, 27, 160 * D, 380 * D),
  arc(48, 50, 23, 27, 400 * D, 480 * D),
  arc(48, 52, 28, 32, 185 * D, 355 * D),
].join(' ');
module.exports = {
  id: 'fingerprint',
  name: 'Fingerprint',
  emoji: '🫆',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['fingerprint', 'identity', 'biometric', 'unlock', 'touch id'],
  tone: 'purple',
  shine: [30, 32, -50], shineSize: [3.4, 1.4],
  ...F.build((c) => ({
    art: `<path d="${RIDGES}" stroke="#1A0040" stroke-width="5.6" fill="none" stroke-linecap="round"/>
      <path d="${RIDGES}" stroke="${c.radial('r', 'purple', 0.3, 0.2)}" stroke-width="3.9" fill="none" stroke-linecap="round"/>`,
  })),
};
