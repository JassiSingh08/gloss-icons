const body = 'M20 60 Q20 57 23 57 L73 57 Q76 57 76 60 L72 81 Q71.5 84 68.5 84 L27.5 84 Q24.5 84 24 81 Z';
module.exports = {
  id: 'pine-decoration',
  name: 'Pine Decoration',
  emoji: '🎍',
  group: 'Activities',
  subgroup: 'event',
  tags: ['kadomatsu', 'new year', 'bamboo', 'pine', 'japan'],
  tone: 'sand',
  body,
  shine: [26, 61, -10],
  shineSize: [6, 1.8],
  draw(c) {
    const cane = (x, top, w, k) => {
      const g = c.linear('cane' + k, 'green', [0, 0, 1, 0], 0, 2);
      const cut = `M${x - w / 2} ${top + 6} L${x + w / 2} ${top - 3}`;
      return `<path d="M${x - w / 2} ${top + 6} L${x + w / 2} ${top - 3} L${x + w / 2} 60 L${x - w / 2} 60 Z" fill="${g}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.1"/>
        <path d="${cut}" stroke="#FFF9EC" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M${x - w / 2 + 2} ${top + 4.4} L${x + w / 2 - 2} ${top - 1.4}" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M${x - w / 2} ${top + 26} L${x + w / 2} ${top + 26}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.4"/>`;
    };
    const needles = (x, y, s) => Array.from({ length: 9 }, (_, i) => {
      const a = (-160 + i * 17.5) * Math.PI / 180;
      return `M${x} ${y} L${+(x + s * Math.cos(a)).toFixed(1)} ${+(y + s * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return `${cane(48, 12, 12, 1)}${cane(37, 24, 11, 2)}${cane(59, 30, 11, 3)}
      <path d="${needles(26, 58, 11)} ${needles(70, 58, 11)} ${needles(48, 60, 8)}" stroke="${c.ramp('green')[2]}" stroke-width="2" stroke-linecap="round"/>
      <path d="${body}" fill="${c.linear('a', 'sand', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M22.2 66 L73.8 66 M23.8 75 L72.2 75" stroke="#8A0006" stroke-width="2.6"/>
      <path d="M30 57 L28 84 M40 57 L39 84 M56 57 L57 84 M66 57 L68 84" stroke="#5C4420" stroke-opacity=".3" stroke-width="1.1"/>`;
  },
};
