const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(2, 30),
  id: 'two-thirty',
  name: 'Two-Thirty',
  emoji: '🕝',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'two', 'hour'],
};
