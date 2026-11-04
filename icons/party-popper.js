// The cone points down-left from its mouth at (52,46). Mouth: ellipse rx 17, ry 6.8 turned 45°.
const body = 'M17.5 83.5 Q15 84 15.6 81.5 L39.98 33.98 A17 6.8 45 0 1 64.02 58.02 L18.5 82.4 Z';
const mouth = 'M39.98 33.98 A17 6.8 45 0 1 64.02 58.02 A17 6.8 45 0 1 39.98 33.98 Z';
module.exports = {
  id: 'party-popper',
  name: 'Party Popper',
  emoji: '🎉',
  group: 'Activities',
  subgroup: 'event',
  tags: ['party', 'celebrate', 'confetti', 'winner', 'congrats'],
  tone: 'gold',
  body,
  shine: [30, 60, -60],
  shineSize: [6, 2.2],
  draw(c) {
    const cone = c.linear('a', 'gold', [0, 0, 1, 1], 0, 2);
    const stripe = c.linear('stripe', 'magenta', [0, 0, 1, 1], 1, 2);
    c.def(`<clipPath id="${c.id('cone')}"><path d="${body}"/></clipPath>`);
    // Bands across the cone, perpendicular to its axis, t units back from the mouth.
    const band = (t) => {
      const cx = 52 - t * 0.7071;
      const cy = 46 + t * 0.7071;
      return `<path d="M${cx - 30} ${cy - 30} L${cx + 30} ${cy + 30}" stroke="${stripe}" stroke-width="5.5"/>`;
    };
    const col = { pink: '#FF5C8A', sky: '#5BC2FF', lime: '#9BE22E', violet: '#9B5CFF', gold: '#FFD82E', orange: '#FF8C00' };
    const bit = (x, y, w, h, r, fill) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="1" fill="${fill}" transform="rotate(${r} ${x} ${y})"/>`;
    const dot = (x, y, r, fill) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
    const curl = (d, stroke) => `<path d="${d}" stroke="${stroke}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
    return `${curl('M50 38 C46 30 52 26 50 20 C48 14 54 11 56 13', col.sky)}
      ${curl('M58 42 C63 34 70 38 72 31 C74 25 80 26 82 22', col.pink)}
      ${curl('M60 50 C67 50 69 56 75 54 C80 52 82 56 84 58', col.lime)}
      ${bit(64, 22, 7, 3.6, 30, col.gold)}${bit(43, 23, 6, 3.4, -40, col.pink)}${bit(77, 41, 6.5, 3.4, 65, col.violet)}
      ${bit(70, 12, 5.5, 3, -20, col.lime)}${bit(56, 29, 5, 3, 75, col.orange)}${bit(80, 31, 5, 2.8, 10, col.sky)}
      ${dot(66, 31, 2.2, col.violet)}${dot(74, 47, 2, col.gold)}${dot(60, 15, 1.8, col.sky)}${dot(83, 16, 2, col.orange)}
      <path d="${body}" fill="${cone}"/>
      <g clip-path="url(#${c.id('cone')})">${band(9)}${band(21)}${band(33)}${band(45)}</g>
      <path d="${mouth}" fill="#5E3A00"/>
      <path d="${mouth}" fill="none" stroke="#FFF3A6" stroke-width="1.6"/>
      ${bit(55, 41, 5, 3, 20, col.pink)}${dot(50, 47, 1.8, col.sky)}`;
  },
};
