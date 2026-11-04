const p = require('../src/parts/paper');
const body = 'M48 13 Q51 13 54 14.5 L79 27 Q83 29 83 33 L83 62 Q83 66 79 68 L54 81 Q51 83 48 83 Q45 83 42 81 L17 68 Q13 66 13 62 L13 33 Q13 29 17 27 L42 14.5 Q45 13 48 13 Z';
module.exports = {
  id: 'package',
  name: 'Package',
  emoji: '📦',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['box', 'parcel', 'delivery', 'shipping', 'moving'],
  tone: 'sand',
  body,
  shine: [38, 25, -26],
  draw(c) {
    const s = c.ramp('sand');
    const tape = c.ramp('cream');
    return `<path d="M48 14 L81 30 L48 46 L15 30 Z" fill="${c.linear('top', 'sand', [0, 0, 1, 1], 0, 1)}"/>
      <path d="M15 30 L48 46 L48 82 L15 65 Z" fill="${c.linear('left', 'sand', [0, 0, 0, 1], 1, 2)}"/>
      <path d="M81 30 L48 46 L48 82 L81 65 Z" fill="${c.linear('right', 'sand', [0, 0, 1, 1], 2, 3)}"/>
      <path d="M33.15 21.2 L66.15 37.2 L66.15 54.4 L62.85 56 L62.85 38.8 L29.85 22.8 Z" fill="${tape[1]}" opacity=".85"/>
      <path d="M22 54 L36 61 L36 70 L22 63 Z" fill="${tape[0]}" opacity=".9"/>
      ${p.line('M25 59 L33 63 M25 62.5 L31 65.5', s[3], 1.2, 0.6)}
      <path d="M15 30 L48 46 L81 30" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="M48 46 L48 82" stroke="#000" stroke-opacity=".18" stroke-width="1"/>`;
  },
};
