const p = require('../src/parts/paper');
const fake = { linear: () => '', ramp: () => [] };
module.exports = {
  id: 'inbox-tray',
  name: 'Inbox Tray',
  emoji: '📥',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['inbox', 'receive', 'incoming', 'office', 'download'],
  tone: 'sky',
  body: p.tray(fake, 0).body,
  shine: [20, 63, -15],
  shineSize: [6, 2],
  draw(c) {
    return p.tray(c, 0).draw;
  },
};
