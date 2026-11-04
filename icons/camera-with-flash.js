const p = require('../src/parts/paper');
const cam = p.camera(p.FAKE);
const shift = (d) => p.map(d, (x, y) => [x + 4, y + 3]);
module.exports = {
  id: 'camera-with-flash',
  name: 'Camera With Flash',
  emoji: '📸',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['camera', 'flash', 'photo', 'selfie', 'paparazzi'],
  tone: 'black',
  body: shift(cam.body),
  shine: [23, 39, -30],
  shineSize: [5.5, 2.2],
  draw(c) {
    const burst = p.map('M18 4 L21.5 13.5 L31 10 L25 18 L33 23.5 L23 23.5 L22.5 33 L17.5 25 L10 31 L12.5 21.5 L3 19 L12.5 15.5 Z', (x, y) => [22 + (x - 18) * 0.85, 21 + (y - 19) * 0.85]);
    return `<circle cx="22" cy="21" r="8" fill="#FFE35C" opacity=".6" filter="url(#${c.id('b5')})"/>
      <g transform="translate(4 3)">${p.camera(c).draw}</g>
      <path d="${burst}" fill="${c.radial('burst', 'flame', 0.5, 0.5)}" stroke="#FFB000" stroke-width="1" stroke-linejoin="round"/>`;
  },
};
