const sky = require('../src/parts/sky');

// Shared by the umbrella with rain drops: an open umbrella, crown at `top`.
function umbrella(top) {
  const hem = top + 32;
  const geo = { cx: 48, top, w: 36, hem, gores: 4, palette: 'purple', alt: 'magenta' };
  const { d } = sky.canopy({ id: () => '', radial: () => '', ramp: () => [], def() {}, defs: [] }, geo);
  return {
    tone: 'purple',
    body: d,
    shine: [26, top + 13, -35],
    draw(c) {
      const cane = c.linear('cane', 'brown', [0, 0, 1, 0], 0, 2);
      const handle = `M48 ${hem - 4} L48 ${hem + 32} Q48 ${hem + 40} 41 ${hem + 40} Q34.5 ${hem + 40} 34.5 ${hem + 33}`;
      return `<path d="${handle}" stroke="#331805" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="${handle}" stroke="${cane}" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M48 ${top + 1} L48 ${top - 5}" stroke="#5E3A00" stroke-width="3" stroke-linecap="round"/>
        <circle cx="48" cy="${top - 5.5}" r="2.6" fill="${c.radial('tip', 'gold', 0.35, 0.3)}"/>
        ${sky.canopy(c, geo).markup}`;
    },
  };
}

module.exports = {
  ...umbrella(12),
  id: 'umbrella',
  name: 'Umbrella',
  emoji: '☂️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['umbrella', 'rain', 'weather', 'cover', 'protection'],
  umbrella,
};
