const p = require('../src/parts/paper');
const fake = { linear: () => '', ramp: () => [] };
module.exports = {
  id: 'outbox-tray',
  name: 'Outbox Tray',
  emoji: '📤',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['outbox', 'send', 'outgoing', 'office', 'upload'],
  tone: 'sky',
  body: p.tray(fake, 1).body,
  shine: [20, 63, -15],
  shineSize: [6, 2],
  draw(c) {
    return p.tray(c, 1).draw;
  },
};
