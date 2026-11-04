const g = require('../src/parts/garment');

const body = 'M20 27 L60 41 L60 39 Q60 37 62 37 L80 37 Q84 37 84 41 L84 59 Q84 63 80 63 L62 63 Q60 63 60 61 L60 59 L20 73 Q12 72 12 50 Q12 28 20 27 Z';

module.exports = {
  id: 'loudspeaker',
  name: 'Loudspeaker',
  emoji: '📢',
  group: 'Objects',
  subgroup: 'sound',
  tags: ['loudspeaker', 'announcement', 'public address', 'loud', 'news'],
  tone: 'white',
  body,
  shine: [30, 36, 18],
  shineSize: [6, 1.8],
  draw(c) {
    const horn = c.linear('a', 'white', [0, 0, 0.3, 1], 0, 2);
    const drive = c.linear('drive', 'red', [0, 0, 0, 1], 0, 2);
    c.def(`<radialGradient id="${c.id('in')}" cx="0.7" cy="0.5" r="0.8"><stop offset="0" stop-color="#141420"/><stop offset="0.6" stop-color="#2E2E3D"/><stop offset="1" stop-color="#6E6E85"/></radialGradient>`);
    const w = c.ramp('white');
    return g.tube(c, 'M68 63 L71 79', { width: 7, palette: 'black', name: 'grip', box: [64, 63, 76, 80] })
      + `<path d="M64 63 Q63 70 67 71" fill="none" stroke="#2E2E3D" stroke-width="2.2" stroke-linecap="round"/>
      <path d="${body}" fill="${horn}"/>
      <path d="M60 39 Q60 37 62 37 L80 37 Q84 37 84 41 L84 59 Q84 63 80 63 L62 63 Q60 63 60 61 Z" fill="${drive}"/>
      <path d="M60 41 L60 59" stroke="${w[3]}" stroke-opacity=".55" stroke-width="1.3"/>
      <path d="M66 37.5 L66 62.5 M72 37.5 L72 62.5" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.2"/>
      <ellipse cx="18.5" cy="50" rx="6" ry="22" fill="url(#${c.id('in')})" stroke="${w[2]}" stroke-width="1.8"/>
      <ellipse cx="19.5" cy="50" rx="2.2" ry="6" fill="#05050A" opacity=".8"/>
      <path d="M22 31 L56 42" stroke="#fff" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round"/>`;
  },
};
