const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'khanda',
  name: 'Khanda',
  emoji: '🪯',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['khanda', 'sikh', 'sikhism', 'religion', 'faith'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    // Kirpan: a curved single-edged blade hugging the chakkar from outside, hilts crossing below.
    const at = (r, deg) => [48 + r * Math.cos(s.rad(deg)), 47 + r * Math.sin(s.rad(deg))];
    const N = 14;
    const outer = [], inner = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N, th = 112 + 108 * t, w = 3.1 * Math.pow(1 - t, 0.7);
      outer.push(at(21.6 + w, th));
      inner.push(at(21.6 - w * 0.7, th));
    }
    const kirpan = `M${s.n(inner[0][0])} ${s.n(inner[0][1])}${s.smooth(inner)} L${s.n(outer[N][0])} ${s.n(outer[N][1])}${s.smooth(outer.slice().reverse())} Z`;
    const [rx, ry] = at(21.6, 112);
    const hx = rx + 12.5 * 0.927, hy = ry + 12.5 * 0.375;
    const hilt = `M${s.n(rx)} ${s.n(ry)} L${s.n(hx)} ${s.n(hy)} M${s.n(rx + 3.8 * 0.375)} ${s.n(ry - 3.8 * 0.927)} L${s.n(rx - 3.8 * 0.375)} ${s.n(ry + 3.8 * 0.927)}`;
    const sword = 'M48 17.5 L52.6 24.5 L51.6 60 L44.4 60 L43.4 24.5 Z';
    const one = (k) => `<path d="${kirpan}" fill="${k}"/><path d="${hilt}" stroke="${k}" stroke-width="3.2" stroke-linecap="round"/>`;
    const art = (k) => `${one(k)}<g transform="matrix(-1 0 0 1 96 0)">${one(k)}</g>
      <circle cx="48" cy="47" r="12.5" fill="none" stroke="${k}" stroke-width="3.8"/>
      <path d="${sword}" fill="${k}" stroke="${g}" stroke-width="1.6"/>
      <path d="${sword}" fill="${k}"/>
      <rect x="40" y="59" width="16" height="3.6" rx="1.6" fill="${k}" stroke="${g}" stroke-width="1"/>
      <rect x="45.9" y="62" width="4.2" height="9" rx="1.2" fill="${k}" stroke="${g}" stroke-width=".8"/><circle cx="48" cy="72.6" r="2.5" fill="${k}"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
