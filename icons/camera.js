const p = require('../src/parts/paper');
module.exports = {
  id: 'camera',
  name: 'Camera',
  emoji: '📷',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['camera', 'photo', 'picture', 'snapshot', 'travel'],
  tone: 'black',
  body: p.camera(p.FAKE).body,
  shine: [19, 36, -30],
  shineSize: [5.5, 2.2],
  draw(c) {
    return p.camera(c).draw;
  },
};
