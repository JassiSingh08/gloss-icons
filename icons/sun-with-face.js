const f = require('../src/parts/face');
const sky = require('../src/parts/sky');

const CX = 48;
const CY = 48;
const R = 24;
const body = `M${CX} ${CY - R} A${R} ${R} 0 1 1 ${CX - 0.01} ${CY - R} Z`;
module.exports = {
  id: 'sun-with-face',
  name: 'Sun With Face',
  emoji: '🌞',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['sun', 'face', 'sunny', 'basking', 'summer', 'warm'],
  tone: 'gold',
  body,
  shine: [35.5, 34.5, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const ray = c.radial('ray', 'orange', 0.5, 0.5);
    // The smiley features, shrunk from the 30-radius head onto the sun's disc.
    const face = f.eyes.closed() + f.mouth.smile({ w: 10 });
    return `<path d="${sky.rays(CX, CY, R, 0.93)}" fill="${ray}" stroke="${c.ramp('orange')[3]}" stroke-opacity=".45" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="${body}" fill="${c.radial('a', 'gold', 0.35, 0.25)}"/>
      <g transform="translate(${CX} ${CY}) scale(0.8) translate(-48 -50)">${face}</g>`;
  },
};
