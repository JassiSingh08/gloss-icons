const av = require('../src/parts/av');
const m = require('../src/parts/metal');
// Four curved petals round a recessed blue diamond with a pearl in the middle.
const tips = [[48, 11], [84, 47], [48, 83], [12, 47]];
const pull = (a, z, k) => [(a[0] + z[0]) / 2 + (48 - (a[0] + z[0]) / 2) * k, (a[1] + z[1]) / 2 + (47 - (a[1] + z[1]) / 2) * k];
const body = `M48 11 ${tips.map((p, i) => { const q = tips[(i + 1) % 4]; const [cx, cy] = pull(p, q, 0.24); return `Q${av.n(cx)} ${av.n(cy)} ${q[0]} ${q[1]}`; }).join(' ')} Z`;
const inner = av.diamondAt(17.5);
const veins = tips.map(([x, y]) => `M${48 + (x - 48) * 0.52} ${47 + (y - 47) * 0.52} L${48 + (x - 48) * 0.86} ${47 + (y - 47) * 0.86}`).join(' ');

module.exports = {
  ...av.geo({
  id: 'diamond-with-a-dot',
  name: 'Diamond With A Dot',
  emoji: '💠',
  group: 'Symbols',
  subgroup: 'geometric',
  tags: ['diamond', 'dot', 'cute', 'flower', 'blue'],
}, 'blue'),
  tone: 'sky',
  body,
  shine: [32.5, 33, -45],
  shineSize: [6, 2.4],
  draw: (c) => {
    const r = c.ramp('blue');
    return `<path d="${body}" fill="${c.radial('a', 'sky', 0.32, 0.22)}"/>
      <path d="${veins}" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/>
      <path d="${inner}" fill="${c.radial('in', 'blue', 0.7, 0.8)}" stroke="${r[3]}" stroke-opacity=".55" stroke-width="1.2"/>
      ${av.rim(c, av.diamondAt(16), 'blue', 1.4)}
      <circle cx="48" cy="47" r="6.4" fill="${c.radial('dot', 'white', 0.3, 0.25)}" stroke="#8C83AD" stroke-opacity=".7" stroke-width="1"/>
      <ellipse cx="46" cy="44.6" rx="2" ry="1.1" fill="#fff" transform="rotate(-40 46 44.6)"/>`;
  },
};
