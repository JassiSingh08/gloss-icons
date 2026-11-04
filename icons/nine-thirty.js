const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(9, 30),
  id: 'nine-thirty',
  name: 'Nine-Thirty',
  emoji: '🕤',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'nine', 'hour'],
};
