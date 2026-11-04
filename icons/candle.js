const p = require('../src/parts/paper');
const body = 'M34 38 C34 34 62 34 62 38 L62 73 L74 74.5 Q81 75.5 79.5 79.5 Q77 84 48 84 Q19 84 16.5 79.5 Q15 75.5 22 74.5 L34 73 Z';
module.exports = {
  id: 'candle',
  name: 'Candle',
  emoji: '🕯️',
  group: 'Objects',
  subgroup: 'light & video',
  tags: ['candle', 'light', 'cosy', 'romantic', 'calm'],
  tone: 'cream',
  body,
  shine: [38, 44, -80],
  shineSize: [6, 2],
  draw(c) {
    const cr = c.ramp('cream');
    const flame = 'M48 6 C53 13 56 19 56 24.5 C56 29.5 52.5 33 48 33 C43.5 33 40 29.5 40 24.5 C40 19 43 13 48 6 Z';
    const core = 'M48 17 C50.6 21 51.8 24 51.8 26.6 C51.8 29.4 50 31 48 31 C46 31 44.2 29.4 44.2 26.6 C44.2 24 45.4 21 48 17 Z';
    return `<circle cx="48" cy="24" r="16" fill="#FF8C00" opacity=".4" filter="url(#${c.id('b5')})"/>
      <path d="${body}" fill="${c.radial('a', 'gold', 0.3, 0.2)}"/>
      <path d="M34 38 C34 34 62 34 62 38 L62 74 C56 76 40 76 34 74 Z" fill="${c.linear('wax', 'cream', [0, 0, 1, 0], 0, 2)}"/>
      <path d="M34 38 C34 41.5 62 41.5 62 38 C62 34.5 34 34.5 34 38 Z" fill="${cr[1]}"/>
      <path d="M40 40 C40 44 41 50 39 52 C37 54 36 50 36.5 46 L36 40 Z M55 40.5 C55 43 56.5 46 55 47 C53.5 48 53 45 53.4 41 Z" fill="${cr[0]}"/>
      <path d="M48 37.6 L48 31" stroke="#331805" stroke-width="1.8" stroke-linecap="round"/>
      <path d="${flame}" fill="${c.radial('fl', 'orange', 0.5, 0.8)}"/>
      <path d="${core}" fill="${c.radial('core', 'flame', 0.5, 0.75)}"/>
      <path d="M21 77 C30 79.5 66 79.5 75 77" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" fill="none"/>`;
  },
};
