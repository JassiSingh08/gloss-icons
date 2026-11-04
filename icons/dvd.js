const d = require('../src/parts/device');

const GOLD = { pal: 'gold', sheen: ['#FF9A7A', '#FFFFFF', '#FF8FA9', '#FFF07A'] };

module.exports = {
  id: 'dvd',
  name: 'DVD',
  emoji: '📀',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['dvd', 'disc', 'movie', 'film', 'gold'],
  tone: 'gold',
  body: d.disc({ radial: () => '', def() {}, id: (x) => x, ramp: () => ['', '', '', ''] }, GOLD).body,
  shine: [30, 29, -45],
  draw: (c) => d.disc(c, GOLD).art,
};
