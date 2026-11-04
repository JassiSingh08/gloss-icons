const s = require('../src/parts/sign');
const pts = Array.from({ length: 33 }, (_, i) => {
  const x = 15 + (66 * i) / 32;
  return [x, 50 - 12 * Math.sin(((x - 15) / 66) * 3 * Math.PI)];
});
const body = s.tube(pts, 6.2);
module.exports = {
  id: 'wavy-dash',
  name: 'Wavy Dash',
  emoji: '〰️',
  group: 'Symbols',
  subgroup: 'punctuation',
  tags: ['wavy', 'dash', 'squiggle', 'wave', 'punctuation'],
  tone: 'blue',
  body,
  shine: [22, 41, -55],
  shineSize: [4.5, 2],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.3, 0.22)}"/>`;
  },
};
