// Five notched petals traced as one outline: each petal runs valley, lobe, notch, lobe, valley.
const C = [48, 40];
const PETAL = [
  ['C', [-10, 15], [-16, 26], [-7, 28.5]],
  ['C', [-3.5, 29], [-1.5, 26.5], [0, 24.5]],
  ['C', [1.5, 26.5], [3.5, 29], [7, 28.5]],
  ['C', [16, 26], [10, 15], [5.6, 7.7]],
];
const START = [-5.6, 7.7];

function outline() {
  const f = (v) => v.toFixed(2);
  let d = '';
  for (let k = 0; k < 5; k++) {
    const phi = (k * 2 * Math.PI) / 5;
    const a = [Math.sin(phi), -Math.cos(phi)];
    const p = [Math.cos(phi), Math.sin(phi)];
    const g = ([x, r]) => `${f(C[0] + x * p[0] + r * a[0])} ${f(C[1] + x * p[1] + r * a[1])}`;
    d += k ? `L${g(START)} ` : `M${g(START)} `;
    for (const [, c1, c2, e] of PETAL) d += `C${g(c1)} ${g(c2)} ${g(e)} `;
  }
  return d + 'Z';
}

const body = outline();

module.exports = {
  id: 'blossom',
  name: 'Blossom',
  tags: ['flower', 'spring', 'holi', 'bloom', 'nature', 'pretty'],
  tone: 'pink',
  body,
  shine: [30, 31, -55],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stop-color="#FFE3EC"/><stop offset="0.4" stop-color="#FF9DC0"/><stop offset="0.8" stop-color="#E8467F"/><stop offset="1" stop-color="#8A1A48"/></radialGradient>`);
    const heart = c.radial('heart', 'gold', 0.35, 0.3);
    const stem = c.linear('stem', 'green', [0, 0, 1, 0], 1, 2);
    const leaf = c.radial('leaf', 'green', 0.3, 0.2);
    const g = c.ramp('green')[3];
    let veins = '';
    let dots = '';
    for (let k = 0; k < 5; k++) {
      const deg = k * 72;
      veins += `<path d="M48 34 L48 20" transform="rotate(${deg} 48 40)"/>`;
      const t = ((deg + 36) * Math.PI) / 180;
      dots += `<circle cx="${(48 + 8.5 * Math.sin(t)).toFixed(2)}" cy="${(40 - 8.5 * Math.cos(t)).toFixed(2)}" r="1.5"/>`;
    }
    return `<path d="M46.2 62 L49.8 62 L49.8 84 L46.2 84 Z" fill="${stem}"/>
      <path d="M48 76 C44 68 34 66 27 70 C32 77 41 79 48 76 Z" fill="${leaf}" stroke="${g}" stroke-opacity=".5" stroke-width="1"/>
      <path d="M48 72 C52 64 62 62 69 66 C64 73 55 75 48 72 Z" fill="${leaf}" stroke="${g}" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="url(#${c.id('a')})"/>
      <g stroke="#C2185B" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round" fill="none">${veins}</g>
      <circle cx="48" cy="40" r="6.2" fill="${heart}"/>
      <g fill="#FFF3A6">${dots}</g>`;
  },
};
