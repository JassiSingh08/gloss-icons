const body = 'M16 63 C16 37 30 21 48 21 C66 21 80 37 80 63 L84 63 Q88 63 88 67.5 Q88 73 82 73 L14 73 Q8 73 8 67.5 Q8 63 12 63 Z';

module.exports = {
  id: 'rescue-workers-helmet',
  name: 'Rescue Worker’s Helmet',
  emoji: '⛑️',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['helmet', 'rescue', 'first aid', 'safety', 'emergency'],
  tone: 'white',
  body,
  shine: [29, 33, -45],
  draw(c) {
    const shell = c.radial('a', 'white', 0.3, 0.2);
    const brim = c.linear('brim', 'white', [0, 0, 0, 1], 1, 3);
    const cross = c.linear('cross', 'red', [0, 0, 1, 1], 0, 2);
    const w = c.ramp('white');
    return `<path d="M24 72 Q26 85 48 85 Q70 85 72 72" fill="none" stroke="#3D0003" stroke-opacity=".6" stroke-width="4" stroke-linecap="round"/>
      <path d="M24 72 Q26 85 48 85 Q70 85 72 72" fill="none" stroke="#C0101A" stroke-width="2.6" stroke-linecap="round"/>
      <path d="${body}" fill="${shell}"/>
      <path d="M44.5 21.3 Q48 19.5 51.5 21.3 L52 62 L44 62 Z" fill="${w[2]}" opacity=".55"/>
      <path d="M8 67.5 Q8 63 12 63 L84 63 Q88 63 88 67.5 Q88 73 82 73 L14 73 Q8 73 8 67.5 Z" fill="${brim}"/>
      <path d="M12 63 L84 63" stroke="${w[3]}" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M43 34 L53 34 L53 42 L61 42 L61 52 L53 52 L53 60 L43 60 L43 52 L35 52 L35 42 L43 42 Z" fill="${cross}" stroke="#3D0003" stroke-opacity=".4" stroke-width="1" stroke-linejoin="round"/>`;
  },
};
