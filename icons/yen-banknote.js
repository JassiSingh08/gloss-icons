const p = require('../src/parts/paper');
module.exports = {
  id: 'yen-banknote',
  name: 'Yen Banknote',
  emoji: '💴',
  group: 'Objects',
  subgroup: 'money',
  tags: ['yen', 'money', 'cash', 'japan', 'banknote'],
  tone: 'sand',
  body: p.banknote(p.FAKE, 'sand', '¥').body,
  shine: [20, 33, -30],
  shineSize: [6, 2.4],
  draw(c) {
    return p.banknote(c, 'sand', '¥').draw;
  },
};
