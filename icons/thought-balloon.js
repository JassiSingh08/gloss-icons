// A scalloped cloud with two small bubbles trailing down to the thinker.
const n = (v) => +v.toFixed(2);
const N = 9;
const P = Array.from({ length: N }, (_, i) => {
  const a = (i * Math.PI * 2) / N - Math.PI / 2 + 0.2;
  return [n(52 + 30 * Math.cos(a)), n(40 + 21 * Math.sin(a))];
});
const cloud = `M${P[0].join(' ')} ${P.map((p, i) => {
  const q = P[(i + 1) % N];
  const r = n(Math.hypot(q[0] - p[0], q[1] - p[1]) * 0.6);
  return `A${r} ${r} 0 0 1 ${q.join(' ')}`;
}).join(' ')} Z`;
const bubble = (x, y, r) => `M${x} ${y - r} A${r} ${r} 0 1 1 ${n(x - 0.01)} ${y - r} Z`;
const body = [cloud, bubble(25, 71, 6.5), bubble(15, 82, 3.8)];
module.exports = {
  id: 'thought-balloon',
  name: 'Thought Balloon',
  emoji: '💭',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['thinking', 'thought', 'idea', 'daydream', 'wonder'],
  tone: 'white',
  body,
  shine: [32, 30, -35],
  shineSize: [6, 2.6],
  draw(c) {
    return `<path d="${cloud}" fill="${c.radial('a', 'white', 0.3, 0.2)}"/>
      <path d="${body[1]}" fill="${c.radial('b', 'white', 0.3, 0.2)}"/>
      <path d="${body[2]}" fill="${c.radial('c', 'white', 0.3, 0.2)}"/>
      <ellipse cx="22.5" cy="68.5" rx="2.2" ry="1.2" fill="#fff" transform="rotate(-40 22.5 68.5)"/>`;
  },
};
