const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(5, 0),
  id: 'five-oclock',
  name: 'Five O’clock',
  emoji: '🕔',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'five', 'o\'clock'],
};
