const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(5, 30),
  id: 'five-thirty',
  name: 'Five-Thirty',
  emoji: '🕠',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'five', 'hour'],
};
