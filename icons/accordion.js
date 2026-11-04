const body = 'M16 15 L30 15 L30 24 L66 24 L66 15 L80 15 Q84 15 84 19 L84 79 Q84 83 80 83 L66 83 L66 74 L30 74 L30 83 L16 83 Q12 83 12 79 L12 19 Q12 15 16 15 Z';

module.exports = {
  id: 'accordion',
  name: 'Accordion',
  emoji: '🪗',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['accordion', 'squeezebox', 'folk', 'polka', 'music'],
  tone: 'red',
  body,
  shine: [16, 24, -75],
  shineSize: [5, 1.8],
  draw(c) {
    const box = c.linear('a', 'red', [0, 0, 1, 1], 0, 2);
    const fold = c.linear('fold', 'black', [0, 0, 1, 0], 0, 2);
    const key = c.linear('key', 'white', [0, 0, 1, 0], 0, 2);
    const btn = c.radial('btn', 'cream', 0.35, 0.3);
    let pleats = '';
    for (let k = 0; k < 6; k++) pleats += `<path d="M${30 + k * 6} 24 L${33 + k * 6} 24 L${33 + k * 6} 74 L${30 + k * 6} 74 Z" fill="${fold}"/><path d="M${33 + k * 6} 24 L${36 + k * 6} 24 L${36 + k * 6} 74 L${33 + k * 6} 74 Z" fill="#141420"/>`;
    let keys = '';
    let blacks = '';
    for (let k = 0; k < 8; k++) {
      const y = 21 + k * 7;
      keys += `<rect x="19" y="${y}" width="10" height="6.2" rx="1" fill="${key}"/>`;
      if (k % 7 !== 2 && k % 7 !== 6 && k < 7) blacks += `<rect x="19" y="${y + 4.6}" width="5.5" height="3.6" rx=".8"/>`;
    }
    let buttons = '';
    for (let r = 0; r < 6; r++) for (let k = 0; k < 2; k++) buttons += `<circle cx="${71 + k * 6 + (r % 2) * 1.5}" cy="${24 + r * 9}" r="2.4" fill="${btn}"/>`;
    return `<path d="${body}" fill="${box}"/>
      ${pleats}
      <path d="M30 24 L66 24 M30 74 L66 74" stroke="#FFC21A" stroke-width="2"/>
      ${keys}<g fill="#141420">${blacks}</g>
      ${buttons}
      <path d="M13.5 19 L13.5 79 M82.5 19 L82.5 79" stroke="#FFC21A" stroke-opacity=".8" stroke-width="1.6"/>`;
  },
};
