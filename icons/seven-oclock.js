const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(7, 0),
  id: 'seven-oclock',
  name: 'Seven O’clock',
  emoji: '🕖',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'seven', 'o\'clock'],
};
