// A shouted bubble: jagged edge, its tail one long spike out of the lower right.
const n = (v) => +v.toFixed(2);
const pts = Array.from({ length: 22 }, (_, i) => {
  const a = (i * Math.PI * 2) / 22 - Math.PI / 2;
  const k = i % 2 ? 0.78 : 1;
  return [n(48 + 36 * k * Math.cos(a)), n(44 + 28 * k * Math.sin(a))];
});
pts[7] = [79, 83];
const body = `M${pts.map((p) => p.join(' ')).join(' L')} Z`;
module.exports = {
  id: 'right-anger-bubble',
  name: 'Right Anger Bubble',
  emoji: '🗯️',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['shout', 'angry', 'yell', 'bubble', 'rage'],
  tone: 'white',
  body,
  shine: [30, 30, -35],
  shineSize: [6, 2.6],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.3, 0.2)}" stroke-linejoin="round"/>`;
  },
};
