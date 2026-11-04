const p = require('../src/parts/paper');
const PIV = [42, 54];
const blade = 'M-7 -7 L42 -2.4 Q47 0 42 2.4 L-7 7 Z';
const A = p.place(blade, PIV, -62);
const B = p.place(blade, PIV, -28);
module.exports = {
  id: 'scissors',
  name: 'Scissors',
  emoji: '✂️',
  group: 'Objects',
  subgroup: 'office',
  tags: ['cut', 'scissors', 'craft', 'trim', 'snip'],
  tone: 'silver',
  body: A,
  shine: [...p.pt(18, -2.5, PIV, -62), -62],
  shineSize: [6, 1.4],
  draw(c) {
    const s = c.ramp('silver');
    const r = c.ramp('red');
    const ring = (deg, name) => {
      const at = p.pt(26, 0, PIV, deg);
      const shank = p.place('M5 -3.4 L17 -3.4 L17 3.4 L5 3.4 Z', PIV, deg);
      const o = p.place(p.ell(0, 0, 11, 9), at, deg);
      const i = p.place(p.ell(0, 0, 6.4, 4.6, true), at, deg);
      return `<path d="${shank}" fill="${c.linear(`${name}s`, 'red', [0, 0, 1, 1], 1, 2)}" stroke="${r[3]}" stroke-opacity=".6" stroke-width="1"/>
        <path d="${o} ${i}" fill="${c.radial(name, 'red', 0.3, 0.25)}" stroke="${r[3]}" stroke-opacity=".6" stroke-width="1.2"/>`;
    };
    return `${ring(-62 + 180, 'h1')}${ring(-28 + 180, 'h2')}
      <path d="${B}" fill="${c.linear('b', 'silver', [0, 0, 1, 1], 1, 3)}" stroke="${s[3]}" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${A}" fill="${c.linear('a', 'silver', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line(p.place('M-2 0 L40 0', PIV, -62), s[3], 1, 0.35)}
      <circle cx="${PIV[0]}" cy="${PIV[1]}" r="3.2" fill="${c.radial('pin', 'gold', 0.3, 0.25)}" stroke="#5E3A00" stroke-opacity=".6"/>`;
  },
};
