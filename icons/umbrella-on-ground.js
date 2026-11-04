const sky = require('../src/parts/sky');

// A striped beach parasol planted in a sand mound, leaning a little.
const TILT = -14;
const BASE = [48, 78];
const GEO = { cx: 48, top: 12, w: 36, hem: 38, gores: 6, palette: 'red', alt: 'ivory' };
const stub = { id: () => '', radial: () => '', ramp: () => [], def() {}, defs: [] };
const body = sky.turn(sky.canopy(stub, GEO).d, TILT, ...BASE);
module.exports = {
  id: 'umbrella-on-ground',
  name: 'Umbrella On Ground',
  emoji: '⛱️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['beach', 'parasol', 'summer', 'holiday', 'shade'],
  tone: 'red',
  body,
  shine: [20, 31, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const pole = c.linear('pole', 'silver', [0, 0, 1, 0], 0, 2);
    const sand = c.radial('sand', 'sand', 0.4, 0.2);
    return `<g transform="rotate(${TILT} ${BASE[0]} ${BASE[1]})">
        <path d="M48 36 L48 80" stroke="#3A3E52" stroke-width="5" stroke-linecap="round"/>
        <path d="M48 36 L48 80" stroke="${pole}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="48" cy="9" r="2.6" fill="${c.radial('tip', 'gold', 0.35, 0.3)}"/>
        ${sky.canopy(c, GEO).markup}
      </g>
      <path d="M16 84 C22 72 36 70 48 72 C60 70 74 72 80 84 Z" fill="${sand}" stroke="#5C4420" stroke-opacity=".55" stroke-width="1.1"/>
      <path d="M26 78 Q30 76 33 77 M60 79 Q64 76 68 78" stroke="#B08A4E" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
