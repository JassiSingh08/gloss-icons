const s = require('../src/parts/sign');
// Lemniscate drawn as one ribbon: the under strand stops just short of the over strand at the
// crossing, so the outline reads as a loop passing over itself.
const pt = (t) => {
  const q = 1 + Math.sin(t) ** 2;
  return [48 + (32 * Math.cos(t)) / q, 50 + (1.4 * 32 * Math.sin(t) * Math.cos(t)) / q];
};
const gap = 0.3;
const N = 44;
const pts = Array.from({ length: N + 1 }, (_, i) => pt((3 * Math.PI) / 2 + gap + ((2 * Math.PI - 2 * gap) * i) / N));
const body = s.tube(pts, 5.6, { caps: 'butt' });
module.exports = {
  id: 'infinity',
  name: 'Infinity',
  emoji: '♾️',
  group: 'Symbols',
  subgroup: 'math',
  tags: ['infinity', 'forever', 'endless', 'unlimited', 'math'],
  tone: 'blue',
  body,
  shine: [69, 39, 30],
  shineSize: [5, 2.2],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.3, 0.22)}"/>`;
  },
};
