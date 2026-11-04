const p = require('../src/parts/paper');
const AT = [14, 82];
const DEG = -45;
const S = 1.1;
module.exports = {
  id: 'pencil',
  name: 'Pencil',
  emoji: '✏️',
  group: 'Objects',
  subgroup: 'writing',
  tags: ['pencil', 'write', 'draw', 'edit', 'school'],
  tone: 'yellow',
  body: p.pencil(p.FAKE, AT, DEG, 82, S).body,
  shine: [...p.pt(40 * S, -5 * S, AT, DEG), -45],
  shineSize: [7, 1.6],
  draw(c) {
    return p.pencil(c, AT, DEG, 82, S).draw;
  },
};
