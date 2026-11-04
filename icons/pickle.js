const L = require('../src/parts/leaf');
// Shorter and plumper than the cucumber, olive-yellow and covered in warts.
const ROT = { rotate: -48, cx: 48, cy: 52 };
const local = 'M14 53 C14 42 22 37 33 37.5 C42 38 50 40 60 39.5 C72 39 82 43 82 53 C82 63 72 67 60 66.5 C50 66 42 68 33 68.5 C22 69 14 64 14 53 Z';
const body = L.xform(local, ROT);
module.exports = {
  id: 'pickle',
  name: 'Pickle',
  emoji: '🫝',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['pickle', 'gherkin', 'sour', 'brine', 'burger'],
  tone: 'olive',
  body,
  shine: [40, 30, -70],
  shineSize: [6, 2.8],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#EAF29A"/><stop offset="0.35" stop-color="#92A82A"/><stop offset="0.75" stop-color="#4E6210"/><stop offset="1" stop-color="#1F2A04"/></radialGradient>`);
    const W = [[24, 48], [34, 44], [46, 46], [58, 44], [70, 47], [22, 58], [32, 54], [44, 56], [56, 54], [68, 56], [76, 52], [30, 63], [42, 62], [54, 62], [66, 61]];
    const warts = W.map(([x, y]) => `<circle cx="${x + 0.5}" cy="${y + 0.9}" r="2" fill="#1F2A04" opacity=".35"/><circle cx="${x}" cy="${y}" r="1.7" fill="#D8E27A" opacity=".85"/>`).join('');
    return `<g transform="rotate(-48 48 52)">
      <path d="${local}" fill="url(#${c.id('a')})"/>
      ${warts}
      </g>`;
  },
};
