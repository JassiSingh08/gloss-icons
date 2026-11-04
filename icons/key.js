// The key is laid out straight (bow at the origin, shaft along +x) and turned onto the diagonal.
// Its outline is generated point by point so the bow, shaft, bit and hole stay one clean edge.
const KEY = { at: [30, 25], deg: 35 };
const FOB = { at: [27, 41], deg: 8 };
const xf = ({ at, deg }) => ([x, y]) => {
  const a = (deg * Math.PI) / 180;
  return [at[0] + x * Math.cos(a) - y * Math.sin(a), at[1] + x * Math.sin(a) + y * Math.cos(a)];
};
const path = (pts) => 'M' + pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(' L') + ' Z';
const arc = (r, from, to, n) => Array.from({ length: n + 1 }, (_, i) => {
  const t = ((from + ((to - from) * i) / n) * Math.PI) / 180;
  return [r * Math.cos(t), r * Math.sin(t)];
});
const R = 11;
const edge = (Math.asin(3 / R) * 180) / Math.PI;
const keyLocal = [[R * Math.cos((edge * Math.PI) / 180), -3], [50, -3], [53, 0], [53, 14], [47.5, 14], [47.5, 10], [44, 10], [44, 14], [40, 14], [40, 3], ...arc(R, edge, 360 - edge, 60)];
const holeLocal = arc(4.6, 360, 0, 40);
const key = path(keyLocal.map(xf(KEY))) + ' ' + path(holeLocal.map(xf(KEY)));
const fobLocal = 'M0 0 C6 0 9 4 10.5 10 L13.5 30 C14.5 38 9 43 0 43 C-9 43 -14.5 38 -13.5 30 L-10.5 10 C-9 4 -6 0 0 0 Z';
const fob = fobLocal.replace(/(-?[\d.]+)[ ,]+(-?[\d.]+)/g, (_, x, y) => xf(FOB)([+x, +y]).map((n) => n.toFixed(2)).join(' '));
const fobHole = xf(FOB)([0, 6]);
const keyHole = KEY.at;
const ringC = [(fobHole[0] + keyHole[0]) / 2, (fobHole[1] + keyHole[1]) / 2];
const ringR = Math.hypot(fobHole[0] - keyHole[0], fobHole[1] - keyHole[1]) / 2;

module.exports = {
  id: 'key',
  name: 'Room key',
  emoji: '🔑',
  group: 'Objects',
  subgroup: 'lock',
  tags: ['hotel', 'room', 'getaway', 'stay', 'weekend away', 'vintage'],
  tone: 'gold',
  body: [key, fob],
  shine: [20, 53, -78],
  shineSize: [5.5, 2.6],
  draw(c) {
    const brass = c.radial('a', 'gold', 0.3, 0.2);
    const plastic = c.radial('fob', 'red', 0.3, 0.2);
    const deep = '#5E3A00';
    return `<path d="${fob}" fill="${plastic}"/>
      <g transform="translate(${FOB.at[0]} ${FOB.at[1]}) rotate(${FOB.deg})">
        <path d="M0 4 C4.5 4 7 7 8.2 12 L10.6 29.5 C11.4 36 7 39.5 0 39.5 C-7 39.5 -11.4 36 -10.6 29.5 L-8.2 12 C-7 7 -4.5 4 0 4 Z" fill="none" stroke="#FFC21A" stroke-width="1.3" stroke-opacity=".9"/>
        <circle cx="0" cy="6" r="2.4" fill="#3D0003"/>
        <path d="M0 18 L5 25 L0 32 L-5 25 Z" fill="#FFC21A"/>
      </g>
      <circle cx="${ringC[0].toFixed(2)}" cy="${ringC[1].toFixed(2)}" r="${ringR.toFixed(2)}" fill="none" stroke="${c.linear('ring', 'gold', [0, 0, 1, 1], 0, 2)}" stroke-width="2"/>
      <path d="${key}" fill="${brass}"/>
      <g transform="translate(${KEY.at[0]} ${KEY.at[1]}) rotate(${KEY.deg})" stroke="${deep}" stroke-opacity=".45" stroke-width="1.4">
        <path d="M15 -3 L15 3 M18.5 -3 L18.5 3"/>
      </g>`;
  },
};
