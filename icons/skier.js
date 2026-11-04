const F = require('../src/parts/figure');

// Tucked down a slope: skis parallel, poles trailing, a bobble hat and goggles.
const HAT = `<path d="M17 50 C15 26 30 13 48 13 C66 13 81 26 79 50 Z" fill="url(#HAT)" stroke="#6B0F00" stroke-width="2.4"/>
  <path d="M17 44 L79 44 L79 52 L17 52 Z" fill="#FFF9EC" stroke="#8A5A1E" stroke-width="1.6"/>
  <circle cx="48" cy="10" r="9" fill="#FFF9EC" stroke="#8A5A1E" stroke-width="1.8"/>
  <rect x="24" y="52" width="48" height="13" rx="6.5" fill="#1A238A" stroke="#080C3D" stroke-width="2"/>
  <path d="M30 56 Q40 54 50 56" stroke="#9AA8FF" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
module.exports = {
  id: 'skier',
  name: 'Skier',
  emoji: '⛷️',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['ski', 'skiing', 'snow', 'slope', 'winter'],
  tone: 'orange',
  ...F.shineOf(54, 23, 12),
  ...F.build((c) => {
    const hatPaint = c.radial('hat', 'orange', 0.3, 0.2);
    const ski = (y) => F.rod(`M18 ${y} L74 ${y + 13} Q80 ${y + 14.5} 81 ${y + 10}`, 3, '#FF8C00', '#6B0F00');
    return {
      art: F.rod('M37 52 L20 68', 1.6, '#D9DCE8', '#3A3E52') + ski(64)
        + F.person(c, {
          head: [54, 23], r: 12, hat: HAT.replace('url(#HAT)', hatPaint), face: F.face.calm({ dx: 4 }).replace(/<path[^>]*M\d+\.?\d* 39[^>]*>/g, ''),
          torso: [[50, 42], [43, 53]], tw: [9.5, 8.5], top: 'teal', bottom: 'navy', shoes: 'black',
          armB: [[47, 40], [41, 47], [37, 52]], handB: { dir: 120 },
          legB: [[42, 56], [52, 62], [48, 71]], footB: [53, 73],
          legF: [[46, 56], [57, 62], [56, 73]], footF: [61, 75],
          armF: [[52, 40], [60, 45], [64, 49]], handF: { dir: 60 },
        }) + ski(70) + F.rod('M64 52 L52 78', 1.6, '#D9DCE8', '#3A3E52'),
      extra: `<path d="M10 80 C14 76 18 76 20 79 M12 72 C14 70 17 70 18 72" stroke="#fff" stroke-opacity=".7" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    };
  }),
};
