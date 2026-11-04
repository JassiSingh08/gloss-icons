const p = require('../src/parts/person');

// A gua pi mao: a six-panel silk cap with a knotted button on top.
const CAP = 'M19 44 C17 22 32 11 48 11 C64 11 79 22 77 44';
const P = p.pose({ cy: 42, r: 22, crown: CAP });
module.exports = {
  id: 'person-with-skullcap',
  name: 'Person With Skullcap',
  emoji: '👲',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['skullcap', 'gua pi mao', 'cap', 'traditional', 'hat'],
  tone: 'red',
  body: P.body,
  shine: [...P.pt(31, 22), -45],
  shineSize: [5, 2],
  draw(c) {
    const silk = c.radial('cap', 'black', 0.3, 0.15);
    const cap = P.at(`<path d="${CAP} Q48 37 19 44 Z" fill="${silk}" stroke="#05050A" stroke-width="1.8"/>
      <path d="M48 12 L48 38 M48 12 C38 18 32 28 30 40 M48 12 C58 18 64 28 66 40" stroke="#6E6E85" stroke-opacity=".6" stroke-width="1.4" fill="none"/>
      <path d="M19 44 Q48 37 77 44 L77 39 Q48 32 19 39 Z" fill="#2E2E3D"/>
      <circle cx="48" cy="9" r="5" fill="${c.radial('knot', 'red', 0.35, 0.3)}" stroke="#3D0003" stroke-opacity=".6" stroke-width="1.2"/>`);
    const y = P.cy + P.r;
    const collar = `<path d="M34 ${y - 4} Q48 ${y + 4} 62 ${y - 4} L62 ${y + 1} Q48 ${y + 9} 34 ${y + 1} Z" fill="${c.linear('collar', 'gold', [0, 0, 0, 1], 1, 2)}"/>
      <path d="M48 ${y + 5} C52 ${y + 8} 58 ${y + 9} 64 ${y + 10} L66 84" stroke="#FFC21A" stroke-width="1.6" fill="none"/>
      <path d="M58 ${y + 12} L64 ${y + 12} M60 ${y + 18} L66 ${y + 18}" stroke="#FFC21A" stroke-width="2" stroke-linecap="round"/>`;
    return p.bust(c, P, { garment: 'red', neck: 'none', hair: 'none', under: collar, face: p.face.calm(), over: cap });
  },
};
