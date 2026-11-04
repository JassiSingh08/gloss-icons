const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'face-with-thermometer',
  name: 'Face With Thermometer',
  emoji: '🤒',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['fever', 'sick', 'ill', 'temperature', 'flu'],
  draw(c) {
    const glass = c.linear('glass', 'white', [0, 0, 0, 1], 0, 2);
    const bulb = c.radial('bulb', 'red', 0.35, 0.3);
    return f.head(c) + f.extras.blush(c, { opacity: 0.75, rx: 7, ry: 4.2 })
      + b.worried({ y: 35 }) + f.eyes.lidded({ tilt: -4 })
      + f.stroke('M37 67.5 Q42 69 47.5 67')
      + `<path d="M46 66.5 L81 79" stroke="#6E61A8" stroke-width="7.4" stroke-linecap="round"/>
      <path d="M46 66.5 L81 79" stroke="${glass}" stroke-width="5.4" stroke-linecap="round"/>
      <path d="M48 67.2 L68 74.3" stroke="${bulb}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M62 69.8 L61.2 71.9 M67 71.6 L66.2 73.7 M72 73.4 L71.2 75.5" stroke="#6E61A8" stroke-width="1" stroke-linecap="round"/>
      <circle cx="47" cy="66.9" r="3.4" fill="${bulb}"/>
      <path d="M50 64.6 L78 74.6" stroke="#fff" stroke-opacity=".8" stroke-width="1.1" stroke-linecap="round"/>`;
  },
};
