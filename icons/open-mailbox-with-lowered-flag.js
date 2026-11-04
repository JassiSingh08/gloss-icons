const p = require('../src/parts/paper');
const OPT = { open: true, flagUp: false, letters: false };
module.exports = {
  id: 'open-mailbox-with-lowered-flag',
  name: 'Open Mailbox With Lowered Flag',
  emoji: '📭',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['mailbox', 'mail', 'empty', 'no mail', 'post'],
  tone: 'blue',
  body: p.mailbox(p.FAKE, OPT).body,
  shine: [48, 33, -8],
  shineSize: [6, 2],
  draw(c) {
    return p.mailbox(c, OPT).draw;
  },
};
