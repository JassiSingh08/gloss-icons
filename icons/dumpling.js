// A plump crescent of dough with a frilled, pleated crest and a pan-browned base.
const d = require('../src/parts/dish');
const N = 9;
const arc = Array.from({ length: N + 1 }, (_, i) => {
  const a = Math.PI + (i / N) * Math.PI;
  return [48 + Math.cos(a) * 36, 64 + Math.sin(a) * 37];
});
let crest = `M${arc[0][0].toFixed(2)} ${arc[0][1].toFixed(2)}`;
for (let i = 0; i < N; i++) {
  const [x0, y0] = arc[i];
  const [x1, y1] = arc[i + 1];
  const mx = (x0 + x1) / 2;
  const my = (y0 + y1) / 2;
  const k = Math.hypot(mx - 48, my - 64);
  crest += ` Q${(48 + ((mx - 48) * (k + 4.5)) / k).toFixed(2)} ${(64 + ((my - 64) * (k + 4.5)) / k).toFixed(2)} ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}
const body = `${crest} C85 72 79 79 68 79 L28 79 C17 79 11 72 12 64 Z`;
module.exports = {
  id: 'dumpling',
  name: 'Dumpling',
  emoji: '🥟',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['dumpling', 'gyoza', 'potsticker', 'dim sum', 'chinese'],
  tone: 'cream',
  body,
  shine: [26, 42, -50],
  draw(c) {
    c.def(`<linearGradient id="${c.id('dough')}" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#FFFDF5"/><stop offset="0.55" stop-color="#FFEBC4"/><stop offset="0.82" stop-color="#E8B66E"/><stop offset="1" stop-color="#9A5A1E"/></linearGradient>`);
    let pleats = '';
    for (let i = 1; i < N; i++) {
      const [x, y] = arc[i];
      const dx = 48 - x;
      const dy = 66 - y;
      const l = Math.hypot(dx, dy);
      pleats += `M${x.toFixed(2)} ${y.toFixed(2)} q${((dx / l) * 6 + 2).toFixed(2)} ${((dy / l) * 6).toFixed(2)} ${((dx / l) * 11).toFixed(2)} ${((dy / l) * 13).toFixed(2)} `;
    }
    return `<path d="${body}" fill="url(#${c.id('dough')})"/>
      <path d="${pleats}" stroke="#C9904A" stroke-opacity=".7" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M16 70 C26 74 70 74 80 70" stroke="#FFF4D6" stroke-opacity=".5" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
