const h = require('../src/parts/hand');

const T = { index: { spread: 2, curl: [14, 20, 8] }, middle: { spread: 0, curl: [14, 20, 8] }, ring: { spread: -2, curl: [14, 20, 8] }, pinky: { spread: -4, curl: [14, 20, 8] } };
const o = { scale: 0.74, aim: [[0.12, 0.8, -0.55], [0, 0.55, 0.83]], fingers: T, thumb: { out: 40 } };
// Two cupped palms side by side as their owner sees them: little fingers touching, thumbs outside.
const a = h.group([h.hand({ ...o, mirror: true, at: [34, 56] }), h.hand({ ...o, at: [62, 56] })]);

module.exports = {
  id: 'palms-up-together',
  name: 'Palms Up Together',
  emoji: '🤲',
  group: 'People & Body',
  subgroup: 'hands',
  tags: ['prayer', 'cupped hands', 'dua', 'offering', 'please'],
  tone: 'yellow',
  body: a.body,
  shine: [28, 58, -50],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
