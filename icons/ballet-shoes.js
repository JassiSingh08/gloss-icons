const g = require('../src/parts/garment');

// A pair of pointe shoes hanging toe-down from their tied ribbons.
const oval = (cx, cy, rx, ry, t) => {
  const r = (t * Math.PI) / 180;
  const dx = rx * Math.cos(r), dy = rx * Math.sin(r);
  const a = `${(cx - dx).toFixed(2)} ${(cy - dy).toFixed(2)}`, b = `${(cx + dx).toFixed(2)} ${(cy + dy).toFixed(2)}`;
  return `M${a} A${rx} ${ry} ${t} 1 1 ${b} A${rx} ${ry} ${t} 1 1 ${a} Z`;
};
const front = oval(60, 60, 12.5, 23.5, -14);
const back = oval(35, 58, 12, 23, 14);

module.exports = {
  id: 'ballet-shoes',
  name: 'Ballet Shoes',
  emoji: '🩰',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['ballet', 'dance', 'pointe', 'ballerina', 'shoes'],
  tone: 'pink',
  body: front,
  shine: [55, 47, -70],
  shineSize: [5, 1.8],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.2" r="0.95"><stop offset="0" stop-color="#FFF0F5"/><stop offset="0.4" stop-color="#FFB8CB"/><stop offset="0.8" stop-color="#E0708F"/><stop offset="1" stop-color="#9E3A58"/></radialGradient>`);
    c.def(`<linearGradient id="${c.id('b')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFC9D7"/><stop offset="1" stop-color="#C9587A"/></linearGradient>`);
    const satin = `url(#${c.id('a')})`;
    const satinB = `url(#${c.id('b')})`;
    const lining = c.linear('lining', 'cream', [0, 0, 1, 1], 0, 2);
    const p = c.ramp('pink');
    const ribbon = { width: 2.6, palette: 'pink', box: [20, 10, 76, 50] };
    return g.tube(c, 'M27 42 Q30 24 47 17 M44 41 Q44 26 49 17', { ...ribbon, name: 'r1' })
      + `<path d="${back}" fill="${satinB}" stroke="${p[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${oval(37.5, 47, 8.5, 11.5, 14)}" fill="${lining}" stroke="${p[3]}" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M26 74 Q30 80 33 80.5" fill="none" stroke="${p[3]}" stroke-opacity=".4" stroke-width="1.3"/>`
      + g.tube(c, 'M52 44 Q51 26 47 17 M69 44 Q68 26 49 17', { ...ribbon, name: 'r2' })
      + g.tube(c, 'M48 17 Q38 8 36 13 Q36 18 48 17 Q58 8 60 13 Q60 18 48 17', { ...ribbon, name: 'bow' })
      + `<path d="${front}" fill="${satin}"/>
      <path d="${oval(58, 49, 8.5, 12, -14)}" fill="${lining}" stroke="${p[3]}" stroke-opacity=".5" stroke-width="1.3"/>
      ${g.fold('M57 80 Q63 82 68 76', p[3], 0.4, 1.3)}
      ${g.fold('M52 66 Q56 72 58 80', p[2], 0.4, 1.2)}`;
  },
};
