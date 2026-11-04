const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(3, 30),
  id: 'three-thirty',
  name: 'Three-Thirty',
  emoji: '🕞',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'three', 'hour'],
};
