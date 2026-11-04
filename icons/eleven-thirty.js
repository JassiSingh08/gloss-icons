const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(11, 30),
  id: 'eleven-thirty',
  name: 'Eleven-Thirty',
  emoji: '🕦',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'eleven', 'hour'],
};
