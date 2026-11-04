const clock = require('../src/parts/clock');

const body = 'M48 24 A24 24 0 1 1 47.99 24 Z';
module.exports = {
  id: 'watch',
  name: 'Watch',
  emoji: '⌚',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['watch', 'wristwatch', 'time', 'clock', 'accessory'],
  tone: 'silver',
  body,
  shine: [35, 33, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const strap = c.linear('strap', 'brown', [0, 0, 1, 0], 1, 3);
    const steel = c.radial('a', 'silver', 0.3, 0.22);
    const lug = 'stroke="#331805" stroke-opacity=".6" stroke-width="1.1"';
    const holes = [76, 80.5].map((y) => `<circle cx="48" cy="${y}" r="1.4" fill="#331805" opacity=".6"/>`).join('');
    return `<path d="M36 30 L37.5 12 Q37.5 9 40.5 9 L55.5 9 Q58.5 9 58.5 12 L60 30 Z" fill="${strap}" ${lug}/>
      <path d="M36 66 L37.5 82 Q37.5 85 40.5 85 L55.5 85 Q58.5 85 58.5 82 L60 66 Z" fill="${strap}" ${lug}/>
      ${holes}
      <path d="M38 18 L58 18 M38 78 L58 78" stroke="#E8B98A" stroke-opacity=".35" stroke-width="1" stroke-dasharray="2 2"/>
      <rect x="70" y="44" width="5.5" height="8" rx="1.6" fill="${c.linear('crown', 'silver', [0, 0, 0, 1], 0, 2)}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
      <path d="${body}" fill="${steel}"/>
      ${clock.dial(c, { cx: 48, cy: 48, r: 19.5, h: 10, m: 10, palette: 'navy', ink: '#F4F0FF', pin: 'silver' })}`;
  },
};
