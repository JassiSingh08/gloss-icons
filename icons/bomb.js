const m = require('../src/parts/metal');
const body = 'M44 30 A27 27 0 1 1 43.99 30 Z';
module.exports = {
  id: 'bomb',
  name: 'Bomb',
  emoji: '💣',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['bomb', 'explosive', 'boom', 'danger', 'fuse'],
  tone: 'black',
  body,
  shine: [31, 41, -40],
  draw(c) {
    const ball = c.radial('a', 'black', 0.32, 0.25);
    const N = m.frame({ at: [61, 34], deg: 42 });
    const neck = m.cyl(c, 'n', 'steel', N.p([-7, 0]), N.p([7, 0]), 10);
    const spark = c.radial('s', 'flame', 0.5, 0.5);
    const star = (x, y, r) => {
      let d = '';
      for (let i = 0; i < 16; i++) {
        const t = (i * Math.PI) / 8;
        const rr = i % 2 ? r * 0.38 : i % 4 ? r * 0.7 : r;
        d += `${i ? 'L' : 'M'}${(x + rr * Math.sin(t)).toFixed(2)} ${(y - rr * Math.cos(t)).toFixed(2)} `;
      }
      return `${d}Z`;
    };
    return `${m.tube(c, 'M64 28 C66 20 70 16 76 17', { width: 3.6, palette: 'cream', name: 'f' })}
      ${m.part(N.d(m.round([[-7, -5], [7, -5], [7, 6], [-7, 6]], 1.5)), neck, 'steel')}
      <path d="${N.d('M-7 -2 L7 -2')}" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${body}" fill="${ball}"/>
      <path d="${star(77, 16, 9)}" fill="${spark}" stroke="#FF8C00" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="77" cy="16" r="2.4" fill="#fff"/>`;
  },
};
