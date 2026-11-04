const f = require('../src/parts/face');
const sky = require('../src/parts/sky');

const ink = '#080C1F';
module.exports = {
  id: 'new-moon-face',
  name: 'New Moon Face',
  emoji: '🌚',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'face', 'dark', 'creepy', 'sly', 'night'],
  tone: 'slate',
  body: sky.moonDisc,
  shine: [32, 30, -40],
  draw: (c) => sky.moonPhase(c, 0, 0, { dark: true, spots: sky.RIM_CRATERS })
    + `<g transform="translate(0 -2)">${f.brows.flat({ ink, y: 35 })}${f.eyes.lidded({ ink, tilt: -3 })}${f.mouth.smirk({ ink })}</g>`,
};
