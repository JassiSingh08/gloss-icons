const g = require('../src/parts/glyph');
const ring = (cx, cy, R, r) => `M${cx - R} ${cy} A${R} ${R} 0 1 1 ${cx + R} ${cy} A${R} ${R} 0 1 1 ${cx - R} ${cy} Z M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
const W = [[24, 66], [72, 66]];
const body = W.map(([x, y]) => ring(x, y, 18, 13.5));
module.exports = {
  id: 'bicycle',
  name: 'Bicycle',
  emoji: '🚲',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['bike', 'cycling', 'ride', 'commute', 'exercise'],
  tone: 'black',
  body,
  shine: [12.5, 56, -62],
  shineSize: [4, 1.5],
  draw(c) {
    const tyre = c.radial('a', 'black', 0.3, 0.25);
    const hub = c.radial('hub', 'silver', 0.3, 0.25);
    const seat = c.linear('seat', 'brown', [0, 0, 0, 1], 0, 3);
    const spokes = W.map(([x, y]) => Array.from({ length: 8 }, (_, i) => {
      const t = (i * Math.PI) / 8;
      return `M${(x - 13 * Math.cos(t)).toFixed(1)} ${(y - 13 * Math.sin(t)).toFixed(1)} L${(x + 13 * Math.cos(t)).toFixed(1)} ${(y + 13 * Math.sin(t)).toFixed(1)}`;
    }).join(' ')).join(' ');
    const frame = 'M24 66 L45 66 L36 38 Z M36 38 L64 38 L45 66 M62 33 L72 66';
    return `<path d="${spokes}" stroke="#B8B8C7" stroke-width="1" stroke-opacity=".8"/>
      <path d="${body.join(' ')}" fill="${tyre}"/>
      <circle cx="24" cy="66" r="13.5" fill="none" stroke="#D9DCE8" stroke-width="1.6"/>
      <circle cx="72" cy="66" r="13.5" fill="none" stroke="#D9DCE8" stroke-width="1.6"/>
      ${g.tube(c, frame, { width: 4.2, palette: 'red', name: 'frame' })}
      <circle cx="45" cy="66" r="5" fill="${hub}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.2"/>
      ${g.tube(c, 'M36 38 L34.5 32', { width: 3, palette: 'silver', name: 'post' })}
      <path d="M26 30 Q28 27.5 34 28 L41 29 Q43 29.5 42 31.5 Q40 33 35 32.5 L28 32 Q25 32 26 30 Z" fill="${seat}" stroke="#331805" stroke-opacity=".6" stroke-width="1"/>
      ${g.tube(c, 'M62 33 L60 27 L67 25.5', { width: 3.4, palette: 'silver', name: 'bar' })}
      <circle cx="24" cy="66" r="2.6" fill="${hub}"/><circle cx="72" cy="66" r="2.6" fill="${hub}"/>`;
  },
};
