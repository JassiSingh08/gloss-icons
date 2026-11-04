const a = require('../src/parts/animal');
const { rodent } = require('./mouse');

const FUR = ['#D2C2B2', '#8E7A68', '#564434', '#221812'];
module.exports = rodent({
  id: 'rat',
  name: 'Rat',
  emoji: '🐀',
  tags: ['rat', 'rodent', 'city', 'sewer', 'pest'],
  coat: 'brown',
  fill: (c) => a.custom(c, 'a', FUR, 0.3, 0.25),
  ink: '#1A0E06',
  outline: [[30, 46], [44, 40], [60, 40.5], [72, 46], [79, 57], [78, 68], [70, 76], [54, 79.5], [38, 79.5], [28, 76], [21, 71.5], [13, 67], [6, 63.5], [5, 60.5], [9, 56.5], [16, 52.5], [23, 49]],
  ear: [30.5, 47, 5.6, 5.6],
  // A long bare tail laid out along the ground and up.
  tail: [[76, 72], [84, 76], [88, 70], [86, 60], [80, 54], [74, 52]],
  shine: [52, 46, -10],
});
