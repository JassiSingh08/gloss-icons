const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(6, 0),
  id: 'six-oclock',
  name: 'Six O’clock',
  emoji: '🕕',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'six', 'o\'clock'],
};
