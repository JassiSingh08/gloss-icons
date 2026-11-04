// "100" with a double underline, slanted like a teacher's red pen. Digits are paths: the zeros
// are rings, the inner edge wound the other way so it cuts a hole.
const n = (v) => +v.toFixed(2);
const sk = ([x, y]) => [n(x - (y - 48) * 0.2), n(y)];
const poly = (pts) => `M${pts.map((p) => sk(p).join(' ')).join(' L')} Z`;
const ring = (cx, cy, rx, ry, dir) =>
  poly(Array.from({ length: 40 }, (_, i) => {
    const a = (dir * i * Math.PI * 2) / 40;
    return [cx + rx * Math.sin(a), cy - ry * Math.cos(a)];
  }));
const zero = (cx) => `${ring(cx, 39, 11.5, 22, 1)} ${ring(cx, 39, 4.6, 14, -1)}`;
const one = poly([[14, 26], [23, 17], [29, 17], [29, 61], [20.5, 61], [20.5, 30], [14, 34]]);
const lines = `${poly([[15, 66.5], [84, 65.5], [83.5, 71.5], [14.5, 72.5]])} ${poly([[18, 76.5], [80, 75.5], [79.5, 81.5], [17.5, 82.5]])}`;
const body = `${one} ${zero(45)} ${zero(71)} ${lines}`;
module.exports = {
  id: 'hundred-points',
  name: 'Hundred Points',
  emoji: '💯',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['100', 'perfect', 'score', 'agree', 'keep it real'],
  tone: 'red',
  body,
  shine: sk([23.5, 30]).concat(-80),
  shineSize: [4.5, 1.6],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.2)}"/>`;
  },
};
