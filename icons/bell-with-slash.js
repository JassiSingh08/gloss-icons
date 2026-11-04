const g = require('../src/parts/garment');
const bell = require('./bell');

module.exports = {
  ...bell,
  id: 'bell-with-slash',
  name: 'Bell With Slash',
  emoji: '🔕',
  tags: ['mute', 'silent', 'do not disturb', 'quiet', 'notifications off'],
  draw(c) {
    const d = 'M16 16 L80 80';
    return bell.draw(c)
      + `<path d="${d}" stroke="#3D0003" stroke-opacity=".75" stroke-width="10" ${g.CAP}/>
      <path d="${d}" stroke="${c.linear('slash', 'red', [0, 0, 1, 1], 1, 2)}" stroke-width="8" ${g.CAP}/>
      <path d="M17.5 15.5 L79 77" stroke="#FF7A62" stroke-opacity=".8" stroke-width="2" ${g.CAP}/>`;
  },
};
