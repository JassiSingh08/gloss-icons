// Three barbed prongs on a U, one shaft and a pommel. The right half is mirrored into one path.
const f = (v) => +v.toFixed(2);
const RIGHT = [
  [48, 6], [56.5, 22], [52.6, 20.5], [52.6, 44], [57, 44], ['Q', [62, 44], [62, 39]], [62, 27.5],
  [57.8, 28.5], [69, 8], [80.2, 28.5], [74.4, 27.5], [74.4, 43], ['Q', [74.4, 59], [56, 59]], [52.6, 59],
  [52.6, 75], [55.8, 76], ['Q', [58, 77], [56.6, 80]], [54.8, 82.6], ['Q', [53.6, 84], [48, 84]],
];

function outline() {
  const P = ([x, y]) => `${f(x)} ${f(y)}`;
  const M = ([x, y]) => [96 - x, y];
  const end = (s) => (s[0] === 'Q' ? s[2] : s);
  let d = `M${P(RIGHT[0])} `;
  for (const s of RIGHT.slice(1)) d += s[0] === 'Q' ? `Q${P(s[1])} ${P(s[2])} ` : `L${P(s)} `;
  for (let i = RIGHT.length - 1; i >= 1; i--) {
    const s = RIGHT[i];
    const prev = M(end(RIGHT[i - 1]));
    d += s[0] === 'Q' ? `Q${P(M(s[1]))} ${P(prev)} ` : `L${P(prev)} `;
  }
  return d + 'Z';
}

const body = outline();
module.exports = {
  id: 'trident-emblem',
  name: 'Trident Emblem',
  emoji: '🔱',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['trident', 'poseidon', 'emblem', 'sea', 'anchor'],
  tone: 'gold',
  body,
  shine: [26, 34, -80],
  shineSize: [3.6, 1.4],
  draw(c) {
    const ridge = 'M48 11 L48 55 M27 13 L27 41 M69 13 L69 41 M48 61 L48 80';
    return `<path d="${body}" fill="${c.radial('a', 'gold', 0.3, 0.2)}" stroke-linejoin="round"/>
      <path d="${ridge}" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" stroke-linecap="round" transform="translate(-.8 0)"/>
      <path d="${ridge}" stroke="#5E3A00" stroke-opacity=".3" stroke-width="1.4" stroke-linecap="round" transform="translate(1.2 0)"/>`;
  },
};
