const p = require('../src/parts/paper');
module.exports = {
  id: 'magnifying-glass-tilted-right',
  name: 'Magnifying Glass Tilted Right',
  emoji: '🔎',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['search', 'zoom', 'find', 'magnify', 'look'],
  tone: 'gold',
  body: p.magnifier(p.FAKE, 1).body,
  shine: [40, 20, -40],
  shineSize: [5.5, 2.2],
  draw(c) {
    return p.magnifier(c, 1).draw;
  },
};
