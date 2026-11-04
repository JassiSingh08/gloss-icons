const clock = require('../src/parts/clock');

// A tambour case: an arched wooden body on a wider plinth.
const body = 'M14 77 Q14 72 19 72 L21 72 L21 52 C21 31 33 19 48 19 C63 19 75 31 75 52 L75 72 L77 72 Q82 72 82 77 L82 79.5 Q82 84 77 84 L19 84 Q14 84 14 79.5 Z';
module.exports = {
  id: 'mantelpiece-clock',
  name: 'Mantelpiece Clock',
  emoji: '🕰️',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'antique', 'mantel', 'vintage', 'time'],
  tone: 'brown',
  body,
  shine: [30, 32, -50],
  draw(c) {
    const brass = c.radial('rim', 'gold', 0.3, 0.25);
    return `<circle cx="48" cy="15" r="4" fill="${c.radial('knob', 'gold', 0.35, 0.3)}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1"/>
      <path d="${body}" fill="${c.radial('a', 'brown', 0.3, 0.2)}"/>
      <path d="M14 72 L82 72" stroke="#331805" stroke-opacity=".45" stroke-width="1.4"/>
      <path d="M26 70 L26 52 C26 35 36 24 48 24 C60 24 70 35 70 52 L70 70" fill="none" stroke="#E8B98A" stroke-opacity=".35" stroke-width="1.2"/>
      <circle cx="48" cy="48" r="19.5" fill="${brass}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1"/>
      ${clock.dial(c, { cx: 48, cy: 48, r: 16, h: 4, m: 0, palette: 'cream' })}`;
  },
};
