const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(8, 30),
  id: 'eight-thirty',
  name: 'Eight-Thirty',
  emoji: '🕣',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'eight', 'hour'],
};
