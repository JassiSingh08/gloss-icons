const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(10, 0),
  id: 'ten-oclock',
  name: 'Ten O’clock',
  emoji: '🕙',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'ten', 'o\'clock'],
};
