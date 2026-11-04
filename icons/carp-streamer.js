// One carp, nose at (x, y) on the pole, swimming right on the wind; s scales it.
const carp = (x, y, s) => {
  const p = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(y + dy * s).toFixed(2)}`;
  return `M${p(0, -12)} C${p(18, -16)} ${p(40, -13)} ${p(56, -5)} L${p(66, -12)} L${p(62, 0)} L${p(66, 12)} L${p(56, 5)} C${p(40, 13)} ${p(18, 16)} ${p(0, 12)} Z`;
};
const body = carp(22, 62, 1);

module.exports = {
  id: 'carp-streamer',
  name: 'Carp Streamer',
  emoji: '🎏',
  group: 'Activities',
  subgroup: 'event',
  tags: ['koinobori', 'carp', 'childrens day', 'japan', 'windsock'],
  tone: 'red',
  body,
  shine: [32, 53, -10],
  shineSize: [6, 1.8],
  draw(c) {
    const eye = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x + r * 0.15}" cy="${y}" r="${r * 0.55}" fill="#12002E"/>`;
    const scales = (x, y, s, col) => {
      let d = '';
      for (const [dx, dy] of [[20, -4], [30, -4], [40, -2], [25, 4], [35, 4], [45, 3]]) d += `M${x + (dx - 4) * s} ${y + dy * s} Q${x + dx * s} ${y + (dy + 5) * s} ${x + (dx + 4) * s} ${y + dy * s} `;
      return `<path d="${d}" fill="none" stroke="${col}" stroke-width="${1.4 * s}" stroke-linecap="round"/>`;
    };
    const top = carp(22, 30, 0.8);
    return `<path d="M16 9 L16 85" stroke="#6E3A14" stroke-width="5" stroke-linecap="round"/>
      <path d="M15 9 L15 85" stroke="#E8B98A" stroke-opacity=".6" stroke-width="1.4"/>
      <circle cx="16" cy="9" r="4.4" fill="${c.radial('knob', 'gold', 0.3, 0.25)}"/>
      <path d="${top}" fill="${c.radial('blue', 'navy', 0.3, 0.3)}" stroke="#080C3D" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>
      ${scales(22, 30, 0.8, '#9AA8FF')}
      <ellipse cx="22" cy="30" rx="2.6" ry="9.6" fill="#FFF9EC" stroke="#080C3D" stroke-opacity=".5"/>
      ${eye(29, 28, 2.6)}
      <path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.3)}"/>
      ${scales(22, 62, 1, '#FF7A62')}
      <path d="M78 55 L84 59 M79 62 L86 62 M78 69 L84 65" stroke="#8A0006" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round"/>
      <ellipse cx="22" cy="62" rx="3.2" ry="12" fill="#FFF9EC" stroke="#3D0003" stroke-opacity=".5"/>
      ${eye(31, 59, 3.2)}`;
  },
};
