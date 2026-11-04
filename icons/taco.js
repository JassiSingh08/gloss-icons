// Drawn level around the middle of the fold, then tipped a little; place() gives the outline the
// same turn. The back half of the shell standing taller than the front is what stops it reading
// as a bowl.
const ANGLE = -10;
const AT = [48, 53];
const place = (d) => {
  const a = (ANGLE * Math.PI) / 180;
  return d.replace(/(-?[\d.]+)[ ,]+(-?[\d.]+)/g, (_, x, y) => `${(AT[0] + x * Math.cos(a) - y * Math.sin(a)).toFixed(2)} ${(AT[1] + x * Math.sin(a) + y * Math.cos(a)).toFixed(2)}`);
};
const front = 'M-35 -3 C-35 -5.5 -33 -6.5 -30.5 -5.5 C-16 -1.5 16 -1.5 30.5 -5.5 C33 -6.5 35 -5.5 35 -3 C35 17 19 32 0 32 C-19 32 -35 17 -35 -3 Z';
const back = 'M-31 -17 C-31 -19.5 -29 -20.5 -26.5 -19.5 C-12 -15.5 20 -15.5 34.5 -19.5 C37 -20.5 39 -19.5 39 -17 C39 6 23 22 4 22 C-15 22 -31 6 -31 -17 Z';
module.exports = {
  id: 'taco',
  name: 'Taco',
  tags: ['food', 'tuesday', 'mexican', 'takeaway', 'party'],
  tone: 'gold',
  body: place(front),
  shine: (() => { const [x, y] = place('-27 4').split(' ').map(Number); return [x, y, -70]; })(),
  draw(c) {
    const shell = c.radial('a', 'gold', 0.35, 0.2);
    const backShell = c.linear('back', 'gold', [0, 0, 0, 1], 1, 2);
    const lettuce = c.radial('lettuce', 'lime', 0.4, 0.3);
    const meat = c.radial('meat', 'brown', 0.4, 0.3);
    const tomato = c.radial('tomato', 'red', 0.35, 0.3);
    const tom = (x, y, r) => `<rect x="${x - r}" y="${y - r}" width="${r * 2}" height="${r * 2}" rx="${r * 0.6}" fill="${tomato}" stroke="#3D0003" stroke-opacity=".4" stroke-width="1"/>`;
    const spot = (x, y, rx, ry) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#C98500" opacity=".5"/>`;
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <path d="${back}" fill="${backShell}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.3"/>
        <path d="M-29 -16.5 C-14 -12.5 20 -12.5 37 -16.5" stroke="#FFF3A6" stroke-opacity=".6" stroke-width="1.3" fill="none"/>
        <path d="M-32 -4 C-31 -12 -22 -15 -14 -13 C-6 -18 10 -18 18 -14 C26 -17 36 -13 35 -5 Z" fill="${meat}"/>
        <path d="M-35 -3 C-38 -9 -32 -13 -28 -10 C-28 -17 -20 -19 -17 -14 C-16 -21 -7 -22 -5 -16 C-3 -23 6 -23 8 -17 C10 -22 18 -21 19 -15 C22 -20 31 -18 29 -11 C35 -14 39 -8 35 -3 Z" fill="${lettuce}" stroke="#203D00" stroke-opacity=".5" stroke-width="1.1"/>
        ${tom(-20, -10, 4)}${tom(2, -14, 4.2)}${tom(21, -10, 3.8)}
        <g stroke="#FFD82E" stroke-width="2.2" stroke-linecap="round"><path d="M-11 -12 L-7 -9 M10 -11 L13 -7.5 M-29 -6 L-26 -8.5 M27 -6 L30 -8"/></g>
        <path d="${front}" fill="${shell}"/>
        <path d="M-30.5 -5.5 C-16 -1.5 16 -1.5 30.5 -5.5" stroke="#FFF3A6" stroke-opacity=".75" stroke-width="1.4" fill="none"/>
        ${spot(-18, 8, 2.6, 1.6)}${spot(4, 18, 2.2, 1.4)}${spot(16, 6, 2.8, 1.6)}${spot(-8, 23, 1.8, 1.2)}${spot(22, 18, 1.6, 1.1)}${spot(-25, 18, 1.6, 1.1)}
      </g>`;
  },
};
