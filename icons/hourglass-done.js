const hg = require('./hourglass-not-done').hourglass;

module.exports = {
  ...hg(true),
  id: 'hourglass-done',
  name: 'Hourglass Done',
  emoji: '⌛',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['hourglass', 'time up', 'sand', 'timer', 'done'],
};
