// Fronds are one path around five leaves so the outline has no seams where they cross.
const fronds =
  'M45 31.5 C37 26.5 26 25 15 30 C22 17 38 15 49 24.5 C48 17 53 11 64 10 C62 16 59 21 56 26 C64 18 77 19 83 31 C74 27.5 65 28.5 58.5 31 C68 31 78 37 81 49 C72 41 63 37.5 56 36.5 C53 38.5 49 38.5 46 36.5 C37 37.5 28 43 23 52 C22 42 32 33.5 45 31.5 Z';
const island = 'M20 79 C24 70 35 66.5 48 66.5 C61 66.5 72 70 76 79 C67 82 29 82 20 79 Z';
const trunk = 'M48.5 35 C48 48 46 60 42 72 L50 72 C53 60 54.5 48 54 35 Z';

module.exports = {
  id: 'palm',
  name: 'Palm Island',
  emoji: '🏝️',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['island', 'beach', 'holiday', 'tropical', 'fantasy island', 'summer', 'palm tree'],
  tone: 'gold',
  body: [fronds, island],
  shine: [30, 25, -12],
  shineSize: [5, 1.8],
  draw(c) {
    const leaf = c.radial('a', 'green', 0.35, 0.2);
    const sand = c.radial('sand', 'gold', 0.4, 0.15);
    const wood = c.linear('wood', 'brown', [0, 0, 1, 0], 0, 2);
    const sea = c.linear('sea', 'sky', [0, 0, 0, 1], 1, 2);
    const nut = c.radial('nut', 'brown', 0.3, 0.25);
    const g = c.ramp('green');
    const b = c.ramp('brown');
    return `<ellipse cx="48" cy="79.5" rx="36" ry="5" fill="${sea}" stroke="${c.ramp('sky')[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M16 79.5 Q22 77.5 28 79.5 M68 79.5 Q74 77.5 80 79.5" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>
      <path d="${trunk}" fill="${wood}" stroke="${b[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <g fill="none" stroke="${b[2]}" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round">
        <path d="M48.3 42 Q51 43.5 54 42"/><path d="M47.6 50 Q50.5 51.5 53.6 50"/><path d="M46.4 58 Q49 59.5 52.4 58"/><path d="M44.8 65.5 Q47.5 67 51 65.5"/>
      </g>
      <path d="${island}" fill="${sand}"/>
      <path d="${fronds}" fill="${leaf}"/>
      <g fill="none" stroke="${g[3]}" stroke-opacity=".45" stroke-width="1.3" stroke-linecap="round">
        <path d="M47 30 C38 25 28 24 20 27"/><path d="M52 28 C55 21 58 16 62 12.5"/><path d="M56 30 C64 25 73 25 80 29"/>
        <path d="M56 34 C64 36 72 40 78 45"/><path d="M45 34 C37 36 31 41 27 47"/>
      </g>
      <circle cx="49" cy="38.5" r="3.4" fill="${nut}"/><circle cx="55" cy="38" r="3.4" fill="${nut}"/>
      <ellipse cx="48" cy="37.5" rx="1.2" ry=".8" fill="#fff" opacity=".7"/><ellipse cx="54" cy="37" rx="1.2" ry=".8" fill="#fff" opacity=".7"/>`;
  },
};
