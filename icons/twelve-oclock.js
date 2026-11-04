const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(12, 0),
  id: 'twelve-oclock',
  name: 'Twelve O’clock',
  emoji: '🕛',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'twelve', 'o\'clock'],
};
