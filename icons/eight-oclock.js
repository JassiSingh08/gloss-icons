const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(8, 0),
  id: 'eight-oclock',
  name: 'Eight O’clock',
  emoji: '🕗',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'hour', 'eight', 'o\'clock'],
};
