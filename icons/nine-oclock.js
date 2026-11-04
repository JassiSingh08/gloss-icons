const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(9, 0),
  id: 'nine-oclock',
  name: 'Nine O’clock',
  emoji: '🕘',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'nine', 'o\'clock'],
};
