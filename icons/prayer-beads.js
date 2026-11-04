// Beads around a loop that pinches to a guru bead and tassel; every bead is its own subpath and
// none touch, so the outline rings each one.
const R = 4.2;
const beads = [];
for (let i = 0; i < 17; i++) {
  const t = ((22 + (i * 316) / 16) * Math.PI) / 180;
  beads.push([48 + 25 * Math.sin(t), 39 + 25 * Math.cos(t)]);
}
const circ = ([x, y], r) => `M${(x - r).toFixed(2)} ${y.toFixed(2)} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0 Z`;
const guru = [48, 68.5];
const body = [...beads.map((p) => circ(p, R)), circ(guru, 5)];

module.exports = {
  id: 'prayer-beads',
  name: 'Prayer Beads',
  emoji: '📿',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['beads', 'prayer', 'meditation', 'rosary', 'mala'],
  tone: 'brown',
  body,
  shine: null,
  draw(c) {
    const tassel = c.linear('tassel', 'red', [0, 0, 1, 0], 0, 2);
    c.def(`<radialGradient id="${c.id('a')}" cx="0.35" cy="0.3" r="0.75"><stop offset="0" stop-color="${c.ramp('brown')[0]}"/><stop offset="0.45" stop-color="${c.ramp('brown')[1]}"/><stop offset="1" stop-color="${c.ramp('brown')[3]}"/></radialGradient>`);
    const wood = `url(#${c.id('a')})`;
    const knot = c.radial('knot', 'gold', 0.35, 0.3);
    const b = c.ramp('brown');
    const ring = beads.concat([guru]);
    const cord = `M${guru.join(' ')} ${beads.map(([x, y]) => `L${x.toFixed(2)} ${y.toFixed(2)}`).join(' ')} Z`;
    return `<path d="${cord}" fill="none" stroke="#C98500" stroke-width="1.2"/>
      <path d="M45 73 L51 73 L55.5 84 Q48 86.5 40.5 84 Z" fill="${tassel}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <path d="M45.5 75 L44 84.5 M48 75 L48 85 M50.5 75 L52 84.5" stroke="#8A0006" stroke-width=".9" stroke-opacity=".7"/>
      ${ring.map(([x, y], i) => `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${i === ring.length - 1 ? 5 : R}" fill="${wood}"/>`).join('')}
      ${ring.map(([x, y], i) => `<ellipse cx="${(x - (i === ring.length - 1 ? 1.7 : 1.3)).toFixed(2)}" cy="${(y - (i === ring.length - 1 ? 1.7 : 1.3)).toFixed(2)}" rx="${i === ring.length - 1 ? 1.8 : 1.4}" ry="${i === ring.length - 1 ? 1.1 : 0.85}" fill="#fff" opacity=".7" transform="rotate(-40 ${x.toFixed(2)} ${y.toFixed(2)})"/>`).join('')}
      <rect x="44.5" y="72" width="7" height="3" rx="1.2" fill="${knot}" stroke="${b[3]}" stroke-opacity=".5" stroke-width=".8"/>`;
  },
};
