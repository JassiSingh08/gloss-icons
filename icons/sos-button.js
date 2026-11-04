const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'sos-button',
  name: 'SOS Button',
  emoji: '🆘',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['sos', 'help', 'emergency', 'rescue'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, 'SOS', { palette: 'red', size: 30 }),
};
