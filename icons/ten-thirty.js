const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(10, 30),
  id: 'ten-thirty',
  name: 'Ten-Thirty',
  emoji: '🕥',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'ten', 'hour'],
};
