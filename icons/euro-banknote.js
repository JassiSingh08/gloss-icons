const p = require('../src/parts/paper');
module.exports = {
  id: 'euro-banknote',
  name: 'Euro Banknote',
  emoji: '💶',
  group: 'Objects',
  subgroup: 'money',
  tags: ['euro', 'money', 'cash', 'europe', 'banknote'],
  tone: 'blue',
  body: p.banknote(p.FAKE, 'blue', '€').body,
  shine: [20, 33, -30],
  shineSize: [6, 2.4],
  draw(c) {
    return p.banknote(c, 'blue', '€').draw;
  },
};
