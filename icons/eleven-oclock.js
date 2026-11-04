const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(11, 0),
  id: 'eleven-oclock',
  name: 'Eleven O’clock',
  emoji: '🕚',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'eleven', 'o\'clock'],
};
