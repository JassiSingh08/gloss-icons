const b = require('../src/parts/button');

module.exports = {
  ...b.spec('orange'),
  id: 'japanese-application-button',
  name: 'Japanese “application” Button',
  emoji: '🈸',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['application', 'apply', 'request', 'japanese'],
  draw: (c) =>
    b.face(c, 'orange') +
    b.label(c, '申', { palette: 'orange', size: 50 }),
};
