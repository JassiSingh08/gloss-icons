const p = require('../src/parts/paper');
module.exports = {
  id: 'pound-banknote',
  name: 'Pound Banknote',
  emoji: '💷',
  group: 'Objects',
  subgroup: 'money',
  tags: ['pound', 'money', 'cash', 'sterling', 'banknote'],
  tone: 'purple',
  body: p.banknote(p.FAKE, 'purple', '£').body,
  shine: [20, 33, -30],
  shineSize: [6, 2.4],
  draw(c) {
    return p.banknote(c, 'purple', '£').draw;
  },
};
