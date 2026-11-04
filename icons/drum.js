const body = 'M14 40 A34 10 0 0 1 82 40 L82 71 A34 10 0 0 1 14 71 Z';
const off = (x) => 10 * Math.sqrt(Math.max(0, 1 - ((x - 48) / 34) ** 2));

module.exports = {
  id: 'drum',
  name: 'Drum',
  emoji: '🥁',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['drum', 'beat', 'rhythm', 'snare', 'band'],
  tone: 'red',
  body,
  shine: [19, 54, -80],
  shineSize: [5, 1.8],
  draw(c) {
    const shell = c.linear('a', 'red', [0, 0, 1, 0], 0, 3);
    const head = c.radial('head', 'white', 0.4, 0.3);
    const hoop = c.linear('hoop', 'silver', [0, 0, 1, 0], 0, 2);
    const stick = c.linear('stick', 'sand', [0, 0, 1, 1], 0, 2);
    const tip = c.radial('tip', 'cream', 0.35, 0.3);
    let zig = '';
    for (let k = 0, x = 19; x <= 77; x += 9.66, k++) zig += `${k ? 'L' : 'M'}${x.toFixed(1)} ${((k % 2 ? 64 : 47) + off(x)).toFixed(1)} `;
    const band = (y, h) => `M14 ${y} A34 10 0 0 0 82 ${y} L82 ${y + h} A34 10 0 0 1 14 ${y + h} Z`;
    const st = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#5C4420" stroke-width="5" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="${stick}" stroke-width="3.2" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="3.2" fill="${tip}" stroke="#5C4420" stroke-width="1"/>`;
    return `<path d="${body}" fill="${shell}"/>
      <path d="${zig}" fill="none" stroke="#FFC21A" stroke-width="2" stroke-linejoin="round"/>
      <path d="M14 66 A34 10 0 0 0 82 66 L82 71 A34 10 0 0 1 14 71 Z" fill="${hoop}"/>
      <ellipse cx="48" cy="40" rx="34" ry="10" fill="${head}"/>
      <path d="${band(40, 5)}" fill="${hoop}"/>
      <ellipse cx="48" cy="40" rx="34" ry="10" fill="none" stroke="#8C83AD" stroke-width="1"/>
      ${st(28, 46, 66, 14)}${st(70, 44, 30, 15)}`;
  },
};
