const f = require('../src/parts/face');

// Eyes shut, a long breath out of the corner of the mouth, puffing out below the cheek.
const PUFFS = [[25, 81.5, 4.8], [17, 79.5, 6.6], [9.5, 73.5, 5.2], [11, 82.5, 4.5]];
module.exports = {
  ...f.spec(),
  id: 'face-exhaling',
  name: 'Face Exhaling',
  emoji: '😮‍💨',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['sigh', 'exhale', 'relief', 'phew', 'tired'],
  draw(c) {
    const [, , , sh] = c.ramp('white');
    c.def(`<radialGradient id="${c.id('puff')}" gradientUnits="userSpaceOnUse" cx="12" cy="70" r="20"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.6" stop-color="#F2EFFA"/><stop offset="1" stop-color="#C9C2E0"/></radialGradient>`);
    const puff = (o) => PUFFS.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"${o}/>`).join('');
    return f.head(c) + f.eyes.closed({ y: 46 })
      + `<ellipse cx="38.5" cy="67" rx="3.6" ry="3.2" fill="${f.INK}"/>
      ${f.stroke('M34.5 70.5 Q33 73 30 74.5 Q27.5 75.8 26.5 78', 2.2, '#FFFFFF', ' opacity=".75"')}
      ${puff(` fill="none" stroke="${sh}" stroke-opacity=".7" stroke-width="2.4"`)}${puff(` fill="url(#${c.id('puff')})"`)}`;
  },
};
