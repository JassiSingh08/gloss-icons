const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(4, 0),
  id: 'four-oclock',
  name: 'Four O’clock',
  emoji: '🕓',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'four', 'o\'clock'],
};
