const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(3, 0),
  id: 'three-oclock',
  name: 'Three O’clock',
  emoji: '🕒',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'three', 'o\'clock'],
};
