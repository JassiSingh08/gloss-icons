const body = 'M26 84 L26 23 L15 23 Q12 23 12 20 L12 17 Q12 14 15 14 L26 14 L29 8.5 Q30 7 31 8.5 L34 14 L81 14 Q84 14 84 17 L84 18 Q84 20.5 81 20.5 L34 20.5 L34 84 Z';
module.exports = {
  id: 'building-construction',
  name: 'Building Construction',
  emoji: '🏗️',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['crane', 'construction', 'building site', 'work in progress', 'build'],
  tone: 'gold',
  body,
  shine: [20, 16.5, -5],
  shineSize: [5, 1.6],
  draw(c) {
    const steel = c.linear('a', 'gold', [0, 0, 1, 0], 0, 2);
    const jib = c.linear('jib', 'gold', [0, 0, 0, 1], 0, 2);
    const beam = c.linear('beam', 'orange', [0, 0, 0, 1], 1, 2);
    const slab = c.linear('slab', 'silver', [0, 0, 0, 1], 1, 2);
    const ink = '#5E3A00';
    let lattice = '';
    for (let y = 26; y < 82; y += 8) lattice += `M27 ${y} L33 ${y + 4} L27 ${y + 8} `;
    let jl = '';
    for (let x = 36; x < 82; x += 7) jl += `M${x} 15.5 L${x + 3.5} 19 L${x + 7} 15.5 `;
    return `<path d="${body}" fill="${steel}"/>
      <path d="M12 14 L84 14 L84 20.5 L12 20.5 Z" fill="${jib}" clip-path="url(#${c.id('clip')})"/>
      <path d="${lattice}${jl}" fill="none" stroke="${ink}" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>
      <rect x="13" y="20" width="9" height="9" rx="1.5" fill="${c.linear('cw', 'slate', [0, 0, 0, 1], 1, 3)}" stroke="#1E2A3D" stroke-opacity=".6" stroke-width="1"/>
      <rect x="34" y="21" width="8" height="7" rx="1.5" fill="${c.linear('cab', 'sky', [0, 0, 1, 1], 0, 2)}" stroke="${ink}" stroke-opacity=".6" stroke-width="1"/>
      <path d="M70 20.5 L70 34 M63 40 L70 34 L77 40" fill="none" stroke="#3A3E52" stroke-width="1.2"/>
      <rect x="58" y="40" width="24" height="4.6" rx="1" fill="${beam}" stroke="#6B0F00" stroke-opacity=".6" stroke-width="1"/>
      <path d="M42 84 L42 54 M58 84 L58 54 M74 84 L74 54" stroke="${c.ramp('orange')[2]}" stroke-width="3.4"/>
      <path d="M44 56 L56 68 M56 56 L44 68 M60 56 L72 68 M72 56 L60 68" stroke="${c.ramp('orange')[1]}" stroke-width="1.4"/>
      <rect x="39" y="51" width="38" height="5" rx="1" fill="${slab}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
      <rect x="39" y="68" width="38" height="5" rx="1" fill="${slab}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
      <rect x="37" y="80" width="42" height="4" rx="1" fill="${slab}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>`;
  },
};
