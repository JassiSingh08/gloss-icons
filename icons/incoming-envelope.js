const p = require('../src/parts/paper');
const OPT = { deg: -12, scale: 0.86, shift: [7, 0] };
const fake = { linear: () => '', ramp: () => [] };
module.exports = {
  id: 'incoming-envelope',
  name: 'Incoming Envelope',
  emoji: '📨',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['incoming', 'mail', 'new message', 'delivery', 'inbox'],
  tone: 'cream',
  body: p.envelope(fake, OPT).body,
  shine: [32, 42, -40],
  draw(c) {
    const e = p.envelope(c, OPT);
    const s = c.ramp('sky');
    return `${p.line('M8 50 L22 47.5 M5 61 L22 58 M10 72 L24 69.5', s[3], 5.4, 0.6)}
      ${p.line('M8 50 L22 47.5 M5 61 L22 58 M10 72 L24 69.5', s[1], 3.6)}
      ${e.back}${e.pocket}`;
  },
};
