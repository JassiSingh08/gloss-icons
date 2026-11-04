const g = require('../src/parts/glass');
const body = 'M30 31 L66 31 C66 34 64.5 36 64.5 38 C76 44 80 56 76.5 68 C73 79 63 84 48 84 C33 84 23 79 19.5 68 C16 56 20 44 31.5 38 C31.5 36 30 34 30 31 Z';
module.exports = {
  id: 'mate',
  name: 'Mate',
  emoji: '🧉',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['mate', 'yerba mate', 'gourd', 'tea', 'argentina'],
  tone: 'brown',
  body,
  shine: [26, 52, -50],
  shineSize: [6, 2.4],
  draw(c) {
    const gourd = c.radial('a', 'brown', 0.32, 0.25);
    const rim = c.linear('rim', 'silver', [0, 0, 1, 0], 0, 3);
    const herb = c.radial('herb', 'olive', 0.4, 0.3);
    const pipe = c.linear('pipe', 'silver', [0, 0, 1, 1], 0, 2);
    const b = c.ramp('brown');
    return `<path d="${body}" fill="${gourd}"/>
      <path d="M21.5 60 C30 66 66 66 74.5 60" fill="none" stroke="${b[2]}" stroke-width="5"/>
      <path d="M21.5 60 C30 66 66 66 74.5 60" fill="none" stroke="#E8B98A" stroke-width="1.4" stroke-dasharray="3 3"/>
      <path d="${g.cylinder(48, 30, 35, 18, 4)}" fill="${rim}" ${g.edge('#3A3E52', 1.1, 0.55)}/>
      <path d="${g.ellipse(48, 30, 18, 4)}" fill="#F4F5FA"/>
      <path d="${g.ellipse(48, 30.4, 15.4, 3)}" fill="${herb}"/>
      <g fill="#9AAE3C"><circle cx="40" cy="30" r=".9"/><circle cx="45" cy="31.5" r=".8"/><circle cx="55" cy="29.6" r=".9"/></g>
      <path d="M50 31 L61 10 Q62 8 64.5 8.4 L70 9.4" fill="none" stroke="#3A3E52" stroke-opacity=".6" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 31 L61 10 Q62 8 64.5 8.4 L70 9.4" fill="none" stroke="${pipe}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="49.5" cy="31" rx="3.4" ry="1.8" fill="${pipe}" ${g.edge('#3A3E52', 0.9, 0.5)}/>`;
  },
};
