const d = require('../src/parts/device');

module.exports = {
  id: 'optical-disk',
  name: 'Optical Disk',
  emoji: '💿',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['cd', 'disc', 'album', 'music', 'retro'],
  tone: 'silver',
  body: d.disc({ radial: () => '', def() {}, id: (x) => x, ramp: () => ['', '', '', ''] }).body,
  shine: [30, 29, -45],
  draw: (c) => d.disc(c).art,
};
