const clock = require('../src/parts/clock');

module.exports = {
  ...clock.spec(4, 30),
  id: 'four-thirty',
  name: 'Four-Thirty',
  emoji: '🕟',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['clock', 'time', 'half past', 'four', 'hour'],
};
