// Outline of backrest, arms and base together; the parts are drawn over it in draw().
const body = 'M12 55 Q12 48 19 48 L20 48 L20 40 Q20 33 27 33 L69 33 Q76 33 76 40 L76 48 L77 48 Q84 48 84 55 L84 76 Q84 80 80 80 L16 80 Q12 80 12 76 Z';
module.exports = {
  id: 'couch',
  name: 'Couch',
  emoji: '🛋️',
  group: 'Objects',
  subgroup: 'household',
  tags: ['couch', 'sofa', 'together', 'home', 'cosy'],
  tone: 'teal',
  body,
  shine: [28, 38, -15],
  shineSize: [6, 2.4],
  draw(c) {
    const back = c.linear('a', 'teal', [0, 0, 0, 1], 0, 2);
    const base = c.linear('base', 'teal', [0, 0, 0, 1], 2, 3);
    const arm = c.radial('arm', 'teal', 0.35, 0.15);
    const seat = c.linear('seat', 'teal', [0, 0, 0, 1], 0, 1);
    const seam = '#003A33';
    const leg = c.linear('leg', 'brown', [0, 0, 0, 1], 1, 3);
    const tuft = (x, y) => `<circle cx="${x}" cy="${y}" r="1.3" fill="${seam}" opacity=".55"/>`;
    const armShape = (x) => `<rect x="${x}" y="48" width="14" height="32" rx="6.5" fill="${arm}"/><rect x="${x}" y="48" width="14" height="32" rx="6.5" fill="none" stroke="${seam}" stroke-opacity=".45" stroke-width="1.2"/>`;
    const cushion = (x) => `<rect x="${x}" y="58" width="16.6" height="12" rx="4.5" fill="${seat}"/><path d="M${x + 2.5} 60 Q${x + 8.3} 58.8 ${x + 14} 60" stroke="#fff" stroke-opacity=".5" stroke-width="1.1" fill="none" stroke-linecap="round"/>`;
    return `<rect x="17" y="79" width="5" height="6" rx="1.5" fill="${leg}"/>
      <rect x="74" y="79" width="5" height="6" rx="1.5" fill="${leg}"/>
      <path d="${body}" fill="${base}"/>
      <rect x="20" y="33" width="56" height="31" rx="7" fill="${back}"/>
      <path d="M38.7 36 L38.7 60 M57.3 36 L57.3 60" stroke="${seam}" stroke-opacity=".3" stroke-width="1.3" stroke-linecap="round"/>
      ${tuft(29.5, 46)}${tuft(48, 46)}${tuft(66.5, 46)}
      ${cushion(24)}${cushion(39.7)}${cushion(55.4)}
      ${armShape(12)}${armShape(70)}
      <path d="M15 53 Q16.5 50.5 20.5 50.5" stroke="#fff" stroke-opacity=".6" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M73 53 Q74.5 50.5 78.5 50.5" stroke="#fff" stroke-opacity=".45" stroke-width="1.5" fill="none" stroke-linecap="round"/>`;
  },
};
