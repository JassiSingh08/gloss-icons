const sky = require('../src/parts/sky');

const C = sky.cloud(50, 46, 0.95);
const body = sky.cloudPath(C);
// Mist bars drift across the front of the cloud, each a soft lacquered capsule.
const BARS = [[14, 62, 58], [24, 71, 60], [18, 80, 46]];
module.exports = {
  id: 'fog',
  name: 'Fog',
  emoji: '🌫️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['fog', 'mist', 'haze', 'weather', 'foggy'],
  tone: 'silver',
  body,
  shine: sky.shineOn(C[1]),
  draw(c) {
    c.def(`<linearGradient id="${c.id('mist')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#B5C1DD"/></linearGradient>`);
    const bars = BARS.map(([x, y, w]) => `<rect x="${x}" y="${y - 3.4}" width="${w}" height="6.8" rx="3.4" fill="url(#${c.id('mist')})" stroke="#5C6A90" stroke-opacity=".55" stroke-width="1"/>`).join('');
    return sky.paintCloud(c, C, { kind: 'rain' }) + bars;
  },
};
