const body =
  'M48 18 C49.5 18 50.5 19 51.5 20.5 L63 37 C64.2 39 63.2 40.5 61 40.5 L58 40.5 L70.5 55 C72 57 71 58.5 69 58.5 L64.5 58.5 L77.5 70.5 C79.5 72.5 78.5 75 75.5 75 L20.5 75 C17.5 75 16.5 72.5 18.5 70.5 L31.5 58.5 L27 58.5 C25 58.5 24 57 25.5 55 L38 40.5 L35 40.5 C32.8 40.5 31.8 39 33 37 L44.5 20.5 C45.5 19 46.5 18 48 18 Z';

function star(cx, cy, R, r) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const d = i % 2 ? r : R;
    pts.push(`${(cx + d * Math.cos(a)).toFixed(2)} ${(cy + d * Math.sin(a)).toFixed(2)}`);
  }
  return `M${pts.join(' L')} Z`;
}

module.exports = {
  id: 'xmas-tree',
  name: 'Christmas Tree',
  tags: ['christmas', 'xmas', 'holiday', 'festive', 'winter', 'tree'],
  tone: 'green',
  body,
  shine: [40, 47, -50],
  shineSize: [6, 2.8],
  draw(c) {
    const leaf = c.radial('a', 'green', 0.35, 0.2);
    c.def(`<linearGradient id="${c.id('trunk')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#B8641F"/><stop offset="1" stop-color="#4A1E05"/></linearGradient>`);
    const trunk = `url(#${c.id('trunk')})`;
    const gold = c.radial('gold', 'gold', 0.3, 0.25);
    const red = c.radial('red', 'red', 0.3, 0.25);
    const blue = c.radial('blue', 'sky', 0.3, 0.25);
    c.def(`<clipPath id="${c.id('tree')}"><path d="${body}"/></clipPath>`);
    const ball = (x, y, fill, r = 3.4) =>
      `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.4}" r="${r * 0.3}" fill="#fff" opacity=".85"/>`;
    const deep = c.ramp('green')[3];
    return `<path d="M42 73 L54 73 L54 82 Q54 84 52 84 L44 84 Q42 84 42 82 Z" fill="${trunk}" stroke="${c.ramp('brown')[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${leaf}"/>
      <g clip-path="url(#${c.id('tree')})">
        <path d="M34 41 Q48 47 62 41 L62 44 Q48 50 34 44 Z" fill="${deep}" opacity=".35"/>
        <path d="M25 59 Q48 66 71 59 L71 62 Q48 69 25 62 Z" fill="${deep}" opacity=".35"/>
        <path d="M19 75 L77 75 L77 77.5 L19 77.5 Z" fill="${deep}" opacity=".45"/>
      </g>
      <path d="M38.5 33 Q48 38 57 31.5" fill="none" stroke="#FFF3A6" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>
      <path d="M33 52 Q49 58 64 49" fill="none" stroke="#FFF3A6" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>
      <path d="M27 69 Q46 75 70 66" fill="none" stroke="#FFF3A6" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>
      ${ball(44, 36, red, 3)}${ball(55.5, 40.5, blue, 2.8)}
      ${ball(39, 55, gold)}${ball(56, 52, red)}${ball(64.5, 56.5, gold, 2.8)}
      ${ball(30, 70.5, blue)}${ball(47, 71, gold, 3.6)}${ball(63, 68, red, 3.6)}
      <path d="${star(48, 18.3, 8.2, 3.8)}" fill="${gold}" stroke="${gold}" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="${star(48, 18.3, 8.2, 3.8)}" fill="none" stroke="${c.ramp('gold')[3]}" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"/>
      <ellipse cx="45.6" cy="16.4" rx="2.1" ry="1.1" fill="#fff" opacity=".85" transform="rotate(-30 45.6 16.4)"/>`;
  },
};
