const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'information',
  name: 'Information',
  emoji: 'ℹ️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['info', 'information', 'help', 'about'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'i', { palette: 'blue', size: 44 }),
};
