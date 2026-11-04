const s = require('../src/parts/sign');
const body = 'M43.6 15.6 Q48 12.4 52.4 15.6 L79.6 36.4 Q83 39 83 43.4 L83 78 Q83 83 78 83 L18 83 Q13 83 13 78 L13 43.4 Q13 39 16.4 36.4 Z';
const inner = 'M45.8 22.6 Q48 21 50.2 22.6 L74.4 41.2 Q77 43.2 77 46.4 L77 74 Q77 77 74 77 L22 77 Q19 77 19 74 L19 46.4 Q19 43.2 21.6 41.2 Z';
module.exports = {
  id: 'children-crossing',
  name: 'Children Crossing',
  emoji: '🚸',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['children', 'crossing', 'school', 'kids', 'road'],
  tone: 'yellow',
  body: body,
  shine: [30, 37, -36],
  shineSize: [6, 2.6],
  draw(c) {
    const ink = '#2E1A00';
    const kids = (k) => `<circle cx="38.5" cy="38" r="4.7" fill="${k}"/><circle cx="57.5" cy="45" r="4.1" fill="${k}"/>
      <path d="M38.5 46 L37.5 59.5 L32 72 M37.5 59.5 L43.5 72 M38.6 49 L33 56.5 M38.6 49 L47 55.5 L57 55 M57 51.5 L57 63 L53 72 M57 63 L61 72 M57 55 L63 60" stroke="${k}" ${s.ST(4.6)}/>`;
    return `<path d="${body}" fill="${c.radial('a', 'yellow', 0.35, 0.3)}"/>
      <path d="${inner}" fill="${c.radial('in', 'yellow', 0.5, 0.45)}"/>
      <path d="${inner}" fill="none" stroke="#6B4A00" stroke-opacity=".45" stroke-width="1.5"/>
      ${s.inkEmboss(kids, ink)}`;
  },
};
