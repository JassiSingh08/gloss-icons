const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(6, 30),
  id: 'six-thirty',
  name: 'Six-Thirty',
  emoji: '🕡',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'six', 'hour'],
};
