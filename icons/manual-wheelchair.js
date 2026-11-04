const g = require('../src/parts/glyph');
const body = 'M24 25 Q24 20 29 20 L31 20 Q36 20 36 25 L36 46 L66 46 Q71 46 71 51 Q71 56 66 56 L29 56 Q24 56 24 51 Z';
module.exports = {
  id: 'manual-wheelchair',
  name: 'Manual Wheelchair',
  emoji: '🦽',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['wheelchair', 'accessibility', 'mobility', 'disability', 'access'],
  tone: 'teal',
  body,
  shine: [28, 27, -80],
  shineSize: [4.5, 1.8],
  draw(c) {
    const paint = c.linear('a', 'teal', [0, 0, 1, 1], 0, 2);
    const hub = c.radial('hub', 'silver', 0.3, 0.25);
    const tyre = c.radial('tyre', 'black', 0.3, 0.25);
    const spokes = Array.from({ length: 6 }, (_, i) => {
      const t = (i * Math.PI) / 6;
      return `M${(42 - 14 * Math.cos(t)).toFixed(1)} ${(66 - 14 * Math.sin(t)).toFixed(1)} L${(42 + 14 * Math.cos(t)).toFixed(1)} ${(66 + 14 * Math.sin(t)).toFixed(1)}`;
    }).join(' ');
    return `${g.tube(c, 'M30 20 L19 18', { width: 4, palette: 'black', name: 'grip' })}
      ${g.tube(c, 'M30 56 L30 64 M64 56 L72 76 M66 74 L79 74', { width: 3.6, palette: 'silver', name: 'leg' })}
      <circle cx="72" cy="79" r="5" fill="${tyre}" stroke="#05050A" stroke-opacity=".5" stroke-width="1.1"/><circle cx="72" cy="79" r="1.8" fill="${hub}"/>
      <path d="${body}" fill="${paint}"/>
      <path d="M36.5 50 L70 50" stroke="#003A33" stroke-opacity=".3" stroke-width="1.3"/>
      <path d="${spokes}" stroke="#B8B8C7" stroke-width="1.2"/>
      <circle cx="42" cy="66" r="16" fill="none" stroke="#05050A" stroke-opacity=".6" stroke-width="5.6"/>
      <circle cx="42" cy="66" r="16" fill="none" stroke="${tyre}" stroke-width="4.2"/>
      <circle cx="42" cy="66" r="12.5" fill="none" stroke="${hub}" stroke-width="1.8"/>
      <circle cx="42" cy="66" r="4" fill="${hub}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>`;
  },
};
