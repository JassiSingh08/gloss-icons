const body = 'M48 10 C55 25 72 40 72 58 A24 24 0 0 1 24 58 C24 40 41 25 48 10 Z';
module.exports = {
  id: 'droplet',
  name: 'Droplet',
  emoji: '💧',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['water', 'drop', 'sweat', 'rain', 'liquid'],
  tone: 'blue',
  body,
  shine: [37, 41, -55],
  shineSize: [6, 2.6],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.36, 0.42)}"/>
      <path d="M33 58 C33 66 38 72 45 74" stroke="#fff" stroke-opacity=".55" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      <ellipse cx="58" cy="66" rx="7" ry="5" fill="#8CD8FF" opacity=".45" transform="rotate(-35 58 66)"/>`;
  },
};
