const p = require('../src/parts/paper');
module.exports = {
  id: 'dollar-banknote',
  name: 'Dollar Banknote',
  emoji: '💵',
  group: 'Objects',
  subgroup: 'money',
  tags: ['dollar', 'money', 'cash', 'bill', 'banknote'],
  tone: 'green',
  body: p.banknote(p.FAKE, 'green', '$').body,
  shine: [20, 33, -30],
  shineSize: [6, 2.4],
  draw(c) {
    return p.banknote(c, 'green', '$').draw;
  },
};
