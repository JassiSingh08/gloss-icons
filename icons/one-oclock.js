const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(1, 0),
  id: 'one-oclock',
  name: 'One O’clock',
  emoji: '🕐',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'one', 'o\'clock'],
};
