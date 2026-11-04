const p = require('../src/parts/paper');
const OPT = { deg: 0, shift: [0, 4] };
const fake = { linear: () => '', ramp: () => [] };
module.exports = {
  id: 'envelope-with-arrow',
  name: 'Envelope With Arrow',
  emoji: '📩',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['mail', 'receive', 'download', 'inbox', 'message'],
  tone: 'cream',
  body: p.envelope(fake, OPT).body,
  shine: [21, 44, -30],
  draw(c) {
    const e = p.envelope(c, { ...OPT, flap: 'open' });
    const A = 'M48 70 L63 53 L55 53 L55 10 Q55 7 52 7 L44 7 Q41 7 41 10 L41 53 L33 53 Z';
    return `${e.open}${e.back}
      <path d="${A}" fill="#3D0003" opacity=".5" transform="translate(1.2 1.6)"/>
      <path d="${A}" fill="${c.linear('arrow', 'red', [0, 0, 1, 1], 0, 2)}" stroke="#3D0003" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>
      ${p.line('M44 12 L44 50', '#fff', 1.4, 0.5)}
      ${e.pocket}`;
  },
};
