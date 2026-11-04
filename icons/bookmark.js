const p = require('../src/parts/paper');
const AT = [48, 47];
const DEG = 14;
const P = (d) => p.place(d, AT, DEG);
const body = P('M-15 -30 Q-15 -36 -9 -36 L9 -36 Q15 -36 15 -30 L15 36 L0 26 L-15 36 Z');
module.exports = {
  id: 'bookmark',
  name: 'Bookmark',
  emoji: '🔖',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['bookmark', 'save', 'marker', 'reading', 'tag'],
  tone: 'pink',
  body,
  shine: [38, 18, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const r = c.ramp('pink');
    const ring = p.pt(0, -25, AT, DEG);
    return `<path d="${body}" fill="${c.linear('a', 'pink', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${P('M-11 -18 L11 -18 L11 28 L0 20 L-11 28 Z')}" fill="none" stroke="${r[0]}" stroke-opacity=".6" stroke-width="1.3" stroke-dasharray="2.4 2"/>
      <path d="${P('M-6 0 L-1.8 -2.2 L0 -6.6 L1.8 -2.2 L6 0 L1.8 2.2 L0 6.6 L-1.8 2.2 Z')}" fill="#fff" opacity=".8"/>
      <circle cx="${ring[0]}" cy="${ring[1]}" r="4.4" fill="${c.radial('ring', 'gold', 0.3, 0.25)}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>
      <circle cx="${ring[0]}" cy="${ring[1]}" r="2" fill="${r[3]}"/>
      <path d="M${ring[0]} ${ring[1]} C${ring[0] - 8} ${ring[1] - 14} ${ring[0] - 22} ${ring[1] - 6} ${ring[0] - 26} ${ring[1] + 6}" stroke="#B08A4E" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  },
};
