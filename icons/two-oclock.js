const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(2, 0),
  id: 'two-oclock',
  name: 'Two O’clock',
  emoji: '🕑',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'two', 'o\'clock'],
};
