const p = require('../src/parts/paper');
const CLIP = 'M-2 8 L-2 -20 C-2 -25.5 6 -25.5 6 -20 L6 22 C6 31 -9 31 -9 22 L-9 -24 C-9 -35 13 -35 13 -24 L13 14';
module.exports = {
  id: 'linked-paperclips',
  name: 'Linked Paperclips',
  emoji: '🖇️',
  group: 'Objects',
  subgroup: 'office',
  tags: ['linked', 'attach', 'clips', 'connect', 'office'],
  tone: 'silver',
  body: 'M48 48 Z',
  shine: null,
  draw(c) {
    const a = p.place(CLIP, [34, 50], -38, 0.98);
    const b = p.place(CLIP, [62, 46], 50, 0.98);
    return `${p.tube(c, a, { width: 5, palette: 'gold', name: 'a' })}
      ${p.tube(c, b, { width: 5, palette: 'silver', name: 'b' })}`;
  },
};
