const p = require('../src/parts/paper');
module.exports = {
  id: 'envelope',
  name: 'Envelope',
  emoji: '✉️',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['mail', 'letter', 'post', 'message', 'envelope'],
  tone: 'cream',
  body: p.envelope({ linear: () => '', ramp: () => [] }).body,
  shine: [22, 40, -35],
  draw(c) {
    const e = p.envelope(c);
    return `${e.back}${e.pocket}`;
  },
};
