const a = require('../src/parts/animal');
const { bovine } = require('./cow');

module.exports = bovine({
  id: 'ox',
  name: 'Ox',
  emoji: '🐂',
  tags: ['ox', 'bull', 'taurus', 'strong', 'cattle'],
  coat: 'brown',
  // Wide horns sweeping forward and up.
  horn: a.spline([[18.5, 31], [14, 26], [13, 19], [15.5, 12.5, 1], [17, 19.5], [20.5, 25.5], [24.5, 30]]),
  muzzle: (c) => c.radial('muzzle', 'sand', 0.4, 0.25),
});
