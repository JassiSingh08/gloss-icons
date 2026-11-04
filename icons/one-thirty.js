const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(1, 30),
  id: 'one-thirty',
  name: 'One-Thirty',
  emoji: '🕜',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'one', 'hour'],
};
