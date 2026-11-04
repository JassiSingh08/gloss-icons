const body = 'M29 17 Q48 11.5 67 17 L63.5 68 Q79 69 84.5 73.5 Q86.5 79.5 78 81.5 Q48 88 18 81.5 Q9.5 79.5 11.5 73.5 Q17 69 32.5 68 Z';

module.exports = {
  id: 'top-hat',
  name: 'Top Hat',
  emoji: '🎩',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['hat', 'gentleman', 'magic', 'formal', 'classy'],
  tone: 'black',
  body,
  shine: [35, 26, -80],
  shineSize: [7, 2.4],
  draw(c) {
    const felt = c.linear('a', 'black', [0, 0, 1, 0.3], 0, 2);
    const top = c.linear('top', 'black', [0, 0, 1, 1], 0, 1);
    const brim = c.radial('brim', 'black', 0.3, 0.1);
    const band = c.linear('band', 'red', [0, 0, 0, 1], 1, 2);
    return `<path d="${body}" fill="${felt}"/>
      <path d="M11.5 73.5 Q17 69 32.5 68 Q48 72 63.5 68 Q79 69 84.5 73.5 Q86.5 79.5 78 81.5 Q48 88 18 81.5 Q9.5 79.5 11.5 73.5 Z" fill="${brim}"/>
      <path d="M32.5 68 Q48 72 63.5 68" fill="none" stroke="#05050A" stroke-opacity=".7" stroke-width="1.4"/>
      <path d="M31.6 54 Q48 58.5 64.4 54 L63.7 66 Q48 70.5 32.3 66 Z" fill="${band}"/>
      <path d="M31.7 55.5 Q48 60 64.3 55.5" fill="none" stroke="#FF7A62" stroke-opacity=".6" stroke-width="1"/>
      <ellipse cx="48" cy="16.2" rx="18.6" ry="3.8" fill="${top}"/>
      <path d="M15 75.5 Q30 70.5 40 72" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
