const s = require('./snowman').snowman(false);

module.exports = {
  ...s,
  id: 'snowman-without-snow',
  name: 'Snowman Without Snow',
  emoji: '⛄',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['snowman', 'winter', 'snow', 'frosty', 'cold'],
};
