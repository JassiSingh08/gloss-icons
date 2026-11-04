const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'ng-button',
  name: 'NG Button',
  emoji: '🆖',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['ng', 'no good', 'fail', 'button'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'NG', { palette: 'blue', size: 34 }),
};
