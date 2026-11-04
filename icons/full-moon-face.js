const f = require('../src/parts/face');
const sky = require('../src/parts/sky');

module.exports = {
  id: 'full-moon-face',
  name: 'Full Moon Face',
  emoji: '🌝',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'face', 'full moon', 'smug', 'night'],
  tone: 'gold',
  body: sky.moonDisc,
  shine: [32, 30, -40],
  draw: (c) => sky.moonPhase(c, 0, 0, { full: true, spots: sky.RIM_CRATERS })
    + `<g transform="translate(0 -2)">${f.brows.flat({ y: 35 })}${f.eyes.lidded()}${f.mouth.smile({ w: 10 })}</g>`,
};
