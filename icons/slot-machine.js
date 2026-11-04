const glyph = require('../src/parts/glyph');

const body = 'M20 26 Q20 20 26 20 L66 20 Q72 20 72 26 L72 80 Q72 84 68 84 L24 84 Q20 84 20 80 Z';
module.exports = {
  id: 'slot-machine',
  name: 'Slot Machine',
  emoji: '🎰',
  group: 'Activities',
  subgroup: 'game',
  tags: ['slots', 'casino', 'jackpot', 'gamble', 'vegas'],
  tone: 'red',
  body,
  shine: [25, 29, -60],
  shineSize: [6, 2.2],
  draw(c) {
    const seven = (x) => {
      const g = glyph.path('7', { x, y: 47, size: 12, weight: 3 });
      return `<path d="${g.d}" fill="none" stroke="#E3120B" stroke-width="${g.weight}" stroke-linecap="round" stroke-linejoin="round"/>`;
    };
    const reel = (x) => `<rect x="${x - 6.5}" y="36" width="13" height="22" rx="2" fill="${c.linear('reel' + x, 'white', [0, 0, 0, 1], 0, 2)}"/>${seven(x)}`;
    return `${require('../src/parts/glyph').tube(c, 'M78 54 L84 54 L84 30', { width: 3.6, palette: 'silver', name: 'lever' })}
      <circle cx="84" cy="27" r="5.2" fill="${c.radial('lb', 'red', 0.3, 0.25)}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <rect x="71" y="50" width="8" height="8" rx="2" fill="${c.linear('hub', 'silver', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M30 20 Q30 10 46 10 Q62 10 62 20 Z" fill="${c.radial('dome', 'gold', 0.35, 0.3)}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <rect x="25" y="32" width="42" height="30" rx="4" fill="#3D0003" opacity=".9"/>
      <rect x="26.5" y="33.5" width="39" height="27" rx="3" fill="none" stroke="${c.linear('trim', 'gold', [0, 0, 1, 1], 0, 2)}" stroke-width="2"/>
      ${reel(33)}${reel(46)}${reel(59)}
      <path d="M28 47 L64 47" stroke="#FFC21A" stroke-opacity=".0" stroke-width="1"/>
      <rect x="28" y="68" width="36" height="8" rx="2" fill="#3D0003" opacity=".55"/>
      <rect x="34" y="70.5" width="24" height="3" rx="1.5" fill="#05050A"/>`;
  },
};
