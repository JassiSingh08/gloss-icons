const a = require('../src/parts/animal');

const body = a.mirror([[48, 29], [36, 30], [27, 35], [22, 45], [20, 55], [16.5, 62, 1], [23, 66], [19.5, 70, 1], [27, 72], [36, 78.5], [48, 81]]);
module.exports = {
  id: 'tiger-face',
  name: 'Tiger Face',
  emoji: '🐯',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['tiger', 'big cat', 'stripes', 'wild', 'fierce'],
  tone: 'orange',
  body,
  shine: [32, 37, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#260800';
    const stripe = '#2A0A00';
    const ear = (x, s) => `${a.part(c, 'ear', a.ellipse(x, 33, 8.5, 8), 'orange')}<circle cx="${x + s * 1.2}" cy="34" r="4.6" fill="#2A0A00"/><circle cx="${x + s * 1.6}" cy="34.6" r="2.6" fill="#F7F5FF"/>`;
    const white = c.radial('w', 'white', 0.4, 0.2);
    const stripes = [
      a.taper(48, 30, 48, 42, 2.6), a.taper(40.5, 31, 42, 39.5, 2), a.taper(55.5, 31, 54, 39.5, 2),
      a.taper(16, 50, 29, 51, 2.4, 1), a.taper(80, 50, 67, 51, 2.4, -1),
      a.taper(18, 58, 28, 60, 2, 1), a.taper(78, 58, 68, 60, 2, -1),
      a.taper(23, 71, 31, 68, 1.8), a.taper(73, 71, 65, 68, 1.8),
    ].join(' ');
    return `${ear(27, 1)}${ear(69, -1)}
      <path d="${body}" fill="${c.radial('a', 'orange', 0.36, 0.22)}"/>
      ${a.clip(c, 'skin', body, `<path d="${a.mirror([[48, 58], [41, 56.5], [34, 60], [30, 67], [32, 75], [40, 80], [48, 82]])}" fill="${white}"/>
        <path d="M34 44 Q37 39 43 43 L41 47 Z M62 44 Q59 39 53 43 L55 47 Z" fill="#fff" opacity=".8"/>
        <path d="${stripes}" fill="${stripe}"/>`)}
      ${a.eyes(49, 10.5, { rx: 3.8, ry: 3.2, lid: 0.35, tilt: 1.1, ink })}
      <path d="M43 59 L53 59 Q53 62 48 65 Q43 62 43 59 Z" fill="#D9566E" stroke="#8A1E35" stroke-opacity=".5" stroke-width="1"/>
      ${a.line('M48 65 L48 67.5 Q44.5 71 41 69 M48 67.5 Q51.5 71 55 69', ink, 2)}
      ${a.whiskers(48, 68, 12, { len: 12, o: 0.6 })}`;
  },
};
