const m = require('../src/parts/metal');
const body = 'M17 34 A31 7.5 0 0 1 79 34 L72 79 Q71 84 64 84 L32 84 Q25 84 24 79 Z';
module.exports = {
  id: 'bucket',
  name: 'Bucket',
  emoji: '🪣',
  group: 'Objects',
  subgroup: 'household',
  tags: ['bucket', 'pail', 'water', 'clean', 'list'],
  tone: 'blue',
  body,
  shine: [25, 44, -80],
  shineSize: [6, 2.2],
  draw(c) {
    const pail = c.linear('a', 'blue', [0, 0, 1, 0], 0, 2);
    const inside = c.linear('i', 'blue', [0, 0, 0, 1], 2, 3);
    return `${m.tube(c, 'M18 36 C18 6 78 6 78 36', { width: 3.2, palette: 'silver', name: 'h' })}
      <path d="${body}" fill="${pail}"/>
      <ellipse cx="48" cy="34" rx="31" ry="7.5" fill="${inside}"/>
      <ellipse cx="48" cy="34" rx="31" ry="7.5" fill="none" stroke="#8CD8FF" stroke-width="2"/>
      <path d="M21.5 50 A27 6 0 0 0 74.5 50 M23.4 66 A25 5.6 0 0 0 72.6 66" stroke="#001E4D" stroke-opacity=".35" stroke-width="1.6" fill="none"/>
      <circle cx="17.6" cy="37" r="2.4" fill="${c.ramp('silver')[2]}"/><circle cx="78.4" cy="37" r="2.4" fill="${c.ramp('silver')[2]}"/>`;
  },
};
