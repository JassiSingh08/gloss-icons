const p = require('../src/parts/paper');
const OPT = { open: false, flagUp: true, letters: false };
module.exports = {
  id: 'closed-mailbox-with-raised-flag',
  name: 'Closed Mailbox With Raised Flag',
  emoji: '📫',
  group: 'Objects',
  subgroup: 'mail',
  tags: ['mailbox', 'mail', 'new mail', 'letters', 'post'],
  tone: 'blue',
  body: p.mailbox(p.FAKE, OPT).body,
  shine: [48, 33, -8],
  shineSize: [6, 2],
  draw(c) {
    return p.mailbox(c, OPT).draw;
  },
};
