const m = require('../src/parts/metal');
const body = 'M15 36 L81 36 Q85 36 85 40 L85 48 Q85 50 83 50 L83 79 Q83 83 79 83 L17 83 Q13 83 13 79 L13 50 Q11 50 11 48 L11 40 Q11 36 15 36 Z';
module.exports = {
  id: 'toolbox',
  name: 'Toolbox',
  emoji: '🧰',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['toolbox', 'tools', 'repair', 'kit', 'diy'],
  tone: 'red',
  body,
  shine: [22, 41, -12],
  shineSize: [6, 2.2],
  draw(c) {
    const box = c.linear('a', 'red', [0, 0, 1, 1], 0, 2);
    const lid = c.linear('l', 'red', [0, 0, 0, 1], 0, 1);
    const latch = c.linear('t', 'silver', [0, 0, 0, 1], 0, 2);
    const grip = m.cyl(c, 'g', 'black', [38, 25], [58, 25], 6);
    const clasp = (x) => `${m.part(m.round([[x, 45], [x + 9, 45], [x + 9, 57], [x, 57]], 1.6), latch, 'silver')}<path d="M${x + 2.5} 52 L${x + 6.5} 52" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>`;
    return `${m.tube(c, 'M33 37 L33 28 Q33 23 38 23 L58 23 Q63 23 63 28 L63 37', { width: 4, palette: 'silver', name: 'h' })}
      ${m.part(m.round([[39, 21.5], [57, 21.5], [57, 27.5], [39, 27.5]], 3), grip, 'black')}
      <path d="${body}" fill="${box}"/>
      <path d="M15 36 L81 36 Q85 36 85 40 L85 48 Q85 50 83 50 L13 50 Q11 50 11 48 L11 40 Q11 36 15 36 Z" fill="${lid}"/>
      <path d="M13 50.6 L83 50.6" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.8"/>
      <path d="M15 40 L81 40" stroke="#fff" stroke-opacity=".4" stroke-width="1.1"/>
      <path d="M21 66 L75 66" stroke="#3D0003" stroke-opacity=".25" stroke-width="1.4"/>
      ${clasp(22)}${clasp(65)}`;
  },
};
