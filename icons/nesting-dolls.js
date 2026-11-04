// Head and body of a matryoshka as one outline: a round head on a wide, round-bottomed body.
const doll = (x, s) => {
  const p = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(84 + dy * s).toFixed(2)}`;
  return `M${p(-11, -50)} C${p(-11, -64)} ${p(11, -64)} ${p(11, -50)} C${p(11, -46)} ${p(10, -44)} ${p(9, -42)} C${p(18, -36)} ${p(21, -22)} ${p(20, -12)} C${p(19, -3)} ${p(15, 0)} ${p(10, 0)} L${p(-10, 0)} C${p(-15, 0)} ${p(-19, -3)} ${p(-20, -12)} C${p(-21, -22)} ${p(-18, -36)} ${p(-9, -42)} C${p(-10, -44)} ${p(-11, -46)} ${p(-11, -50)} Z`;
};
const body = doll(38, 1.18);

module.exports = {
  id: 'nesting-dolls',
  name: 'Nesting Dolls',
  emoji: '🪆',
  group: 'Activities',
  subgroup: 'game',
  tags: ['matryoshka', 'nesting dolls', 'russian dolls', 'toy', 'layers'],
  tone: 'red',
  body,
  shine: [24, 36, -60],
  shineSize: [6, 2.2],
  draw(c) {
    const face = c.radial('face', 'skin', 0.35, 0.3);
    const dress = (x, s, k, pal) => {
      const p = (dx, dy) => `${+(x + dx * s).toFixed(2)} ${+(84 + dy * s).toFixed(2)}`;
      return `<ellipse cx="${p(0, -51).split(' ')[0]}" cy="${p(0, -51).split(' ')[1]}" rx="${7.6 * s}" ry="${7 * s}" fill="${face}"/>
        <path d="M${p(-7.6, -51)} C${p(-7.6, -60)} ${p(7.6, -60)} ${p(7.6, -51)} C${p(5, -56)} ${p(-5, -56)} ${p(-7.6, -51)} Z" fill="#4A1E05"/>
        <path d="M${p(-3.5, -52)} L${p(-1.5, -52)} M${p(1.5, -52)} L${p(3.5, -52)}" stroke="#3D0003" stroke-width="${1.3 * s}" stroke-linecap="round"/>
        <circle cx="${p(-4.4, -49).split(' ')[0]}" cy="${p(-4.4, -49).split(' ')[1]}" r="${1.6 * s}" fill="#FF5C8A" opacity=".6"/>
        <circle cx="${p(4.4, -49).split(' ')[0]}" cy="${p(4.4, -49).split(' ')[1]}" r="${1.6 * s}" fill="#FF5C8A" opacity=".6"/>
        <path d="M${p(-1.6, -47)} Q${p(0, -46)} ${p(1.6, -47)}" fill="none" stroke="#8A0006" stroke-width="${1.1 * s}" stroke-linecap="round"/>
        <path d="M${p(-12, -18)} C${p(-12, -32)} ${p(12, -32)} ${p(12, -18)} C${p(12, -8)} ${p(-12, -8)} ${p(-12, -18)} Z" fill="${c.radial('apron' + k, 'cream', 0.35, 0.3)}"/>
        <circle cx="${p(0, -20).split(' ')[0]}" cy="${p(0, -20).split(' ')[1]}" r="${4.6 * s}" fill="${c.radial('fl' + k, pal, 0.35, 0.3)}"/>
        <circle cx="${p(0, -20).split(' ')[0]}" cy="${p(0, -20).split(' ')[1]}" r="${1.6 * s}" fill="#FFD82E"/>
        <path d="M${p(-5, -13)} Q${p(-8, -17)} ${p(-9, -22)} M${p(5, -13)} Q${p(8, -17)} ${p(9, -22)}" fill="none" stroke="#2FB85A" stroke-width="${1.6 * s}" stroke-linecap="round"/>`;
    };
    const small = doll(71, 0.82);
    return `<path d="${small}" fill="${c.radial('b', 'blue', 0.3, 0.2)}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.2"/>
      ${dress(71, 0.82, 2, 'red')}
      <path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.2)}"/>
      ${dress(38, 1.18, 1, 'blue')}`;
  },
};
