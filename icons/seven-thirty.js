const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(7, 30),
  id: 'seven-thirty',
  name: 'Seven-Thirty',
  emoji: '🕢',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'seven', 'hour'],
};
