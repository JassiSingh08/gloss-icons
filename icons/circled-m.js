const b = require('../src/parts/button');

module.exports = {
  ...b.spec('navy', 'circle'),
  id: 'circled-m',
  name: 'Circled M',
  emoji: 'Ⓜ️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['m', 'metro', 'subway', 'circle'],
  draw: (c) =>
    b.face(c, 'navy', 'circle') +
    `<circle cx="48" cy="47" r="28.5" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="3.2"/>` + b.label(c, 'M', { palette: 'navy', shape: 'circle', size: 30 }),
};
