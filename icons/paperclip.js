const p = require('../src/parts/paper');
const CLIP = 'M-2 8 L-2 -20 C-2 -25.5 6 -25.5 6 -20 L6 22 C6 31 -9 31 -9 22 L-9 -24 C-9 -35 13 -35 13 -24 L13 14';
module.exports = {
  id: 'paperclip',
  name: 'Paperclip',
  emoji: '📎',
  group: 'Objects',
  subgroup: 'office',
  tags: ['attach', 'attachment', 'clip', 'office', 'paper'],
  tone: 'silver',
  body: 'M48 48 Z',
  shine: null,
  draw(c) {
    return p.tube(c, p.place(CLIP, [47, 47], 32, 1.22), { width: 5.6, palette: 'silver', name: 'clip' });
  },
};
