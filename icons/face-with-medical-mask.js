const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

const MASK = 'M23.5 53.5 Q48 48.5 72.5 53.5 Q73.5 66 68 73 Q59 80.5 48 80.5 Q37 80.5 28 73 Q22.5 66 23.5 53.5 Z';
module.exports = {
  ...f.spec(),
  id: 'face-with-medical-mask',
  name: 'Face With Medical Mask',
  emoji: '😷',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['mask', 'sick', 'flu', 'doctor', 'cold'],
  draw(c) {
    const cloth = c.linear('mask', 'white', [0, 0, 0.2, 1], 0, 2);
    const strap = '#BDB2E8';
    return f.head(c) + b.worried({ y: 33 }) + f.eyes.lidded({ y: 42, tilt: -3 })
      + `<path d="M24 56 L19 48.5 M25.5 71 L20.5 64" stroke="${strap}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="${MASK}" fill="${cloth}" stroke="#6E61A8" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="M27 60.5 Q48 56.5 69 60.5 M28 67 Q48 63.5 68 67" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
