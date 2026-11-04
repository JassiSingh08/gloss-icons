const d = require('../src/parts/device');

const body = d.rr(12, 20, 72, 63, 8);

module.exports = {
  id: 'control-knobs',
  name: 'Control Knobs',
  emoji: '🎛️',
  group: 'Objects',
  subgroup: 'music',
  tags: ['mixer', 'knobs', 'synth', 'audio', 'dj'],
  tone: 'navy',
  body,
  shine: [17, 29, -50],
  shineSize: [5, 2.2],
  draw(c) {
    const panel = c.linear('a', 'navy', [0, 0, 1, 1], 0, 2);
    const knob = c.radial('knob', 'silver', 0.35, 0.3);
    const dial = (cx, cy, deg) => {
      let dots = '';
      for (let a = -135; a <= 135; a += 45) {
        const [x, y] = d.pt(0, -17, a, [cx, cy]);
        dots += `<circle cx="${x}" cy="${y}" r="1.3"/>`;
      }
      const [px, py] = d.pt(0, -9.5, deg, [cx, cy]);
      const [qx, qy] = d.pt(0, -3.5, deg, [cx, cy]);
      return `<g fill="#C9ECFF" opacity=".7">${dots}</g>
        <circle cx="${cx}" cy="${cy + 1.5}" r="13" fill="#080C3D" opacity=".55"/>
        <circle cx="${cx}" cy="${cy}" r="13" fill="${knob}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
        <circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>
        <path d="M${qx} ${qy} L${px} ${py}" stroke="#E3120B" stroke-width="2.6" stroke-linecap="round"/>`;
    };
    const led = (x, pal) => `<rect x="${x - 5}" y="70" width="10" height="6" rx="2" fill="${c.radial(`l${pal}`, pal, 0.35, 0.3)}"/>`;
    return `<path d="${body}" fill="${panel}"/>
      ${dial(31, 44, -60)}${dial(65, 44, 70)}
      ${led(26, 'red')}${led(41, 'gold')}${led(56, 'green')}${led(71, 'sky')}`;
  },
};
