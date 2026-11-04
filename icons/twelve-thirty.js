const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(12, 30),
  id: 'twelve-thirty',
  name: 'Twelve-Thirty',
  emoji: '🕧',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'twelve', 'hour'],
};
